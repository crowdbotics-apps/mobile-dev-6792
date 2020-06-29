import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7130Reducer from '../features/EmailAuth7130/redux/reducers';
import CalendarView7129Reducer from '../features/CalendarView7129/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7130: EmailAuth7130Reducer,
CalendarView7129: CalendarView7129Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});