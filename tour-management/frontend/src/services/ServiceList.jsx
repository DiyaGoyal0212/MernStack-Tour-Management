import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap';
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";


const servicesData = [
    {
        imgUrl:weatherImg,
        title:"Calculate weather",
        desc:"It will calculate the weather and will give the best choices of trip according to your description"
    },
    {
        imgUrl:guideImg,
        title:"Best Tour guide",
        desc:"It will be the best tour guide for you and will help you get the best trip" ,
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"It provides customization and helps you choose based on your choices"
    },
]

const ServiceList = () => {
  return (
    <>{
        servicesData.map((item,index) =><Col lg='3' key={index}>
            <ServiceCard item={item} />
        </Col>
        )
    }
    </>

  )
}

export default ServiceList
