// view/selectdailog/selectdailog.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
 
    title: {
      type: String,
      value: ''
    },

    content: {
      type: String,
      value: ''
    },
    cancelText: {
      type: String,
      value: '取消'
    },

    confirmText: {
      type: String,
      value: '确定'
    } ,
    
    titleTextColor: {
      type: String,
      value: '#333'
    },
    contentTextColor: {
      type: String,
      value: '#666'
    },
    confirmTextColor: {
      type: String,
      value: '#333'
    },
    confirmTextColor: {
      type: String,
      value: '#8FCD5F'
    },

  },

  /**
   * 组件的方法列表
   */
  /**
    * 私有数据,组件的初始数据
    * 可用于模版渲染
    */
  data: {
    // 弹窗显示控制
    isShow: false
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /*
     * 公有方法
     */

    //隐藏弹框
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
      调用方法bind:cancelEvent="_cancelEvent"
    */
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },

    /**
     *   调用方法bind: cancelEvent="_cancelEvent"
     */

    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }
})
