import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

function ProfilePage(props) {
  return (
    <View style={{width, height}}>
      <View
        style={{
          marginTop: -20,
          width,
          height: height * 0.45,
          backgroundColor: 'rgba(255, 224, 178, 0.5)',
          borderBottomLeftRadius: 40,
        }}>
        <View
          style={{
            marginTop: height * 0.07,
            width: width * 1,
            height: height * 0.06,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', padding: 5}}
              onPress={() => props.navigation.goBack()}>
              <AntIcon
                name="arrowleft"
                style={{fontSize: height * 0.05, color: 'black'}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              // backgroundColor: 'pink',
              width: width * 0.8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Teacher
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.95,
            height: height * 0.3,
            //   backgroundColor: 'pink',
            alignSelf: 'center',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              marginLeft: 10,
              width: width * 0.9,
              height: height * 0.05,
              // backgroundColor: 'orange',
              fontSize: height * 0.04,
              fontWeight: 'bold',
            }}>
            Vikas Kumar
          </Text>
          <View
            style={{
              marginTop: 10,
              // marginLeft: 10,
              width: width * 0.37,
              height: height * 0.16,
              alignSelf: 'center',
              borderRadius: 100,
              borderWidth: 4,
              borderColor: 'black',
            }}>
            <Image
              style={{
                width: width * 0.28,
                height: height * 0.13,
                alignSelf: 'center',
              }}
              source={require('./Assets/prf.png')}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              width: width * 0.85,
              height: height * 0.06,
              backgroundColor: 'rgba(22,23,23,0.5)',
              borderRadius: 30,
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginLeft: 10,
                width: width * 0.48,
                height: height * 0.035,
                //   backgroundColor: 'orange',
                fontSize: 22,
                textAlign: 'center',
                color: 'white',
              }}>
              Charges(per hour)
            </Text>
            <Text
              style={{
                marginLeft: 10,
                width: width * 0.2,
                height: height * 0.035,
                //   backgroundColor: 'orange',
                fontSize: 22,
                textAlign: 'center',
                color: 'white',
              }}>
              $ 20
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          width: width * 0.92,
          height: height * 0.08,
          backgroundColor: 'rgba(22,23,23,0.5)',
          alignSelf: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <Text
          style={{
            marginLeft: 5,
            width: width * 0.45,
            height: height * 0.05,
            // backgroundColor: 'orange',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Experience:
        </Text>
        <Text
          style={{
            marginLeft: 5,
            width: width * 0.4,
            height: height * 0.035,
            // backgroundColor: 'orange',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          5 Years
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          width: width * 0.92,
          height: height * 0.08,
          backgroundColor: 'rgba(22,23,23,0.5)',
          alignSelf: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <Text
          style={{
            marginLeft: 5,
            width: width * 0.4,
            height: height * 0.05,
            // backgroundColor: 'orange',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Location:
        </Text>
        <Text
          style={{
            marginLeft: 1,
            width: width * 0.5,
            height: height * 0.035,
            // backgroundColor: 'orange',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Toronto, Canada
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          width,
          height: height * 0.1,
          //   backgroundColor: 'rgba(22,23,23,0.5)',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            marginLeft: 10,
            width: width * 0.45,
            height: height * 0.09,
            backgroundColor: 'rgba(255, 224, 178, 0.5)',
            flexDirection: 'column',
            shadowColor: 'rgba(22,23,23,0.5)',
            shadowOffset: {width: 7, height: 7},
            elevation: 3,
            shadowOpacity: 5,
          }}>
          <Text
            style={{
              marginTop: 2,
              width: width * 0.4,
              height: height * 0.04,
              //   backgroundColor: 'orange',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
            }}>
            Gender:
          </Text>
          <Text
            style={{
              marginTop: 3,
              width: width * 0.4,
              height: height * 0.04,
              //   backgroundColor: 'orange',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
            }}>
            Male
          </Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            width: width * 0.45,
            height: height * 0.09,
            backgroundColor: 'rgba(255, 224, 178, 0.5)',
            flexDirection: 'column',
            shadowColor: 'rgba(22,23,23,0.5)',
            shadowOffset: {width: 7, height: 7},
            elevation: 3,
            shadowOpacity: 5,
          }}>
          <Text
            style={{
              marginTop: 2,
              width: width * 0.4,
              height: height * 0.04,
              //   backgroundColor: 'orange',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
            }}>
            Subjects:
          </Text>
          <Text
            style={{
              padding: 6,
              marginTop: 1,
              width: width * 0.45,
              height: height * 0.044,
              //   backgroundColor: 'orange',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            Hindi, English
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
          width,
          height: height * 0.22,
        //   backgroundColor: 'pink',
          alignSelf: 'center',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            width: width * 0.5,
            height: height * 0.05,
            // backgroundColor: 'white',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Education :
        </Text>
        <Text
          style={{
            width: width * 0.98,
            height: height * 0.09,
            // backgroundColor: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'normal',
            alignSelf: 'center',
          }}>
          Formal education is commonly divided formally into such stages as
          preschool or kindergarten.
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('')}>
          <LinearGradient
            colors={['#FFF176', '#FFC107', '#FF9800']}
            style={{
                marginTop: 10,
              width: width * 0.7,
              height: height * 0.06,
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              alignSelf:'center',
              borderRadius: 25,
            }}>
            <Text
              style={{
                fontSize: height * 0.035,
                fontWeight: 'bold',
                color: 'white',
              }}>
              EDIT
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfilePage;
