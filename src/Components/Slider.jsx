import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from 'styled-components'
import {sliderItems} from "../data"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #F0CC95ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition : 1.5s all ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=> props.bg}
`;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
   
`;

const Image = styled.img`
  height: 100%;
  margin-left: 50px;

   
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 60px;
    color: #FFDA9F;
`;
const Desc = styled.p`
    margin: 15px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    color: #ffffff;
`;
const Button = styled.button`
    padding: 10px;
    background-color: #FFF8E8ff;
    cursor: pointer;
    font-weight: 300;
    font-size: 20px;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else if (direction ==="right"){
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=> (
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.Image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>

    </Container>
  )
}

export default Slider