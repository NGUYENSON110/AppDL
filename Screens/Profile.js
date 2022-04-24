import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialIcons";
import Iconss from "react-native-vector-icons/MaterialCommunityIcons";
import Iconsss from "react-native-vector-icons/Entypo";
import Iconssss from "react-native-vector-icons/FontAwesome5";
import Iconsssss from "react-native-vector-icons/Feather";

export default function Profile() {
  return (
    <SafeAreaView 
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {/* Avatar */}
          <View>
            <Image
              style={style.avatar}
              source={require("../Image/avatar.png")}
            />
          </View>

          {/* Profile */}
          <View style={style.Profile}>
            <Text style={style.Profile_text1}>NGUYEN AN SON</Text>
            <Text style={style.Profile_text2}>@sonannguyen</Text>
          </View>
        </View>

        {/* Thông Tin profile */}
        <View>
          <View style={style.Profile_row}>
            <Icon name="map-marker" size={30} color="#777777" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 20,
                marginTop: 5,
                fontSize: 15,
              }}
            >
              Phường Đức Thắng , Bắc Từ Liêm , Hà Nội
            </Text>
          </View>

          <View style={style.Profile_row}>
            <Icon name="phone" size={30} color="#777777" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 20,
                marginTop: 5,
                fontSize: 15,
              }}
            >
              +84 977 855 968
            </Text>
          </View>

          <View style={style.Profile_row}>
            <Iconss name="gmail" size={30} color="#777777" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 20,
                marginTop: 5,
                fontSize: 15,
              }}
            >
              nguyenanson2000110@gmail.com
            </Text>
          </View>
        </View>

        {/* Gạch chéo */}
        <View style={{
           borderWidth: 1,
           marginTop: 20,
           borderColor: '#dddddd',
        }}>

        </View>


        {/* Item - menu */}
        <View>

        <View style={style.menuHeart}>
            <Iconsss name="heart-outlined" size={30} color="#FF6347" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 30,
                marginTop: 5,
                fontSize: 15,
              }}
            >
              Your Favorites
            </Text>
          </View>

          <View style={style.menuHeart}>
            <Icons name="payment" size={30} color="#FF6347" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 30,
                marginTop: 5,
              }}
            >
              Payment
            </Text>
          </View>

          <View style={style.menuHeart}>
            <Iconssss name="user-friends" size={23} color="#FF6347" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 30,
                marginTop: 5,
              }}
            >
              User - friends
            </Text>
          </View>

          <View style={style.menuHeart}>
            <Icons name="support-agent" size={30} color="#FF6347" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 30,
                marginTop: 5,
              }}
            >
              Support
            </Text>
          </View>

            <View style={style.menuHeart}>
            <Iconsssss name="settings" size={30} color="#FF6347" />
            <Text
              style={{
                color: "#777777",
                marginLeft: 30,
                marginTop: 5,
              }}
            >
             Settings
            </Text>
          </View>   
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {},
  //   avatar
  avatar: {
    width: 130,
    height: 130,
    marginTop: 10,
    borderRadius: 50,
    marginLeft: 20,
  },
  //   Profile
  Profile: {
    marginTop: 30,
    marginLeft: 20,
  },

  Profile_text1: {
    color: "black",
    fontSize: 20,
  },

  Profile_text2: {
    color: "#777777",
    marginTop: 10,
  },
  Profile_row: {
    marginTop: 10,
    marginLeft: 15,
    flexDirection: "row",
  },
//   Item - menu
menuHeart:{
    marginTop: 20,
    marginLeft: 15,
    flexDirection:'row'
}
});
