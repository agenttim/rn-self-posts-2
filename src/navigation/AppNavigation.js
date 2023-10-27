import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {MainScreen, mainScreenOptions} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {BookedScreen} from '../screens/BookedScreen';

import {THEME} from '../theme';
import {Post} from "../components/Post";

const PostStack = createStackNavigator();

const BookedStack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function AppNavigation() {

    return (
        <NavigationContainer>
            <PostNavigator>

            </PostNavigator>
            {/*<Tab.Navigator>
                <Tab.Screen
                    name="Post"
                    component={PostNavigator}
                    //...tab config
                />
                <Tab.Screen
                    name="Booked"
                    component={BookedNavigator}
                    //...tab config
                />
            </Tab.Navigator>*/}
        </NavigationContainer>
    );

}

// Stack navigators screens
function PostNavigator() {
    return (
        <PostStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }}>
            <PostStack.Screen name="Main" component={MainScreen} options={mainScreenOptions}/>
            <PostStack.Screen name="Post" component={PostScreen}/>
        </PostStack.Navigator>
    );
}

function BookedNavigator() {
    return (
        <BookedStack.Navigator>
            <BookedStack.Screen name="Booked" component={BookedScreen}/>
            <BookedStack.Screen name="Post" component={PostScreen}/>
        </BookedStack.Navigator>
    );
}

