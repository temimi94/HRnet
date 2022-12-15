import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./collums";
import "./table.css";
import FiltringTable from "./FiltringTable";

const TableEmployees = () => {
  const stateData = useSelector((state) => state.employee.employees);
  console.log(stateData);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => stateData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    goToPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex } = state;

  const { globalFilter } = state;
  return (
    <>
      <FiltringTable filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? "bas"
                        : "haut"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="footerTable">
        <span>
          Showing{""}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          {""}
        </span>
        <div className="button-Table">
          <span>
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                goToPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>
          {/*   <button onClick={() => goToPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button> */}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
          {/*  <button onClick={() => goToPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button> */}
        </div>
      </div>
    </>
  );
};

export default TableEmployees;
