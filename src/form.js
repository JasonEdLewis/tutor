import React from "react";

export default class Form extends React.Component {
  state = {
    info: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    debugger;
    console.log(this.state.info);
    this.setState({
      info: ""
    });
  };

  render() {
    console.log(this.state.info, typeof this.state.info);
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          row="4"
          col="50"
          name="info"
          value={this.state.info}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

/* 
    Use this 👇🏽
this.state.info.split(/\n/).filter(entry => entry !== "" && entry !== " ") 

to get this 👇🏽

["Student Name:", "Jayvon Gill", "ID#:", "10251", "Reason:", "Suspension", "Effective Dates:", "6/14 – 6/17/19", "Hours:", "4", "Compensatory Hours:", "School:", "BTMS", "Grade:", "7", "SPED:", "Y", "Counselor Contact:", "D. Smith dsmith@mtvernoncsd.org,   (914)665-5822", "Parent/Guardian:", "Sharika Gill", "Address:", "142 East 3rd St. Apt.2 Mount Vernon", "Home No.:", "Cell:", "(914)486-3246", "e-mail:", "sharikagill@yahoo.com"]

*/
