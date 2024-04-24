/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import MainNavigator from './src/navigtion/MainNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
