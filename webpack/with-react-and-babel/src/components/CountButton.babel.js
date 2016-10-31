import React, {Component} from 'react';
import {autobind} from 'core-decorators';

export default class CountButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  @autobind
  count() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button onClick={this.count}>{this.state.count}</button>
    );
  }
}

CountButton.propTypes = {
  count: React.PropTypes.number
};
