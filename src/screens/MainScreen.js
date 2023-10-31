import React, {useEffect} from 'react';
import {Post} from "../components/Post";
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../store/actions/post";


export const MainScreen = ({navigation}) => {

    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)

    return (<PostList data={allPosts} onOpen={openPostHandler}/>)
}

export function mainScreenOptions({navigation}) {
    return {
        headerTitle: 'Мой блог',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Take photo"
                    iconName='ios-camera'
                    onPress={() => navigation.navigate('Create Screen')}
                />
            </HeaderButtons>),
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