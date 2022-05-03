import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    loading: false,
    users: [],
    userEdit:{},
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
            });
            state.userEdit= {};
        },
        editUser:(state, action) => {
            state.loading = false;
            state.userEdit = state.users.find(user => user.id === action.payload);
            //state.userEdit = {...state.users.filter(item => item.id === action.payload)[0]};
        },
        editUserDelete:(state, action) => {
            state.loading = false;
            state.userEdit = {};
        }
    }
})

export const {reqUser, listUserSuccess, deleteUserSuccess,createUserSuccess, updateUserSuccess,editUser,editUserDelete} = userSlice.actions;

export default userSlice.reducer;