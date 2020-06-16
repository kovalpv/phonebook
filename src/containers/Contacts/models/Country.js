export default class Country {
  constructor(props) {
    this.code = props.code;
    this.name = props.name;
    Object.freeze(this);
  }
}
