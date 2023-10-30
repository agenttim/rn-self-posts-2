import React from 'react';
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";
import {PostList} from "../components/PostList";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date})

    }

    return (<PostList data={DATA} onOpen={openPostHandler}/>)
}

export const mainScreenOptions = {
    headerTitle: 'Мой блог',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Take photo"
                iconName='ios-camera'
                onPress={() => console.log('Press photo')}
            />
        </HeaderButtons>),
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Toggle Drawer"
                iconName='ios-menu'
                onPress={() => console.log('Press photo')}
                buttonStyle={{marginLeft: 10}}
            />
        </HeaderButtons>)
}