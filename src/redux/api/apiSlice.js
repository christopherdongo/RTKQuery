import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURL = 'http://localhost:8000';


const headersApi=(method, data)=>{
     let options='';
    if(method ==='POST' || method ==='PUT' && data){
     options =  {
            method,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
          }
    }else if(method ==='DELETE' || method ==='GET'){
        options =  {
            method,
            headers:{
                "Content-Type":"application/json"
            },
          }
    }
    return options;
}


const createRequest = (url, method, data)=>({url, method, data})

export const profileGetApi = createApi({
    reducerPath:'profileApi',
    baseQuery:fetchBaseQuery({baseUrl:baseURL}),
    endpoints: (builder) => ({
        getPost: builder.query({query: () => createRequest('/profile','GET','')}),
    })
})


export const { useGetProfileGetApi } = profileApi;