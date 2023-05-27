export const chartData3 = {
  series: [
    {
      name: "STOCK A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "STOCK B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "text",
      lines: {
        show: false,
      },
      show: false,
    },
    
    yaxis: {
      
      title: {
        show: false,
      },

      min: 0,
      lines: {
        show: true,
      },
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y:any) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
};
