import styled from 'styled-components';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

const Container = styled.div`
	width: 30%;
	margin: 20px 0px;
	border: 2px solid gray;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 20px 0px;
	margin: 20px 0px;
`;

const Stars = styled.div``;

const Title = styled.h1`
	font-size: 40px;
	font-weight: 600;
`;

const Price = styled.h2`
	font-size: 35px;
	font-weight: 500;
`;

const Button = styled.button`
	padding: 10px 20px;
	background-color: black;
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
	margin: 10px 0px;

	&:hover{
		background-color: transparent;
		color: black;
		border: 2px solid gray;
	}
`;

const ProductItem = ({ item }) => {
	const [ value, setValue ] = useState(2);

	return (
		<Container>
			<Wrapper>
				<ImageContainer>
					<Image src={item.img} />
				</ImageContainer>
				<InfoContainer>
					<Stars>
						<Rating
							name="simple-controlled"
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						/>
					</Stars>
					<Title>{item.name}</Title>
					<Price>{item.price}</Price>
					<Button>Add to Cart</Button>
				</InfoContainer>
			
			</Wrapper>
		</Container>
	);
};

export default ProductItem;
