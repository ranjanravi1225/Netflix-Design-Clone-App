import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from './Colors';
import { comedySeriesData } from './AllData';



export default function ComedySection(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}> Comedy Series </Text>
            </View>
            <FlatList
                horizontal={true}
                data={comedySeriesData}
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
