import { useState } from 'react';
import React from 'react';
import "./button.scss"

function Button({className,text}) {

    return (
      <div className='button'>
       <button className={className}>{text}</button>
      </div>
    )}
    
    export default Button;