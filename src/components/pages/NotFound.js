import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>
{
    return (
        <div>
            <h1>You Lost ?</h1>
            <div>
                <h4>Just go behind these bushes and you will see the <Link to="/"><strong>Homepage</strong></Link> Have a safe trip !!</h4>
            </div>
        </div>
    );
}

export default NotFound;