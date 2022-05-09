import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.state = { doubleValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * 
   * @param {*} event - the following assumptions have been made:
   * --no other character other than comma and numerics would be allowed; hence, if the user enters
   *       any other character, it won't appear on both the input and output
   * --no null values are allowed; hence, succeeding commas could not be used as input
   */
  handleChange(event) {
    const charEntered = event.target.value.slice(-1);
    if (charEntered == "," && event.target.value.charAt(event.target.value.length - 2) != ",") {
      this.setState({ value: event.target.value });
      this.setState({ doubleValue: this.state.doubleValue + "," });
    } else if (!isNaN(Number(charEntered))) {
      this.setState({ value: event.target.value });
      const substr = event.target.value.substring(event.target.value.lastIndexOf(",") + 1);
      const lastVal = this.state.doubleValue.substring(0, event.target.value.lastIndexOf(",") + 1);
      this.setState({ doubleValue: lastVal + (substr * 2) });
    }


  }

  render() {
    return (
      <div class="container">
        <div class="centered-element">
          <p class="header1">Medirecords Front end Code Challenge</p>
          <p class="header2">Please try to implement following within one hour</p>
          <br /><br />
          <form class="form-style">
            <div>
              <p class="form-header-style"> Input </p>
              <br />
              <label class="form-label-style">
                Array
                <br />
                <br />
                <input type="text" class="form-input-style" value={this.state.value} onChange={this.handleChange} />
              </label>
            </div>
          </form>
          <form class="form-style">
            <p class="form-header-style"> Output </p>
            <br />
            <label class="form-label-style">
              Double
              <br />
              <br />
              <input type="text" class="form-input-style" value={this.state.doubleValue} onChange={this.handleChange} />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default App;