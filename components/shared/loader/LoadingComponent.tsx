import Spinner from 'react-bootstrap/Spinner';
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  top: 50%;
  left:50%;
  `
function LoadingComponent() {

  return (
    <Container>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
    </Container>
  );
}
export default LoadingComponent;
