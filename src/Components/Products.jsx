import styled from 'styled-components'
import {ProductItems} from '../Data/Data';
import ProductItem from './ProductItem';


const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content:space-around;
  padding: 20px;
  flex-wrap: wrap; 
`;

const Title = styled.h1`
 font-size: 50px;
 font-weight: 800;

`


const Products = () => {
    return (
      <Container>
       {
           ProductItems.map((item)=>{
               return(
                   <ProductItem item={item} key={item.id}/>
               )
           })
       }
      </Container>
    )
}

export default Products
