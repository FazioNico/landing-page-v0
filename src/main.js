import "./style.css";
import { data } from './data';
import { createChart } from './chart';
import { Footer } from './footerComponent';

const user = {
  firstName: "Nicolas",
  lastName: "Fazio",
};

const fullUser = {
  ...user,
  birth: 1986,
}
user.firstName = "Nico";
fullUser.firstName = "Nic";

console.log(fullUser);
console.log(user);

document.querySelector("#app").innerHTML = `
  <header>
    <span>Vite + Vanilla</span>
  </header>
  <main>
    <h1>Bonjour ${fullUser.firstName} j'ai ${new Date().getFullYear() - fullUser.birth} ans</h1>
    ${Object.entries(fullUser).map(([key, value]) => `<p>${key}: ${value}</p>`).join("")}
    <canvas id="chart"></canvas>
    <canvas id="chart2"></canvas>
  </main>
  ${Footer}
`;

createChart(
  document.getElementById('chart'),
  data
);

createChart(
  document.getElementById('chart2'),
  [
    {year: 2020, count: 10},
    {year: 2021, count: 20},
    {year: 2022, count: 30},
  ]
);
