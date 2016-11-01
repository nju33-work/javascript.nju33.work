import {h, render, Component} from 'preact';

/** @jsx h */

class HelloPreact extends Component {
  render() {
    return <h1>Hello Preact</h1>;
  }
}

render(
  <HelloPreact />,
  document.getElementById('app')
)
