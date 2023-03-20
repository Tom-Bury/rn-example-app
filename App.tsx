import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import WebView from 'react-native-webview';

function App(): JSX.Element {
  const [androidDebuggingEnabled, setAndroidDebuggingEnabled] = useState<
    boolean | undefined
  >(undefined);

  const wvProps = {
    source: {
      html: '<html><title>Test Webview</title><h1>Hello world from webview!</h1></html>',
    },
    ...(androidDebuggingEnabled !== undefined ? {androidDebuggingEnabled} : {}),
  };

  return (
    <SafeAreaView>
      <Text style={styles.spacingContainer}>
        androidDebuggingEnabled={`${androidDebuggingEnabled}`}
      </Text>

      <View style={styles.spacingContainer}>
        <Button
          title="Toggle androidDebuggingEnabled"
          onPress={() => setAndroidDebuggingEnabled(prev => !prev)}
        />
      </View>

      <View style={styles.spacingContainer}>
        <Button
          title="Unset androidDebuggingEnabled"
          onPress={() => setAndroidDebuggingEnabled(undefined)}
        />
      </View>

      <View style={styles.wvContainer}>
        <WebView {...wvProps} />
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
