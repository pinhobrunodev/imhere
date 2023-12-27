import { Fragment } from 'react';
import { Home } from './src/screens/Home';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <Fragment>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={"transparent"} 
        translucent
        />
      <Home />
    </Fragment>
  )
}





