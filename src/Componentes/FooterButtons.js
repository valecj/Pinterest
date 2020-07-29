import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'

const FooterButtons = () => (
  <footer className='footer-buttons'>
    <Button>
      <FontAwesomeIcon icon={faPlus} />
    </Button>
    <Button>
      <FontAwesomeIcon icon={faQuestion} />
    </Button>
  </footer>
)

export default FooterButtons;