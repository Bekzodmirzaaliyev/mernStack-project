import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { sliderItems } from "./data";
import { mobile } from "../../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #fff;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #2c2b2b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    &:hover {
        background-color: #2c2b2b;
    }

    /* МЕДИАЗАПРОСЫ */
    ${mobile({ 
        width: '25px',
        height: '25px',
    })}


`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const InfoContiner = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;

        /* МЕДИАЗАПРОСЫ */
    ${mobile({ 
        justifyContent: 'center',
    })}
`;

const Title = styled.h1`
    font-size: 55px;
    color: #FF6347;

        /* МЕДИАЗАПРОСЫ */
    ${mobile({ 
        fontSize: '24px',
    })}
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 3px;
    color: #FF6347;

    /* МЕДИАЗАПРОСЫ */
    ${mobile({ 
        fontSize: '16px',
    })}
`;

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: transparent;
    border: #FF6347 1px solid;
    cursor: pointer;
    color: #FF6347;
    border-radius: 5px;
    display: flex-end;
    margin-bottom: 20px;

    &:hover {
        background-color: #FF6347;
        color: white;
        box-shadow: 4px 6px 10px 0px #0c0b0b
    }

        /* МЕДИАЗАПРОСЫ */
    ${mobile({ 
        padding: '8px',
        fontSize: '16px',
    })}

`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3 )
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0 )
        }
    }
    
    return (
        <Container>
            <Arrow direction='left' onClick={ () => handleClick("left") }>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                        <InfoContiner img={item.img}>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>
                                SHOW NOW
                            </Button>
                        </InfoContiner>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={ () => handleClick("right") }>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider