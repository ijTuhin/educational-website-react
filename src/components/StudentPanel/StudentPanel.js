import React from 'react';
import StudentFooter from '../StudentFooter/StudentFooter';
import StudentHeader from '../StudentHeader/StudentHeader';

const StudentPanel = () => {
    return (
        <div>
            <StudentHeader></StudentHeader>
            <div className='p-48 bg-white'>
                <h4>Student Panel</h4>
            </div>
            <StudentFooter></StudentFooter>
        </div>
    );
};

export default StudentPanel;