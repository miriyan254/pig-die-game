import {useState} from 'react';
import Info from './Info';
import DieImg from './DieImg';
import Button from './Button';

function GameBoard({playerName}){
    const [die, setDie] = useState(1);
    const [unsavedScore, setUnsavedScore] = useState(0);
    const [savedScore, setSavedScore] = useState(0);

    function roll(){
        const randomInt = Math.trunc(Math.random() * 6) + 1;
        setDie(randomInt);
        if(randomInt !== 1){
            setUnsavedScore(prev => prev += randomInt);
        }else{
            setUnsavedScore(0); 
        }
    }

    function save(){
        setSavedScore(prev => prev += unsavedScore);
        setUnsavedScore(0);
    }
	 
    return (
        <section>
            <Info info={playerName} />
            <DieImg diePoints={die}/>
            <Info info={unsavedScore} />
            <Button handleClick={roll}>Roll</Button>
            <Info info={savedScore} />
            <Button handleClick={save}>Save</Button>
        </section>
    );
}

export default GameBoard;
