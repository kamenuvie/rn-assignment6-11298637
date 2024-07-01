import React from 'react';
import { View, Text, StyleSheet,box,Image, ScrollView} from 'react-native';

const MyCartScreen = () => {
  return (
    <ScrollView>
    <View style={styles.box}>
        <View style={styles.header} >
        <View style={styles.icon11}>
          <Image source={require('../assets/assets/Logo.png')} />       
        </View>
         
        <View style={styles.icon22}>
          <Image source={require('../assets/assets/Search.png')} />       
        </View>
        
      </View>
      <View >
        <Text style={styles.check}>CHECK-OUT</Text>

        </View>
      <View style={styles.icon_box} >
      <View style={styles.icon1}>
          <Image source={require('../assets/assets/dress1.png')} />       
        </View>
         
        <View style={styles.icon2}>
          <Text style={{fontSize: 14, fontWeight:'bold'}}> OFFICE WEAR</Text>
          <Text> Office wear for office</Text>
          <Text style={{fontSize: 20, color: 'brown'}}> $120</Text>


        </View>

        <View style={styles.icon3}>
          <Image source={require('../assets/assets/remove.png')} />       
        </View>
      </View>
      <View style={styles.icon_box} >
      <View style={styles.icon1}>
          <Image source={require('../assets/assets/dress4.png')} />       
        </View>
         
        <View style={styles.icon2}>
          <Text style={{fontSize: 14, fontWeight:'bold'}}> LAMEREI</Text>
          <Text>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={{fontSize: 20, color: 'brown'}}> $120</Text>


        </View>

        <View style={styles.icon3}>
          <Image source={require('../assets/assets/remove.png')} />       
        </View>
      </View>
      <View style={styles.icon_box} >
      <View style={styles.icon1}>
          <Image source={require('../assets/assets/dress2.png')} />       
        </View>
         
        <View style={styles.icon2}>
          <Text style={{fontSize: 14, fontWeight:'bold'}}> CHURCH WEAR</Text>
          <Text> Recycle Boucle Knit Cardigan Black</Text>
          <Text style={{fontSize: 20, color: 'brown'}}> $120</Text>


        </View>

        <View style={styles.icon3}>
          <Image source={require('../assets/assets/remove.png')} />       
        </View>
      </View>
      <View style={styles.Total}>
        <Text style={{fontSize: 14, fontWeight:'bold'}}>EST. TOTAL</Text>
        <Text style={{fontSize: 20, color: 'brown'}}> $360</Text>
      </View>
      <View style={styles.footer} >
        <View style={styles.icon111}>
          <Image  style={{color:'white'}} source={require('../assets/assets/shopping-bags.png')} />       
        </View>
         
        <View style={styles.icon222}>
        <Text style={{fontSize: 15, fontWeight:'bold',color:'white'}}> CHECK OUT</Text>

        </View>
        
      </View>

    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
   
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: '7%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    flexDirection:'row'

  },
  icon_box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    height: '24%',
    paddingBottom: 20
  },
  icon1: {
    width: '30%',
    height: '80%',
    backgroundColor: 'blue',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%',
  },
  icon2: {
    width: '50%',
    height: '40%',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
    marginLeft: '10%',

  },
  icon3: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',

  },
  icon11: {
    width: 100,
    height: 50,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:110
  },
  icon22: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    fontSize: 35,
   textAlign: 'center',
},
  Total: {
    width: '100%',
    height: '05%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection:'row',
  },
  footer: {
    width: '100%',
    height: '7%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection:'row',
    marginBottom:80,
  },
  icon111: {
    width: 100,
    height: 50,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:40,
    Color: 'white',
  },
  icon222: {
    width: '60%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:60,
  }
});

export default MyCartScreen;
