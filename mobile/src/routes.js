import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const StackNavigatior = createStackNavigator(
  {
    Main,
    Profile
  },
  {
    defaultNavigationOptions: {
      title: 'Dev Radar',
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#3399ff'
      }
    }
  }
);

const Routes = createAppContainer(StackNavigatior);

export default Routes;
