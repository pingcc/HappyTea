
var str = "正在加载...";
var host = 'https://ws.mammasay.com'

/**params:{
 *  host：//更换请求host
    url://请求地址
    data://请求参数
    message：//进度条提示信息
    method://请求方式
    success://成功的回调函数
    error：//请求错误码
    fail：//失败的回调
    complete://请求完成
    isLoading：//是否显示加载进度条
}
*/
const wxRequest = (params)=>{
  wx.showNavigationBarLoading()
  if (params.isLoading) {
    wx.showLoading({
      title: params.message || str,
    })
  }
  wx.request({
    url: params.host || host + params.url,
    method: params.method || 'GET',
    data:params.data||{},
    header: {
      'Content-Type': 'application/json',
      'Authorization': wx.getStorageSync('sessionKey')
     },
    success: (res) => {
      if (res.statusCode == 200) {//请求码200
        params.success && params.success(res.data)
      } else if (res.statusCode == 40){//token错误
        wx.navigateTo({//跳转到登录页面
          url: '../webView/CommunitywebView?content=' + itemModel.Content,
        })
      } else {//请求码错误
        wx.showToast({
          title: res.msg,//请求失败的提示
        })
        params.error && params.error(res.msg)
      }
    },
    fail: (res) => {//网络失败
      wx.showToast({
        title: '网路出错了',//请求失败的提示
      })
      params.fail && params.fail(res)
    },
    complete: (res) => {
      wx.hideNavigationBarLoading()
      if (isLoading) {
        wx.hideLoading()
      }
      params.complete && params.complete(res)
    }
  })
}

module.exports = {
  wxRequest
}

