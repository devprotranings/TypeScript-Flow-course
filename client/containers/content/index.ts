import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IStore } from '../../store';
import { getUsersPending } from '../../store/actions/users.action';
import { Content } from './content';

const mapStateToProps = (state: IStore) => ({
  searchTerm: state.searchTerm,
  users: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsers: () => dispatch(getUsersPending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
