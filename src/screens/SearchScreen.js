import React from 'react';
import {
    SafeAreaView, StyleSheet,
    Text
} from 'react-native';

const SearchScreen = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>SearchScreen</Text>
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

export default SearchScreen;
