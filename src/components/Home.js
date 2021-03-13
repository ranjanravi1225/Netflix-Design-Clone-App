import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions, Text } from 'react-native';
import Constants from "expo-constants";
import MovieSection from './MovieSection';
import { Colors } from './Colors';
import WebSeriesSection from './WebSeriesSection';
import MainImage from './MainImage';
import ComedySection from './ComedySection'



export default function Home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}> NETFLIX </Text>
            </View>
            <ScrollView>
                <MainImage />
                <WebSeriesSection navigation={props.navigation} />
                <MovieSection navigation={props.navigation} />
                <ComedySection navigation={props.navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: Colors.darkGrey,
    },
    headerView: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGrey,
        width: Dimensions.get('window').width
    },
    headerText: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold'
    },
});
