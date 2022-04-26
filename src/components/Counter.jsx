import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../store/actions'

const Counter = () => {
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrement())}> - </button>
    </div>
  )
}

export default Counter