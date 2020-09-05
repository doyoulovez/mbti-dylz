import React, {useState, useEffect} from 'react';
import { StyleSheet,Text,View,ScrollView,Dimensions,TouchableOpacity,Image,Alert } from 'react-native';
import { firebase_db } from '../firebaseConfig';
import Loading from "./Loading";
//import data from "../data.json";
import Constants from 'expo-constants';

const TypePage = ({navigation,route}) => {

  const [isLoading, setIsLoading] = useState(true)

  const [typeState, setTypeState] = useState({})

    useEffect(()=>{
        navigation.setOptions({
            title: '유형별 특징'
        })

        const { idx } = route.params;
        firebase_db.ref('/types/'+idx).once('value').then((snapshot)=>{
          let types = snapshot.val();
          setTypeState(types)
          setIsLoading(false)
        });
    },[])

    const goResult = (typeState) => {

      const new_likes = {
          
          idx:typeState.idx,
          name:typeState.name,
          h_name:typeState.h_name,
          image:typeState.image,
          charicter:typeState.charicter,
  
      }

      const user_id = Constants.installationId;
      console.log(new_likes)
      console.log(user_id)

      
      firebase_db.ref('/likes/'+user_id+'/'+ typeState.idx).set(new_likes,function(error){
          console.log(error)
          if(error == null){
              Alert.alert("찜 완료!")
              }});
      
  }

  console.log("건네받은 데이터: " + typeState.idx)


  return isLoading ? <Loading/> : (
    <View style={styles.container}>
        <View style={styles.typeContainer}>
            <Image source={{uri:typeState.image}}
                resizeMode="cover" 
                style={styles.imageBox}/>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{typeState.name}</Text>
                <Text style={styles.textStyle}>{typeState.h_name}</Text>
            </View>
            <ScrollView>
                <View style={styles.chaContainer}>
                    <Text style={styles.chaTextStyle}>{typeState.charicter}</Text>
                </View>                
            </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=> navigation.navigate("Couple",{
                              idx: typeState.idx})}
                              style={styles.buttonStyle}>
                <Text style={styles.buttonText}>{typeState.name}의 환상의 짝꿍은?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goResult(typeState)}
                              style={styles.goMainStyle}>
                <Text style={styles.goMainText}>찜하기</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default TypePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  typeContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  imageBox: {
    width: 150,
    height: 150,
  },
  textContainer: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 15
  },
  textStyle: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  chaContainer: {
      backgroundColor: "#f3f3f3",
      borderRadius: 10,
      marginLeft: 20,
      marginRight: 20,
      padding: 10
  },
  buttonContainer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 30
  },
  buttonStyle:{
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
    backgroundColor: "#fff",
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goMainText: {
      fontSize: 18,
  }
});