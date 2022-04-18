import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";


export default function Profile() {
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
               <View>
                    <View>
                       <Image
                            style={{
                                width: 50,
                                height: 50,
                            }}
                            source={require('../Image/avatar.png')}
                       />
                    </View>
               </View>
            </ScrollView>
        </SafeAreaView>
    );
  }

  const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },  


  })

