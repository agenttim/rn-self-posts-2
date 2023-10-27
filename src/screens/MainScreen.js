import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date})

    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => {
                    return <Post post={item} onOpen={openPostHandler}/>
                }
                }
            />
        </View>)
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
            />
        </HeaderButtons>),
    headerLeftContainerStyle: {
        marginLeft: 10
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    wrapper: {
        padding: 10
    }
})