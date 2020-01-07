// pages/list/list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    itemList: []
  },
  onLoad: function () {
      this.setData({
        itemList : wx.getStorageSync('logs') || []
      })
  }
})
