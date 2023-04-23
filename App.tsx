import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import WebView from 'react-native-webview';

function App(): JSX.Element {
  const [webviewDebuggingEnabled, setDebuggingEnabled] = useState<
    boolean | undefined
  >(undefined);

  const wvProps = {
    source: {
      html: '<html><title>Test Webview</title><h1>Hello world from webview!</h1></html>',
    },
    ...(webviewDebuggingEnabled !== undefined ? {webviewDebuggingEnabled} : {}),
  };

  return (
    <SafeAreaView>
      <Text style={styles.spacingContainer}>
        webviewDebuggingEnabled={`${webviewDebuggingEnabled}`}
      </Text>

      <View style={styles.spacingContainer}>
        <Button
          title="Toggle webviewDebuggingEnabled"
          onPress={() => setDebuggingEnabled(prev => !prev)}
        />
      </View>

      <View style={styles.spacingContainer}>
        <Button
          title="Unset webviewDebuggingEnabled"
          onPress={() => setDebuggingEnabled(undefined)}
        />
      </View>

      <View style={styles.wvContainer}>
        <WebView
          {...wvProps}
          webviewDebuggingEnabled={webviewDebuggingEnabled}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wvContainer: {
    borderColor: 'red',
    borderWidth: 1,
    height: 100,
  },

  spacingContainer: {
    paddingBottom: 12,
  },
});

export default App;
