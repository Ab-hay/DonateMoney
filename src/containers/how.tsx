import * as React from 'react';
import HowInnerDiv from '../components/howDiv';

interface Props {
  params: any;
}
const what = "Flex how rich you are by burning your money. We keep track of the top burners and showcase whatever message they desire. You send Ethereum to the smart contract (audit the code here), we keep track of who sent it, store a custom message, and showcase it to the entire world.";
const etherum_secured = "Ethereum smart contracts store code and execute functions when certain events are triggered. It can’t be changed or manipulated once deployed. A smart contract will hold money sent to it and keep track of who sent it. At that point, nobody has access to those funds—thereby burning the money for good.";
const flex = "Maybe you want to do the ultimate flex. Maybe you want to plug your Instagram. Maybe you’re a company and want to advertise your product. Whatever the reason—you can burn money, tell your friends, and brag about what you’ve done."
const who_are_we = "We’re two guys who love to tinker around and create things. We were walking back from the gym when tiger said, “what if we had something where we can burn money for people?” From there, we figured this was a perfect project to use Ethereum and practice developing on it. We don’t really get much out of this—the only thing is that we’re taking 1% each as fees to cover development and server costs.";

export default class How extends React.Component<Props> {
  public render() {
    return (
      <div className="background master-div">
      <div className="container master-div-how" id="what"><HowInnerDiv color ="#BD5050" align="right" heading="WHAT" payload={what} ></HowInnerDiv></div>
      <div className="container master-div-how" id="etherum-secured"><HowInnerDiv color ="rgba(91, 255, 127, 0.87)" align="left" heading="ETHEREUM-SECURED" payload={etherum_secured} ></HowInnerDiv></div>
      <div className="container master-div-how" id="flex"><HowInnerDiv color ="#FFF731" align="right" heading="FLEX" payload={flex} ></HowInnerDiv></div>
      <div className="container master-div-how" id="who-are-we" ><HowInnerDiv color ="#ff9900" align="left" heading="WHO ARE WE?" payload={who_are_we} ></HowInnerDiv></div>
      </div>
    );
  }
}