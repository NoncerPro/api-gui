export const colors = {
  default: "#344675",
  primary: "#42b883",
  info: "#a891f6",
  danger: "#fd5d93",
  orange: "#ff8a76",
  teal: "#00d6b4",
  primaryGradient: [
    "rgba(76, 211, 150, 0.4)",
    "rgba(53, 183, 125, 0)",
    "rgba(119,52,169,0)"
  ],
  purpleGradient: ["rgba(226,217,255,0.4)", "rgba(226,217,255,0.3)", "rgba(226,217,255,0)"]
};

export const basicOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};

export let bigChartDatasetOptions = {
  fill: true,
  borderColor: colors.info,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: colors.info,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: colors.info,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
};

export let barChartOptionsGradient = {
  ...basicOptions,
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        offset: true,
        gridLines: {
          drawBorder: false,
          color: "rgba(253,93,147,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          // suggestedMin: 60,
          // suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
          autoSkip: true,
        }
      }
    ],

    xAxes: [
      {
        type:"time",
        distribution: 'series',
        time:{
          time: {
            displayFormats: {
                minute: 'h:mm a'
            }
          }
        },
        gridLines: {
          drawBorder: false,
          color: "rgba(253,93,147,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
          autoSkip: true,
          maxTicksLimit: 12
        }
      }
    ]
  }
};
