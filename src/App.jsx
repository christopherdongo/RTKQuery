import  {useEffect, useState} from 'react'
import { NextUIProvider, Container, Row, Grid } from '@nextui-org/react';
import {Header,CardUser,LoadingUsers ,ModalCreate} from './components'
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "./redux/actions/user";

function App() {

  const [profiles, setProfiles] = useState([]);
  const { loading, users } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(listUsers());
  },[])

  useEffect(()=>{
     setProfiles(old => {
       return [...users]
     })
  },[users])



  if(loading) <LoadingUsers />


  return (
     <NextUIProvider>
          <Header />
          <Container
          className='container'
          >
            <Row
            style={{marginTop:'20px', display:'flex', alignItems:'center', justifyContent:'flex-end'}}
            >
 
              <ModalCreate />
             
            </Row>
             <Row
             style={{marginTop:'20px'}}
             >
               <Grid.Container
               gap={2} justify="center"
               sm={12}
               md={12}
               style={{
                 gap:'20px'
               }}
               > 
                {profiles.map((profile, index) => (
                  <CardUser key={index} {...profile} />
                ))}
               </Grid.Container>
             </Row>
          </Container>
     </NextUIProvider>
  )
}

export default App


