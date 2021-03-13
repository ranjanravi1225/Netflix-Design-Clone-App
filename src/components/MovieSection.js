import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from './Colors';
import { moviesData } from './AllData';



export default function MovieSection(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Watch Latest Movies </Text>
            </View>
            <FlatList
                horizontal={true}
                data={moviesData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.flatlistView}
                        onPress={() => {
                            props.navigation.navigate('Item',
                                {
                                    "title": item.title,
                                    "imageLink": item.imageLink,
                                    "season": item.season
                                })
                        }}
                    >
                        <Image
                            source={{
                                uri: item.imageLink,
                            }}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: 10,
    },
    headerView: {
        height: 40,
        width: Dimensions.get('window').width,
        justifyContent: 'center'
    },
    headerText: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white
    },
    flatlistView: {
        height: 160,
        width: 250,
        margin: 3
    },
    image: {
        borderRadius: 10,
        height: 150,
        width: 248,
        backgroundColor: Colors.white,
        backgroundColor: Colors.black,
    }
});
