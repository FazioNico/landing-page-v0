import fs from "node:fs";

const csv = fs.readFileSync("flashcards.csv", "utf-8");

const lines = csv.split("\n");
const data = lines.slice(1).map(line => {
  const [question, answer] = line.split(",");
  return {
    question,
    answer,
  }
});

console.log(data);