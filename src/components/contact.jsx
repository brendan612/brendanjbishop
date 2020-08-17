import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <section className="contact" name="contact">
      <span>&nbsp;</span>
      <form
        id="contact-form"
        action="https://formspree.io/brendan@brendanjbishop.com"
        method="post"
      >
        <h4>Feel free to contact me</h4>

        <TextField
          variant="filled"
          label="Name"
          type="text"
          margin="normal"
          required="true"
        />
        <br />
        <TextField
          variant="filled"
          label="Email"
          type="email"
          margin="normal"
          required="true"
        />
        <br />
        <TextField
          variant="filled"
          label="Message"
          multiline="true"
          margin="normal"
          required="true"
        />
        <br />
        <Button variant="contained" size="large">
          Send
        </Button>
      </form>
    </section>
  );
};

export default Contact;
