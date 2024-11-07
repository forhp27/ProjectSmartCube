// app/SecondScreen.js
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function SecondScreen() {
  return (
    <View>
      <Text>This is the Second Screen!</Text>
      <Button> press here to go back</Button>
      <Link href="/SecondScreen">Go to Second Screen</Link>
    </View>
  );
}