import styled from 'styled-components'

const Container = styled.div`
 width: 100%;
 height: 30px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color:#27ae60;
 color: white;
 font: 30px;
 font-weight: 600;
 letter-spacing: 2px;
 padding: 15px 0px;
`;

const Announcement = () => {
    return (
        <Container>
             MEGA DEAL FOR OUR CUSTOMERS 50% IS OFF EVERY PRODUCT
        </Container>
    )
}

export default Announcement
