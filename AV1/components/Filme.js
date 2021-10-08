import { StyleSheet, View, Image, Button, Platform,Text,TextInput , KeyboardAvoidingView} from 'react-native';

import React, { Component , useState }  from 'react';
 

var i = 0;

var score = 0;
export default class Filme extends Component{
    state = { escrita: ""}
    imagens={ 
      img:
      [ 
          'https://lh3.googleusercontent.com/proxy/1WSEV5-1o8p4pfj30IDqMC8MxHWm0xlzBlhuNK-PTNraoc2wNr4MatH8L-vGQatRVYcZdT-K294iG_VjBAqoNq-VB75JvLz4MqwZSKv_JWWdr358fiOospinLOndfujQkNkEdBcaOu07mDFo_Ep7bZ4yDizluY5gNco',
          'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/pantera-negra-1200x900-1.jpg',
          'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/homem-aranha-1200x900-2.jpg',
          'https://pipocamoderna.com.br/wp-content/uploads/2018/03/pacific_rim_uprising.jpg',
          'https://i.ytimg.com/vi/8pYp4T8TdP4/maxresdefault.jpg',
      ], 
      resp : 
      [
          'Vingadores',
          'Pantera Negra',
          'Homem Aranha',
          'Circulo de Fogo',
          'Esquadrão Suicida',
      ],
 };
  constructor(){
    super();
    this.state={
 
      imageURL : this.imagens.img[i]
    }
 
  }
 
  atualizaResult = (value) => {
    this.state.escrita = value
    }

  Load_New_Image=()=>{
    if (this.state.escrita == this.imagens.resp[i]){score++ ;this.state.escrita = "";this.setState({imageURL : this.imagens.img[++i]})} 
  }
    
    render() {
    if (i<=4){
        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}  >
            <View style={styles.MainContainer}>
   
              <Image 
                source = {{ uri: this.state.imageURL }}
                style = {styles.imageStyle} />

            <TextInput  onChangeText={text => this.setState({ escrita: text })} value={this.state.escrita} placeholder="Advinhe o nome do filme" keyboardType="default" ></TextInput>
            <Button title="Advinhar" onPress={this.Load_New_Image} />
            <Text styles = {styles.text}>Score : {score}</Text>     
            </View>
            </KeyboardAvoidingView>
                
        );
    }
    else{
        return(
            <View style = {styles.MainContainer}>
              <Text style = {styles.text}>Game Over!</Text>
              <Text style = {styles.text}>Score : {score}</Text>
            </View>
          );
    }
      
    }
   }
    
   const styles = StyleSheet.create({
    
   MainContainer :{
 
   justifyContent: 'center',
   alignItems: 'center',
   margin: 10,
   
    
   },
 
   imageStyle:{
    width: 300, 
    height: 300, 
    resizeMode: 'center'
   },
   text : {
    color: '#000',
    paddingTop : 5,
    fontSize : 20,
    fontWeight: 'bold'
  },
    
   });
        
  