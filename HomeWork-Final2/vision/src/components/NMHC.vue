<template>
  <div class="com-container">
    <div class="com-chart" ref="nmhc_ref"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      chartInstance: null,
      allData: null, // 服务器获得的所有数据
      titleFontSize: 0, // 标题大小
      startValue: 0, // 区域缩放起点值
      endValue: 60, // 区域缩放终点值
      timerId: null // 定时器的标识
    }
  },
  created () {
    // 组件创建完成回调函数创建
    this.$socket.registerCallBack('nmhcData', this.getData)
  },
  mounted () {
    this.initChart()
    // this.getData()
    // 发送数据给服务器
    this.$socket.send({
      action: 'getData',
      socketType: 'nmhcData',
      chartName: 'nmhc',
      value: ''
    })
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
    clearInterval(this.timerId)
    this.$socket.unRegisterCallBack('nmhcData')
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.nmhc_ref, this.theme)
      // 对图表初始化配置的控制
      const initOption = {
        title: {
          text: '▍NMHC预测',
          left: 20,
          top: 20
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: '10%',
          top: '10%'
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true // 距离包含文字
        },
        // visualMap: {
        //   show: false,
        //   type: 'continuous',
        //   min: 0,
        //   max: 400
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
          // scale: true
        }
      }
      this.chartInstance.setOption(initOption)
    },
    getData (ret) {
      // await this.$http.get()
      // 对allData进行赋值
      // const { data: ret } = await this.$http.get('nmhc')
      this.allData = ret
      console.log(this.allData)
      this.updateChart()
      // 启动定时器
      this.startInterval()
    },
    updateChart () {
      // 处理数据
      // 半透明颜色
      const colorArr1 = [
        'rgba(11, 168, 44, 0.5)',
        'rgba(44, 110, 255, 0.5)',
        'rgba(22, 242, 217, 0.5)',
        'rgba(254, 33, 30, 0.5)',
        'rgba(250, 105, 0, 0.5)'
      ]
      // 全透明的颜色值
      const colorArr2 = [
        'rgba(11, 168, 44, 0)',
        'rgba(44, 110, 255, 0)',
        'rgba(22, 242, 217, 0)',
        'rgba(254, 33, 30, 0)',
        'rgba(250, 105, 0, 0)'
      ]
      const timeArr = this.allData.time
      const valueArr = this.allData.data
      const legendArr = valueArr.map(item => {
        return item.name
      })
      console.log(valueArr)
      const seriesArr = valueArr.map((item, index) => {
        if (index === 0) {
          return {
            name: item.name,
            type: 'line',
            data: item.data,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 7
                }
              }
            },
            markLine: {
              data: [
                {
                  yAxis: 0.5
                }
              ],
              lineStyle: {
                width: 7,
                type: 'solid',
                color: '#DC143C'
              }
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: colorArr1[index]
                },
                {
                  offset: 1,
                  color: colorArr2[index]
                }
              ])
            }
          }
        } else {
          return {
            name: item.name,
            type: 'line',
            data: item.data,
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: colorArr1[index]
                },
                {
                  offset: 1,
                  color: colorArr2[index]
                }
              ])
            }
          }
        }
      })
      const dataOption = {
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue
        },
        xAxis: {
          data: timeArr
        },
        legend: {
          data: legendArr
        },
        series: seriesArr
      }
      this.chartInstance.setOption(dataOption)
    },
    startInterval () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.startValue++
        this.endValue++
        if (this.endValue > this.allData.time.length - 1) {
          this.startValue = 0
          this.endValue = 60
        }
        this.updateChart()
      }, 2000)
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.nmhc_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize / 2,
          itemHeight: this.titleFontSize / 2,
          itemGap: this.titleFontSize / 2,
          textStyle: {
            fontSize: this.titleFontSize / 2
          }
        },
        title: {
          textStyle: {
            fontSize: this.titleFontSize
          }
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  },
  computed: {
    ...mapState(['theme'])
  },
  watch: {
    theme () {
      console.log('主体切换了')
      this.chartInstance.dispose()
      this.initChart()
      this.screenAdapter()
      this.updateChart()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
