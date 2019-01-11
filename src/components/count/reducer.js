import { initialState } from '../../store/reducer';
import { Actions } from './actions';


export const CountHandler = {
  [Actions.RESET_COUNT]: (state) => ({...state, count: initialState.count}),
  [Actions.INCREMENT]: (state) => ({...state, count: state.count + 1}),
  [Actions.DECREMENT]: (state) => ({...state, count: state.count - 1}),
};
