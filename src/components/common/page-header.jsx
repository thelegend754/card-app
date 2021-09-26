import React from 'react';

const PageHeader = ({ children }) => {
    return (
        <div className="row">
            <div className="col-12 mt-4">
                <h1 className="display-4">{children}</h1>
            </div>
        </div>
    );
}

export default PageHeader;
