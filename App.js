import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AnimatedInput from "react-native-animated-input";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.imagView}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHjE5aDjwCMmjuRC5f6KbLSCazygkG51MC_SqHBsU1lvAzWRnbCTKHrkR9bqKtOMYtS4&usqp=CAU'}}
                   style = {{ width: 150, height: 150,borderRadius:150 }}/>
        </View>
        <View>
            <View style={{marginBottom:15}}>
                <Text style={styles.school}>School</Text>
                <Text style={styles.schoolName}>Lomé Business School</Text>
            </View>
            <View style={{marginBottom:15}}>
                <Text style={styles.school}>Email Address</Text>
                <Text style={styles.schoolName}>Borisagbo@gmail.com</Text>
            </View>
            <View>
                <AnimatedInput
                    placeholder="Name"

                    errorText="Error"

                    styleLabel={{ fontWeight: "600",color:'#00BFFF' }}
                    styleBodyContent={{ borderBottomWidth: 1.5 }}
                />
                <AnimatedInput
                    placeholder="NickName"
                    errorText="Error"
                    styleLabel={{ fontWeight: "600" ,color:'#00BFFF' }}
                    styleBodyContent={{ borderBottomWidth: 1.5 }}
                />
                <AnimatedInput
                    placeholder="Emergency Contact"
                    errorText="Error"
                    styleLabel={{ fontWeight: "600" ,color:'#00BFFF' }}
                    styleBodyContent={{ borderBottomWidth: 1.5 }}
                />
            </View>

        </View>
        <View style={{marginLeft:50,}}>
            <TouchableOpacity style={styles.update}>
                <Text>UPDATE PROFILE</Text>

            </TouchableOpacity>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   margin :50,

    justifyContent: 'center',
  },
    imagView:{
      marginLeft:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
      marginTop:40,
      backgroundColor:'#000',
        height:150,
        width:150,
        borderRadius:150,
        marginBottom:50
    },
    school:{
      fontWeight: '600'

    },
    schoolName:{
      fontWeight:'bold',
        fontSize: 15

    },
    update:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,

        elevation: 22,
        alignItems: 'center',
        justifyContent: 'center',
      backgroundColor:'#00BFFF',
        height: 60,
        width: 200,
        borderRadius: 100,
    }
});
