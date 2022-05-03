import {Container, Row, Col, Loading} from '@nextui-org/react';

export const LoadingUsers=() => (
    <Container>
      <Row
      >
      <Col
       style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}
      >
      <Loading size="xl" >
        Loading
      </Loading>
      </Col>
      </Row>
    </Container>
  )