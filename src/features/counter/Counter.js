import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount , selectCount} from "./counterSlice"

function Counter () 
{
    const dispatch = useDispatch()
    const count = useSelector(selectCount)

    function decrementVal () {
        if(count < 1) {
            count = 0
        }
        else
        {
            dispatch(decrement())
        }
    }

    return (
        <>
        <button onClick={() => dispatch(increment())}> + </button>
            Count : {count}
        <button onClick={() => decrementVal()}> - </button>    
        </>
    )
}

export default Counter