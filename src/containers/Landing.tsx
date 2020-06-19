import * as React from 'react';
import BurnMoney from '../components/BurnMoney'
import Register from '../components/Register'

import burnLogo from '../images/burnfinal.gif';
import burnLogoAngel from '../images/happyBurn.gif';
import { reqJSONExternal } from './../utils/fetcher';
import { BURN_MONEY_SMART_CONTRACT, CONTRACT_ABI } from '../constants/constants'
import Grid from '@material-ui/core/Grid';
import { AwesomeButton } from "react-awesome-button";

const ReactNotifications = require('react-notifications');

declare let window: any; // Merely added to avoid typescript error

export default class Landing extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      metamaskEnabled: null,
      ethusd: 0,
      pastRecords: null,
    }
  }

  public componentDidMount() {
    if (typeof window.ethereum !== 'undefined'
    || (typeof window.web3 !== 'undefined')) {
      // web3 browser enabled
      this.setState({ metamaskEnabled: true });
    } else {
      // web3 browser not enabled
      this.setState({ metamaskEnabled: false });
    }
  }

  getPastData = async () => {
    var Web3 = require('web3');
    var web3 = new Web3(Web3.givenProvider);
    // web3.eth.contract(abi).at(contract_address) is the  magic line to get the contract object.
    const contract = await new web3.eth.Contract(CONTRACT_ABI, BURN_MONEY_SMART_CONTRACT);
    console.log(contract);
    // const pastData = await reqJSONExternal("https://api.etherscan.io/api?module=account&action=txlist&address="+
    // BURN_MONEY_SMART_CONTRACT+"&startblock=0&endblock=99999999&page=1&sort=asc&apikey=" + ETHER_SCAN_API_TOKEN);
  
       }

  public componentDidUpdate(){
    // trigered after every second
  }

  renderNotification = () => {
    switch (this.state.metamaskEnabled) {
      case null:
        return
      case true:
        return
      case false:
        return ReactNotifications.NotificationManager.info(
          'Click here to install Metamask and burn money',
          'Metamask not detected',
          20000,
          () => {
            window.open('https://metamask.io/', "_blank")
          }
        );
    }
  }

  public render() {
    return (
      <div className="master-div">
        <ReactNotifications.NotificationContainer/>
          <Grid container 
                spacing={0}
                direction="row"
                alignContent="center" 
                justify="center" 
                alignItems="center">
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="landing-h2">DONATE</div>
              <div className="landing-h2">MONEY</div>
              <div className="landing-h2">
                <BurnMoney metaMaskState={this.state.metamaskEnabled}/>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <img className="landing-pic" src={burnLogo} alt=""/>
            </Grid>
          </Grid>
            <Grid container 
            spacing={0}
            direction="row"
            alignContent="center" 
            justify="center" 
            alignItems="center">
          <div className="landing-subtitle">
            Register your charitable organization with us and start receiving donations
          </div>
        </Grid>
        <Grid container direction="row" alignItems="center" alignContent="center" justify="center" >
          <Grid item spacing={0} >
            <img className="landing-pic" src={burnLogoAngel} alt=""/>
          </Grid>
          <Grid item>
              <Register></Register>
          </Grid>
        </Grid>
      </div>
    );
  }
}
