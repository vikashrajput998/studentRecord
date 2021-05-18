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
import SharedIcon from 'react-native-vector-icons/Entypo';
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
      <TouchableOpacity onPress={() => props.navigation.navigate('ProfilePage')}>
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
              <Text style={styles.rateTextStyle}>Rate</Text>
              <Text style={styles.rateTextStyle}>Info</Text>
              <Text style={styles.rateTextStyle}>Male</Text>
              <Text style={styles.chrgeTextStyle}>$25</Text>
            </View>
            <View style={styles.rightView}>
              <View style={styles.rightIcon}>
                <Text style={styles.info}>Subject Name</Text>
                <SharedIcon
                  name="check"
                  style={{
                    marginLeft: 5,
                    fontSize: height * 0.03,
                    color: 'black',
                  }}
                />
              </View>
              <View style={styles.rightIcon}>
                <Text style={styles.QualifInfo}>Qualification:</Text>
                <Text style={styles.QualificationText}>12th</Text>
              </View>
              <View style={styles.rightIcon}>
                <Text style={styles.QualifInfo}>Study Mode:</Text>
                <Text style={styles.QualificationText}>Online</Text>
              </View>
              <View style={styles.shareIcon}>
                <Text style={styles.info}></Text>
                <EntypoIcon
                  name="share"
                  style={{
                    marginLeft:5,
                    fontSize: height * 0.04,
                    color: 'black',
                  }}
                />
              </View>
            </View>
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
    backgroundColor: 'pink',
    width: width * 0.55,
    height: height * 0.04,
  },
  viewType: {
    // backgroundColor: 'yellow',
    width: width * 0.925,
    height: height * 0.18,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  leftView: {
    width: width * 0.2,
    height: height * 0.18,
    backgroundColor: '#FF9800',
    borderBottomLeftRadius: 20,
    flexDirection: 'column',
    // alignItems:'center'
  },

  rateTextStyle: {
    marginTop: 5,
    width: width * 0.17,
    height: height * 0.037,
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 2,
    // borderRadius: 5,
    borderWidth: 1,
  },

  chrgeTextStyle: {
    marginTop: 8,
    width: width * 0.17,
    height: height * 0.037,
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    padding: 1,
  },

  rightView: {
    width: width * 0.725,
    height: height * 0.18,
    // backgroundColor: 'white',
    borderBottomRightRadius: 20,
    flexDirection: 'column',
  },

  rightIcon: {
    marginTop: 2,
    marginLeft: 5,
    width: width * 0.7,
    height: height * 0.046,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
  },

  shareIcon: {
    marginTop: -13,
    marginLeft: 5,
    width: width * 0.68,
    height: height * 0.046,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
  },

  info: {
    fontSize: 22,
    fontWeight: 'bold',
    // backgroundColor:'pink',
    color: 'red',
    width: width * 0.58,
  },

  QualifInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    //  backgroundColor:'pink',
    color: 'red',
    width: width * 0.37,
  },

  QualificationText: {
    fontWeight:'bold',
    fontSize: 20,
    

  },

  ageType: {
    marginTop: 1,
     backgroundColor: 'pink',
    width: width * 0.56,
    height: height * 0.04,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default Details;
