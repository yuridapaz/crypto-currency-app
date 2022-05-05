import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ReturnBtn.css';

const ReturnBtn = () => {
  return (
    <Link to='/'>
      <div className='return-div'>
        <FaArrowLeft className='arrow-icon' />
        <p>Back</p>
      </div>
    </Link>
  );
};

export default ReturnBtn;
