import Reactontron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactontron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
