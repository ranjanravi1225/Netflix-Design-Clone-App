// import React from 'react';
// import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
// import { Colors } from './Colors';
// import { moviesData } from './AllData';



// export default function MovieCards() {
//     return (
//         <ScrollView horizontal={true}>
//             <FlatList
//                 horizontal={true}
//                 data={moviesData}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.flatlistView}>
//                         <Image
//                             source={{
//                                 uri: item.imageLink,
//                             }}
//                             style={styles.image}
//                         />
//                     </View>
//                 )}
//             />
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     flatlistView: {
//         height: 160,
//         width: 250,
//         margin: 3
//     },
//     image: {
//         borderRadius: 10,
//         height: 150,
//         width: 248,
//         backgroundColor: Colors.white
//     }

// });
