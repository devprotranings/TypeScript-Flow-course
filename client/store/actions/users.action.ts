import { IUser } from '../reducers/users.reducer';

export const GET_USERS_PENDING = '[TS_COURSE] GET_USERS_PENDING';
export const GET_USERS_SUCCESS = '[TS_COURSE] GET_USERS_SUCCESS';
export const GET_USERS_ERROR = '[TS_COURSE] GET_USERS_ERROR';

export class GetUsersPending {
  public readonly type: string = GET_USERS_PENDING;
}

export class GetUsersSuccess {
  public readonly type: string = GET_USERS_PENDING;

  public constructor(public payload: IUser[]) {}
}

export class GetUsersError {
  public readonly type: string = GET_USERS_PENDING;

  public constructor(public payload: string) {}
}
