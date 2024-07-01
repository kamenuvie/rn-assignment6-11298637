import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import MyCartScreen from './Screens/MyCartScreen';

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
    

      <View style={styles.mini_container}>
        <View style={styles.icon1}>
          <Image source={require('../MyCart/assets/assets/Menu.png')} />       
        </View>
         
        <View style={styles.icon2}>
          <Image source={require('../MyCart/assets/assets/Logo.png')} />       
        </View>

        <View style={styles.icon3}>
          <Image source={require('../MyCart/assets/assets/Search.png')} />       
        </View>

        <View style={styles.icon4}>
          <Image source={require('../MyCart/assets/assets/shoppingBag.png')} />       
        </View>
      </View>
        
      <View style={styles.mini_container1}>
        <View style={styles.icon11}>
          <Text style={{fontSize: 18, color: '#333'}}>OUR STORY</Text>
        </View>
         
        <View style={styles.icon33}>
          <Image source={require('../MyCart/assets/assets/more.png')} />       
        </View>

        <View style={styles.icon44}>
          <Image source={require('../MyCart/assets/assets/menufree.png')} />       
        </View>
      </View>
      
      <View style={styles.image_container}>
        <View style={styles.image_container1}>
          <Image source={require('../MyCart/assets/assets/dress1.png')} />       
          <Image source={require('../MyCart/assets/assets/add_circle.png')} />       
          <Text>Office Wear</Text>
          <Text style={{fontSize: 14, color: '#333'}}>reversible angora cardigan</Text>
          <Text style={{fontSize: 14, color: 'blue'}}>$120</Text>
        </View>
        <View style={styles.image_container2}>
          <Image source={require('../MyCart/assets/assets/dress2.png')} />       
          <Image source={require('../MyCart/assets/assets/add_circle.png')} />       
          <Text>Black</Text>
          <Text style={{fontSize: 14, color: '#333'}}>reversible angora cardigan</Text>
          <Text style={{fontSize: 14, color: 'green'}}>$120</Text>
        </View>
      </View>

      <View style={styles.image_container}>
        <View style={styles.image_container1}>
          <Image source={require('../MyCart/assets/assets/dress3.png')} />       
          <Image source={require('../MyCart/assets/assets/add_circle.png')} />       
          <Text>Church Wear</Text>
          <Text style={{fontSize: 14, color: '#333'}}>reversible angora cardigan</Text>
          <Text style={{fontSize: 14, color: 'red'}}>$120</Text>
        </View>
        <View style={styles.image_container2}>
          <Image source={require('../MyCart/assets/assets/dress4.png')} />       
          <Image source={require('../MyCart/assets/assets/add_circle.png')} />       
          <Text>Lamerei</Text>
          <Text style={{fontSize: 14, color: '#333'}}>reversible angora cardigan</Text>
          <Text style={{fontSize: 14, color: 'blue'}}>$120</Text>
        </View>
      </View>

      <View style={styles.image_container}>
        <View style={styles.image_container1}>
          <Image source={require('../MyCart/assets/assets/dress5.png')} />       
          <Image source={require('../MyCart/assets/assets/add_circle.png')} />       
          <Text>21WN</Text>
          <Text style={{fontSize: 14, color: '#333'}}>reversible angora cardigan</Text>
          <Text style={{fontSize: 14, color: 'red'}}>$120</Text>
        </View>
        <View style={styles.image_container2}>
          <Image source={require('../MyCart/assets/assets/dress6.png')} />       
          <Image source={require('../MyCart/assets/assets/add_circle.png')} />       
          <Text>Lame</Text>
          <Text style={{fontSize: 14, color: '#333'}}>reversible angora cardigan</Text>
          <Text style={{fontSize: 14, color: 'blue'}}>$120</Text>
        </View>
      </View>
      
      <Button title='Check Out' onPress={() => navigation.navigate('MyCart')} />
    </ScrollView>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyCart" component={MyCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 0,
  },

  mini_container: {
    width: "100%",
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 7,
  },
  mini_container1: {
    width: "100%",
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    marginBottom: 7,
  },
 
  icon1: {
    width: 50,
    height: 20,
    borderRadius: 15,
  },
  icon11: {
    width: 100,
    height: 20,
    borderRadius: 15,
  },
  icon2: {
    width: 80,
    height: 20,
    borderRadius: 15,
    paddingLeft: 50,
  },
  icon3: {
    width: 70,
    height: 20,
    borderRadius: 15,
    paddingLeft: 100,
  },
  icon33: {
    width: 50,
    height: 20,
    borderRadius: 55,
    paddingLeft: 140,
  },
  icon4: {
    width: 70,
    height: 20,
    borderRadius: 15,
    paddingLeft: 40,
  },
  icon44: {
    width: 30,
    height: 20,
    borderRadius: 95,
    paddingLeft: 10,
  },
  image_container: {
    width: "100%",
    height: 330,
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image_container1: {
    width: "42%",
    height: 220,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    resizeMode: 'fit',
    paddingLeft: 5
  },
  image_container2: {
    width: "42%",
    height: 220,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingLeft: 5
  }
});

export default App;
