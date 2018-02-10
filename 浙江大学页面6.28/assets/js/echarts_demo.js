window.onload = function(){

 // var echarts_progress = echarts.init(document.getElementById('echarts_progress'));
 var pieoption01 = {
        tooltip : {
            trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
    {
        type : 'category',
        data : ['浙江大学','浙江理工大学','浙江师范大学','浙江工商大学'],
        axisLabel:{
            interval:0,
        },
    }
    ],
    yAxis : [
    {
        type : 'value',
        axisLabel:{
            formatter:'{value}%',
        },
    }
    ],
    color:['#59afec','#227ebf'],
    series : [
    {
        name:'直接访问',
        type:'bar',
        stack: '搜索引擎',
        barWidth:'20%',
        data:['40', '20', '56', '80']
    },        
    {
        name:'其他',
        type:'bar',
        stack: '搜索引擎',
        barWidth:'20%',
        data:['56', '50', '40', '10']
    }
    ]
};
// echarts_progress.setOption(pieoption01); 

var echarts_index = echarts.init(document.getElementById('echarts_index'));
pieoption02 = {
    title : {
        text: '指标情况',
        subtext: '76个',
        x:'center',
        textStyle:{
            color:'#666',
            fontWeight:'bold',
            fontSize:14,
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#59afec','#2dc5c7','#b4a0db'],
    series : [
    {
        name: '指标情况',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
        {value:40, name:'学科专业建设'},
        {value:60, name:'人才培养'},
        {value:16, name:'师资队伍'}
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
    ]
};
echarts_index.setOption(pieoption02); 
    
}