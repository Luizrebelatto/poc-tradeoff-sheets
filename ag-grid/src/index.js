import { createGrid } from "ag-grid-community";

// Generate 100 column definitions
const columnDefs = [];
for (let c = 1; c <= 100; c++) {
    columnDefs.push({
        headerName: `Col ${c}`,
        field: `col${c}`,
        width: 120,
        editable: true,
    });
}

// Generate 100 rows of data
const rowData = [];
for (let r = 1; r <= 100; r++) {
    const row = {};
    for (let c = 1; c <= 100; c++) {
        row[`col${c}`] = `R${r}C${c}`;
    }
    rowData.push(row);
}

const gridOptions = {
    columnDefs,
    rowData,
    defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
    },
};

const myGridElement = document.querySelector("#myGrid");
createGrid(myGridElement, gridOptions);
