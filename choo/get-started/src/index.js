const choo = require('choo');
const html = require('choo/html');
const app = choo();

app.model({
  state: {headline: 'Hello Choo'},
});

const mainView = (state, prev, send) => html`
  <h1>${state.headline}</h1>
`;

app.router(route => [
  route('/', mainView)
]);

const tree = app.start();
document.body.appendChild(tree);
