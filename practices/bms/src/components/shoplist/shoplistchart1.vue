<template>
    <div id="chart1" >
            <div ref="chart1" class="chart1">
            </div><hr>
              <div ref="chart2" class="chart2">
            </div>
    </div>
</template>

<script>
let  echarts = require('echarts');
export default {
    mounted() {
        var chart1 = echarts.init(this.$refs.chart1);
        let  options = {
                title: {
                    text: '店铺评论量 '
                },
                tooltip: { },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: { min:0,
                     max:100,},
                series: [{
                    name: '销量',
                    type: 'line',
                    symbol:'diamond',
                    symbolSize :10,
                    data: [90, 20, 36, 80, 50, 20]
                }]
            };

        chart1.setOption( options );



    }
}
</script>

<style>
#chart{
    width: 100%;
    height: 100%;
}
.chart1{
        width: 600px;
        height: 400px;
    }

    .chart2{
        width: 600px;
        height: 400px;
    }
</style>
