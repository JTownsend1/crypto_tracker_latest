import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class About extends Component {
    render() {
        return (
            <Link to={`/Coin-detail/${id}`} style={{ textDecoration: 'none' }}></Link>
            <div>
                <h1>ABOUT</h1>
            </div>
        )
    }
}

export default About
