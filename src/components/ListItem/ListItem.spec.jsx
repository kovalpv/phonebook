import ListItem from './ListItem';

const LiElement = () => <span>text</span>;

describe('ListItem', () => {
  it('should contain className `list-group-item` simple children', () => {
    const listItem = mount(
      <ListItem>
        <LiElement />
      </ListItem>,
    );
    expect(listItem.find('li').hasClass('list-group-item')).toBeTruthy();
  });

  it('should contain className `active` when selected is true', () => {
    const listItem = mount(
      <ListItem selected>
        <LiElement />
      </ListItem>,
    );
    expect(listItem.find('li').hasClass('active')).toBeTruthy();
  });

  it('should contain custom className `custom-class-name` when added className', () => {
    const listItem = mount(
      <ListItem className="custom-class-name">
        <LiElement />
      </ListItem>,
    );
    expect(listItem.find('li').hasClass('custom-class-name')).toBeTruthy();
  });
});
