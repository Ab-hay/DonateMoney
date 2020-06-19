import React, { Component } from 'react';
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
import {NotificationManager} from 'react-notifications';
import { RingLoader} from "react-spinners";
import InputAdornment from '@material-ui/core/InputAdornment';
import InstagramIcon from '@material-ui/icons/Instagram';
import MuiPhoneNumber from 'material-ui-phone-number';

declare let window: any; // Merely added to avoid typescript error

interface Props{ }

export default class Register extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);

    const burnDefaultAmount = 50.0
    this.state = {
        open: false,
        nameValue: "",
        website: "",
        instagram: burnDefaultAmount,
        spinner: false,
        phone: "",
    };
    this.openRegisterModal = this.openRegisterModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  openRegisterModal = () => {
      this.setState({ open: true });
  }

  onCloseModal = () => {
      this.setState({ open: false });
  }

  handleChange = (event: any) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleRegister = (event: any) => {

  }


  sendRegisterRequest = async () => {
  }

  render() {
    const { open } = this.state;
    const margin = {
      margin: 20
    }
    return (
        <div >
          <div>
          <AwesomeButton className="landing-buttonTwo" onPress={this.openRegisterModal}> REGISTER </AwesomeButton>
          </div>
            {(!this.state.spinner) 
            && <Modal open={open} onClose={this.onCloseModal} center>
             <Grid style={{padding:"1em"}} container direction="column">
              <Grid item md>
                <Typography gutterBottom>Organization Name</Typography>
                <TextField
                  id="standard-name"
                  name="nameValue"
                  value={this.state.nameValue}
                  onChange={this.handleChange}
                  helperText="Needs to be unique, can't be changed later"
                  required
                  fullWidth = {true}
                />
              </Grid>
              
              <Grid item lg>
                <div style={margin}/>
                <Typography gutterBottom>Website</Typography>
                <TextField
                  id="standard-name"
                  name="website"
                  value={this.state.website}
                  onChange={this.handleChange}
                  helperText="required"
                  required
                  fullWidth = {true}
                />
              </Grid>

              <Grid item>
                <div style={margin}/>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField 
                      prefix={' @'}
                      value={this.state.ethValue}
                      helperText="Instagram Username, example: @DonateMoney"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InstagramIcon />
                          </InputAdornment>
                        ),
                      }}
                     />
                   </Grid>
                <Grid item md={12}>
                <TextField
                    id="outlined-error-helper-text"
                    label="Tell us more about your Organization "
                    helperText="Incorrect entry."
                    variant="outlined"
                    fullWidth = {true}
                    />
                </Grid>
                <MuiPhoneNumber defaultCountry={'us'} name="phone" nameonChange={this.handleChange}/>
                 </Grid>
               </Grid>

              <div style={margin}/>

              <AwesomeButton onPress={this.handleRegister}>Register</AwesomeButton>

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
