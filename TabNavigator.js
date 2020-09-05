import React,{useEffect} from "react";


import {Platform} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../page/Main';
import LikePage from '../page/LikePage';
import {Ionicons} from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabNavigator = ({navigation,route}) =>{
  
    useEffect(()=>{
        navigation.setOptions({
            title:"MBTI 궁합"
        })
    },[])


    return (
    <Tabs.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:({focused}) =>{

                let iconName = Platform.OS === "ios" ? "ios-" : "md-"
              
                  if (route.name === "Main") {
                    iconName += "list";
                  } else if (route.name === "LikePage") {
                    iconName += "heart";
                  }
                  return (
                    <Ionicons
                      name={iconName}
                      color={focused ? "blue" : "lightgrey"}
                      size={25}
                    />
                  );
            }
        })}
        tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: "white",
              borderTopColor: "lightgray",
              height:50
            }
        }}
    >
        
        <Tabs.Screen name="Main" component={Main}/>
        <Tabs.Screen name="LikePage" component={LikePage}/>
        
    </Tabs.Navigator>)
}

export default TabNavigator