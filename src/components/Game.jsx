import { useState } from "react";
import styles from "./game.module.css";
import Feedback from "./Feedback";

export default function Game() {

  const wordList = ["BARK","DUST","FLEE","HALT","JOLT","KEEN","LOOM","MAZE","NEAT","PAVE","QUIZ","RANT","SEEK","TALE","VIBE","WAKE","YARN","SEAL","BOLD","CLUE"];
  const[targetWord, setTargetWord] = useState('WORD');
  console.log(targetWord);
  const [fields, setFields] = useState(Array(16).fill(''));
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [submitted, setSubmitted] = useState([false, false, false, false]);
  const [over, setOver] = useState(false);
  const [message, setMessage] = useState('');
  const [fieldColors, setFieldColors] = useState(Array(16).fill(''));
  let presentCount = 0;

  function handleSubmit(e) {
    e.preventDefault();
    const combinedValue = fields.slice((currentAttempt - 1) * 4, currentAttempt * 4).join('');
    setFields([...fields]);

    const newFieldColors = [...fieldColors];
    for (let i = 0; i < targetWord.length; i++) {
      if (combinedValue[i] === targetWord[i]) {
        newFieldColors[(currentAttempt - 1) * 4 + i] = 'green';
        presentCount++;
      } else if (targetWord.includes(combinedValue[i])) {
        newFieldColors[(currentAttempt - 1) * 4 + i] = 'yellow';
      }
    }
    setFieldColors(newFieldColors);

    console.log(`Attempt ${currentAttempt}: ${presentCount} letters correct.`);
    setSubmitted(submitted.map((value, index) => index === (currentAttempt - 1) ? true : value));
    
    if(currentAttempt >= 4){
      console.log("Game Over");
      setOver(true);
      setMessage("Game Over! Try again");
    }else if(presentCount === 4){
      console.log("Game Over");
      setSubmitted([true,true,true,true]);
      setOver(true);
      setMessage("You Won!");
      const randNum = Math.floor(Math.random()*20);
      setTargetWord(wordList[randNum]);
    }else{
      setCurrentAttempt(currentAttempt + 1);
    }
  }

  function handleRestart(e) {
    setSubmitted([false, false, false, false]);
    setCurrentAttempt(1);
    setFields(Array(16).fill(''));
    setFieldColors(Array(16).fill(''));
    setOver(false);
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.tableContainer}>
          <table>
            <tbody>
              <tr>
                {fields.slice(0, 4).map((value, index) => (
                  <td key={index}>
                    <input
                      type="text"
                      placeholder="_"
                      maxLength="1"
                      disabled={submitted[0]}
                      value={value}
                      style={{ backgroundColor: fieldColors[index] }}
                      onChange={(e) => {
                        const newFields = [...fields];
                        newFields[index] = e.target.value.toUpperCase(); // Convert to uppercase
                        setFields(newFields);
                      }}
                    />
                  </td>
                ))}
              </tr>
              
              <tr>
                {fields.slice(4, 8).map((value, index) => (
                  <td key={index + 4}>
                    <input
                      type="text"
                      placeholder="_"
                      maxLength="1"
                      disabled={submitted[1]}
                      value={value}
                      style={{ backgroundColor: fieldColors[index + 4] }}
                      onChange={(e) => {
                        const newFields = [...fields];
                        newFields[index + 4] = e.target.value.toUpperCase(); // Convert to uppercase
                        setFields(newFields);
                      }}
                    />
                  </td>
                ))}
              </tr>
              
              <tr>
                {fields.slice(8, 12).map((value, index) => (
                  <td key={index + 8}>
                    <input
                      type="text"
                      placeholder="_"
                      maxLength="1"
                      disabled={submitted[2]}
                      value={value}
                      style={{ backgroundColor: fieldColors[index + 8] }}
                      onChange={(e) => {
                        const newFields = [...fields];
                        newFields[index + 8] = e.target.value.toUpperCase(); // Convert to uppercase
                        setFields(newFields);
                      }}
                    />
                  </td>
                ))}
              </tr>
              
              <tr>
                {fields.slice(12, 16).map((value, index) => (
                  <td key={index + 12}>
                    <input
                      type="text"
                      placeholder="_"
                      maxLength="1"
                      disabled={submitted[3]}
                      value={value}
                      style={{ backgroundColor: fieldColors[index + 12] }}
                      onChange={(e) => {
                        const newFields = [...fields];
                        newFields[index + 12] = e.target.value.toUpperCase(); // Convert to uppercase
                        setFields(newFields);
                      }}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.buttonsContainer}>
          <button type="submit" className={styles.submitButton} disabled={submitted[3]}>
            Submit
          </button>
          
          <button
            type="button"
            className={styles.resetButton}
            disabled={!submitted[3]}
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </form>

      <Feedback over={over} message={message}/>

    </div>
  );
}
