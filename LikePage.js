import React from "react";
import {View,Text,StyleSheet,TouchableOpacity, ScrollView, Dimensions, Image} from "react-native"

import CoupleCard from '../components/CoupleCard'

const LikePage = ({navigation}) => {
        return (
        <View style={styles.readyContainer}>
        <ScrollView>
          <Text style={styles.readyText}>내가 찜한 MBTI 유형</Text>
          <View style={styles.Vscroll}>
            <TouchableOpacity onPress={()=> navigation.navigate("TypePage",{
                                idx: idx})}
                                style={styles.coupleBox}>
              <Image source={{uri:"https://static.neris-assets.com/images/personality-types/avatars/infp-mediator.png"}}
                    style={styles.imageBox}/>
              <Text style={styles.nameText}>INFJ</Text>
              <Text style={styles.hnameText}>똑똑한 오진미</Text>
              </TouchableOpacity>
          </View>
            <View style={styles.coupleContainer}>
              <Text style={styles.readyText}>INTP의 환상의 짝꿍</Text>
              <View style={styles.Vscroll}>
                <TouchableOpacity onPress={()=> navigation.navigate("TypePage",{
                                  idx: idx})}
                                  style={styles.coupleBox}>
                <Image source={{uri:""}}
                      style={styles.imageBox}/>
                <Text style={styles.nameText}>INFJ</Text>
                <Text style={styles.hnameText}>똑똑한 오진미</Text>
                </TouchableOpacity>
              </View>
            </View>
          
          </ScrollView>
        </View>)
}
export default LikePage ;

const styles = StyleSheet.create({
    readyContainer: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 15
    },
    readyText: {
      color:'#000',
      fontSize: 20,
      fontWeight: 'bold'
    },
    coupleBox: {
      flexDirection: 'column',
      width: 170,
      height: 200,
      borderColor: "lightblue",
      borderRadius: 10,
      borderWidth: 2,
      padding: 15,
      alignItems: 'center',
      marginTop: 20
  },
  imageBox: {
      width: 100,
      height: 100
  },
  nameText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20
  },
  hnameText: {
      fontSize: 15
  },
  coupleContainer:{
    flex: 1,
    marginTop: 20
  },
  Vscroll: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap'
  }
  });