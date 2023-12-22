import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends=[
        {name:'Friend 1' , age:'11'},
        {name:'Friend 2', age:'15'},
        {name:'Friend 3', age:'19'},
        {name:'Friend 4', age:'17'},
        {name:'Friend 5', age:'18'},
        {name:'Friend 6', age:'16'},
        {name:'Friend 7', age:'12'},
        {name:'Friend 8', age:'13'},
        {name:'Friend 9', age:'14'},
    ]

  return <FlatList vertical//ekranı yataya hizalar  vertical=dikey
  showsVerticalScrollIndicator={true}//yatayda scroolun görünürlüğünü ayarla
   keyExtractor={friend=>friend.name}//her dizi elemanına key atadı
   data={friends}
   renderItem={({item})=> {
    return <Text style={styles.text}> Name: {item.name} - Age: {item.age}</Text>
    
  }} />;
};

const styles = StyleSheet.create({
  text: {
    fontSize:20,
    fontWeight:'bold',
    marginTop:50,
    textAlign:'center',
    }
});

export default ListScreen;
