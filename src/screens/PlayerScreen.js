import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const PlayerScreen = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>PlayerScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }
  });

export default PlayerScreen;
