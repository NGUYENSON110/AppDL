import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/FontAwesome5";





export default function Explore() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      {/* Resreach */}

      <View style={style.Header_reSearch}>
            {/* Resreach */}
            <View style={style.reSreach}>
              <TextInput
                placeholder="ReSreach"
                style={{
                  width: 300,
                  height: 40,
                  backgroundColor: "#fff",
                  marginLeft: 10,
                  borderRadius: 10,
                  marginTop: 25,
                }}
              />
            </View>
            
            <TouchableOpacity>
              <View style={style.reSreach_icon_bell}>
                <Icon name="bell" size={23} color="#fff" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={style.reSreach_icon_bell}>
                <Icon name="comment" size={23} color="#fff" />
              </View>
            </TouchableOpacity>
            
          </View>










        <View>
          {/* Banner Image */}
          <View style={style.Banner}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={style.BannerHeader}>
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                New , Trending
              </Text>
            </View>

            {/* Story */} 
          
                
              <View style={style.Story}>
                <Image
                  style={style.StoryImage}
                  source={require("../Image/hanoi.jpg")}
                />
              </View>

              <View>
                <Image
                  style={style.StoryImage}
                  source={require("../Image/hanoi1.jpg")}
                />
              </View>

              <View>
                <Image
                  style={style.StoryImage}
                  source={require("../Image/hanoi2.jpg")}
                />
              </View>

              <View>
                <Image
                  style={style.StoryImage}
                  source={require("../Image/Hcm.jpg")}
                />
              </View>

              <View>
                <Image
                  style={style.StoryImage}
                  source={require("../Image/Hcm2.jpg")}
                />
              </View>

             

            </ScrollView>
          </View>
          {/* Image  */}

          <View style={style.Image}>
            <View style={style.ImageItem}>
              <Image
                style={style.ImageDetails}
                source={require("../Image/nhatrang.jpg")}
              />
              <View style={style.ImageText}>
                <Text>Nha Trang Tour</Text>
              </View>
            </View>

            <View style={style.ImageItem}>
              <Image
                style={style.ImageDetails}
                source={require("../Image/nhatrang1.jpg")}
              />
              <View style={style.ImageText}>
                <Text>Đà Nẵng Tour</Text>
              </View>
            </View>
          </View>

          {/*  */}

          <View style={style.Image}>
            <View style={style.ImageItem}>
              <Image
                style={style.ImageDetails}
                source={require("../Image/nhatrang2.jpg")}
              />
              <View style={style.ImageText}>
                <Text>Phú Quốc Tour</Text>
              </View>
            </View>

            <View style={style.ImageItem}>
              <Image
                style={style.ImageDetails}
                source={require("../Image/phuquoc.jpg")}
              />
              <View style={style.ImageText}>
                <Text>Vũng Tàu Tour</Text>
              </View>
            </View>
          </View>

          <View style={style.Image}>
            <View style={style.ImageItem}>
              <Image
                style={style.ImageDetails}
                source={require("../Image/phuquoc2.jpeg")}
              />
              <View style={style.ImageText}>
                <Text>Hồ Chí Minh Tour</Text>
              </View>
            </View>

            <View style={style.ImageItem}>
              <Image
                style={style.ImageDetails}
                source={require("../Image/phuquoc3.jpg")}
              />
              <View style={style.ImageText}>
                <Text>Đà Lạt Tour</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
  
  },

  // Reseacrh
  Header_reSearch: {
    backgroundColor: "#00dcff",
    height: 90,
    flexDirection: "row",
  },
  reSreach_icon_bell: {
    marginTop: 33,
    marginLeft: 12,
  },
  tinyLogo: {
    width: 400,
    height: 100,
  },
  //   Banner Image
  Banner: {
    flexDirection: "row",
    marginTop: 10,
  },
  // Story
  Story:{

  },    
  StoryImage: {
    width: 90,
    height: 90,
    marginLeft: 15,
    borderRadius: 50,
    
  },

  BannerHeader: {
    width: 140,
    height: 90,
    backgroundColor: "#21c4ed",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  //   Image
  Image: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  ImageItem: {
    justifyContent: "center",
    alignItems: "center",
  },

  ImageDetails: {
    width: 160,
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  ImageText: {
    backgroundColor: "#f6f8f9",
    width: 158,
    height: 25,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 3,
    padding: 3,
  },
});
