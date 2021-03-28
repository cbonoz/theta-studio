import querystring from "querystring";

export const BASE_URL = "https://api.theta.tv/v1";

export const getListUrl = (category) => {
  const params = {
    number: 500,
    incl_off: true,
  };
  const url = `${BASE_URL}/${
    category || "new_creators"
  }/channel/list?${querystring.stringify(params)}`;
  return url;
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const convertUnderscore = (x) => x.replace("_", " ");

export const getStreamUrl = (liveStreamId) =>
  `${BASE_URL}/live/${liveStreamId}`;

export const EXAMPLE_STREAMS = {
  status: "SUCCESS",
  body: [
    {
      user_id: "usrawpkxyxhn2z7591h",
      live_stream_id: "vidv52g2by8gv2yyk19",
      name: "tsports's Channel",
      alias: "tsports",
      score: 11616657150079,
      timestamp: 1616656782675,
      live_stream: {
        id: "vidv52g2by8gv2yyk19",
        game_id: "gam8057wwfp8cjj7v0n",
        game: {
          id: "gam8057wwfp8cjj7v0n",
          name: "Theta Network",
          short_name: "Theta",
          slug: null,
          description: null,
          score: 0,
          thumbnail_url:
            "https://game-slivertv.imgix.net/gam8057wwfp8cjj7v0n/thumbnail/00001.jpg",
          banner_url:
            "https://game-slivertv.imgix.net/gam8057wwfp8cjj7v0n/banner/00001.jpg",
          category_url:
            "https://game-slivertv.imgix.net/gam8057wwfp8cjj7v0n/category/00001.jpg",
          logo_url:
            "https://game-slivertv.imgix.net/gam8057wwfp8cjj7v0n/logo/00001.png",
          twitch_id: null,
          featured_videos: null,
        },
        title:
          "Buy $THETA in the USA on Kucoin: https://www.kucoin.com/ucenter/signup? Use referral code: 7QQ4b8.  Thank you for your $TFuel donations to help support our Stream. Thank you for following TSports as we follow Theta.",
        score: 0,
        duration: 0,
        description: null,
        view_count: 3,
        like_count: 0,
        live_count: 28,
        comment_count: 0,
        timestamp: 1600804684891,
        tags: [],
        rich_tags: [],
        video_urls: [
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "360p",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/26d3430be16640dab94d6981140e66f4/chunklist_b732000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "source(720p)",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/26d3430be16640dab94d6981140e66f4/chunklist_b2592000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "master",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/26d3430be16640dab94d6981140e66f4/manifest.m3u8",
          },
          {
            name: null,
            icon_url: null,
            type: "embed",
            resolution: "master",
            url:
              "https://www.theta.tv/player-v2/index.html?videoId=vidv52g2by8gv2yyk19&useTheta=true&is360Video=false&shouldPollVideo=true",
          },
        ],
        video_url_map: {
          "2d": {
            "360p":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/26d3430be16640dab94d6981140e66f4/chunklist_b732000.m3u8",
            "source(720p)":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/26d3430be16640dab94d6981140e66f4/chunklist_b2592000.m3u8",
            master:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/26d3430be16640dab94d6981140e66f4/manifest.m3u8",
          },
        },
        thumbnail_url:
          "https://live-thumbnails-prod-theta-tv.imgix.net/thumbnail/usrawpkxyxhn2z7591h/1616932849796.jpg",
        user: {
          id: "usrawpkxyxhn2z7591h",
          username: null,
          avatar_url:
            "https://user-prod-theta-tv.imgix.net/usrawpkxyxhn2z7591h/avatar/1607995266563.jpg",
          type: null,
        },
        event: null,
        status: 1,
        stats: {},
        featured: false,
        visible: true,
        rewarding: true,
        base_reward_amount: 10,
        reward_amount: null,
        milliseconds_to_next_reward: null,
        raffle: null,
        quizzes: null,
        use_theta: true,
      },
      programs: null,
      has_auto_trivia: false,
      trivia_game_id: null,
      visible: true,
      status: "on",
      subscribed_twitch: false,
      user: {
        id: "usrawpkxyxhn2z7591h",
        username: "tsports",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrawpkxyxhn2z7591h/avatar/1607995266563.jpg",
        type: "affiliate",
      },
      follows: 1547,
      source: "infra_2",
      streamer_id: "usrawpkxyxhn2z7591h",
      streamer: {
        id: "usrawpkxyxhn2z7591h",
        username: "tsports",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrawpkxyxhn2z7591h/avatar/1607995266563.jpg",
        type: "affiliate",
      },
      start_time: 1616657150075,
      old_score: 11616474214236,
      tags: [],
      full_tags: {},
    },
    {
      user_id: "usrm9udpk5z02qcm35r",
      live_stream_id: "vid7ue505m7y5b8cy31",
      name: "shuffleman's Channel",
      alias: "shuffleman",
      score: 1616932006261,
      timestamp: 1616866258034,
      live_stream: {
        id: "vid7ue505m7y5b8cy31",
        game_id: "gam5jyiam7t80mvv34h",
        game: {
          id: "gam5jyiam7t80mvv34h",
          name: "The Outer Worlds",
          short_name: null,
          slug: null,
          description: null,
          score: 0,
          thumbnail_url:
            "https://game-slivertv.imgix.net/gam5jyiam7t80mvv34h/thumbnail/00001.jpg",
          banner_url:
            "https://game-slivertv.imgix.net/gam5jyiam7t80mvv34h/banner/00001.jpg",
          category_url:
            "https://game-slivertv.imgix.net/gam5jyiam7t80mvv34h/category/00001.jpg",
          logo_url:
            "https://game-slivertv.imgix.net/gam5jyiam7t80mvv34h/logo/00001.png",
          twitch_id: "510580",
          featured_videos: null,
        },
        title: "come chat and see me have no idea what im doing",
        score: 0,
        duration: 0,
        description: null,
        view_count: 0,
        like_count: 0,
        live_count: 1,
        comment_count: 0,
        timestamp: 1609284786113,
        tags: [],
        rich_tags: [],
        video_urls: [
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "360p",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/576c20a0600848839f8c69f4efdd64f4/chunklist_b732000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "source(720p)",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/576c20a0600848839f8c69f4efdd64f4/chunklist_b2592000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "master",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/576c20a0600848839f8c69f4efdd64f4/manifest.m3u8",
          },
          {
            name: null,
            icon_url: null,
            type: "embed",
            resolution: "master",
            url:
              "https://www.theta.tv/player-v2/index.html?videoId=vid7ue505m7y5b8cy31&useTheta=true&is360Video=false&shouldPollVideo=true",
          },
        ],
        video_url_map: {
          "2d": {
            "360p":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/576c20a0600848839f8c69f4efdd64f4/chunklist_b732000.m3u8",
            "source(720p)":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/576c20a0600848839f8c69f4efdd64f4/chunklist_b2592000.m3u8",
            master:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/576c20a0600848839f8c69f4efdd64f4/manifest.m3u8",
          },
        },
        thumbnail_url:
          "https://live-thumbnails-prod-theta-tv.imgix.net/thumbnail/usrm9udpk5z02qcm35r/1616932905271.jpg",
        user: {
          id: "usrm9udpk5z02qcm35r",
          username: null,
          avatar_url:
            "https://user-prod-theta-tv.imgix.net/usrm9udpk5z02qcm35r/avatar/1610213193.jpg",
          type: null,
        },
        event: null,
        status: 1,
        stats: {},
        featured: false,
        visible: true,
        rewarding: true,
        base_reward_amount: 10,
        reward_amount: null,
        milliseconds_to_next_reward: null,
        raffle: null,
        quizzes: null,
        use_theta: true,
      },
      programs: null,
      has_auto_trivia: false,
      trivia_game_id: null,
      visible: true,
      status: "on",
      subscribed_twitch: false,
      user: {
        id: "usrm9udpk5z02qcm35r",
        username: "shuffleman",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrm9udpk5z02qcm35r/avatar/1610213193.jpg",
        type: "streamer",
      },
      follows: 156,
      source: "infra_2",
      streamer_id: "usrm9udpk5z02qcm35r",
      streamer: {
        id: "usrm9udpk5z02qcm35r",
        username: "shuffleman",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrm9udpk5z02qcm35r/avatar/1610213193.jpg",
        type: "streamer",
      },
      start_time: 1616932006254,
      old_score: 1616836260067,
      tags: ["new_creators"],
      full_tags: {},
    },
    {
      user_id: "usrjszyhw73ayuqr1ay",
      live_stream_id: "vidbkvxz8u8uan5b88c",
      name: "megetv's Channel",
      alias: "megetv",
      score: 1616931703961,
      timestamp: 1616880244240,
      live_stream: {
        id: "vidbkvxz8u8uan5b88c",
        game_id: "gambf81djvejimdvrrs",
        game: {
          id: "gambf81djvejimdvrrs",
          name: "Temtem",
          short_name: null,
          slug: null,
          description: null,
          score: 0,
          thumbnail_url:
            "https://game-slivertv.imgix.net/gambf81djvejimdvrrs/thumbnail/00001.jpg",
          banner_url:
            "https://game-slivertv.imgix.net/gambf81djvejimdvrrs/banner/00001.jpg",
          category_url:
            "https://game-slivertv.imgix.net/gambf81djvejimdvrrs/category/00001.jpg",
          logo_url:
            "https://game-slivertv.imgix.net/gambf81djvejimdvrrs/logo/00001.png",
          twitch_id: "510336",
          featured_videos: null,
        },
        title: "RIP Stats",
        score: 0,
        duration: 0,
        description: null,
        view_count: 0,
        like_count: 0,
        live_count: 1,
        comment_count: 0,
        timestamp: 1608151113245,
        tags: [],
        rich_tags: [],
        video_urls: [
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "360p",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/c4317a6d7eed496aa52984b893ad42ce/chunklist_b732000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "source(720p)",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/c4317a6d7eed496aa52984b893ad42ce/chunklist_b2592000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "master",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/c4317a6d7eed496aa52984b893ad42ce/manifest.m3u8",
          },
          {
            name: null,
            icon_url: null,
            type: "embed",
            resolution: "master",
            url:
              "https://www.theta.tv/player-v2/index.html?videoId=vidbkvxz8u8uan5b88c&useTheta=true&is360Video=false&shouldPollVideo=true",
          },
        ],
        video_url_map: {
          "2d": {
            "360p":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/c4317a6d7eed496aa52984b893ad42ce/chunklist_b732000.m3u8",
            "source(720p)":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/c4317a6d7eed496aa52984b893ad42ce/chunklist_b2592000.m3u8",
            master:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/c4317a6d7eed496aa52984b893ad42ce/manifest.m3u8",
          },
        },
        thumbnail_url:
          "https://live-thumbnails-prod-theta-tv.imgix.net/thumbnail/usrjszyhw73ayuqr1ay/1616932902989.jpg",
        user: {
          id: "usrjszyhw73ayuqr1ay",
          username: null,
          avatar_url:
            "https://user-prod-theta-tv.imgix.net/usrjszyhw73ayuqr1ay/avatar/1616208652825.jpg",
          type: null,
        },
        event: null,
        status: 1,
        stats: {},
        featured: false,
        visible: true,
        rewarding: true,
        base_reward_amount: 10,
        reward_amount: null,
        milliseconds_to_next_reward: null,
        raffle: null,
        quizzes: null,
        use_theta: true,
      },
      programs: null,
      has_auto_trivia: false,
      trivia_game_id: null,
      visible: true,
      status: "on",
      subscribed_twitch: true,
      user: {
        id: "usrjszyhw73ayuqr1ay",
        username: "Mege",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrjszyhw73ayuqr1ay/avatar/1616208652825.jpg",
        type: "streamer",
      },
      follows: 250,
      source: "infra_2",
      streamer_id: "usrjszyhw73ayuqr1ay",
      streamer: {
        id: "usrjszyhw73ayuqr1ay",
        username: "Mege",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrjszyhw73ayuqr1ay/avatar/1616208652825.jpg",
        type: "streamer",
      },
      start_time: 1616931703956,
      old_score: 1616849380462,
      tags: ["new_creators"],
      full_tags: {},
    },
    {
      user_id: "usruhpqqrjk4dr1v0h7",
      live_stream_id: "vidm50nmcic6cu57hqu",
      name: "ErselKaraduman",
      alias: "erselkaraduman",
      score: 1616926273086,
      timestamp: 1616784873210,
      live_stream: {
        id: "vidm50nmcic6cu57hqu",
        game_id: "gamxvyh1afhyn5uuknf",
        game: {
          id: "gamxvyh1afhyn5uuknf",
          name: "Crypto",
          short_name: "crypto",
          slug: null,
          description: null,
          score: 0,
          thumbnail_url:
            "https://game-slivertv.imgix.net/gamxvyh1afhyn5uuknf/thumbnail/00001.jpg",
          banner_url:
            "https://game-slivertv.imgix.net/gamxvyh1afhyn5uuknf/banner/00001.jpg",
          category_url:
            "https://game-slivertv.imgix.net/gamxvyh1afhyn5uuknf/category/00001.jpg",
          logo_url:
            "https://game-slivertv.imgix.net/gamxvyh1afhyn5uuknf/logo/00001.png",
          twitch_id: null,
          featured_videos: null,
        },
        title:
          "#bitcoin ve #altcoin lerden son durum\nGüncel temel ve teknik analiz.",
        score: 0,
        duration: 0,
        description: null,
        view_count: 1,
        like_count: 0,
        live_count: 5,
        comment_count: 0,
        timestamp: 1608070896352,
        tags: [],
        rich_tags: [],
        video_urls: [
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "360p",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/6ed9327debd6411297228ac43f0e259b/chunklist_b732000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "source(720p)",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/6ed9327debd6411297228ac43f0e259b/chunklist_b2592000.m3u8",
          },
          {
            name: "Caster Cam",
            icon_url:
              "https://player-assets.imgix.net/camera_control_caster.png",
            type: "2d",
            resolution: "master",
            url:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/6ed9327debd6411297228ac43f0e259b/manifest.m3u8",
          },
          {
            name: null,
            icon_url: null,
            type: "embed",
            resolution: "master",
            url:
              "https://www.theta.tv/player-v2/index.html?videoId=vidm50nmcic6cu57hqu&useTheta=true&is360Video=false&shouldPollVideo=true",
          },
        ],
        video_url_map: {
          "2d": {
            "360p":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/6ed9327debd6411297228ac43f0e259b/chunklist_b732000.m3u8",
            "source(720p)":
              "https://slivertvml.mmdlive.lldns.net/slivertvml/6ed9327debd6411297228ac43f0e259b/chunklist_b2592000.m3u8",
            master:
              "https://slivertvml.mmdlive.lldns.net/slivertvml/6ed9327debd6411297228ac43f0e259b/manifest.m3u8",
          },
        },
        thumbnail_url:
          "https://live-thumbnails-prod-theta-tv.imgix.net/thumbnail/usruhpqqrjk4dr1v0h7/1616932872066.jpg",
        user: {
          id: "usruhpqqrjk4dr1v0h7",
          username: null,
          avatar_url:
            "https://user-prod-theta-tv.imgix.net/usruhpqqrjk4dr1v0h7/avatar/1609791209731.jpg",
          type: null,
        },
        event: null,
        status: 1,
        stats: {},
        featured: false,
        visible: true,
        rewarding: true,
        base_reward_amount: 10,
        reward_amount: null,
        milliseconds_to_next_reward: null,
        raffle: null,
        quizzes: null,
        use_theta: true,
      },
      programs: null,
      has_auto_trivia: false,
      trivia_game_id: null,
      visible: true,
      status: "on",
      subscribed_twitch: false,
      user: {
        id: "usruhpqqrjk4dr1v0h7",
        username: "ErselKaraduman",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usruhpqqrjk4dr1v0h7/avatar/1609791209731.jpg",
        type: "streamer",
      },
      follows: 190,
      source: "infra_2",
      streamer_id: "usruhpqqrjk4dr1v0h7",
      streamer: {
        id: "usruhpqqrjk4dr1v0h7",
        username: "ErselKaraduman",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usruhpqqrjk4dr1v0h7/avatar/1609791209731.jpg",
        type: "streamer",
      },
      start_time: 1616926273080,
      old_score: 1616771416161,
      tags: ["new_creators"],
      full_tags: {},
    },
    {
      user_id: "usrv6ahvevxpxbftst3",
      live_stream_id: "vidg4zwtjdinm74yz0k",
      name: "xXCyRuSXx's Channel",
      alias: "xxcyrusxx",
      score: 1616924221674,
      timestamp: 1616930325079,
      live_stream: {
        id: "vidg4zwtjdinm74yz0k",
        game_id: "gam6k1c0176yhxvd7ca",
        game: {
          id: "gam6k1c0176yhxvd7ca",
          name: "Hollow Knight",
          short_name: null,
          slug: null,
          description: null,
          score: 0,
          thumbnail_url:
            "https://game-slivertv.imgix.net/gam6k1c0176yhxvd7ca/thumbnail/00001.jpg",
          banner_url:
            "https://game-slivertv.imgix.net/gam6k1c0176yhxvd7ca/banner/00001.jpg",
          category_url:
            "https://game-slivertv.imgix.net/gam6k1c0176yhxvd7ca/category/00001.jpg",
          logo_url:
            "https://game-slivertv.imgix.net/gam6k1c0176yhxvd7ca/logo/00001.png",
          twitch_id: "490147",
          featured_videos: null,
        },
        title: "Facil mis hue*** ᕙ( ︡'︡益'︠)ง",
        score: 0,
        duration: 0,
        description: null,
        view_count: 0,
        like_count: 0,
        live_count: 1,
        comment_count: 0,
        timestamp: 1570906089292,
        tags: [],
        rich_tags: [],
        video_urls: [
          {
            name: null,
            icon_url: null,
            type: "embed",
            resolution: "master",
            url:
              "https://www.theta.tv/player-v2/index.html?videoId=vidg4zwtjdinm74yz0k&useTheta=true&is360Video=false&shouldPollVideo=true",
          },
        ],
        video_url_map: {},
        thumbnail_url:
          "https://user-prod-theta-tv.imgix.net/usrv6ahvevxpxbftst3/stream_thumb/1616634641058.png",
        user: {
          id: "usrv6ahvevxpxbftst3",
          username: null,
          avatar_url:
            "https://user-prod-theta-tv.imgix.net/usrv6ahvevxpxbftst3/avatar/1616542671063.jpg",
          type: null,
        },
        event: null,
        status: 1,
        stats: {},
        featured: false,
        visible: true,
        rewarding: false,
        base_reward_amount: 10,
        reward_amount: null,
        milliseconds_to_next_reward: null,
        raffle: null,
        quizzes: null,
        use_theta: false,
      },
      programs: null,
      has_auto_trivia: false,
      trivia_game_id: null,
      visible: true,
      status: "off",
      subscribed_twitch: false,
      user: {
        id: "usrv6ahvevxpxbftst3",
        username: "xXCyRuSXx",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrv6ahvevxpxbftst3/avatar/1616542671063.jpg",
        type: "streamer",
      },
      follows: 210,
      source: "",
      streamer_id: "usrv6ahvevxpxbftst3",
      streamer: {
        id: "usrv6ahvevxpxbftst3",
        username: "xXCyRuSXx",
        avatar_url:
          "https://user-prod-theta-tv.imgix.net/usrv6ahvevxpxbftst3/avatar/1616542671063.jpg",
        type: "streamer",
      },
      start_time: 1616924221674,
      old_score: 1616924221680,
      tags: ["new_creators", "spanish"],
      full_tags: {},
    },
  ],
};
