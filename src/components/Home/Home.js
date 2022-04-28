import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className='flex flex-col md:flex-row justify-around items-center'>
                <div id="default-carousel" class="relative banner md:pt-20 pt-0 md:pb-20 md:ml-8" data-carousel="static">

                    <div class="md:max-w-2xl w-screen overflow-hidden relative h-96">
                        <div class="carousel-img duration-700 ease-in-out" data-carousel-item>
                            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                            <img src={img1} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        <div class="carousel-img duration-700 ease-in-out" data-carousel-item>
                            <img src={img2} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                        <div class="carousel-img duration-700 ease-in-out" data-carousel-item>
                            <img src={img3} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                        </div>
                    </div>

                    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>

                    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="hidden">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="hidden">Next</span>
                        </span>
                    </button>
                </div>
                <div className='banner-text text-sm md:text-base mx-8 pt-7 md:pt-10'>
                    <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, dolorum culpa id magni earum necessitatibus modi, provident alias inventore nesciunt, quod ut tempora molestias perferendis sit nam impedit ea voluptate vero totam odit ipsa. Tempore assumenda autem est voluptate temporibus, dolor quasi. Earum, sequi delectus aliquid rem recusandae, pariatur eius porro, odit itaque tempore labore eum distinctio? Quis, culpa quidem! Ratione magni voluptates, accusamus molestias dicta sunt soluta aspernatur aliquam sapiente ex quae exercitationem ab pariatur optio maxime nisi incidunt earum nam, quidem accusantium praesentium sint minima? Iure consequatur, architecto eius eaque maxime sint earum alias, eos odit adipisci minus!</p>
                    <button className='border-amber-700 hover:border-yellow-600 border-l-8 border-r-0 px-2 py-2 bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-400 hover:text-slate-300 rounded mt-2'>About us</button>
                </div>
            </section>

            <section className='flex flex-col justify-center items-center md:my-10'>
                <div className='md:shadow-lg md:flex md:flex-row md:justify-around md:items-center py-4 md:px-10 bg-transparent grid grid-cols-2 gap-4'>
                    <div className='flex flex-col items-center justify-center md:my-2 md:py-4 md:pt-2 md:flex-row  transition ease-in-out delay-150 hover:-translate-x-2 duration-300'>
                        <span className='md:text-5xl text-3xl icon px-3'><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></span>
                        <div>
                            <p className='md:text-xl text-lg text-gray-700 font-semibold'>Graduation</p>
                            <p className='text-slate-500 text-xs md:text-sm'>Getting degree</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center md:my-2 md:py-4 md:pt-2 md:flex-row  transition ease-in-out delay-150 hover:-translate-x-2 duration-300'>
                        <span className='md:border-slate-300 md:border-l-2 md:text-5xl text-3xl icon px-3'><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></span>
                        <div>
                            <p className='md:text-xl text-lg text-gray-700 font-semibold'>Graduation</p>
                            <p className='text-slate-500 text-xs md:text-sm'>Getting degree</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center md:my-2 md:py-4 md:pt-2 md:flex-row  transition ease-in-out delay-150 hover:-translate-x-2 duration-300'>
                        <span className='md:border-slate-300 md:border-l-2 md:text-5xl text-3xl icon px-3'><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></span>
                        <div>
                            <p className='md:text-xl text-lg text-gray-700 font-semibold'>Graduation</p>
                            <p className='text-slate-500 text-xs md:text-sm'>Getting degree</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center md:my-2 md:py-4 md:pt-2 md:flex-row  transition ease-in-out delay-150 hover:-translate-x-2 duration-300'>
                        <span className='md:border-slate-300 md:border-l-2 md:text-5xl text-3xl icon px-3'><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></span>
                        <div>
                            <p className='md:text-xl text-lg text-gray-700 font-semibold'>Graduation</p>
                            <p className='text-slate-500 text-xs md:text-sm'>Getting degree</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;