import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from "react-redux";

import Greeting from './Greeting';

import configureStore from "../redux/configureStore";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Greeting title={'first greeting page path'} />} />
          {/* <Route path='/greeting' element={<Greeting title={'greeting greeting page path'} />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>

    );
  }
}

export default App
