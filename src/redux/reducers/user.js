import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    loading: false,
    users: [],
}


const userSlice = createSlice({
    name: 'USER',
    initialState: INITIAL_STATE,
    
    reducers:{
        reqUser: (state, action) => {
            state.loading = true;
        },
        listUserSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        deleteUserSuccess:(state, action) => {
            state.loading = false;
            state.users = state.users.filter( user => user.id !== action.payload)
        },
        createUserSuccess:(state, action) => {
            state.users = [...state.users, action.payload];
            state.loading=false;
        },
        updateUserSuccess:(state, action) =>{
            state.loading = false;
            state.users = state.users.map(user => {
                if(user.id === action.payload.id){
                    user = {...user,  ...action.payload}
                }
                return user;
            })
        }
    }
})

export const {reqUser, listUserSuccess, deleteUserSuccess,createUserSuccess, updateUserSuccess} = userSlice.actions;

export default userSlice.reducer;