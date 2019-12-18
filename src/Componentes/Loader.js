import React, { Component, Fragment } from 'react';
import { Spinner } from 'reactstrap';

class Load extends Component {
  render() {
    return (
      <Fragment>
        {!this.props.onLoad &&
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        }
      </Fragment>
    );
  }
}

export default Load;