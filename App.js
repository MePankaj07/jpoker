import { StyleSheet, Text,Dimensions, View, SafeAreaView, StatusBar, Image,FlatList } from 'react-native';
import React from 'react'; 
import Label, {Orientation} from "react-native-label"; 
import { AntDesign,Ionicons} from '@expo/vector-icons';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';




export default function App() {

  const { width: screenWidth } = Dimensions.get('window');
  const [dataArray, setDataArray] = React.useState([]);
  const fetchrecords=()=>{
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Token 208edc994a9558afc6d95a741b5cf10dbffd5399");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://dev.justicepoker.com/api/v1/gameplay/available-game-table-category/?game_table_tag=2", requestOptions)
  .then(response => response.json())
  .then((result) => {setDataArray(result)})
  .catch(error => console.log('error', error));
  }
  React.useEffect(() => {
   fetchrecords();
  }, []);

  const RenderItem = ({ item}) => { 
    
    return ( 
      <View>
        <Label
    orientation={Orientation.TOP_LEFT}
   style={{fontSize: 20, color: '#000', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
   width:30
      
    }}
    title="Hold'EM"
    color="#f4d573" 
    distance={50}
    extent={0 }
  >
       <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:20,backgroundColor:'#272727',marginTop:10}}>
        
         <View>
         {/* <Text style={{backgroundColor:'#f4d573',padding:5,borderRadius:5}}>Hold'EM</Text> */}
       <Text style={{color:'orange'}}>{item.category.small_blind}/2</Text>
       <Text style={{color:'white'}}>Blinds</Text>
       </View>
       <View>
       <Text style={{color:'orange'}}>{item.category.active_players}</Text>
       <Text style={{color:'white'}}>Playing</Text>
       </View>
       <View> 
       <Text style={{color:'orange'}}>{item.category.min_buyin}</Text>
       <Text style={{color:'white'}}>Min Buy in</Text>
       </View>
       </View>
       </Label>
       
       </View>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
      />
      <View height='1%' />
      <View style={{
        backgroundColor: '#20252b', width: '100%', height: '6%', flexDirection: "row",

        paddingHorizontal: 10
      }}>
        <Image source={require('./assets/logo.png')} style={{
          width: 65,
          height: 40,

        }} />

        <Text style={{ color: '#fff', fontSize: 22, paddingTop: 7, paddingHorizontal: 10, fontFamily: 'Roboto', fontWeight: "600" }}>
          Hey Shubham !</Text>


      </View><View style={{paddingBottom:20}}>
      <Carousel
              // ref={(c) => { this._carousel = c; }}
              data={['assets/h1.jpeg','assets/h1.jpeg']}
              renderItem={({item, index}) => {
                return (
                    <View 
                      style={{backgroundColor:'#FFF'}}>
                    <Image source={require('./assets/h1.jpeg')} style={{
                    width:'100%',
                    height:80,}} />
                        {/* <Text style={styles.title}>{ item}</Text> */}
                    </View>
                );}
              }
              sliderWidth={screenWidth} 
              sliderHeight={100}
              itemWidth={screenWidth - 60} 
              
      />
      </View>

      {/* <View height='2%' />
      <Text style={{ color: '#fff', fontSize: 22, paddingTop: 7, paddingHorizontal: 10, fontFamily: 'Roboto', fontWeight: "600" }}>
        Hey Shubham !</Text>
      <View height='2%' /> */}
       
      <FlatList
          data={dataArray}
          refreshing={false} 
          keyExtractor={({ name }, index) => name}
          renderItem={({ item, index }) => <RenderItem item={item} key={index} />}
          style={{ marginBottom: 10 }}
          // ListEmptyComponent={(
          //   <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '40%' }}>
          //     <Image source={require('../../State/assets/images/box.png')} style={{ width: 100, height: 100 }} />
          //     <Text>No calls to show!</Text>
          //   </View>
          // )}
          // ListFooterComponent={(
          //   <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
          //     {/* {dataArray.length > 0 && dataArray.length >= (page * 10 - 10) ? ( */}
          //     {dataArray.length > 9 && dataArray.length >= (page * 10 - 10) ? (
          //       <Button mode="text" onPress={() => pagination(page + 1)}>show more...</Button>
          //     ) : null}
          //   </View>
          // )}
        />
        
        
      <View style={{backgroundColor:'#3c4046',flexDirection:'row',justifyContent:'space-around',height:50,alignItems:'center'}}>
      <AntDesign name="home" size={24} color="#4f5259" />
      <Ionicons name="md-wallet-outline" size={24} color="#4f5259" />
      <Ionicons name="person-outline" size={24} color="#af901e" />
      
      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

});
