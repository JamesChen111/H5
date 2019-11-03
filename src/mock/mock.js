const Mock = require("mockjs");
const Random = Mock.Random;
//设置请求延时
Mock.setup({
  timeout: 1000
});

const dataImage = function() {
  let images = [];
  for (let i = 0; i < 20; i++) {
    const arr = [150, 200];
    let randomNum = arr[Math.floor(Math.random() * 2)];
    let mockData = {
      id: i,
      img: Random.image(`150x${randomNum}`, "00405d"),
      smallImg: Random.image("60x60", "5cb860", "商品图"),
      title: Random.csentence(4, 20),
      title1: Random.csentence(12, 40),
      title2: Random.csentence(100, 200),
      number1: Random.integer(90, 1000),
      number2: Random.integer(100, 1000),
      name: Random.word(3, 5)
    };
    images.push(mockData);
  }
  return {
    data: images
  };
};

const details = function(options) {
  let id = parseInt(JSON.parse(options.body).params.id);
  let value = dataImage().data;
  let arr = value.filter(function(val) {
    return (val.id = id); //把这个id对应的对象从数组里选出来
  });
  return {
    data: arr
  };
};

Mock.mock("/skin-care", "get", () => {
  return Mock.mock({
    "skin|12": [
      {
        image: Random.dataImage("50x50", "skin care"),
        title: Random.ctitle(2, 4)
      }
    ]
  });
});
Mock.mock("/shoe", "get", () => {
  return Mock.mock({
    "shoe|12": [
      {
        image: Random.dataImage("50x50", "shoe"),
        title: Random.ctitle(2, 5)
      }
    ]
  });
});
Mock.mock("/api/data", "get", dataImage);
Mock.mock(RegExp("/api/detail" + ".*"), "post", details);
