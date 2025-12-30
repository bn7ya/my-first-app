import './Counter.css'
import Circle from './Circle';

function Counter({ number }){
    const circles = number > 0 ? Math.floor(Math.log10(number)) : 1;


    return(
        <div className="container">
            {Array.from({length: circles}, (_,index) => (
                <Circle key={index} count={number} index={index}></Circle>
            ))}
        </div>
    )
}

export default Counter;