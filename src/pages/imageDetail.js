import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Nav from '../componentes/Nav';
import ImageList from './imageList';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API, CLIENT_ID } from '../utils/constants';

import { useHistory } from 'react-router-dom';
import Load from '../componentes/Loader';

const styles = {
  position: 'sticky',
  top: '85px',
  background: 'white',
  borderBottom: 'none'
}

const ImageDetail = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  let history = useHistory();

  const getImage = () => {
    const id = props.match.params.id || props.match.url.replace('/pin/', '')
    setLoading(true)

    axios(`${API}/photos/${id}`, {
      params: {
        client_id: CLIENT_ID,
      },
    })
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Ocurrió un error", error)
      });
  }

  useEffect(() => {
    getImage();
  }, [])

  const goBack = () => {
    if (history.length >= 3) {
      history.push("/");
    } else {
      history.goBack();
    }
  }

  const url = data && data.links.self.replace('https://', '');
  const urlModal = data && url.split('.com/');

  return (
    <>
      {data && !loading ? <Modal
        fade={false}
        isOpen={true}
      >
        <Nav />

        <ModalHeader style={styles}>
          <Button color="secondary" className="btn_back" onClick={goBack}>
            <FontAwesomeIcon className="iconArrow" icon="arrow-left" />
          </Button>
        </ModalHeader>

        <ModalBody>
          <section className="container">
            <div id="fl" className="left-half">
              <article>
                <img className="imgmodal" style={{ width: '100%', height: '100%' }} src={data.urls.full} alt='img' />
              </article>
            </div>

            <div id="fl" className="img-detail right-half">
              <section className="img-detail-header">
                <nav className='img-detail-header__actions'>
                  <div className="left">
                    <Button>
                      <FontAwesomeIcon className="ellip_color" icon="ellipsis-h" />
                    </Button>

                    <Button>
                      <img width='20' src='https://image.flaticon.com/icons/svg/725/725008.svg' />
                    </Button>
                  </div>

                  <div className="right">
                    <Button>Save</Button>
                  </div>
                </nav>

                <article className='img-detail-header__website'>
                  <a target='_blank' href={data.links.self}>{urlModal[0]}</a>
                </article>
              </section>

              <section className="img-detail-headline">
                <h1>{data.alt_description}</h1>
              </section>

              <section className="img-detail-user">
                <div className="left">
                  <img src={data.user.profile_image.small} alt='user' />

                  <span className='user-description'>
                    <a target='_blank' href={data.user.links.self}>
                      <strong>
                        {data.user.username}
                      </strong>
                    </a>

                    <small>{data.user.total_likes} total likes</small>
                  </span>
                </div>

                <div className='right'>
                  <Button>Follow</Button>
                </div>
              </section>

              <div id='parent2' className="parent">
                <div className="left _l">
                  <p className="p_comment">Comentarios</p>
                </div>
                <div className="right comm">
                  <Button color="secondary" className="btn_arrow-comment">
                    <FontAwesomeIcon className="arrow_icon-comment" icon="angle-down" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ModalBody>

        <section className='more-images'>
          <h2>More like this</h2>

          <ImageList searchQuery={{ event: { target: { value: data.alt_description } } }} />
        </section>
      </Modal> : <Load />}
    </>
  )
}

export default ImageDetail