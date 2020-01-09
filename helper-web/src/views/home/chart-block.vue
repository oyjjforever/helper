<template>
  <div class="chart-block">
    <el-carousel height="500px" indicator-position="outside">
      <el-carousel-item
        :height="carousel.height"
        :width="carousel.width">
        <div id="issueNumByTimeChart" :style="carouselStyle"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/title')
require('echarts/lib/component/visualMap')
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pictorialBar')
require('echarts/lib/component/markLine')
export default {
  name: 'chart-block',
  data () {
    return {
      carousel: {
        height: null,
        width: null
      },
      chartInstances: {}
    }
  },
  computed: {
    carouselStyle () {
      return { height: '500px', width: `calc(100vw - 350px)` }
    }
  },
  mounted () {
    this.initIssueNumByTimeChart()
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    initIssueNumByTimeChart () {
      let option = {
        legend: {
          top: 20,
          right: 20,
          itemWidth: 13,
          itemHeight: 13,
          icon: 'rect',
          textStyle: {
            color: '#B7B7B7'
          }
        },
        graphic: {
          type: 'text',
          left: 'center',
          top: 'middle',
          invisible: false,
          style: {
            fill: '#ccc',
            text: '暂无数据',
            font: 'bold 20px Microsoft YaHei'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            nameTextStyle: {
              color: '#B7B7B7'
            },
            axisLine: {
              lineStyle: {
                color: '#4F555A'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#a2a2a2'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#a2a2a2'
              }
            },
            nameTextStyle: {
              color: '#B7B7B7'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#4F555A'
              }
            },
            splitLine: {
              show: false
            }
          }],
        series: [
          {
            name: '销售数量',
            type: 'bar',
            barWidth: 50,
            color: '#4B5C76'
          }
        ],
        grid: {
          top: 100,
          right: 50,
          left: 80,
          bottom: 50
        }
      }
      let chart = echarts.init(this.$el.querySelector('#issueNumByTimeChart'))
      chart.setOption(option)
      this.chartInstances['issueNumByTimeChart'] = chart
      this.setData()
    },
    async setData () {
      let chart = this.chartInstances['issueNumByTimeChart']
      let { data } = await this.$api.queryData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryPopularGoodsTopN',
          limit: 5
        }
      })
      chart.setOption({
        graphic: {
          invisible: true
        },
        series: [
          {
            data: data.data.map(item => item.count)
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: data.data.map(item => item.model)
          }
        ]
      })
    },
    resize () {
      Object.values(this.chartInstances).forEach(chart => chart.resize())
    }
  }
}
</script>

<style scoped>

</style>
