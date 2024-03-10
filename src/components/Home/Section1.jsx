import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
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
const Section1 = () => {
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
    <Box
      mt={["20px", "30px", "60px"]}
      h={["20vh", "20vh", "20vh", "80vh"]}
      className="slider-container Section2"
    >
      <div class="homeSection1">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
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
};

export default Section1;
