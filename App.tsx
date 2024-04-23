/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React, {useEffect} from 'react';
import {Text} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    async function doGetRequest() {
      try {
        let res = await axios.post(
          'https://backend-practice.euriskomobility.me/login',
          {
            email: 'example@example.com',
            password: 'example_password',

            token_expires_in: '30m',
          },
        );

        let data = res.data;
        console.log(data.accessToken);

        let oth = await axios.get(
          'https://backend-practice.euriskomobility.me/posts?page=10&pageSize=1',
          {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          },
        );

        console.log(JSON.stringify(oth.data, null, 2));
      } catch (e) {
        console.log(`Error: ${e}`);
      }
      // const axios = require('axios');

      // const res = await axios.get('https://httpbin.org/get',
      //);

      // console.log(res.data.headers['Test-Header']); // "test-value"
    }

    doGetRequest();
  }, []);

  return <Text>Hello</Text>;
}

export default App;
