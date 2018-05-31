import * as React from 'react';
import { SearchTerm } from '../../store/reducers/search-term.reducer';
import { IUser } from '../../store/reducers/users.reducer';
import './style.css';
export interface IProps {
  searchTerm: SearchTerm;
  users: IUser;
  getUsers: () => any;
}

export class Content extends React.Component<any> {

  public componentDidMount() {
    this.props.getUsers();
  }

  public render(): JSX.Element {

    const { users, searchTerm } = this.props;

    return (<div className='container-fluid'>
      {Array.isArray(users) ? users.filter((user: IUser) =>
        `${user.firstName} ${user.surname}`.toLowerCase()
          .includes(searchTerm))
        .map((user: IUser, index: number) => (
          <div className='card' key={index}>
            <img className='card-img-top' src={user.photo}/>
            <div className='card-body'>
              <h4 className='card-title'></h4>
              <p className='card-text'>{user.firstName} {user.surname}</p>
            </div>
          </div>
        )) : null
      }
    </div>);
  }
}
