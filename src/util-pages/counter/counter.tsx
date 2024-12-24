'use client'
import React from 'react'

// Redux
import { useDispatch, useSelector } from '@package/redux-setup'

import {
  incrementCounter,
  decrementCounter,
} from '@package/redux-setup/src/counter/reducers/counterReducer'

// Selectors
import { selectCounterValue } from '@package/redux-setup/src/counter/selectors/counterSelectors'

const Counter: React.FC = () => {
  const dispatch = useDispatch()

  const counterValue: number = useSelector(selectCounterValue)

  const handleIncrement = () => {
    dispatch(incrementCounter()) // Increment by 1
  }

  const handleDecrement = () => {
    dispatch(decrementCounter()) // Decrement by 1
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
      }}
    >
      <h1>Counter</h1>
      <h1>Counter Value: {counterValue}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100px',
            height: '30px',
          }}
          onClick={handleIncrement}
        >
          Increase
        </button>
        <button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100px',
            height: '30px',
          }}
          onClick={handleDecrement}
        >
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
