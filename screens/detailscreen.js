import React from 'react'
import react from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'

export default class DetailScreen extends React.Component{
    render(){
        return(
            <View>
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    1. CPU(Central Proccessing Unit)
                    
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
//details//
</Text>
                </View>
                <View>
                <Text
                style={{fontSize:20, fontWeight:'bold'}}>
                    2. RAM(Random Access Memory)
                    
                </Text>
                </View>
                <View>
<Text style={{fontSize:12}}>
//details//
</Text>
                </View>
            </View>
        )
    }
}