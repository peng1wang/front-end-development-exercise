<template>
  <div class="com-container">
    <div class="com-chart" ref="nmhcreal_ref"></div>
    <span class="iconfont arr-left" @click="toLeft" :style="comStyle">&#xe6ef;</span>
    <span class="iconfont arr-right" @click="toRight" :style="comStyle">&#xe6ed;</span>
    <span class="cat-name" :style="comStyle">{{ catName }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getThemeValue } from '@/utils/theme_utils'
// import { getThemeValue } from '@/utils/theme_utils'
export default {
  data () {
    return {
      chartInstance: null,
      allData: null, // 服务器获得的所有数据
      currentIndex: 0, // 当前展示的一级分类数据
      titleFontSize: 0,
      startValue: 0, // 区域缩放起点值
      timerId: null // 定时器的标识
    }
  },
  created () {
    // 组件创建完成回调函数创建
    this.$socket.registerCallBack('nmhcrealData', this.getData)
  },
  computed: {
    catName () {
      if (!this.allData) {
        return ''
      } else {
        return this.allData[this.currentIndex].name
      }
    },
    comStyle () {
      return {
        fontSize: this.titleFontSize + 'px',
        color: getThemeValue(this.theme).titleColor
      }
    },
    ...mapState(['theme'])
  },
  mounted () {
    this.initChart()
    this.$socket.send({
      action: 'getData',
      socketType: 'nmhcrealData',
      chartName: 'action',
      value: ''
    })
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
    clearInterval(this.timerId)
    this.$socket.unRegisterCallBack('nmhcrealData')
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.nmhcreal_ref, this.theme)
      const initOption = {
        title: {
          text: '▍动作实时变化',
          left: 20,
          top: 20
        },
        series: [{
          type: 'gauge',
          min: 0,
          max: 1000,
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.15, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            color: 'auto'
          }
        }]
      }
      this.chartInstance.setOption(initOption)
    },
    getData (ret) {
      // await this.$http.get()
      // 对allData进行赋值
      // const { data: ret } = await this.$http.get('nmhcreal')
      this.allData = ret.data
      console.log(this.allData)
      this.updateChart()
      this.startInterval()
    },
    updateChart () {
      // 处理数据
      // const legendData = this.allData[0].name
      // const seriesData = this.allData[0].data[0]
      const dataOption = {
        series: [{
          detail: {
            formatter: '{value}',
            fontSize: this.titleFontSize
          },
          axisLabel: {
            color: 'auto',
            distance: this.titleFontSize,
            fontSize: this.titleFontSize / 2
          },
          data: [{
            value: this.allData[this.currentIndex].data[this.startValue]
          }]
        }]
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.nmhcreal_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: this.titleFontSize
          }
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    toLeft () {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.allData.length - 1
      }
      this.updateChart()
    },
    toRight () {
      this.currentIndex++
      if (this.currentIndex > this.allData.length - 1) {
        this.currentIndex = 0
      }
      this.updateChart()
    },
    startInterval () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.startValue++
        if (this.startValue > this.allData[0].data.length - 1) {
          this.startValue = 0
        }
        this.updateChart()
      }, 2000)
    }
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

<style lang='less' scoped>
.arr-left {
  position:absolute;
  left: 7%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
}
.arr-right {
  position:absolute;
  right: 7%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
}
.cat-name {
  position:absolute;
  left:50%;
  bottom: 15%;
  color: white;
  transform: translate(-50%, -50%);
}
</style>
