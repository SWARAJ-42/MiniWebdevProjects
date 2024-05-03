"use client";
import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../../../../utils/firebase';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login(){
    const [user, loading] = useAuthState(auth);
    const googleProvider = new GoogleAuthProvider()
    const route = useRouter();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
            route.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(user){
            route.push('/dashboard');
        }
        else {
            console.log('/auth/login')
        }
    }), [user];
    return(
        <div className="shadow-[0_5px_80px_-15px_rgba(255,255,255,.5)] mt-32 p-10 text-gray-400 rounded-[35px]">  
            <h2 className="text-3xl font-medium m">Join Today</h2>
            <div className="py-4">
                <h3 className="py-4">Sign in with one of the providers</h3>
            </div>
            <div className="flex flex-col gap-4">
                <button onClick={GoogleLogin} className="text-xl bg-gray-700 w-full font-medium rounded-lg flex align-middle gap-2 p-4"><FcGoogle className="text-3xl"/> Sign in with Google</button>
                <button className="text-xl bg-gray-700 w-full font-medium rounded-lg flex align-middle gap-2 p-4"><AiFillFacebook className="text-3xl text-blue-400"/> Sign in with facebook</button>
            </div>
        </div>
    );
}