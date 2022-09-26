import React from 'react';
import { Card } from "react-bootstrap"


const Unauthorized = () => {
    return (
        <Card>
            <div className='card-body'>
                <h1 className="card-title">You are unauthorized to use this page</h1>
            </div>
        </Card>
    )
}
export default Unauthorized;