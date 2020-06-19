import * as React from 'react';

//align is for the heading.
interface Props {
  color: any;
  align: any;
  heading: String;
  payload: String;
}

export default class HowInnerDiv extends React.Component<Props> {
  public alignSwitch(){
    switch(this.props.align) {
      case "left":
        return { "paddingLeft": "15%"}
      case "right":
        return { "paddingRight": "15%"}
      default:
        break;
    }
  }
  public render() {
    return (
      <div>
          <div className= "common-div-header row" style={this.alignSwitch()}><p style={{color: this.props.color}}> {this.props.heading}</p></div>
          <div className="common-div-body row" style={this.alignSwitch()}> <p>{this.props.payload}</p> </div>
      </div>
    );
  }
}

