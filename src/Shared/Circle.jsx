import './Circle.css'

function Circle({index, count}) {
    let size = (count - (index * 10)) / 10

    if(size > 1){
        size = 1
    }
    return (
        <div className='shape' style={{ transform: `scale(${size})` }}></div>        
    )
}

export default Circle