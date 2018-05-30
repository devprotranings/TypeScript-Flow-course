import { AxiosResponse } from 'axios';
import { ActionsObservable, ofType } from 'redux-observable';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { catchError, map } from 'rxjs/internal/operators';
import { switchMap } from 'rxjs/operators';
import { getUsers } from '../../services';
import { GET_USERS_PENDING, GetUsersError, GetUsersSuccess } from '../actions/users.action';
import { IUser } from '../reducers/users.reducer';

export const usersEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType(GET_USERS_PENDING),
    switchMap(() => {
      return fromPromise(getUsers()
        .then((res: AxiosResponse<IUser[]>) => res.data))
        .pipe(
          map((users: IUser[]) => new GetUsersSuccess(users)),
          catchError((err: any) => new GetUsersError('some err')),
        );
    }),
);
