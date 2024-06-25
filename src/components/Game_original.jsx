import { useState } from "react";
import styles from "./game.module.css";

export default function Game(){

  const targetWord = "word";  
  const [guess, setGuess] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [submitted1, setSubmitted1] = useState(false);
  const [submitted2, setSubmitted2] = useState(false);
  const [submitted3, setSubmitted3] = useState(false);
  const [submitted4, setSubmitted4] = useState(false);
  let i=1;
  

  // State for each input field
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');

  const [field5, setField5] = useState('');
  const [field6, setField6] = useState('');
  const [field7, setField7] = useState('');
  const [field8, setField8] = useState('');

  const [field9, setField9] = useState('');
  const [field10, setField10] = useState('');
  const [field11, setField11] = useState('');
  const [field12, setField12] = useState('');

  const [field13, setField13] = useState('');
  const [field14, setField14] = useState('');
  const [field15, setField15] = useState('');
  const [field16, setField16] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    if(currentAttempt<5){
      setCurrentAttempt(currentAttempt + 1);
      let combinedValue = eval("field"+i) + eval("field"+(i+1)) + eval("field"+(i+2)) + eval("field"+(i+3));
      setGuess(combinedValue);
      for(let i=0; i<targetWord.length; i++){
        if(guess.includes(targetWord[i])){
          console.log("Present");
        }else{
          console.log("Absent");
        }
      }
      let setname = eval("setSubmitted"+currentAttempt);
      setname(true);
      i+=4;
    }else{
      console.log("OVER");
    }
  }

  function handleRestart(e){
    setSubmitted1(false),
    setSubmitted2(false)
    setSubmitted3(false)
    setSubmitted4(false)
    setCurrentAttempt(1);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted1} onChange={(e) => setField1(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted1} onChange={(e) => setField2(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted1} onChange={(e) => setField3(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted1} onChange={(e) => setField4(e.target.value)}></input></td>
          </tr>

          <tr>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted2} onChange={(e) => setField5(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted2} onChange={(e) => setField6(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted2} onChange={(e) => setField7(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted2} onChange={(e) => setField8(e.target.value)}></input></td>
          </tr>

          <tr>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted3} onChange={(e) => setField9(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted3} onChange={(e) => setField10(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted3} onChange={(e) => setField11(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted3} onChange={(e) => setField12(e.target.value)}></input></td>
          </tr>

          <tr>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted4} onChange={(e) => setField13(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted4} onChange={(e) => setField14(e.target.value)} ></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted4} onChange={(e) => setField15(e.target.value)}></input></td>
            <td><input type="text" placeholder="_" maxLength="1" disabled={submitted4} onChange={(e) => setField16(e.target.value)}></input></td>
          </tr>

        </table>

        <button type="submit" className={styles.submitButton}>Submit</button>
        <button type="reset" className={styles.resetButton} disabled={!submitted4} onClick={handleRestart}>Restart</button>

      </form>
    </div>
  );
}