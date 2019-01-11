import { initialState } from '../../store/reducer';
import { Actions } from './actions';


export const SentenceHandler = {
  [Actions.RESET_FACT]: (state) => ({
    ...state,
    sentences: initialState.sentences,
  }),
  [Actions.FACT]: (state, payload) => ({
    ...state,
    sentences: payload.sentences,
  }),
};
