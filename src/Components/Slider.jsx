import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useState } from 'react';
import { SliderItems } from '../Data/Data';

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	/* flex-direction: column; */
	overflow-x: hidden;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: white;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	position: absolute;
	top: 0;
	bottom: 0%;
	margin: auto;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	cursor: pointer;
	z-index: 2;
`;

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	transition: all 1.3s ease-in-out;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	display: flex;
	background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`flex: 1;`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	flex: 1;
	background: none;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	/* background-color: #e0dddd; */
`;

const Title = styled.h1`
	font-size: 60px;
	font-weight: 900;
	margin-bottom: 10px;
`;

const Desc = styled.p`
	font-size: 25px;
	font-weight: 500;
	letter-spacing: 1px;
	margin-bottom: 10px;
`;

const Button = styled.button`
	padding: 15px 30px;
	outline: none;
	background-color: transparent;
	margin-top: 10px;
	cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
	
	const slideClickkHandler = (direction) =>{
		if(direction === 'left'){
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5 );
		}
		else{
			setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0 );
		}
	}

	return (
		<Container>
			<Arrow direction="left" onClick={()=>slideClickkHandler('left')} >
				<ArrowLeftIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{SliderItems.map((item) => {
					return (
						<Slide bg={item.bg} key={item.id}>
							<ImageContainer>
								<Image src={item.img} />
							</ImageContainer>
							<InfoContainer>
								<Title>{item.title}</Title>
								<Desc>{item.desc}</Desc>
								<Button>SHOP NOW</Button>
							</InfoContainer>
						</Slide>
					);
				})}
			</Wrapper>

			{/* <Wrapper>
				<Slide bg=" #e0dddd">
					<ImageContainer>
						<Image src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
					</ImageContainer>
					<InfoContainer>
						<Title>SUMMER SALE!</Title>
						<Desc>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita, aliquam aut,
							officia quaerat!
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Wrapper>
				<Slide bg=" blanchedalmond">
					<ImageContainer>
						<Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
					</ImageContainer>
					<InfoContainer>
						<Title>WINTER SALE!</Title>
						<Desc>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita, aliquam aut,
							officia quaerat!
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Wrapper>
				<Slide bg="#e7f7f3">
					<ImageContainer>
						<Image src="https://images.unsplash.com/photo-1614689540269-7f9315660d59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
					</ImageContainer>
					<InfoContainer>
						<Title>WINTER SALE!</Title>
						<Desc>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita, aliquam aut,
							officia quaerat!
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Wrapper>
				<Slide bg="#ffe5d49b">
					<ImageContainer>
						<Image src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
					</ImageContainer>
					<InfoContainer>
						<Title>WINTER SALE!</Title>
						<Desc>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita, aliquam aut,
							officia quaerat!
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Wrapper>
				<Slide bg="#ffffffed">
					<ImageContainer>
						<Image src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
					</ImageContainer>
					<InfoContainer>
						<Title>WINTER SALE!</Title>
						<Desc>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita, aliquam aut,
							officia quaerat!
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Wrapper>
				<Slide bg="#ffdcf7">
					<ImageContainer>
						<Image src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
					</ImageContainer>
					<InfoContainer>
						<Title>WINTER SALE!</Title>
						<Desc>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita, aliquam aut,
							officia quaerat!
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper> */}

			<Arrow direction="right" onClick={()=>slideClickkHandler('right')} >
				<ArrowRightIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
