import App from './App';

describe('App', () => {
  it('should contains css class `phonebook-app`', () => {
    const app = mount(<App />);
    expect(app.find('div').hasClass('phonebook-app')).toBeTruthy();
  });
});
