import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, SafeAreaView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {MainScreen, mainScreenOptions} from '../screens/MainScreen';
import {PostScreen, postScreenOptions} from '../screens/PostScreen';
import {BookedScreen, bookedScreenOptions} from '../screens/BookedScreen';

import {THEME} from '../theme';
import {Post} from "../components/Post";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";

const PostStack = createStackNavigator();

const BookedStack = createStackNavigator();

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const navigatorOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}

export default function AppNavigation() {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={() => ({
                        tabBarActiveTintColor: THEME.MAIN_COLOR,
                        headerShown: false
                    })}
                    activeColor="#fff"
                    inactiveColor={THEME.INACTIVE_COLOR}
                    barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
                    shifting={true}
                >
                    <Tab.Screen
                        name="Post"
                        component={PostNavigator}
                        options={{
                            tabBarIcon: route => (
                                <Ionicons name='ios-albums' size={25} color={route.color}/>
                            ),
                            tabBarLabel: 'Все'
                        }}
                    />
                    <Tab.Screen
                        name="Booked"
                        component={BookedNavigator}
                        options={{
                            tabBarIcon: route => (
                                <Ionicons name='ios-star' size={25} color={route.color}/>
                            ),
                            tabBarLabel: 'Избранное'
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>

    )

}

// Stack navigators screens
function PostNavigator() {
    return (
        <PostStack.Navigator screenOptions={navigatorOptions}>
            <PostStack.Screen name="Main" component={MainScreen} options={mainScreenOptions}/>
            <PostStack.Screen name="Post" component={PostScreen} options={postScreenOptions}/>
        </PostStack.Navigator>
    );
}

function BookedNavigator() {
    return (
        <BookedStack.Navigator screenOptions={navigatorOptions}>
            <BookedStack.Screen name="Booked" component={BookedScreen} options={bookedScreenOptions}/>
            <BookedStack.Screen name="Post" component={PostScreen} options={postScreenOptions}/>
        </BookedStack.Navigator>
    );
}

