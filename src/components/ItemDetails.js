import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Linking, Share, Alert } from 'react-native';
import { Colors } from './Colors';
import Entypo from 'react-native-vector-icons/Entypo';




export default function ItemDetals(props) {

    return (
        <View>
            <Image
                source={{
                    uri: props.imageLink,
                }}
                style={styles.imageBackground}
            >
            </Image>
            <View style={styles.detailsView}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}> {props.title}</Text>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}> {props.season}</Text>
                </View>

            </View>
            <TouchableOpacity style={styles.touchable}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=JWbnEt3xuos')}
            >
                <Entypo
                    name="controller-play"
                    size={30}
                    color={Colors.white}
                />
                <View style={styles.watchView}>
                    <Text style={styles.watchText}>Watch Now</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        height: Dimensions.get('window').height - 500,
        width: Dimensions.get('window').width,
    },
    detailsView: {
        marginLeft: 10,
        marginTop: 10
    },
    titleView: {
        marginBottom: 10
    },
    titleText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    touchable: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.skyBlue,
        height: 40,
        marginLeft: 15,
        marginRight: 15
    },
    watchText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    watchView: {
        width: Dimensions.get('window').width - 80,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
