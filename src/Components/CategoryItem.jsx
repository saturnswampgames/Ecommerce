import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 8px;
  height: 80vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;
const Title = styled.h1`
  color: #000000;
  margin-bottom: 20px;
  background-color: #FFFFFF;
  padding: 10px;
  border-radius: 8px;


`;
const Button = styled.button`
  padding: 8px;
  background-color: #FFDA9F;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
      <Title>{item.title}</Title>
      <Button>GRAB NOW</Button>
      </Info>
    </Container>
    
  )
}


export default CategoryItem