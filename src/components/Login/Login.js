import React from 'react';
import { google2, iiucLogo } from './../../index';

const Login = () => {
    return (
        <div className='bg-white'>
            <section>
                <div className="px-6 h-full text-gray-800">

                    <div className="flex flex-col justify-center items-center h-screen -mt-20">
                        <form>
                            <div className="flex justify-start items-center">
                                <img className='w-9 mb-2.5' src={iiucLogo} alt="" />
                                <h2 className='text-3xl md:text-4xl text-blue-900 font-semibold mb-5 ml-2'>Student Login</h2>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control block w-72 md:w-96 px-6 py-1.5 md:text-base text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Email address" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control block w-72 md:w-96 px-6 py-1.5 md:text-base text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Password" />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" />
                                    <label className="form-check-label inline-block text-gray-800 text-sm md:text-base" for="exampleCheck2">Remember me</label>
                                </div>
                                <a href="#!" className="text-gray-800 text-sm md:text-base">Forgot password?</a>
                            </div>

                            <div className="text-center lg:text-left">
                                <button type="button" className="inline-block px-7 py-1.5 w-72 md:w-96 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button>
                            </div>

                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
                                <p className="text-center text-sm md:text-base font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className="flex flex-row items-center">
                                <p className="md:text-lg text-base mb-0 mr-4">Sign in with</p>
                                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-red-200 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">
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