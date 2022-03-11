import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './btns.css';

const values = [
  'nature',
  'backgrounds',
  'science',
  'education',
  'people',
  'feelings',
  'health',
  'places',
  'animals',
  'food',
  'computer',
  'sports',
  'anime',
  'travel',
  'fashion',
  'religion',
  'industry',
  'buildings',
  'business',
  'music'
]


let left = 0;

class Buttons extends Component {

  state = {
    arrowLeft: false,
    arrowRight: true
  }

  scrollRight = () => {
    const wrap = document.getElementById('btn-wrap');
  }




btnLeft =() =>{
  const row = document.getElementById('row');

  left = left - (row.offsetWidth/15);
    if (left < (-row.offsetWidth/2.5)){
     
      this.setState({ arrowRight: false })
      } 
  row.style.left = left +'px';
  if (left !== 0) {
    this.setState({ arrowLeft: true })
  } 
}
btnRight = () =>{
  const row = document.getElementById('row');
  left = left + (row.offsetWidth/15);
    if (left  > 0) {
      this.setState({ arrowLeft: false, arrowRight: true })
      } 

   
  row.style.left = left +'px';
}


  render() {
   
    return (
      <div>
        <div className="wrap">
          <div className="slider__row" id="row">
          {values.map((value, i) => {
            return ( 
              <div className="row__item">
                <button 
                  key={value} 
                  style={{ backgroundColor: this.props.colors[i] }}
                  onClick={() => this.props.onSearchCategory(value)} 
                  className="btn_1"
                >
                  {value}
                </button>
              </div>
            )}
          )}
          </div>
        {this.state.arrowLeft && 
          <div id="btn-left" className="slider__btn slider__left">
            <button onClick={this.btnRight}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </div>
        }
        {this.state.arrowRight && 
          <div id="btn-right" className="slider__btn">
            <button onClick={this.btnLeft}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        }
      </div>


      </div>
    );
  }
}

export default Buttons;