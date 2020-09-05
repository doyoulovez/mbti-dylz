import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,Image } from 'react-native';
import Loading from "./Loading";
import CoupleCard from '../components/CoupleCard';
//import data from "../data.json";
import {firebase_db} from "../firebaseConfig";

import {Share} from "react-native";

const Couple = ({navigation,route}) => {

    const [isLoading, setIsLoading] = useState(true)

    const [coupleState,setCoupleState] = useState({})

    useEffect(()=>{
        navigation.setOptions({
            title: '환상의 짝꿍'
        })

        const { idx } = route.params;
        firebase_db.ref('/types/'+idx).once('value').then((snapshot) => {
            let types = snapshot.val();
            setCoupleState(types)
            setIsLoading(false)
        });
    },[])

    const goMain = () => {
        navigation.navigate("TabNavigator")
    }

    const doShare = () => {
        Share.share({
            message:`${coupleState.name} \n\n ${coupleState.answer}`,
        });
    }

    console.log("커플 데이터: " + coupleState.idx)

    return isLoading ? <Loading/> : (
    <View style={styles.container}>
        <Text style={styles.titleText}>{coupleState.name}의 환상의 짝꿍</Text>
        <View style={styles.vScroll}>
            {coupleState.answer.map((a,i)=>{
                return <CoupleCard key={i}
                                   idx={a.answer_idx}
                                   name={a.answer_title}
                                   h_name={a.answer_h_title}
                                   image={a.answer_image}
                                   navigation={navigation}/>
            })}
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=> doShare()}
                              style={styles.shareStyle}>
                <Text style={styles.buttonText}>결과 공유하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> goMain()}
                              style={styles.goMainStyle}>
                <Text style={styles.goMainText}>Main</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Couple;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleText: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    vScroll: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: 10
    },
    coupleBox: {
        flexDirection: 'column',
        width: Dimensions.get("window").width/2.4,
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
    },
    buttonContainer:{
        height: 80,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 30
    },
    shareStyle: {
        width: 200,
        height: 40,
        backgroundColor: "lightblue",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: "900"
    },
    goMainStyle: {
        width: 80,
        height: 40,
        backgroundColor: "lightgrey",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      goMainText: {
          fontSize: 18,
      }
  });