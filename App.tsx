import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
    
        return <WebView source={{ uri: 'http://e-mbah.com/login' }}
            androidLayerType={'hardware'}
            style={{ flex: 1 }}
        />;
}

export default App;