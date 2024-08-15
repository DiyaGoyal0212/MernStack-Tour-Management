import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured tour/FeaturedTourList'
import experienceImg from '../assets/images/experinece.png'

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

    {/* hero section */}


    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className="service__subtitle">
            What we serve
          </h5>
          <h2 className='services__title'>
            We offer our best services
          </h2>
          </Col>
          <ServiceList />
      
        </Row>
      </Container>
    </section>


    {/* featyred tour section start */}

    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
          <Subtitle subtitle={'Explore'} />
          <h2 className="feature__tour-title">Our Featured Tours</h2>
        </Col>
        <FeaturedTourList/>
        </Row>
      </Container>
    </section>


    {/*experience section start  */}
<section>
  <Container>
    <Row>
    <Col lg="6">
    <div className="experience__content">
      <Subtitle subtitle={'experience'} />

      <h2>With our all experinece <br /> we will serve you</h2>
       <p>
        <ul>
          <li>Explore breathtaking landscapes</li>
          <li>Discover hidden gems</li>
          <li>Immerse yourself in local cultures</li>
          <li>Try delicious local cuisine</li>
          <li>Engage in thrilling adventures</li>
        </ul>
       </p>

    </div>

    <div className="counter__wrapper d-flex align-items-center gap-5">
      <div className="counter__box">
        <span>12k+</span>
        <h6>Successfull Trip</h6>
      </div>
      <div className="counter__box">
        <span>2k+</span>
        <h6>Regular clients</h6>
      </div>
      <div className="counter__box">
        <span>15</span>
        <h6>Years Experience</h6>
      </div>
    </div>
    </Col>


    <Col lg="6">
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
    </Col>
    </Row>
    </Container></section>

    {/* gallery section */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Gallery'} />
          <h2 className="gallery__title"></h2>
          </Col>
        </Row>
      </Container>
    </section>



    </>
  )
}

export default Homee
