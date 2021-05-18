import React, {component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

function SignIn(props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          // marginTop: height * 0.01,
          width: width * 1,
          height: height * 0.06,
          alignItems: 'center',
          flexDirection: 'row',
          // backgroundColor:'pink'
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
      </View>
      <View
        style={{
          marginTop: height * 0.02,
          width,
          height: height * 0.08,
          //  backgroundColor: 'pink',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            padding: 5,
            color: 'black',
            // alignSelf: 'flex-start',
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 40,
            color: 'black',
            // backgroundColor:'pink'
          }}>
          Create Account
        </Text>
      </View>
      <View
        style={{
          marginTop: height * 0.02,
          width: width * 0.9,
          height: height * 0.45,
          // backgroundColor: 'pink',
          alignSelf: 'center',
          // justifyContent: 'center',
        }}>
        <View
          style={{
            width: width * 0.85,
            height: height * 0.08,
            // backgroundColor: 'yellow',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            flexDirection: 'row',
          }}>
          <AntIcon name="user" size={30} color="gray" />
          <TextInput
            style={{
              marginTop: 1,
              marginLeft: 5,
              alignSelf: 'center',
              width: width * 0.75,
              height: height * 0.07,
              //  backgroundColor: 'pink',
            }}
            placeholder="USER NAME"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: width * 0.85,
            height: height * 0.08,
            // backgroundColor: 'yellow',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            flexDirection: 'row',
          }}>
          <EntypoIcon name="mail" size={30} color="gray" />
          <TextInput
            style={{
              marginTop: 1,
              marginLeft: 5,
              alignSelf: 'center',
              width: width * 0.75,
              height: height * 0.07,
            }}
            placeholder="EMAIL"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: width * 0.85,
            height: height * 0.08,
            // backgroundColor: 'yellow',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            flexDirection: 'row',
          }}>
          <EntypoIcon name="lock" size={30} color="gray" />
          <TextInput
            style={{
              marginTop: 1,
              marginLeft: 5,
              alignSelf: 'center',
              width: width * 0.75,
              height: height * 0.07,
              //  backgroundColor: 'pink',
            }}
            placeholder="PASSWORD"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: width * 0.85,
            height: height * 0.08,
            // backgroundColor: 'yellow',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            flexDirection: 'row',
          }}>
          <EntypoIcon name="lock" size={30} color="gray" />
          <TextInput
            style={{
              marginTop: 1,
              marginLeft: 5,
              alignSelf: 'center',
              width: width * 0.75,
              height: height * 0.07,
            }}
            placeholder="CONFIRM PASSWORD"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: width * 0.85,
            height: height * 0.07,
            // backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              // padding: 5,
              marginLeft: -5,
              width: width * 0.29,
              height: height * 0.04,
              textAlign: 'center',
              justifyContent: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 30,
              // backgroundColor:'yellow'
            }}>
            Student
          </Text>
          <View
            style={{
              marginLeft: 5,
              width: width * 0.08,
              height: height * 0.04,
              borderRadius: 20,
              borderWidth: 2,
              alignSelf: 'center',
            }}></View>
          <Text
            style={{
              marginLeft: 15,
              // padding: 10,
              width: width * 0.29,
              height: height * 0.04,
              // backgroundColor: 'white',
              textAlign: 'center',
              justifyContent: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            Teacher
          </Text>
          <View
            style={{
              marginLeft: 5,
              width: width * 0.08,
              height: height * 0.04,
              // backgroundColor: 'yellow',
              borderRadius: 20,
              borderWidth: 2,
              alignSelf: 'center',
            }}></View>
        </View>
      </View>
      <View
        style={{
          marginTop: height * 0.03,
          width,
          height: height * 0.1,
          //  backgroundColor: 'pink',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('FormPage')}
          style={{
            width,
            height: height * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'rgba(255, 224, 178, 0.7)',
            shadowOffset: {width: 7, height: 7},
            elevation: 3,
            shadowOpacity: 5,
            flexDirection: 'row',
          }}>
          <LinearGradient
            colors={['#FFF176', '#FFC107', '#FF9800']}
            style={{
              width: width * 0.45,
              height: height * 0.08,
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              marginLeft: width * 0.3,
              borderRadius: 30,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: 'white',
              }}>
              SIGN UP
            </Text>
            <AntIcon
              name="arrowright"
              style={{marginLeft: 10, fontSize: height * 0.05, color: 'white'}}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('')}>
        <View
          style={{
            marginTop: height * 0.09,
            width: width * 0.97,
            height: height * 0.06,
            //  backgroundColor: 'yellow',
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 20,
              color: 'gray',
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('')}>
            <Text
              style={{
                marginLeft: 7,
                color: 'black',
                alignSelf: 'center',
                textAlign: 'right',
                fontWeight: 'bold',
                fontSize: 26,
                color: '#e91e',

                padding: 10,
                // textDecorationLine: 'underline',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default SignIn;
