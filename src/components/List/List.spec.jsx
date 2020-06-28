import List from './List';
import ListItem from '../ListItem/ListItem';

describe('List', () => {
  it('should contains css class `list-group`', () => {
    const list = mount(
      <List>
        <span />
      </List>,
    );

    expect(list.find('ul').hasClass('list-group')).toBeTruthy();
  });

  it('should contains css custom class `custom-list-group`', () => {
    const list = mount(
      <List className="custom-list-group">
        <span />
      </List>,
    );
    expect(list.find('ul').hasClass('custom-list-group')).toBeTruthy();
  });

  it('should contains 5 children `ListItem`', () => {
    const list = mount(
      <List className="custom-list-group">
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>4</ListItem>
        <ListItem>5</ListItem>
      </List>,
    );
    expect(list.find('ul').children()).toHaveLength(5);
  });
});
