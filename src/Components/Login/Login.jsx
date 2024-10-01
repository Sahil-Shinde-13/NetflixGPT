import React, { useRef, useState } from 'react';
import Header from '../Header/Header';
import formValidation from '../../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Utils/Slices/userSlice';
import { BackgroundImg } from '../../Utils/constants';


function Login() {

    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    function handleToggle() {
        setIsSignIn(!isSignIn);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const message = formValidation(email.current.value, password.current.value);
        setErrorMsg(message);
        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                      displayName: name.current.value
                    })
                      .then(()=>{
                        const {uid, email, displayName} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName})); 
                      }).catch((error)=>{
                        setErrorMsg(error.message);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        }
    }

    return (
        <div>
        <div className="relative h-screen w-full">
            {/* Header component */}
            <Header />

            {/* Background image */}
            <img
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={BackgroundImg}
                alt="background"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

            {/* Curved border with gradient */}
            

            {/* Login form */}
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-9/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 sm:p-8 md:p-12 bg-black text-white rounded-lg bg-opacity-75 z-30">
                <h1 className="font-bold text-2xl md:text-3xl py-4">
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </h1>
                {!isSignIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 rounded"
                    />
                )}
                <input
                    ref={email}
                    type="email"
                    placeholder="Email Address"
                    className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 rounded"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-700 rounded"
                />
                <p className="text-red-500">{errorMsg}</p>
                <button
                    className="p-3 sm:p-4 my-4 sm:my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleSubmit}
                >
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </button>
                <p className="py-4 cursor-pointer" onClick={handleToggle}>
                    {isSignIn
                        ? 'New to Netflix? Sign Up Now'
                        : 'Already have an Account? Sign In'}
                </p>
            </form>
        </div>
                        
        </div>
    );
}

export default Login;
