import React from 'react';
import {Post} from "../components/Post";
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";
import {PostList} from "../components/PostList";
import {useSelector} from "react-redux";

export const BookedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date})

    }

    const bookedPosts = useSelector(state => state.post.bookedPosts)

    return (<PostList data={bookedPosts} onOpen={openPostHandler} />)
}

export function bookedScreenOptions({navigation}) {
    return {
        headerTitle: 'Избранное',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Toggle Drawer"
                    iconName='ios-menu'
                    onPress={() => navigation.toggleDrawer()}
                    buttonStyle={{marginLeft: 10}}
                />
            </HeaderButtons>)
    }
}