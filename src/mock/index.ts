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
        '"png',
        "Sample"
      ),
    },
  ],
});

Mock.mock("/mock/smallBanners", "get", {
  code: 200,
  "data|4-8": [
    {
      "id|+1": 1,
      imgUrl: Random.image(
        "329x360",
        Random.color(),
        Random.rgb(),
        '"png',
        "Sample"
      ),
    },
  ],
});
