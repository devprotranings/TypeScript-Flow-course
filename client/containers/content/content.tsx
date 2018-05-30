import * as React from 'react';

export class Content extends React.Component {
  public render(): JSX.Element {
    return <div className='container-fluid'>
      <div className='card'>
        <img className='card-img-top'/>
        <div className='card-body'>
          <h4 className='card-title'></h4>
          <p className='card-text'></p>
        </div>
      </div>
    </div>;
  }
}
