export default class Phone {
  constructor(props) {
    this.phone = props.phone;
    this.country = props.country;
    this.telecommunicationsOperator = props.telecommunicationsOperator;
    Object.freeze(this);
  }
}
