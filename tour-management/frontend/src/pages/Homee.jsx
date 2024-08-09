import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar'

const Homee = () => {
  return (
    <>   
     <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Your ChatGPT for your tour'} />
              <img src={worldImg} alt="" />
            </div>
            <h1>Travelling is the only way you can create great <span className='highlight'>memories</span></h1>
            <p>Create unforgettable experiences with our comprehensive tour management solution.From booking to billing, we've got your tour business covered.
            Streamline your operations and delight your customers.</p>
          </div>
          </Col>

          <Col>
          <div className="hero__img-box">
            <img src={heroImg} alt='' />
          </div>
          </Col>
          <Col>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt='' controls />
          </div>
          </Col>
          <Col>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt='' />
          </div>
          </Col>

          <SearchBar />

        </Row>
      </Container>

    </section>
    </>
  )
}

export default Homee
