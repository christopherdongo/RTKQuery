import { reqUser, listUserSuccess, deleteUserSuccess,createUserSuccess,updateUserSuccess } from "../reducers/user";

export const listUsers = () => async (dispatch)=>{
  dispatch(reqUser());

  const options = {
      method:'GET',
      headers:{
          "Content-Type":"application/json"
      }
    }
  try{
      const res = await fetch('http://localhost:8000/profile', options)
      const data = await res.json();
      dispatch(listUserSuccess(data));

  }catch(err){
      console.log(err)
  }

}

export const updateUser = (id, newdata) => async (dispatch) => {

    const options = {
        method:'PUT',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(newdata)
      }

    try{
        const res = await fetch(`http://localhost:8000/profile/${id}`, options)
        const data = await res.json();
        if(data) dispatch(updateUserSuccess(data));

    }catch(err){
        console.log(err)
    }
}

export const createUser = (data) => async (dispatch) => {
    dispatch(reqUser());
    const options = {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }
    try{
        const res = await fetch('http://localhost:8000/profile', options)
        const result = await res.json();
        if(data) dispatch(createUserSuccess(result))

    }catch(err){
        console.log(err)
    } 

}

export const deleteUser = (id) => async (dispatch) => {
    dispatch(reqUser());
      const options = {
        method:'DELETE',
        headers:{
            "Content-Type":"appplication/json"
        }
      }

      try{
        const res = await fetch(`http://localhost:8000/profile/${id}`, options)
        await res.json();
        dispatch(deleteUserSuccess(id))
        

      }catch(err){
          console.log(err)
      }
    
}