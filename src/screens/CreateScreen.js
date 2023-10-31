import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";

export const CreateScreen = ({navigation}) => {
    return (
        <View style={styles.center}>
            <Text>CreateScreen</Text>
        </View>
    )
}

export function createScreenOptions({navigation}) {
    return {
        headerTitle: 'Создать пост',
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

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})