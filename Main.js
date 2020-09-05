import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,ImageBackground } from 'react-native';

import TypeCard from "../components/TypeCard";
//import data from "../data.json";

import {firebase_db} from "../firebaseConfig"
import Loading from "./Loading";

export default function Main({navigation}) {

  const [isLoading,setIsLoading] = useState(true);

  const [state,setState] = useState([])

  useEffect(()=>{
    console.log("나 실행되었다.")
    firebase_db.ref('/types').once('value').then((snapshot) => {
      console.log("파이어베이스에서 데이터 가져왔습니다!!")
      let types = snapshot.val();
    setState(types)
    setIsLoading(false)
    });
  },[])

  return isLoading ? <Loading/> : (
    <View style={styles.container}>
      <Text style={styles.titleText}>MBTI 유형별 환상의 짝꿍 찾기</Text>
      <Text style={styles.exText}>나의 MBTI 유형을 클릭해보세요!</Text>
      <ScrollView>
        <View style={styles.typeBox}>
          {state.map((data,i)=>{
            return <TypeCard key={i} 
                             idx={data.idx}
                             name={data.name} 
                             image={data.image} 
                             h_name={data.h_name}
                             navigation={navigation}/>
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  typeBox: {
    marginTop:0,
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },
  exText:{
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5
  }
});