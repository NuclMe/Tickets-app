import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
