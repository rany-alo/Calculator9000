import React from 'react';

function GreatOperationButton(props) {


    return(
    <div className='GreatOperationButton'>
        <button onClick={() => props.updateCalcParent('/')}>/</button>
        <button onClick={() => props.updateCalcParent('*')}>*</button>
        <button onClick={() => props.updateCalcParent('+')}>+</button>
        <button onClick={() => props.updateCalcParent('-')}>-</button>
        <button onClick={() => props.deleteLastParent()}>DEL</button>
    </div>
         );
}
export default GreatOperationButton;