import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Background = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      position: 'absolute',
      height: deviceHeight + safeAreaInsets.top + safeAreaInsets.bottom,
      width: deviceWidth,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/dark_background.jpg')}
      />
    </View>
  );
};

export default Background;
