import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App test cases', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(<App />)
  });

  afterEach(() => {
    jest.clearAllMocks();
    component.unmount();
  });

  it('should render input box', () => {
    const inputBoxComponent = component.find('[data-testid="input-box"]');
    expect(inputBoxComponent.exists()).toBe(true);
  });

  it('should render input element inside input box', () => {
    const inputBoxComponent = component.find('[data-testid="input-box"]');
    expect(inputBoxComponent.exists()).toBe(true);
    const inputTag = inputBoxComponent.find('[data-testid="input-element"]');

    expect(inputTag.exists()).toEqual(true);
  });

  it('should be able to input values in input element and trigger useState', () => {
    let inputTag = component.find('[data-testid="input-element"]');
    expect(inputTag.exists()).toEqual(true);

    const spyUsestate = jest.spyOn(React, 'useState');

    act(() => {
      inputTag.prop('onChange')!({ target: { value: '1,2' }, persist: jest.fn() } as unknown as React.ChangeEvent<HTMLInputElement>,);
    });
    component.update();
    inputTag = component.find('[data-testid="input-element"]');

    expect(spyUsestate).toBeCalled();
    expect(inputTag.props().value).toEqual('1,2')
  });
});
