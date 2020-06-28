import React from 'react';
import DisplayError from './DisplayError';

describe('Error component', () => {
  it('should return null when error is empty', () => {
    const error = mount(<DisplayError error="" />);
    expect(error.isEmptyRender()).toBeTruthy();
  });

  it('should return null when error undefined', () => {
    const error = mount(<DisplayError />);
    expect(error.isEmptyRender()).toBeTruthy();
  });

  it('should return null when error null', () => {
    const error = mount(<DisplayError error={null} />);
    expect(error.isEmptyRender()).toBeTruthy();
  });

  it('should render string error', () => {
    const error = mount(<DisplayError error="test error" />);
    expect(error.text()).toEqual('test error');
  });

  it('should render message when error is Error', () => {
    const error = mount(<DisplayError error={new Error('Something wrong!')} />);
    expect(error.text()).toEqual('Something wrong!');
  });

  it('should add class component_error', () => {
    const error = mount(
      <DisplayError
        error={new Error('Something wrong!')}
        className="component__error"
      />,
    );
    expect(error.find('div').hasClass('component__error')).toBeTruthy();
    expect(error.find('div').hasClass('error')).toBeTruthy();
  });
});
