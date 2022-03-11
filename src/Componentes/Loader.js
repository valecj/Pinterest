import React, { Component } from  'react';

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
            <div style={{ width: '3rem', height: '3rem' }} />
          }
        </div>
    );
  }
}

export default Load;