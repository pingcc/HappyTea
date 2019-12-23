//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    level: 'Lv1',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    listMiddle: [{
      title: '积分',
      value: '0'
    }, {
      title: '喜茶券',
      value: '0'
    }, {
      title: '钱包',
      value: '0.00'
    }],
    listFun: [{
        title: '会员俱乐部',
        image: '/images/ic_jiubei.png'
      },
      {
        title: '积分商城',
        image: '/images/ic_jiubei.png'
      }
    ],

    tabList: [{
        title: '星球移民',
        desc: '旧会员星球卡升级',
        icon: '/images/ic_jiubei.png',
        url: ''
      },
      {
        title: '历史订单',
        desc: '',
        icon: '/images/ic_dingdan.png',
        url: ''
      },
      {
        title: '个人资料',
        desc: '请完善信息',
        icon: '/images/ic_jiubei.png',
        url: '../../myfunction/selfinfo/selfinfo'
      },
      {
        title: '会员码',
        desc: '用于门店收银台扫码积',
        icon: '/images/ic_jiubei.png',
        url: '../../myfunction/membercode/membercode'
      },
      {
        title: '兑换码',
        desc: '兑换星球会员或喜茶券',
        icon: '/images/ic_jiubei.png',
        url: '../../myfunction/covertcode/covertcode'
      },
      {
        title: '消息中心',
        desc: '',
        icon: '/images/ic_jiubei.png',
        url: '../../myfunction/msgcenter/msgcenter'
      },
      {
        title: '意见反馈',
        desc: '',
        icon: '/images/ic_jiubei.png',
        url: ''
      },
      {
        title: '关于喜茶GO',
        desc: '',
        icon: '/images/ic_jiubei.png',
        url: ''
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../../myfunction/selfinfo/selfinfo'
    })
  },

  onTabBenefit: function(e) {
    var index = e.currentTarget.dataset.name;
    switch (index) {
      case 0:
        wx.navigateTo({
          url: '../../benefit/happyteaticket/happyteaticket'
        })
        break
      case 1:
        break
      case 2:
      break;
    }
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})