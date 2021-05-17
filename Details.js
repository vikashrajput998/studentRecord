import React, {component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    name: 'Dinesh Chandra',
    age: 25,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Vikas Kumar',
    age: 21,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Happy Singh',
    age: 22,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Amit Kumar',
    age: 27,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Pawan Yadav',
    age: 24,
    image: require('./Assets/prf.png'),
  },
];

const Details = props => {
  const Data = ({item, index}) => {
    console.log('item', item);
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('')}>
        <View style={styles.item}>
          <View style={styles.upView}>
            <Image
              style={{height: 50, width: 50, marginLeft: 20}}
              source={item.image}
            />
            <View styles={styles.nameView}>
              <Text style={styles.nameTextStyle}>{item.name}</Text>
            </View>
          </View>

          <View style={styles.viewType}>
              <View style={styles.leftView}>
                  <View styles={styles.ltView}></View>
              </View>
              <View style={styles.rightView}></View>





            {/* <Text style={styles.info}>Name:</Text>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.line}></View>
            <Text style={styles.info}>Age:</Text>
            <Text style={styles.ageType}>{item.age}</Text>
            <View style={styles.line}></View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          marginTop: height * 0.04,
          width: width * 1,
          height: height * 0.06,
          alignItems: 'center',
          flexDirection: 'row',
          //   backgroundColor: 'pink',
        }}>
        <View>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() => props.navigation.goBack()}>
            <AntIcon
              name="arrowleft"
              style={{fontSize: height * 0.05, color: 'gray'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            //  backgroundColor: 'pink',
            width: width * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: 'gray',
            }}>
            All Details
          </Text>
        </View>
      </View>
      <View style={{height: height * 0.83, marginTop: 12}}>
        <FlatList
          data={DATA}
          renderItem={Data}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  upView: {
    marginTop: -5,
    width: width * 0.923,
    height: height * 0.07,
    backgroundColor: '#FFC107',
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  nameView: {
    width: width * 0.55,
    height: height * 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  nameTextStyle: {
    fontWeight: 'bold',
    // backgroundColor: 'green',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },

  item: {
    height: height * 0.25,
    backgroundColor: 'rgba(255, 224, 178, 0.7)',
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    // flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    // backgroundColor: 'pink',
  },
  viewType: {
    backgroundColor: 'yellow',
    width: width * 0.925,
    height: height * 0.18,
    flexDirection:'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  leftView: {
      width: width * 0.2,
      height: height * 0.18,
      backgroundColor:'pink',
      borderBottomLeftRadius: 20,
      flexDirection:'column'

  },

  ltView: {
      width: width * 0.5,
      height: height * 0.2,
      backgroundColor:'yellow',
      alignSelf:'center'

  },

  rightView: {
    width: width * 0.725,
    height: height * 0.18,
    backgroundColor:'white',
    borderBottomRightRadius: 20

},

  info: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 1,
    color: 'red',
  },
  line: {
    width: width * 0.55,
    height: height * 0.004,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  ageType: {
    marginTop: 1,
    // backgroundColor: 'pink',
    width: width * 0.56,
    height: height * 0.04,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default Details;
