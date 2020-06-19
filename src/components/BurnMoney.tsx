import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AwesomeButton } from "react-awesome-button";
import Modal from 'react-responsive-modal'
import NumberFormat from 'react-number-format';
import { postJSON } from '../utils/fetcher';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-blue.css';
import moneyface from '../images/moneyface.png'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { RingLoader} from "react-spinners";


declare let window: any; // Merely added to avoid typescript error

const BurnMoneySlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
      width: 300 + 24 * 2,
    },
    thumb: {
      borderRadius:'50%',
      height: 30,
      width: 30,
      marginTop: -12,
      marginLeft: -12,
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 80px)',
      top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

function burnMoneyThumbComponent(props: any) {
  // TODO: when its over 100, make the image different to flaming one
  return (
    <span {...props}>
      <img
        src={moneyface}
        alt="slider thumb icon"
        height='30px'
        width='30px'
      />
    </span>
  )
}

const override = "background-color:rgba(255,0,0,0.0);";

const marks = [
  {
    value: 0,
    label: '0 ETH'
  },
  {
    value: 100,
    label: '100 ETH'
  }
]

interface Props{
  metaMaskState: boolean;
}


// =================================== //
// ********* COMPONENT START ********* //
class BurnMoney extends React.Component<Props, any> {

  constructor(props: any) {
    super(props);

    const burnDefaultAmount = 50.0
    this.state = {
        open: false,
        nameValue: "",
        messageValue: "",
        ethValue: burnDefaultAmount,
        spinner: false,
    };
    this.burnMoneyClickHandler = this.burnMoneyClickHandler.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sendBurnRequest = this.sendBurnRequest.bind(this)
    // this.handleSliderOnChange = this.handleSliderOnChange.bind(this)
  }

  // Modal open/close handling
  burnMoneyClickHandler = () => {
      if(this.props.metaMaskState == false){
        NotificationManager.info(
          'Click here to install Metamask and burn money',
          'Metamask not detected',
          20000,
          () => {
            window.open('https://metamask.io/', "_blank")
          }
        );
      }
      else{
      this.setState({ open: true });
      }
  }

  onCloseModal = () => {
      this.setState({ open: false });
  }
  // **** END Modal open/close handling **** // 


  // Number changing is a little different so we use a different handler
  handleNumberChange = (values: any) => {
    this.setState({
      ...this.state,
      ethValue: values.floatValue
    })
  }

  handleSliderOnChange = (event: object, value: any) => {
    this.setState({
      ...this.state,
      ethValue: value
    })
  }

  // Handles text field changes
  handleChange = (event: any) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  // TODO testing
  sendBurnRequest = async () => {
    if (typeof window.ethereum !== 'undefined'
      || (typeof window.web3 !== 'undefined')) {

      // Web3 browser user detected. You can now use the provider.
      const provider = window['ethereum'] || window.web3.currentProvider
      let ethereum = window.ethereum;

      try {
        // request account access if needed
        const accounts = await ethereum.enable();

        let params = this.buildBurnRequestParams(accounts[0])

        ethereum.sendAsync({
          method: 'eth_sendTransaction',
          params: [params],
          from: accounts[0]
        }, async (err: any, result: any) => {
          if (result.error != null) {
            // TODO: tell user something went wrong

          } else if (result.result != null) {
            this.setState({
              spinner: true,
            });
            const burnerRecordObj = {
              name: this.state.nameValue,
              address: accounts[0],
              advertisement: this.state.messageValue,
              txn_hash: result.result
            }
            const response = await postJSON('/newburn', JSON.stringify(burnerRecordObj));
            
            if(response.statusCode === "ok"){
              this.setState({
                open: false,
                spinner: false,
              });
              NotificationManager.success(<p><br></br> Keep Burning <span> &#128184; </span> <br></br> keep Flexing <span> &#128170; </span> </p>,
               'Our systems will now verify your transaction via etherum network',
               20000
               );
            }

          } else {
            console.log("something weird happened");
          }
        });
      } catch (error) {
        // TODO user denied error. Handle it
        console.error(error)
      }
      
    }
  }

  // build sending request to eth network based on state
  buildBurnRequestParams = (fromAcc: any) => {
    console.log(this.state.ethValue)
    const weiAmount = window.web3.toWei(this.state.ethValue, 'ether');
    const hexAmount = window.web3.toHex(weiAmount);

    // TODO: make sure the contract address is correct for main-net

    return {
      nonce: '0x00', // ignored by MetaMask
      to: '0xc58C9BA78193307676B6068Ae666981438bFdea2', // Contract address (TODO for mainnet)
      from: fromAcc, // must match user's active address.
      value: hexAmount, // Only required to send ether to the recipient from the initiating external account.
      chainId: 3 // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    }
  }

  render() {
    const { open } = this.state;
    const margin = {
      margin: 20
    }
    return (
        <div >
          {/* TODO make modal padding greater */}
          <div>
          <AwesomeButton 
            className="landing-buttonOne" 
            onPress={this.burnMoneyClickHandler}>
              NOW
            </AwesomeButton>
          </div>
            {(!this.state.spinner) 
            && <Modal open={open} onClose={this.onCloseModal} center>
             <Grid style={{padding:"1em"}} container direction="column">
              <Grid item xs>
                <Typography gutterBottom>Name</Typography>
                <TextField
                  id="standard-name"
                  name="nameValue"
                  value={this.state.nameValue}
                  onChange={this.handleChange}
                  helperText="Name to display on Leaderboard"
                />
              </Grid>
              
              <Grid item xs>
                <div style={margin}/>
                <Typography gutterBottom>Message</Typography>
                <TextField
                  id="standard-name"
                  name="messageValue"
                  value={this.state.messageValue}
                  onChange={this.handleChange}
                  helperText="Message to display on Leaderboard"
                />
              </Grid>

              <Grid item xs>
                <div style={margin}/>
                <Grid container spacing={2}>
                  <Grid item xs container direction="column" spacing={2}>
                    <div style={{ marginTop: 10 }}/>
                    <Grid item xs={12} sm={6}>
                      <Typography gutterBottom>ETH Amount</Typography>
                    </Grid>
                  </Grid>
                  <Grid item sm={6}>
                    <NumberFormat 
                      customInput={TextField} 
                      thousandSeparator={true} 
                      suffix={' ETH'}
                      value={this.state.ethValue}
                      onValueChange={this.handleNumberChange}
                      decimalSeparator={'.'}
                      decimalScale={3}
                      fixedDecimalScale={true}
                      allowNegative={false}
                      helperText="Or Enter Custom Amount"
                     />
                   </Grid>
                 </Grid>
               </Grid>

              <div style={margin}/>
              <BurnMoneySlider 
                aria-label="burn slider" 
                onChange={this.handleSliderOnChange}
                ThumbComponent={burnMoneyThumbComponent} 
                defaultValue={this.state.ethValue} 
                value={this.state.ethValue}
                marks={marks}
              />
              {/* TODO: show dollar equivalent for eth amount */}

              <AwesomeButton onPress={this.sendBurnRequest}>BURN</AwesomeButton>

            </Grid>
          </Modal>}
          <Modal open= {this.state.spinner} center onClose={()=>{}} showCloseIcon ={false} focusTrapped={false} styles={{ modal: { background: "rgba(255,0,0,0.0)", "box-shadow": "none"} }}>
            <Grid container direction="column">
            <RingLoader
            color={"#cc6633"}
            loading={this.state.spinner}
            size={500}
            />
            </Grid>
          </Modal>
        </div>
    );
  }
}

export default BurnMoney 
