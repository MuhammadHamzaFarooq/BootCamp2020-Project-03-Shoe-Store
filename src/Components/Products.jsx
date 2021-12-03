import styled from 'styled-components';
import { ProductItems } from '../Data/Data';
import ProductItem from './ProductItem';
import JsonData from '../Data/JsonData.json';
const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	padding: 20px;
	flex-wrap: wrap;
	overflow-y: hidden;
`;

const Title = styled.h1`
	font-size: 50px;
	font-weight: 800;
`;

const Products = ({ alignment }) => {
	return (
		<Container>
			{JsonData[alignment].map((item,index) => {
				return <ProductItem item={item} key={index} />;
			})}
		</Container>
	);
};

export default Products;
