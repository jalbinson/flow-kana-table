import React from 'react';

// error messages are rendered when present
const Error = ({error}) => {
    if (!error) {
        return null;
    }

    return (
        <div className="row">
            <div className="col">
                <p className="text-danger">
                    {error}
                </p>
            </div>
        </div>
    );
};

export default Error;