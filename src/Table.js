import React from 'react';

// renders table from 2D array passed in as prop
const Table = ({tableData}) => {
    if (!tableData) {
        return null;
    }

    const renderCell = (cell, index) => {
        return (
            <td key={index}>
                {cell}
            </td>
        )
    };

    const renderedTableData = tableData.map((row, index) => {
        return (
            <tr key={index}>
                {row.map(renderCell)}
            </tr>
        )
    });

    const renderedHeaders = new Array(tableData[0].length)
        .fill()
        .map((val, index) => index + 1)
        .map((val) => (
            <th key={val}>
                {val}
            </th>
        )
    );

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedTableData}
            </tbody>
        </table>
    );
};

export default Table;