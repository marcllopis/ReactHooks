import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { MainContext } from "../../context-provider/context-provider";
import { Actions } from './actions'
import { API_URL } from './utils'


export function Sentence() {
  const { state, dispatch } = useContext(MainContext);

  const getChuckFacts = async () => {
    const { data } = await axios(API_URL);
    dispatch({type: Actions.FACT, sentences: data.value.joke });
  }

  useEffect(() => getChuckFacts(), []);

  return (
    <div className='component'>
      <div className='sentence'>{state.sentences}</div>
      <br />
      <button onClick={() => getChuckFacts()}>
        New Random Sentence
      </button>
      <button onClick={() => dispatch({type: Actions.RESET_FACT})}>
        No More Sentences
      </button>
      <br />
    </div>
  );
};
