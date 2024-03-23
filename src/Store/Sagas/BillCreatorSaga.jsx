// sagas.js
import { put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_FORM, submitSuccess, submitFailure } from './actions';

function* submitFormSaga(action) {
    try {
        // Simulate asynchronous submission logic
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                // Resolve after 1 second (simulating success)
                resolve();
            }, 1000);
        });
        
        // Dispatch success action
        yield put(submitSuccess());
    } catch (error) {
        // Dispatch failure action with error
        yield put(submitFailure(error.message));
    }
}

export function* watchSubmitForm() {
    yield takeLatest(SUBMIT_FORM, submitFormSaga);
}
