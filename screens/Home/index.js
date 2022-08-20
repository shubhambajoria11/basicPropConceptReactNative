import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Component1 from '../../components/component1';
import Screen1 from '../Screen1';

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);

  function buttonPressIncrement() {
    setCounter(counter + 1);
  }

  function buttonPressDecrement() {
    setCounter(counter - 1);
  }

  return (
    <View>
      <Button title="Start Counter" onPress={buttonPressIncrement} />
      <Component1 data={counter} />
      <Component1 data={'Welcome to the screen'} />
      <Button title="Start Counter" onPress={buttonPressDecrement} />
    </View>
  );
};

export default HomeScreen;
