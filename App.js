import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  
  const[contador, setContador] = useState(0)

  function aumentar(){
    setContador(contador + 1)
  }

  function diminuir(){
    setContador(contador - 1)
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />
      <Text style={styles.marcador}>MARCADOR</Text>
      <Text style={styles.numero}>{contador}</Text>

    <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Button color='green' onPress={aumentar} title='+' />
        </View>
        <View style={styles.buttons}>
          <Button color='red' onPress={diminuir} title='-' />
        </View>
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
    gap:40
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
  },
  
});
