import React from 'react';

  function AmazingNumberButton(props) {
    const createDigits = () => {
        const digits = [];
        for (let i=1; i<10; i++) {
            digits.push(
                <button key={i} onClick={() => props.updateCalcParent(i.toString())}>{i}</button>
            )
        }
        return digits;
    }
  return (
        <div className='AmazingNumberButton'>
            {createDigits()}
            <button onClick={() => props.updateCalcParent('0')}>0</button>
            <button onClick={() => props.updateCalcParent('.')}>.</button>
            <button onClick={() => props.calculateParent()}>=</button>
            <button onClick={() => props.insertResultsParent()}>Save</button>
        </div>
  );
}
export default AmazingNumberButton;