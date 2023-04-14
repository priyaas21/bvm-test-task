import React from 'react';
import '../css/button.scss'

const Button = (props) => {
    const {title = 'Submit', className = 'btn btn-primary', onClickHandler = null, type='submits'} = props;
    return (
     <button type={type} className={className} onClick={onClickHandler}>
        {title}
      </button>
    )
}

export default Button;