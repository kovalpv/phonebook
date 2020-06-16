export default class TelecommunicationsOperator {
  constructor(props) {
    this.code = props.code;
    this.name = props.name;
    Object.freeze(this);
  }
}
