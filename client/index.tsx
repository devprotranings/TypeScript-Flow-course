import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Content from './containers/content';
import Header from './containers/header';
import { store } from './store';

class App extends React.Component {
  public render(): JSX.Element {
    return <Provider store={store}>
      <div>
        <Header />
        <Content/>
      </div>
    </Provider>;
  }
}

const el = document.querySelector('#root');
if (el) {
  ReactDOM.render(<App/>, el);
}
