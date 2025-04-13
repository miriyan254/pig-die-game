import Info from './Info';
import DieImg from './DieImg';
import Button from './Button';

function GameBoard({playerName}){
    return (
        <section>
            <Info info={playerName} />
            <DieImg />
            <Info info={0} />
            <Button>Roll</Button>
            <Info info={0} />
            <Button>Save</Button>
        </section>
    );
}

export default GameBoard;
