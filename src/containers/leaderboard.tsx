import React from 'react';
import { reqJSON } from './../utils/fetcher';
import LeaderPodium from '../components/leaderPodium';
import burnFace from '../images/moneyface.png';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';


const FirstPlaceButton = withStyles({
  root: {
    backgroundColor: '#B5A83A',
    width: '210px',
    height: '250px',
    borderRadius: 20,
    boxShadow: '4px 4px 5px #2F2F2F',
    "&:hover": {
        backgroundColor: "#A39628"
    },
    "&:active": {
        boxShadow: 'none',
        backgroundColor: "#8D821F",
        outline: 'none',
    },
    "&:focus": {
        outline: 'none',
    },
  }
})(Button);

const SecondPlaceButton = withStyles({
  root: {
    backgroundColor: '#888888',
    width: '180px',
    height: '190px',
    borderRadius: 20,
    boxShadow: '4px 4px 5px #2F2F2F',
    "&:hover": {
        backgroundColor: "#797979",
        outline: 'none',
    },
    "&:active": {
        boxShadow: 'none',
        backgroundColor: "#666666",
        outline: 'none',
    },
    "&:focus": {
        outline: 'none',
    },
  }
})(Button);


const ThirdPlaceButton = withStyles({
  root: {
    backgroundColor: '#7B6F44',
    width: '180px',
    height: '140px',
    borderRadius: 20,
    boxShadow: '4px 4px 5px #2F2F2F',
    "&:hover": {
        backgroundColor: "#6D6136"
    },
    "&:active": {
        boxShadow: 'none',
        backgroundColor: "#5F501E",
        outline: 'none',
    },
    "&:focus": {
        outline: 'none',
    },
  }
})(Button);


interface Props {}

interface State {
  leaderboard: any
  result: any
  showing: boolean;
}

const fakeData = [
  {
    name: 'Robert',
    advertisement: 'robechun was here',
    amount: '428.82'
  },
  {
    name: 'Abhay',
    advertisement: 'abhaydee was here',
    amount: '222.82'
  },
  {
    name: 'David',
    advertisement: 'nohdavid was here',
    amount: '123.82'
  },
  {
    name: 'ShanShan',
    advertisement: 'shanshanwu was here',
    amount: '311.82'
  },
  {
    name: 'Conner',
    advertisement: 'forche was here',
    amount: '210.82'
  },
  {
    name: 'Benny',
    advertisement: 'bnz was here',
    amount: '28.82'
  }
];

export default class LeaderBoard extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      result: null,
      leaderboard: [],
      showing: false,
    }
  }

  handleLeaderHover =()=>{
    this.setState({showing: true});
  }

  setIsShown =()=>{
    this.setState({showing: false});
  }

  public infoSideDiv() {
    return this.state.showing ? (
      <div className="col-sm-2 bd-callout bd-callout-info fixed" id="infoDiv">
      <img src="https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png" className="brother" width="200" height="200"/><br/>
      <h2 className="heading" id="name">Name</h2>
      <label className="bigfont">HomeTown </label><br/>
      <label className="bigfont">Major </label><br/>
      <label className="bigfont">Junior</label><br/>
      <label className="bigfont">Class</label><br/>
      <label className="bigfont">NickName</label>
      </div>
    ): <div></div>;
  }

  public leaderStand(){
    return (
      <div className="padding-auto" >
      <div className="first-place" onMouseEnter = {() => this.handleLeaderHover()}  onMouseLeave={() => this.setIsShown()}> 1
          </div>
      <div className="second-place" onMouseEnter = {() => this.handleLeaderHover()}  onMouseLeave={() => this.setIsShown()}> 2
          </div>
      <div className="third-place" onMouseEnter = {() => this.handleLeaderHover()}  onMouseLeave={() => this.setIsShown()}> 3
          </div>
    </div> );
  } 

  render() {
    //const { leaderboard } = this.state;
    let leaderboard = fakeData;
    leaderboard.forEach((entry: any) => entry.amount = parseFloat(entry.amount));
    let sortedLeaderboard = leaderboard.sort((a: any, b: any) => (b.amount > a.amount) ? 1 : -1);
    let topThreeBurners = sortedLeaderboard.slice(0, 3);
    let restOfLeaderboard = sortedLeaderboard.slice(3);

    
    const tableBody = restOfLeaderboard.map((burner :any, index: number) => (
      <tr>
        <td>{index + 4}</td>
        <td>{burner.name}</td>
        <td>{burner.advertisement}</td>
        <td>{burner.amount}</td>
      </tr>
    ));

      return (
        <div className="master-div">
        <Grid container
              spacing={0}
              direction="row"
              alignContent="center" 
              justify="center" 
              alignItems="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h2 className="leaderboard-h2">Top Burners</h2>
          </Grid>
            <Grid container
                  spacing={2}
                  direction="row"
                  alignContent="center" 
                  justify="center" 
                  alignItems="flex-end"
                  className="leaderboard-hero">
              <Grid item>
                <SecondPlaceButton disableRipple={true}>
                  <Grid container
                        spacing={3}
                        direction="row"
                        alignContent="center" 
                        justify="center" 
                        alignItems="center">
                    <Grid item>
                      <img className="burnface-second" src={burnFace} alt="burn face icon"/>
                    </Grid>
                    <Grid item>
                      <h4 className="topburner-name">{topThreeBurners[1].name}</h4>
                    </Grid>
                  </Grid>
                </SecondPlaceButton>
              </Grid>
              <Grid item>
                <FirstPlaceButton disableRipple={true}>
                  <Grid container
                        spacing={4}
                        direction="row"
                        alignContent="center" 
                        justify="center" 
                        alignItems="center">
                    <Grid item>
                      <img className="burnface-first" src={burnFace} alt="burn face icon"/>
                    </Grid>
                    <Grid item>
                      <h4 className="topburner-name">{topThreeBurners[0].name}</h4>
                    </Grid>
                  </Grid>
                </FirstPlaceButton>
              </Grid>
              <Grid item>
                <ThirdPlaceButton disableRipple={true}>
                  <Grid container
                        spacing={2}
                        direction="row"
                        alignContent="center" 
                        justify="center" 
                        alignItems="center">
                    <Grid item>
                      <img className="burnface-third" src={burnFace} alt="burn face icon"/>
                    </Grid>
                    <Grid item>
                      <h4 className="topburner-name">{topThreeBurners[2].name}</h4>
                    </Grid>
                  </Grid>
                </ThirdPlaceButton>
              </Grid>
            </Grid>
        </Grid>
          <div className="leaderboard-table">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Burner</th>
                  <th>Advertisement</th>
                  <th>Total Burned</th>
                </tr>
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </table>
          </div>
          
        </div>
      );
  }
}

// TODO clean up the file to remove un-necessary things
