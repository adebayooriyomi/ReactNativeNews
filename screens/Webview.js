import React from 'react';
import {ActivityIndicator } from 'react-native';
import styles from '../Styles';
import { WebView } from 'react-native-webview';


const Web = ({navigation, route}) => {

  const { url, title } = route.params;
  navigation.setOptions({ title: title });

  const activityIndicatorLoad = () => {
    return (
        <ActivityIndicator style={styles.activityInd} size="large" color="#000"/>
    );
  }

  return (
      <WebView
        source={{uri: url}}
        scalesPageToFit={true}
        style={{flex: 1, marginTop: 0}}
        renderLoading={activityIndicatorLoad} 
        startInLoadingState={true}  
      />
  );
}

export default Web;
