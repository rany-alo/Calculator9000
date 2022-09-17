/* eslint-disable no-eval */
import React, { useEffect } from "react";
import TheTitle from "./TheTitle";
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import '../App.css';
import {useState} from 'react';


    function Calculator() {
      const [lastResults, setLastResults] = useState([])

      useEffect(() => {
            const fetchData = async () => {
            const lastResult = await fetch('http://localhost/calculator9000/src/backend/showResults.php')
            const jsonResult =  await lastResult.json()
            setLastResults(jsonResult)
          }
          fetchData()
       }, [])

      const insertResults = async () => {
        await fetch('http://localhost/calculator9000/src/backend/insertResults.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'resultat='+calc
      })
       }



      const [calc, setCalc] = useState("");
      const [res,setRes] = useState("");
      const ops = ['/', '*', '+', '-', '.'];

      const updateCalc = value => {
        if ((ops.includes(value) && calc === '') || 
            (ops.includes(value) && ops.includes(calc.slice(-1)))) {return;}
          setCalc(calc + value);
      }
      const calculate = () => {
        setRes(eval(calc))
        setCalc(eval(calc.toString()))
      }
      const deleteLast = () => {
        if (calc === '') {return;}
        const value = calc.slice(0,-1);
        setCalc(value);
      }

      return (
        <div className='Calculator'>
          <div>
            <TheTitle/>
            {res > 9000 && <ItSOverNineThousand/>}
            </div>
          <div className='BeautifulScreen'>
            <BeautifulScreen calcP = {calc}/>
          </div>
          <div>
            <GreatOperationButton updateCalcParent = {updateCalc} deleteLastParent = {deleteLast}/>
          </div>
          <div>
            <AmazingNumberButton updateCalcParent = {updateCalc} calculateParent = {calculate} 
             insertResultsParent = {insertResults}/>
          </div>
          <div className="save">
            <div><h3>Saved Results</h3>{lastResults.map(result1 => <div key= {result1.id} ><p>{result1.results}</p></div>)}</div>
            <div><h3>Saved date</h3>{lastResults.map(result1 => <div key= {result1.id} ><p>{result1.created_at}</p></div>)}</div>
          </div>
      </div>
      )
}
export default Calculator;
