import "./style.css";
import Chart from "chart.js/auto";

document.querySelector("#app").innerHTML = `
  <header>
    <span>Vite + Vanilla</span>
  </header>
  <main>
    <h1>Main content upd</h1>
    <canvas id="chart"></canvas>

  </main>
  <footer>
    <span>Copyright 2026</span>
  </footer>
`;

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

new Chart(document.getElementById("chart"), {
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
