import React, { useContext } from 'react';
import { MainContext } from "../../context-provider/context-provider";
import { Actions } from './actions'


export function Summary() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div className='summary'>
      <h3>App general state</h3>
      <div className='summary-count'><b>Count: </b>{state.count}</div>
      <br />
      <div className='summary-facts'><b>Chuck Facts: </b>{state.sentences}</div>
      <br />
      <br />
      <button onClick={() => dispatch({type: Actions.RESET_STATE})}>
        Reset everything
      </button>
      <br />
    </div>
  );
};
