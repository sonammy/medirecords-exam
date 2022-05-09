import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.state = { doubleValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    const doubleValue = event.target.value * 2;
    this.setState({ doubleValue });
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