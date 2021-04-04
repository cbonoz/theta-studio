import React, { useState, useRef, useEffect, useMemo } from "react";

import screenfull from "screenfull";

import "./App.css";
import { BASE_URL, convertUnderscore, EXAMPLE_STREAMS } from "./util/streams";
import ReactPlayer from "react-player";
import Select from "react-dropdown-select";

import { config } from "react-spring";
import { pathOr } from "ramda";
import axios from "axios";

// get our fontawesome imports
import {
  faHome,
  faSquareFull,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findDOMNode } from "react-dom";
import { getListUrl } from "./util/streams";

import Carousel from "./react-spring-3d-carousel/src/components/Carousel";

const LIVE_URL = "https://thetastudio.netlify.app";

const carouselState = {
  goToSlide: 0,
  offsetRadius: 2,
  showNavigation: true,
  config: config.gentle,
};

const CATEGORIES = [
  "theta_brand_partner",
  "gfuel",
  "blockchain",
  "new_creators",
  "recommended",
  "spanish",
].map((x) => ({
  label: convertUnderscore(x),
  value: x,
}));

function App() {
  const [index, setIndex] = useState(0);
  const [streams, setStreams] = useState([]);
  const [muted, setMuted] = useState(false);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const playerRef = useRef();

  const refreshChannels = async (e) => {
    console.log("refresh", category.value);
    e && e.preventDefault();

    const url = getListUrl(category.value);

    try {
      const result = await axios.get(url);
      const { data } = result;
      setStreams(data.body);
    } catch (e) {
      let stringError = e.toString();
      if (stringError.indexOf("Network Error") !== -1) {
        stringError = "Network Error (CORS)";
      }

      const errorMessage = `Error fetching live Theta streams for ${category.label}: ${stringError}`;
      alert(errorMessage);
      console.error(errorMessage);
    }
  };

  useEffect(() => {
    refreshChannels();
    setIndex(0);
  }, [category]);

  useEffect(() => {
    if (window.location.origin === LIVE_URL) {
      refreshChannels();
    } else {
      setStreams(EXAMPLE_STREAMS.body);
    }
  }, []);

  const onClickFullscreen = () => {
    screenfull.request(playerRef.current);
  };

  const slides = useMemo(() => {
    const filteredStreams = streams.filter((s) =>
      pathOr(false, ["live_stream", "video_url_map", "2d", "master"], s)
    );

    return filteredStreams.map((stream, i) => {
      const isActiveStream = index === i;
      const showAudio = !muted && isActiveStream;
      return {
        key: i,
        content: (
          <div>
            <h1>
              #{i + 1}: {stream.live_stream.game.name}&nbsp;
              <span className="pointer" onClick={() => setMuted(!muted)}>
                {!showAudio && <FontAwesomeIcon icon={faVolumeMute} />}
                {showAudio && <FontAwesomeIcon icon={faVolumeUp} />}
              </span>
            </h1>
            <p>
              Streamer:&nbsp;
              <a
                href={`https://www.theta.tv/${stream.alias}`}
                target="_blank"
                className="orange"
              >
                {stream.name}
              </a>
            </p>
            <div>
              <ReactPlayer
                ref={isActiveStream ? playerRef : null}
                height={480}
                width={720}
                muted={muted}
                url={stream.live_stream.video_url_map["2d"].master}
                playing={isActiveStream}
              />
            </div>
          </div>
        ),
      };
    });
  }, [streams, index, muted]);

  const onSelect = (v) => {
    console.log("select", v[0]);
    setCategory(v[0]);
  };

  return (
    <div className="content-area">
      <div className="header-area">
        <h1 className="header-title">Theta Studio</h1>
        <p>
          Discover and contribute to your favorite Theta.tv Channels. This app
          includes live streams only.
        </p>
        <div style={{ width: "250px", color: "orange" }}>
          <Select
            options={CATEGORIES}
            values={[category]}
            onChange={onSelect}
          />
        </div>
        <p>
          Blank streams?&nbsp;
          <a href="#" onClick={refreshChannels} className="orange">
            Refresh Streams
          </a>
          &nbsp; (or change category).
        </p>
        <p>
          <span className="orange">{slides.length}</span>{" "}
          {slides.length === 1 ? "stream" : "streams"} found
        </p>
      </div>
      <Carousel
        onChange={setIndex}
        slides={slides}
        goToSlide={carouselState.goToSlide}
        offsetRadius={carouselState.offsetRadius}
        showNavigation={carouselState.showNavigation}
        animationConfig={carouselState.config}
      />
      {/* <button onClick={onClickFullscreen}>Fullscreen</button> */}
    </div>
  );
}

export default App;
