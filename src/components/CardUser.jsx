import { useState } from 'react';
import { Card, Row, Text, Grid, Button, Divider } from "@nextui-org/react";
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';
import { useDispatch } from "react-redux";
import {deleteUser} from '../redux/actions/user'
import {ModalEdit} from './ModalEdit';
export const CardUser = ({ last_name, id, first_name, email }) => {

  const [visible, setVisible] = useState(false);
  const [idProfile, setIdProfile] = useState(null);
  const [type, setType] = useState(null);

  const dispatch = useDispatch();

  const handler = () => setVisible(true);

  const ActivateModal=(id, edit)=>{
    handler();
    setIdProfile(id);
    setType(edit)
  }
  
  const closeHandler = () => {
    setVisible(false);
  };

  const deleteUserId=(id)=>{
    dispatch(deleteUser(id))
  }


  return (
    <>
      <Card css={{ mw: "270px", margin:'1rem'}}>
        <Card.Header>
          <Text h2 b
                  size={20}
                  css={{
                    textGradient: "45deg, $blue500 -20%, $pink500 50%",
                    textAlign:'center'
                  }}
                  weight="bold"
          >{first_name} {last_name}</Text>
        </Card.Header>
        <Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>
            {email}
          </Text>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Row 
          style={{justifyContent:'center' ,gap:"20px",}}
          >
            <Button size="xs" color="error" 
            onClick={()=>deleteUserId(id)}
            >
           
              <AiOutlineDelete size={20} />

         
            </Button>

            <Button size="xs" color="default"
            onClick={() => ActivateModal(id, 'edit')}
            >
           
              <AiOutlineEdit size={20} />
             
           
            </Button>
            
          </Row>
        </Card.Footer>
      </Card>
      <ModalEdit closeHandler={closeHandler}  visible={visible} idProfile={idProfile} type={type} setIdProfile={setIdProfile}/>
    </>
    
  );
};

