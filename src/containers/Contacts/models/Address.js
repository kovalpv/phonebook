export default class Address {
  constructor(props) {
    this.street = props.street;
    this.building = props.building;
    Object.freeze(this);
  }
}
