import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import HeaderComponent from '../components/Header';
import TabBarIcon from '../components/TabBarIcon';
import {colors, fonts} from '../styles';

const AppTab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppTab.Navigator
    initialRouteName="Home"
    screenOptions={() => ({
      header: props => <HeaderComponent isFilled {...props} />,
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 60,
        padding: 4,
      },
      tabBarShowLabel: false,
      tabBarBadgeStyle: {
        backgroundColor: colors.error,
        color: '#FFF',
        fontSize: 8,
        fontFamily: fonts.bold,
      },
    })}>
    <AppTab.Screen
      options={{
        tabBarIcon: props => (
          <TabBarIcon label="Início" name="home-variant-outline" {...props} />
        ),
        tabBarBadge: '⬤',
      }}
      name="HOME"
      component={Home}
    />
    <AppTab.Screen
      options={{
        tabBarIcon: props => (
          <TabBarIcon
            label="Financeiro"
            name="account-cash-outline"
            {...props}
          />
        ),
        tabBarBadge: '9',
      }}
      name="FINANCES"
      component={Home}
    />
    <AppTab.Screen
      options={{
        tabBarIcon: props => (
          <TabBarIcon
            label="Comunicação"
            name="comment-text-outline"
            {...props}
          />
        ),
        tabBarBadge: '23',
      }}
      name="COMUNICATION"
      component={Home}
    />
    <AppTab.Screen
      options={{
        tabBarIcon: props => <TabBarIcon label="Menu" name="menu" {...props} />,
      }}
      name="MENU"
      component={Home}
    />
  </AppTab.Navigator>
);

export default AppRoutes;
