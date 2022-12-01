import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

export const useLogin = () => {

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = (email, password) => {
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(res => { 
            //if (!res.ok) {throw Error("Something went wrong")}
            return res.json()
        })
        .then(data => {
            if (data.email){
                //console.log(data.email);
                toast.success("Login success");
                setUser(data.email);
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }
            else{
                toast.error(data);
            }
        })
        .catch(e => { 
            console.log(e.message);
            toast.error("Something went wrong");
        })
    }

    return { login }
}