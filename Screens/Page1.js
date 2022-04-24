import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const image = {
  uri: "https://www.ahstatic.com/photos/9770_ho_00_p_1024x768.jpg",
};

const DatCho = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.Item}>
        <TouchableOpacity style={styles.List}>
          <View style={styles.Handle}>
            <Image
              source={require("../Image/logomaybay.png")}
              style={styles.Handle_logo}
            />
          </View>
          <View style={styles.list1}>
            <Text style={styles.Handle_text}>Chuyến Bay</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.List}>
          <View style={styles.Handle}>
            <Image
              source={require("../Image/logomaybay.png")}
              style={styles.Handle_logo}
            />
          </View>
          <View style={styles.list1}>
            <Text style={styles.Handle_text}>Khách Sạn</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.List}>
          <View style={styles.Handle}>
            <Image
              source={require("../Image/logomaybay.png")}
              style={styles.Handle_logo}
            />
          </View>
          <View style={styles.list1}>
            <Text style={styles.Handle_text}>Chuyến Tàu</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.List}>
          <View style={styles.Handle}>
            <Image
              source={require("../Image/logomaybay.png")}
              style={styles.Handle_logo}
            />
          </View>

          <View style={styles.list1}>
            <Text style={styles.Handle_text}>Tham Quan</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  Item: {
    flexDirection: "row",
    justifyContent:'space-around'
  },
  List: {
    
  },
  list1: {
  
  },
  Handle: {
    padding: 10,
    width: 70,
    height: 70,
    backgroundColor: "#d5dfe4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 60,
  },
  Handle_logo: {
    width: 50,
    height: 50,
  },

  Handle_text: {
    fontSize: 15,
   
    flexWrap: "wrap",
    color: "white",
  },
});

export default DatCho;
