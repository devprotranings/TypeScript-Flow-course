import * as React from 'react';

export class Header extends React.Component {
  public render(): JSX.Element {
    return <div className='row header'>
      Search: <input type='text'/>
    </div>;
  }
}
