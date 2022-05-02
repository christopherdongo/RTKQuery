import {useState, useEffect} from 'react'
import { Modal, Button, Text, Input } from "@nextui-org/react";
import {MdOutlineEmail} from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import {updateUser} from '../redux/actions/user'
import {CgProfile} from 'react-icons/cg'
import{ImProfile} from 'react-icons/im'
export const ModalEdit =({ closeHandler, visible,idProfile}) => {
    const [profile, setProfile] = useState({});
    const { users } = useSelector((state) => state.User);

    const dispatch = useDispatch();
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
      const {id, ...newdata} = profile;
      dispatch(updateUser(id, newdata))
      closeHandler();
    }

    useEffect(() => {
        if(idProfile !==null){
            const data = users.filter(user => user.id === idProfile);
            setProfile(old => {
                return {
                    ...data[0]
                }
            })
        }
    }, [idProfile]);


  return (
    <>
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Update
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
          value={profile.first_name}
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
          value={profile.last_name}
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
          value={profile.email}
          name="email"
          onChange={onChange}
          
        />

         <Button type='submit' auto flat color="default" >
          update
        </Button>

        </form>

      </Modal.Body>
    </Modal>
  </>
  )
}
