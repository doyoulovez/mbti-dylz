import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,Image } from 'react-native';

const CoupleCard = ({idx,name,image,h_name,navigation}) => {

    console.log("데이터" + idx)


    return (
            <TouchableOpacity onPress={()=> navigation.navigate("TypePage",{
                              idx: idx})}
                              style={styles.coupleBox}>
            <Image source={{uri:image}}
                   style={styles.imageBox}/>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.hnameText}>{h_name}</Text>
            </TouchableOpacity>
    )
}

export default CoupleCard;

const styles = StyleSheet.create({
    coupleBox: {
        flexDirection: 'column',
        width: 180,
        height: 230,
        borderColor: "lightblue",
        borderRadius: 10,
        borderWidth: 2,
        padding: 15,
        alignItems: 'center',
        marginTop: 20
    },
    imageBox: {
        width: 120,
        height: 120
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    hnameText: {
        fontSize: 15
    }
  });