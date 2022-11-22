import React from 'react';

const InputForm = (props) => {
  return (
    <div>
      <span className='icon'>{props.icon}</span>
      <label className='label'>{props.label}</label><br />
      <input
        className={props.className}
        id={props.id}
        status={props.status}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        required={props.required}
        confirmpassword={props.confirmpassword}
        autoFocus={props.autoFocus}

        />
    </div>
  )
}

export default InputForm
