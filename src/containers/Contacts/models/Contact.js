export default class Contract {
  constructor(props) {
    this.name = props.name;
    this.surname = props.surname;
    this.phone = props.phone;
    this.address = props.address;
    Object.freeze(this);
  }
}
