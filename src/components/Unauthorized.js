import React from 'react';
import { Card } from "react-bootstrap"


const Unauthorized = () => {
    return (
        <Card>
            <div className='card-body'>
                <h1 className="card-title">
                    No such page exists :(
                </h1>
            </div>
        </Card>
    )
}
export default Unauthorized;