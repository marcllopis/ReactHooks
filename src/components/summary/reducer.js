import { initialState } from '../../store/reducer';
import { Actions } from './actions';


export const SummaryHandler = {
  [Actions.RESET_STATE]: () => initialState,
};
