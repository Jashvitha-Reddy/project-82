import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';

export default class ExchangeScreen extends React.Component{
    createUniqueId(){
        return Math.random(5)
    }
    addItem=(itemName,itemDescription)=>{
        var userName=this.state.userName
        var randomRequestId=this.createUniqueId()
        db.collection("exchange_requests").add({
            "username":userName,
            "item_name":itemName,
            "item_description":itemDescription
        })
        this.setState({
            itemName:"",
            itemDescription:""
        })
        return Alert.alert(
            "Item Ready to Exchange",
            "",
            [
                {text:OK,onPress:()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        )
    }
    render(){
        return(
            <View>
                <TextInput
                style={styles.itemName}
                />
                <Text style={styles.tittle}>Item Name</Text>
                <TextInput
                style={styles.itemDescription}
                />
                <Text style={styles.tittle}>Item Description</Text>

                <TouchableOpacity 
                style={[styles.button,{marginTop:10}]}
                onPress={()=>{this.addItem(this.state.itemName,this.state.itemDescription)}}
                    >
                    <Text style={{color:'#ffff',fontsize:18,fontWeight:'bold'}}>Add Item</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    itemName:{
        width:100,
        height:50,
        borderWidth:1.5,
        borderColor:'#ff5722'
    },
    itemDescription:{
        width:100,
        height:300,
        borderWidth:1.5,
        borderColor:'#ff5722'
    },
    tittle:{
        fontSize:20,
        fontWeight:300,
        color:'#808080'
    }
})