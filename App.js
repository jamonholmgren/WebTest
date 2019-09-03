import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, Alert} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>WebTest web view</title>
        <script>
          window.ReactNativeWebView.postMessage("Hey!")
        </script>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <button onClick="sendData">Send Data</button>
      </body>
    </html>
  `;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID="welcome">
        <WebView
          testID="test_webview"
          source={{html}}
          style={{
            flex: 1,
            height: 300,
          }}
          onMessage={data => {
            Alert.alert('Message received');
            console.log(data);
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
