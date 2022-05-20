import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
      />
      <View height='1%' />
      <View style={{
        backgroundColor: '#20252b', width: '100%', height: '6%', flexDirection: "row",

        paddingHorizontal: 10
      }}>
        <Image source={require('./assets/logo.png')} style={{
          width: 65,
          height: 40,

        }} />

        <Text style={{ color: '#fff', fontSize: 22, paddingTop: 7, paddingHorizontal: 10, fontFamily: 'Roboto', fontWeight: "600" }}>
          Hey Shubham !</Text>


      </View>

      <View height='2%' />
      <Text style={{ color: '#fff', fontSize: 22, paddingTop: 7, paddingHorizontal: 10, fontFamily: 'Roboto', fontWeight: "600" }}>
        Hey Shubham !</Text>
      <View height='2%' />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

});
