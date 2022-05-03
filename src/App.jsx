import  {useEffect, useState} from 'react'
import { NextUIProvider, Container, Row, Grid, Button } from '@nextui-org/react';
import {Header,CardUser,LoadingUsers ,ModalEdit,NoUsers} from './components'
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "./redux/actions/user";
import {AiOutlineUserSwitch} from 'react-icons/ai';

function App() {

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(null);

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

  const handler = () => setVisible(true);

  const ActivateModal=(create)=>{
    handler();
    setType(create)
  }
  
  const closeHandler = () => {
    setVisible(false);
    
  };

  if(loading) {
     return <LoadingUsers />
  }

  if(users.length===0) return <><Header /> <NoUsers /></>

  return (
     <NextUIProvider>
          <Header />
          <Container
          className='container'
          >
            <Row
            style={{marginTop:'20px', display:'flex', alignItems:'center', justifyContent:'flex-end'}}
            >

<Button size="sm" color="default"
            onClick={() => ActivateModal('create')}
            >
              <AiOutlineUserSwitch size={20} />
             Create User
            </Button>
 
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
             <ModalEdit closeHandler={closeHandler}  idProfile={null} visible={visible} type={type} setIdProfile={null}/>
          </Container>
     </NextUIProvider>
  )
}

export default App


