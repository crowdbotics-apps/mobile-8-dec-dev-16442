import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen215581Navigator from '../features/BlankScreen215581/navigator';
import BlankScreen115576Navigator from '../features/BlankScreen115576/navigator';
import BlankScreen015574Navigator from '../features/BlankScreen015574/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen215581: { screen: BlankScreen215581Navigator },
BlankScreen115576: { screen: BlankScreen115576Navigator },
BlankScreen015574: { screen: BlankScreen015574Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
