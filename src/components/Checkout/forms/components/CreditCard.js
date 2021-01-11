import {  Grid, Input, Typography } from "@material-ui/core";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default class CreditCard extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
          </Grid>
          <Grid item>
            <form 
            id='creditCard'
             onSubmit={this.handleSubmit}>
              <div>
                <Input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <Typography>
                  <small>E.g.: 49..., 51..., 36..., 37...</small>
                </Typography>
              </div>
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div>
                <div>
                  <Input
                    type="tel"
                    name="expiry"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
              </div>
              <Input type="hidden" name="issuer" value={issuer} />
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
