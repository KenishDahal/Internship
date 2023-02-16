import { useState } from 'react';
import React from 'react';
import "./button.scss"

function Button({className,text}) {

    return (
      <td>
       <button className={className}>{text}</button>
      </td>
    )}
    
    export default Button;