import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7130Saga from '../features/EmailAuth7130/redux/sagas';
import CalendarView7129Saga from '../features/CalendarView7129/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7130Saga,
CalendarView7129Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}