
import actionTypes from './actionTypes';
import axios from 'axios';

export const signUp = (formData) => {
    
    console.log(formData);
    //take username and passpword
    //call our server api 
    //wait for an authenticated token 
    //call reducer to store token

    //formData => {email, password}
    
    return async dispatch=>{
        
        try{
            let response = await axios.post('http://localhost:3001/signup', formData) //formdata will put on header

            console.log(response.data.token);//token

            //dispatch action to reducer 

            dispatch({type: "AUTH_USER", data: response.data.token});

            localStorage.setItem('token', response.data.token);

        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

//logging into application

export const signin = (formData) => {
    
    return async dispatch =>{

        try{
            let response = await axios.post('http://localhost:3001/signin', formData);

            dispatch({type: "AUTH_USER", data: response.data.token});

            console.log('signin', response.data.token);
            localStorage.setItem('token', response.data.token);
        }
        catch(e){

        }
    }
}

//logout

export const signout = () => {

    localStorage.removeItem('token');  
    
    console.log('signing out');
    return {
        type: "AUTH_USER",
        data: ''
    }
}
