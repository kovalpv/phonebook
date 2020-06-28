import BusyIndicator from './BusyIndicator';
import Overlay from '../Overlay';

describe('BusyIndicator', () => {
  it('should return null when active is false', () => {
    const busyIndicator = mount(<BusyIndicator />);
    expect(busyIndicator.isEmptyRender()).toBeTruthy();
  });

  it('should return overlay with spinner when active is true', () => {
    const wrapper = mount(<BusyIndicator active />);
    expect(wrapper.children().first().type()).toBe(Overlay);
  });
});
