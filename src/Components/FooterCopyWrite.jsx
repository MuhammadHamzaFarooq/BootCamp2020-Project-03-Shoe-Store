import styled from 'styled-components'

const Container = styled.div`
 width: 100%;
 height: 100%;
 text-align: center;
 background-color:#2c3e50;
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: 900;
 font-size: 50px;
 padding: 30px 0px;

 color: white;
`

const FooterCopyWrite = () => {
    return (
       <Container>
           CopyWrite@MuhammadHamzaFarooq!!!!!
       </Container>
    )
}

export default FooterCopyWrite
