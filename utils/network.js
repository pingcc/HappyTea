//不显示对话框的请求
function requestPost(url, params, success, fail) {
  this.requestLoadingPost(url, params, "", success, fail, false)
}
var str = "正在加载...";

function requestDefaultPost(url, params, success, fail) {
  this.requestLoadingPost(url, params, str, success, fail, true)
}
function requestDefaultMsgPost(url, params, message, success, fail) {
  this.requestLoadingPost(url, params, message, success, fail, true)
}

// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function requestLoadingPost(url, params, message, success, fail, isLoading) {
  console.log(params)
  wx.showNavigationBarLoading()
  if (isLoading) {
    wx.showLoading({
      title: message,
    })
  }

  wx.request({
    url: url,
    data: params,
    header: {
      //'Content-Type': 'application/json'
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    success: function (res) {
      //console.log(res.data)
      wx.hideNavigationBarLoading()
      if (isLoading) {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }

    },
    fail: function (res) {
      wx.hideNavigationBarLoading()
      if (isLoading) {
        wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    },
  })
}
//不显示对话框的请求
function requestGet(url, params, success, fail) {
  this.requestLoadingGet(url, params, "", success, fail, false)
}
var str = "正在加载...";

function requestDefaultGet(url, params, success, fail) {
  this.requestLoadingGet(url, params, str, success, fail, true)
}
function requestDefaultMsgGet(url, params, message, success, fail) {
  this.requestLoadingGet(url, params, message, success, fail, true)
}

// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function requestLoadingGet(url, params, message, success, fail, isLoading) {
  console.log(params)
  wx.showNavigationBarLoading()
  if (isLoading) {
    wx.showLoading({
      title: message,
    })
  }

  wx.request({
    url: url,
    data: params,
    header: {
      'Content-Type': 'application/json'
      // 'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'get',
    success: function (res) {
      //console.log(res.data)
      wx.hideNavigationBarLoading()
      if (isLoading) {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }

    },
    fail: function (res) {
      wx.hideNavigationBarLoading()
      if (isLoading) {
        wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    },
  })
}
module.exports = {
  requestPost: requestPost,
  requestLoadingPost: requestLoadingPost,
  requestDefaultPost: requestDefaultPost,
  requestDefaultMsgPost: requestDefaultMsgPost,
  requestGet: requestGet,
  requestLoadingGet: requestLoadingGet,
  requestDefaultGet: requestDefaultGet,
  requestDefaultMsgGet: requestDefaultMsgGet,
}

