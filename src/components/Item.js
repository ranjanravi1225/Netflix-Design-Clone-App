import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";
import { Colors } from './Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemDetals from './ItemDetails';




export default function Item(props) {
    const { title, imageLink, season } = props.route.params;

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}
                >
                    <Ionicons
                        name="arrow-back"
                        size={30}
                        color={Colors.white}
                    />
                </TouchableOpacity>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> NETFLIX </Text>
                </View>
            </View>
            <ItemDetals
                title={title}
                imageLink={imageLink}
                season={season}
            />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.darkGrey,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        borderColor: Colors.black,
        borderBottomWidth: 1,
    },
    headerTextView: {
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
    },
    headerText: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
        borderColor: Colors.white,
    },
});
