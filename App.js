import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  
  const[nos, setNos] = useState(0)
  const[eles, setEles] = useState(0)

  function aumentarNos(){
    setNos(nos + 1)
  }

  function diminuirNos(){
    setNos(nos - 1)
  }

  function diminuirEles(){
    setEles(eles - 1)
  }

  function aumentarEles(){
    setEles(eles + 1)
  }


  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />

    
      <Text style={styles.marcador}>NÓS</Text>
      <Text style={styles.numero}>{nos}</Text>

    <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Button color='green' onPress={aumentarNos} title='+' />
        </View>
        <View style={styles.buttons}>
          <Button color='red' onPress={diminuirNos} title='-' />
        </View>

         <Button onPress={() => setNos(nos+3)} color='#03b48e'  title='TRUCO' />
    <Button onPress={() => setNos(nos+6)} color='#071fac'  title='SEIS' />
    <Button onPress={() => setNos(nos+9)} color='#8c15db'  title='NOVE' />
    <Button onPress={() => setNos(nos+12)} color='#6d1d1d'  title='DOZE' />
    
        
        
    </View>

      <Text style={styles.marcador}>ELES</Text>
      <Text style={styles.numero}>{eles}</Text>

    <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Button color='green' onPress={aumentarEles} title='+' />
        </View>
        <View style={styles.buttons}>
          <Button color='red' onPress={diminuirEles} title='-' />
        </View>
        <View>

    </View>
    </View>
     <View>
          <Button onPress={() => setEles(eles+3)} color='#03b48e'  title='TRUCO' />
          <Button onPress={() => setEles(eles+6)} color='#071fac'  title='SEIS' />
          <Button onPress={() => setEles(eles+9)} color='#8c15db'  title='NOVE' />
          <Button onPress={() => setEles(eles+12)} color='#6d1d1d'  title='DOZE' />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer:{
    flexDirection: 'row',
    gap:40,
  },
  marcador:{
    fontSize:30,
    marginBottom:20,
    fontWeight:"bold"
  },
  numero:{
    fontSize:60,
    marginBottom:30
  },
  buttons:{
    width:60,
    height:40,
    marginBottom:50,
  }
});
