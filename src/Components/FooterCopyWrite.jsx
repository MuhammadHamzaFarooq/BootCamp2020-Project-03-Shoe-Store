import styled from 'styled-components';


const Container = styled.div`
 width: 100%;
 height: 20%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: coral;
 padding: 10px 0px;
 font-size: 20px;
 font-weight: 800;
`;


const FooterCopyWrite = () => {
    return (
        <Container>
            Copywrite@ShoeStore
        </Container>
    )
}

export default FooterCopyWrite
