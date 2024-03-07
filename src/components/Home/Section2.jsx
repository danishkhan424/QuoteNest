import React from 'react'
import Slider from "react-slick";
import { Box, Image} from "@chakra-ui/react";
import sliderImage1 from "../../assets/Slider/s1.png";
import sliderImage2 from "../../assets/Slider/s2.png";
import sliderImage3 from "../../assets/Slider/s3.png";
import sliderImage4 from "../../assets/Slider/s4.png";
import sliderImage5 from "../../assets/Slider/s5.png";
import sliderImage6 from "../../assets/Slider/s6.png";
import sliderImage7 from "../../assets/Slider/s7.png";
import sliderImage8 from "../../assets/Slider/s8.png";
import sliderImage9 from "../../assets/Slider/s9.png";
import sliderImage10 from "../../assets/Slider/s10.png";

const sliderImages = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
  sliderImage6,
  sliderImage7,
  sliderImage8,
  sliderImage9,
  sliderImage10,
];

function ArrowButton({ style }) {
  return <Box style={{ ...style, display: "none" }} />;
}
const Section2 = () => {

    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      nextArrow: <ArrowButton />,
      prevArrow: <ArrowButton />,
    };
    
  return (
    <Box className="slider-container">
      <Slider {...settings}>
        {sliderImages.map((sliderImage, i) => (
          <Box className="slider-image" key={i} w={"100%"} p={1}>
            <Image
              src={sliderImage}
              alt="sliderImage"
              w={"100%"}
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Section2