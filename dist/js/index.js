/**
 * javascript动态加载页面。
 */

var app = new Vue({
  el: '#app',
  data: {
    cityName: 'beijing',
    json: '',
    obj: {},

    isSuccess: false,
    HeWeather6: {},
    tip: '点击查询获取天气数据',
    config: {},

    mounted: readConfig()
  }
});

/**
 * 读取配置.
 */
function readConfig() {
  $.get('../../static/config.json', function (data, status) {
    app.config = data;
  })
}

/**
 * 查询点击事件。
 */
function onClick() {
  getInfo2(app.cityName);
}

/**
 * 请求1，使用axios。
 *
 * @param cityName
 */
function getInfo(cityName) {
  loading();
  axios.get(app.config.url, {
    params: {
      key: app.config.apiKey,
      location: cityName
    }
  })
    .then(function (response) {
      app.json = response.data;
      app.obj = eval("(" + app.json + ")");

      app.HeWeather6 = app.json;
      if (app.HeWeather6.status === 'ok') {
        app.isSuccess = true;
      } else {
        app.isSuccess = false;
        app.tip = app.HeWeather6.status;
      }
    })
    .catch(function (error) {
      app.isSuccess = false;
      app.tip = error;
    })
}

/**
 * 请求2，使用jquery。
 *
 * @param cityName
 */
function getInfo2(cityName) {
  loading();
  $.get(app.config.url + '?key=' + app.config.apiKey + '&location=' + cityName, function (data, status) {
    if (status === 'success') {
      app.obj = data;
      app.HeWeather6 = app.obj.HeWeather6[0];
      if (app.HeWeather6.status === 'ok') {
        app.isSuccess = true;
      } else {
        app.isSuccess = false;
        app.tip = app.HeWeather6.status;
      }
    } else {
      app.isSuccess = false;
      app.tip = status;
    }
  })
}

/**
 * 设置加载中动画。
 */
function loading() {
  app.isSuccess = false;
  app.tip = '加载中...';
}
