import React from 'react';

// form values passed used to generate table
const Form = ({csv, columns, updateCsv, updateColumns, submitClicked}) => {
    return (
        <form>
            <div className="form-group">
                <label>CSV</label>
                <input type="text" className="form-control" onChange={updateCsv} value={csv} />
            </div>
            <div className="form-group">
                <label>Columns</label>
                <select className="form-control w-25" onChange={updateColumns} value={columns}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-success" onClick={submitClicked} disabled={!csv}>
                    Submit
                </button>
            </div>
        </form>
    )
};

export default Form;