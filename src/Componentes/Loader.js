import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

const styles = {
  width: '3rem',
  height: '6rem',
  margin: 'auto',
}
class Load extends Component {
  render() {
    return (
        <div style={styles}>
          {this.props.onLoad &&
            <Spinner style={{ width: '3rem', height: '3rem' }} color='secondary' />
          }
        </div>
    );
  }
}

export default Load;