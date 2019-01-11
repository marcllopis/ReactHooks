import { CountHandler } from '../components/count/reducer';
import { SentenceHandler } from '../components/sentence/reducer';
import { SummaryHandler } from '../components/summary/reducer';


export const initialState = {
  count: 0,
  sentences: 'No Chuck facts... yet',
};

const mainHandler = {
  ...CountHandler,
  ...SentenceHandler,
  ...SummaryHandler,
};

export default function mainReducer(state = initialState, action) {
  const handler = mainHandler[action.type];
  return handler ? handler(state, action) : state;
};
