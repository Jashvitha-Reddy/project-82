import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

export default class MyBarters extends React.Component{
    getAllBarters=()=>{
        this.requestRef=db.collection("my_barters").where("exchange_id",'==',this.state.exchangeId)
        .onSnapshot((snapshot)=>{
            var myBarters=snapshot.doxs.map(document=>document.data());
            this.setState({
                myBarters:myBarters
            })
        })
    }
    addBarters=async()=>{
        db.collection('my_barters').add({
            "item_name":itemName,
            "exchanger_name":exchangerName,
            "exchanger_contact":exchangerContact,
            "exchanger_address":exchangerAddress,
            "exchange_id":exchangeId,
            "status_to_exchange":"exchanged" 
        })
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button}
                       onPress={()=>{this.getAllBarters(this.state.exchangerName,this.state.statusToExchange)}}>
                        <Text>Exchange</Text>
                       </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10,
         backgroundColor:"#ff5722", 
         shadowColor: "#000", 
         shadowOffset: { width: 0, height: 8, }, 
         shadowOpacity: 0.44, 
         shadowRadius: 10.32, 
         elevation: 16,
          marginTop:20 
       }, 
 })

