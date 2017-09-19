import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';
import Error from './Error';

// Root level component which handles form state, error handling, and table rendering
class App extends Component {

    constructor() {
        super();

        this.updateCsv = this.updateCsv.bind(this);
        this.updateColumns = this.updateColumns.bind(this);
        this.submitClicked = this.submitClicked.bind(this);
        this.validate = this.validate.bind(this);

        this.state = {
            csv: '',
            columns: 2
        }
    }

    updateCsv(event) {
        this.setState({
            csv: event.target.value
        })
    }

    updateColumns(event) {
        this.setState({
            columns: +event.target.value
        });
    }

    submitClicked() {
        const { csv, columns } = this.state;

        const values = csv.split(',');

        if (this.validate(values)) {
            const tableData = this.generateTableData(values, columns);

            this.setState({
                tableData
            });
        }
    }

    // sets error messages
    validate(values) {
        if (values.length > 100) {
            this.setState({
                error: 'Values must be between 1-100',
                tableData: null
            });
            return false;
        }

        this.setState({
            error: null
        });
        return true;
    }

    // workhorse of the app which generates a 2D array from the form values
    generateTableData(values, columns) {
        const rows = Math.ceil(values.length / columns);

        const emptyCount = (rows * columns) - values.length;
        const fullCount = columns - emptyCount;

        const tableData = new Array(rows).fill().map(() => []); // empty 2D array
        for (let col = 0; col < columns; col++) {
            for (let row = 0; row < rows; row++) {
                if (col > fullCount - 1 && row === rows - 1) {
                    tableData[row][col] = '';
                } else {
                    tableData[row][col] = values.shift();
                }
            }
        }

        return tableData;
    }

    render() {
        const { csv, columns, tableData, error } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Flow Kana Table</h1>
                    </div>
                </div>
                <Form
                    updateCsv={this.updateCsv}
                    updateColumns={this.updateColumns}
                    submitClicked={this.submitClicked}
                    csv={csv}
                    columns={columns}
                />
                <Error error={error} />
                <Table tableData={tableData}/>
            </div>
        );
    }
}

export default App;
