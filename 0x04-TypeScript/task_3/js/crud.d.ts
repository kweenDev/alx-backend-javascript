import { RowID, RowElement } from "./interface";

// Ambient declaration for CRUD operations
declare module CRUD {
    function insertRow(row: RowElement): RowID;
    function deleteRow(rowId: RowID): void;
    function updateRow(rowId: RowID, row: RowElement): RowID;
}