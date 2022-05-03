import {useState, useEffect} from 'react'
import { Modal, Button, Text, Input } from "@nextui-org/react";
import {MdOutlineEmail} from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import {editUserModal, deleteUserModal, createUser} from '../redux/actions/user'
import { updateUser } from '../redux/actions/user'
import {CgProfile} from 'react-icons/cg'
import{ImProfile} from 'react-icons/im'
export const ModalEdit =({ closeHandler, visible,idProfile, type, setIdProfile}) => {
    const [profile, setProfile] = useState({});
    const { userEdit } = useSelector((state) => state.User);

    const dispatch = useDispatch();
    /*const onChange =(e)=>{
     const {name, value} = e.target;

       setProfile(old => {
         return{
          ...old, 
          [name]:value
         }
       })
    }*/

    const closeModal=()=>{
      dispatch(deleteUserModal())
      if(setIdProfile) setIdProfile(null);
      closeHandler()
    }


    const onSubmitData=(e)=>{
      e.preventDefault();
      const {id, ...newdata} = profile;
      if(type === 'edit'){
      dispatch(updateUser(id, newdata))
      closeHandler();
      }else{
        dispatch(createUser(newdata))
        closeHandler()
      }
      
    }

    useEffect(() => {
       if(idProfile !==null){
        dispatch(editUserModal(idProfile));
       }

    }, [idProfile]);

    useEffect(()=>{
         setProfile(old => {
           return{
            ...userEdit,   
          }
         })
    },[userEdit])


  return (
    <>
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeModal}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          {type === 'edit' ? 'Edit' : 'Create'}
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
          value={profile?.first_name}
          onChange={(e)=> setProfile(old => {
            return{
              ...old,
              [e.target.name]: e.target.value
            }
          })}
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
          value={profile?.last_name}
          
          onChange={(e)=> setProfile(old => {
            return{
              ...old,
              [e.target.name]: e.target.value
            }
          })}
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
          value={profile?.email}
          name="email"
          
          onChange={(e)=> setProfile(old => {
            return{
              ...old,
              [e.target.name]: e.target.value
            }
          })}
          
        />

         <Button type='submit' auto  color="gradient" >
          <Text 
          color='white'
          >
           {type === 'edit' ? 'Edit' : 'Create'}
          </Text>
        </Button>

        </form>

      </Modal.Body>
    </Modal>
  </>
  )
}
