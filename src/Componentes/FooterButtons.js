import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'

const FooterButtons = () => (
  <footer className='footer-buttons'>
    <button>
      <FontAwesomeIcon icon={faPlus} />
    </button>
    <button>
      <FontAwesomeIcon icon={faQuestion} />
    </button>
  </footer>
)

export default FooterButtons;