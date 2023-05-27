export const chartData2 = {
  series: [
    {
      data: [0.4, 0.65, 0.76, 0.88, 1.5],
    },
    {
      data: [-0.8, -1.05, -1.06, -1.18, -1.4],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 440,
      stacked: true,
      background: ['#f5f5',"#64cda4"],
      toolbar: {
        show: false,
      },
    },
    colors: ["#9a7ddd", "#64cda4"],
    
    plotOptions: {
      bar: {
        horizontal: true,

        distributed: false,
        barWidth: "0.6", 
        columnWidth: "",
        barHeight: "100%",

        dataLabels: {
          position: "bottom",
        },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["black"],
      },
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: false,
      },
    },

    stroke: {
      width: 2,
      colors: ["#fff"],
    },
    grid: {
      show: true,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
  },
};
