import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #f7e4b2;
    color: #082533;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    
`;

const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shipping On Orders Above 80$
    </Container>
  )
}

export default Announcements