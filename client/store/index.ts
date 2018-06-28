import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { rootReducer } from './reducers';
import { SearchTerm, searchTermReducer } from './reducers/search-term.reducer';
import { IUser, usersReducer } from './reducers/users.reducer';

 declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export interface IStore {
  searchTerm: SearchTerm;
  users: IUser[];
}

const rootEpicsMiddlaware = createEpicMiddleware(rootEpic);
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'Typescript Course',
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(rootEpicsMiddlaware),
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
