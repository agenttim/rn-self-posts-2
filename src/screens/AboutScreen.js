import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Это лучшее приложение для личных заметок.</Text>
            <Text>Версия <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}

export function aboutScreenOptions({navigation}) {
    return {
        headerTitle: 'О приложении',
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
    },
    version: {
        fontFamily: 'open-bold'
    }
})