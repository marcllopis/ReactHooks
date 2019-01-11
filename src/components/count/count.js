import React, { useContext } from 'react';
import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';


export function Count() {
  const { state, dispatch } = useContext(MainContext);
  return (
    <div className='component'>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: Actions.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: Actions.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: Actions.RESET_COUNT })}>
        Reset
      </button>
    </div>
  );
};
