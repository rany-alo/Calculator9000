import React from "react";
import TheTitle from "./TheTitle";
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import '../App.css';
import {useState} from 'react';


function Calculator() {
    const [calc, setCalc] = useState("");
    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
      if ((ops.includes(value) && calc === '') || 
          (ops.includes(value) && ops.includes(calc.slice(-1)))) {return;}
        setCalc(calc + value);
    }
    const calculate = () => {
      // eslint-disable-next-line no-eval
      setCalc(eval(calc).toString());
    }
    const deleteLast = () => {
      if (calc === '') {return;}
      const value = calc.slice(0,-1);
      setCalc(value);
    }

    return (
      <div className='Calculator'>
        <div><TheTitle/></div>
        <div className='BeautifulScreen'>
          <BeautifulScreen calcP = {calc}/>
          {
            calc > 9000 && setCalc('It’s Over 9000 !!')
          }
        </div>
        <div>
          <GreatOperationButton updateCalcParent = {updateCalc} deleteLastParent = {deleteLast}/>
        </div>
        <div>
          <AmazingNumberButton updateCalcParent = {updateCalc} calculateParent = {calculate}/>
        </div>
     </div>
    )
}
export default Calculator;
