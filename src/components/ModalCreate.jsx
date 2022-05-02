import {useState} from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import {MdOutlineEmail} from 'react-icons/md'
import {createUser} from '../redux/actions/user'
import {useDispatch} from 'react-redux'
import {CgProfile} from 'react-icons/cg'
import{ImProfile} from 'react-icons/im'
export const ModalCreate = () => {

    const [visible, setVisible] = useState(false);

    const [profile, setProfile] = useState({
      first_name:'',
      last_name:'',
      email:'',
    });

    const dispatch = useDispatch();

    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };

    const onChange =(e)=>{
     const {name, value} = e.target;

       setProfile(old => {
         return{
          ...old, 
          [name]:value
         }
       })
    }

    const onSubmitData=(e)=>{
      e.preventDefault();
      dispatch(createUser(profile))
      closeHandler();
    }



  return (
    <>
    <Button auto shadow onClick={handler}
    style={{margin:'0', width:'10%'}}
    >
      Create Profile
    </Button>
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Create 
          <Text b size={18} style={{paddingLeft:'10px'}}>
            Profile
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <form
        onSubmit={onSubmitData}
        >
        <Input
          aria-label='first_name'
          bordered
          fullWidth
          color="primary"
          size="lg"
          required
          placeholder="first name"
          contentLeft={<CgProfile />}
          type="text"
          name="first_name"
          onChange={onChange}
        />
          
          <Input
          aria-label='last_name'
          bordered
          fullWidth
          color="primary"
          required
          type="text"
          size="lg"
          placeholder="last name"
          contentLeft={<ImProfile />}
          name="last_name"
          onChange={onChange}
        />

        <Input
        aria-label='email'
          bordered
          fullWidth
          color="primary"
          type="email"
           required
          size="lg"
          placeholder="email"
          contentLeft={<MdOutlineEmail />}
          name="email"
          onChange={onChange}
          
        />

         <Button type='submit' auto flat color="default" >
          create
        </Button>

        </form>

      </Modal.Body>
    </Modal>
  </>
  )
}
