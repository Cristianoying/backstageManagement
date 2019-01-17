<template>
        <div ref="mapContainer" style="width:600px; height:600px"></div>
</template>

<script>
import option from '../../common/js/map-option.js'
require('../../common/js/china.js')
let echarts =   require("echarts")
export default {
        methods: {
          drawChinaMap() {
            var myChart = this.$echarts.init(this.$refs.mapContainer);
            myChart.setOption(option);
          }
        },
        mounted() {
          this.drawChinaMap();
        }
}
</script>

<style>
#chart2{
    width: 100%;
    height: 100%;
}
    .chart2{
        width: 100%;
        height: 100%;
    }
</style>
