import React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,Image } from 'react-native';

const TypeCard = ({idx,name,image,h_name,navigation}) => {

return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <View style={styles.typeBox}>
            <View style={styles.imageBox}>
              <Image source={{uri:image}} 
                     resizeMode="cover" 
                     style={styles.scrollList} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.scrollListHighlight}>{name}</Text>
              <Text style={styles.scrollListHighlight2}>{h_name}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate("TypePage",{
                                  idx: idx})}
                                  style={styles.button1}>
                  <Text style={styles.buttonText}>유형별 특징</Text>                                    
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Couple",{
                                  idx: idx})}
                                  style={styles.button1}>
                  <Text style={styles.buttonText}>환상의 짝꿍</Text>                                    
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
export default TypeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContainer: {
    flex: 1,
    marginTop:20,
    alignItems: "center",
  },
  typeBox: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width/1.1,
    height: 140,
    backgroundColor: '#fff',
    justifyContent: "center",
    borderColor: "lightblue",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 25
  },
  imageBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  scrollList: {
    width:100,
    height:100,
  },
    textContainer: {
    flex: 2,
    marginLeft: 10
  },
  scrollListHighlight : {
    fontSize: 30,
    textAlign:'left',
    color:'#000',
    fontWeight:'700',
  },
  scrollListHighlight2 : {
    fontSize: 16,
    textAlign:'left',
    color:'#000',
    fontWeight:'normal',
  },
  buttonContainer:{
    flex:1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10
  },
  button1: {
    width: 100,
    height: 40,
    backgroundColor: "lightblue",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold'
  },
});