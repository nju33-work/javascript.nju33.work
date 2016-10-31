import React from 'react';
import {render} from 'react-dom';
import CountButton from './components/CountButton';

render(
  <CountButton count={0} />,
  document.getElementById('app')
);
