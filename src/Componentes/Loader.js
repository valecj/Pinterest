import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class Load extends Component {
    render() {
        return (
            <Loader
                type="Circles"
                color="#4e5156"
                height ="70"
                width="70"
            />
        );
    }
}

export default Load;