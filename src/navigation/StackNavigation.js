import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from '../screens/feedstack/DetailsScreen';
import FeedScreen from '../screens/feedstack/FeedScreen';
import CreateThing from '../screens/userstack/CreateThing';
import EditThing from '../screens/userstack/EditThing';
import ListThings from '../screens/userstack/ListThings';
import OpenDrawerButton from './OpenDrawerButton';

const User = createStackNavigator();
export const UserStack = () => (
  <User.Navigator
    screenOptions={({navigation}) => ({
      headerRight: () => <OpenDrawerButton navigation={navigation} />,
    })}>
    <User.Screen name="Your Things" component={ListThings} />
    <User.Screen name="Edit" component={EditThing} />
    <User.Screen name="Create" component={CreateThing} />
  </User.Navigator>
);

const Feed = createStackNavigator();
export const FeedStack = () => (
  <Feed.Navigator initialRouteName={'Feed'}>
    <Feed.Screen name="Feed" component={FeedScreen} />
    <Feed.Screen name="Details" component={DetailsScreen} />
  </Feed.Navigator>
);
