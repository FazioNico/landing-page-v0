import Chart from "chart.js/auto";

export const createChart = (canvas, data) => {

  new Chart(canvas, {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
};
