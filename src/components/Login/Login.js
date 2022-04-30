import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { google2, iiucLogo } from './../../index';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    // Sign in with email-pass
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [loginState, setLoginState] = useState(false);
    const [error, setError] = useState('');
    const [reset, setReset] = useState(false);
    const [resetError, setResetError] = useState(false);

    const handlePasswordInputBlur = event => {
        setPassword(event.target.value);
    }
    const handleEmailInputBlur = event => {
        setEmail(event.target.value);
    }
    const handleLoginBtnClick = () => {
        setLoginState(true);
    }
    const handleFormOnSubmit = event => {
        console.log(password, email);
        event.preventDefault();

        if (loginState) {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    console.error(error);
                    setError(error.message);
                    setLoginError(true);
                });
        }
        else {
            setLoginError(false);
        }
    }

    // Forget password
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setReset(true);
            })
            .catch(error => {
                console.error(error);
                setResetError(true);
                setError(error.message);
            });
    }

    // Sign In with Google auth
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                setLoginError(true);
            });
    }

    return (
        <div className='bg-white'>
            <section>
                <div className="px-6 h-full text-gray-800">

                    <div className="flex flex-col justify-center items-center h-screen -mt-20">
                        <form onSubmit={handleFormOnSubmit}>
                            <div className="flex justify-start items-center">
                                <img className='w-9 mb-2.5' src={iiucLogo} alt="" />
                                <h2 className='text-3xl md:text-4xl text-blue-900 font-semibold mb-5 ml-2'>Student Login</h2>
                            </div>



                            {loginError &&
                                <>
                                    <div class="bg-red-100 rounded py-2.5 px-6 mb-5 text-sm text-red-700 inline-flex items-center w-full" role="alert">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                                        </svg>
                                        {error}
                                    </div>
                                </>
                            }

                            {resetError &&
                                <>
                                    <div class="bg-red-100 rounded py-2.5 px-6 mb-5 text-sm text-red-700 inline-flex items-center w-full" role="alert">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                                        </svg>
                                        {error}
                                    </div>
                                </>
                            }

                            {reset &&
                                <>
                                    <div class="bg-green-100 rounded py-2.5 px-6 mb-5 text-sm text-green-700 inline-flex items-center w-full" role="alert">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                        </svg>
                                        <>A password reset email has been sent..</>
                                    </div>
                                </>
                            }


                            <div className="mb-3">
                                <input onBlur={handleEmailInputBlur} type="text" className="form-control block w-72 md:w-96 px-6 py-1.5 md:text-base text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" name='email' placeholder="Email address" />
                            </div>
                            <div className="mb-3">
                                <input onBlur={handlePasswordInputBlur} type="password" className="form-control block w-72 md:w-96 px-6 py-1.5 md:text-base text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" name='password' placeholder="Password" />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <button onClick={handleResetPassword} className="text-gray-800 text-sm md:text-base hover:text-blue-800">Forgot password?</button>
                            </div>

                            <div className="text-center lg:text-left">
                                <button onClick={handleLoginBtnClick} type="submit" className="inline-block px-7 py-1.5 w-72 md:w-96 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button>
                            </div>

                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
                                <p className="text-center text-sm md:text-base font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className="flex flex-row items-center">
                                <p className="md:text-lg text-base mb-0 mr-4">Sign in with</p>
                                <button onClick={handleGoogleSignIn} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-red-200 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">
                                    <img className='w-10' src={google2} alt="" />
                                </button>

                                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;