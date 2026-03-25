import Spreadsheet from "x-data-spreadsheet";

const rows = {};
for (let r = 0; r < 100; r++) {
  const cells = {};
  for (let c = 0; c < 100; c++) {
    cells[c] = { text: `R${r + 1}C${c + 1}` };
  }
  rows[r] = { cells };
}
rows.len = 100;

const data = {
  name: "Sheet1",
  rows,
  cols: { len: 100 },
};

const s = new Spreadsheet("#x-spreadsheet-demo", {
  mode: "edit",
  showToolbar: true,
  showGrid: true,
  showContextmenu: true,
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  },
  row: { len: 100, height: 25 },
  col: { len: 100, width: 100, indexWidth: 60, minWidth: 60 },
}).loadData(data);
