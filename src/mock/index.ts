import Mock, { Random } from "mockjs";

Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4-8": [
    {
      "id|+1": 1,
      imgUrl: Random.image(
        "730x454",
        Random.color(),
        Random.rgb(),
        "png",
        "Sample"
      ),
    },
  ],
});

Mock.mock("/mock/floors", "get", {
  code: 200,
  "data|2-3": [
    {
      "id|+1": 1,
      title: "@ctitle(4)",
      "navList|6-8": ["@ctitle(4)"],
      "jdList|6": ["@ctitle(4,6)"],
      smallImg: Random.image(
        "209x249",
        Random.color(),
        Random.rgb(),
        "png",
        "@word"
      ),
      bigImg: Random.image(
        "220x359",
        Random.color(),
        Random.rgb(),
        "png",
        "@word"
      ),
      "imgUrl|4": [
        Random.image(
          "219.33x180",
          Random.color(),
          Random.rgb(),
          "png",
          "@word"
        ),
      ],
      "banner|4-6": [
        {
          "id|+1": 1,
          imgUrl: Random.image(
            "329x360",
            Random.color(),
            Random.rgb(),
            "png",
            "Sample"
          ),
        },
      ],
    },
  ],
});

Mock.mock("/mock/likes", "get", {
  code: 200,
  "data|6": [
    {
      "id|+1": 1,
      imgUrl:Random.image(
        "142x142",
        Random.color(),
        Random.rgb(),
        "png",
        "@word"
      ),
      name:"@word",
      "price|100-9999":100
    }
  ],
});
