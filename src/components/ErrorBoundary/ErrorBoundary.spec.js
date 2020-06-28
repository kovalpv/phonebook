import ErrorBoundary from './ErrorBoundary';

const Child = () => {
  throw 'error';
};

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});

it('catches error and renders message', () => {
  const wrapper = mount(
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>,
  );
  expect(wrapper.text()).toContain('Something went wrong.error');
  expect(console.error).toHaveBeenCalledTimes(2);
});

it("should return component then it's ok", () => {
  const component = mount(
    <ErrorBoundary>
      <div>Should render this text</div>
    </ErrorBoundary>,
  );
  expect(component.text()).toEqual('Should render this text');
});
