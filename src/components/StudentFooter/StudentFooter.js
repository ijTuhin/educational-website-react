import React from 'react';
import logo from '../../images/iiuc-logo.png';

const StudentFooter = () => {
    return (
        <div className='text-white flex flex-col justify-between items-center bg-slate-900 w-full pt-8'>
            <img className='w-12' src={logo} alt="" />
            <h4 className='py-4 text-base text-center text-slate-300 font-semibold'>International Islamic University Chittagong | Kumira, Chattogram-4318 | +8802334461900-7</h4>
            <h4 className='pb-4 text-xs text-center'>Copyright © 2022 All rights reserved IIUC and <span>Developed by</span> </h4>
        </div>
    );
};

export default StudentFooter;