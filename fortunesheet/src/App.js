import React from "react";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

const ROWS = 100;
const COLS = 100;

// Build celldata array: one entry per cell, all filled with "hello world"
const celldata = [];
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    celldata.push({
      r,
      c,
      v: {
        v: "hello world",
        m: "hello world",
      },
    });
  }
}

const sheetData = [
  {
    name: "Sheet1",
    celldata,
    row: ROWS,
    column: COLS,
  },
];

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Workbook data={sheetData} />
    </div>
  );
}

export default App;
