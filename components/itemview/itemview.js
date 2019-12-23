// view/itemView/ItemView.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    icon:{
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: ''
    },
    descColor: {
      type: String,
      value: ''
    },
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
