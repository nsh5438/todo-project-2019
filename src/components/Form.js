import React from 'react';
import './Form.css';

const Form = ({value, onChange, onClick, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onClick}>
        추가
      </div>
    </div>
  );
};

export default Form;