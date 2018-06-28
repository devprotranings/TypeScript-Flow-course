import { configure, mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Header,IProps } from './containers/header/header';
import { App } from './index';

configure({ adapter: new Adapter() });



describe('<App />', () => {
  it('shallow <App />', () => {
    const wrapper: ShallowWrapper = shallow(<App/>);
    expect(wrapper.find('div').length)
      .toBe(1);
  });

  it('shallow <Header />', () => {
    const mockSearch = jest.fn();
    const wrapper: ReactWrapper<IProps> = mount<IProps>(<Header search={mockSearch}/>);
    wrapper.find('input')
     // .simulate('сhange');
    expect(mockSearch.mock.calls.length).toBe(1);
  });
});
