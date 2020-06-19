import React from "react";
import Switch from "react-switch";
 
interface Props {}

interface State {
    checked: any
}

export default class MinerSwitch extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked: any) {
    this.setState({checked});
  }
 
  render() {
    return (
        <div className="padding-auto">
        <Switch onChange={this.handleChange} checked={this.state.checked} offColor={"#ff0000"} uncheckedIcon={false} checkedIcon={false} />
        </div>
    );
  }
}