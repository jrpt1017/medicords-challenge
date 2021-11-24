import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OutputBox from '../components/OutputBox';

Enzyme.configure({ adapter: new Adapter() });

describe('Output test cases', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(<OutputBox output="2,4,6" />)
  });

  afterEach(() => {
    jest.clearAllMocks();
    component.unmount();
  });

  it('should render output box', () => {
    const outputBoxComponent = component.find('[data-testid="output-box"]');
    expect(outputBoxComponent.exists()).toBe(true);
  });

  it('should render input element inside output box and render its value', () => {
    const outputBoxComponent = component.find('[data-testid="output-box"]');
    expect(outputBoxComponent.exists()).toBe(true);
    const inputTag = outputBoxComponent.find('[data-testid="output-element"]');

    expect(inputTag.exists()).toEqual(true);

    expect(inputTag.props().value).toBe('2,4,6');
  });
});
