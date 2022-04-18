import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const image = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2022/02/28/1646037390722-542c35c8a764000285561b5a4cbba859.png?tr=h-150,q-75,w-296",
  "https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=h-150,q-75,w-296",
  "https://ik.imagekit.io/tvlk/image/imageResource/2022/04/01/1648815495505-545abc85dfd0f078d80d87683ca9fbcb.jpeg?tr=h-150,q-75,w-296",
];

const Dulich = [];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
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

            <View style={style.reSreach_icon_bell}>
              <Icon name="bell" size={23} color="#fff" />
            </View>

            <View style={style.reSreach_icon_bell}>
              <Icon name="comment" size={23} color="#fff" />
            </View>
          </View>

          {/*Story   */}

          <View style={style.Story}>
            <View style={style.chuyenbay}>
              <TouchableOpacity>
                <Image
                  style={style.icon_chuyenbay}
                  source={require("../Image/iconmaybay.png")}
                />
                <Text style={style.Story_icon_text}>Chuyến Bay</Text>
              </TouchableOpacity>
            </View>

            <View style={style.combo}>
              <TouchableOpacity>
                <Image
                  style={style.icon_combo}
                  source={require("../Image/iconcombo.jpg")}
                />
                <Text style={style.Story_icon_text}>Combo Tiết Kiệm</Text>
              </TouchableOpacity>
            </View>

            <View style={style.experience}>
              <TouchableOpacity>
                <Image
                  style={style.icon_experience}
                  source={require("../Image/iconExperience.png")}
                />
                <Text style={style.Story_icon_text}>Experience</Text>
              </TouchableOpacity>
            </View>

            <View style={style.gift}>
              <TouchableOpacity>
                <Image
                  style={style.icon_gift}
                  source={require("../Image/icongift.png")}
                />
                <Text style={style.Story_icon_text}>Phiếu quà tặng</Text>
              </TouchableOpacity>
            </View>

            <View style={style.khachsan}>
              <TouchableOpacity>
                <Image
                  style={style.icon_khachsan}
                  source={require("../Image/iconkhanhsan.jpg")}
                />
                <Text style={style.Story_icon_text}>Hotel, Khách Sạn</Text>
              </TouchableOpacity>
            </View>

            <View style={style.taxi}>
              <TouchableOpacity>
                <Image
                  style={style.icon_taxi}
                  source={require("../Image/icontaxi.jpg")}
                />
                <Text style={style.Story_icon_text}> Taxi</Text>
              </TouchableOpacity>
            </View>

            <View style={style.news}>
              <TouchableOpacity>
                <Image
                  style={style.icon_news}
                  source={require("../Image/iconews.jpg")}
                />
                <Text style={style.Story_icon_text}> News</Text>
              </TouchableOpacity>
            </View>

            <View style={style.Dulich}>
              <TouchableOpacity>
                <Image
                  style={style.icon_Dulich}
                  source={require("../Image/icondulich.jpg")}
                />
                <Text style={style.Story_icon_text}>Du Lịch</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Gạch chân */}
          <View style={{
            border: 1,
            width: '100%',
            height: 2,
            backgroundColor: "#dfebee",
          }}></View>
          {/* Casual Image, Uu Dai khach hang */}
          <View>
            <View>
              <Text
                style={{
                  fontFamily: "tahoma",
                  fontSize: 15,
                  marginTop: 5,
                  color: "#333",
                  marginLeft: 10,
                }}
              >
                <Icons name="fire-alt" size={20} color="red" style={{}} /> Siêu
                Ưu Đãi 50%{" "}
                <Icons name="fire-alt" size={20} color="red" style={{}} />
              </Text>
              <Text
                style={{
                  fontFamily: "tahoma",
                  fontSize: 13,
                  marginLeft: 14,
                  color: "#354148",
                }}
              >
                Kèm mã giảm giá thêm tới 2 triệu
              </Text>
            </View>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              {image.map((images, index) => (
                <Image
                  key={images}
                  resizeMode="contain"
                  source={{ uri: images }}
                  style={style.casual}
                />
              ))}
            </ScrollView>
          </View>

          {/* Du lich  */}

          <View>
            <View>
              <Text
                style={{
                  fontFamily: "tahoma",
                  fontSize: 17,
                  marginTop: 15,
                  color: "#333",
                  marginLeft: 10,
                }}
              >
                Nghỉ dưỡng, vui chơi gần nhà!{" "}
              </Text>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={style.TouchClick}>Nha Trang</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={style.TouchClick}>HCM</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={style.TouchClick}>Vũng Tàu</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={style.TouchClick}>Phan Thiết</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={style.TouchClick}>Phú Quốc</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
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
  casual: {
    marginTop: 10,
    width: windowWidth,
    height: windowHeight * 0.25,
    borderRadius: 5,
  },
  TouchClick: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#009FFF",
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontFamily: "tahoma",
    fontSize: 14,
  },
  // Story
  Story: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  chuyenbay: {
    flexWrap: "wrap",
    width: 50,
    height: 80,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  combo: {
    flexWrap: "wrap",
    width: 60,
    height: 80,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  experience: {
    flexWrap: "wrap",
    width: 70,
    height: 80,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  gift: {
    flexWrap: "wrap",
    width: 70,
    height: 80,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  khachsan: {
    flexWrap: "wrap",
    width: 70,
    height: 80,
    marginLeft: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  taxi: {
    flexWrap: "wrap",
    width: 70,
    height: 80,
    marginLeft: -70,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  news: {
    flexWrap: "wrap",
    width: 70,
    height: 80,
    marginLeft: -60,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Dulich: {
    flexWrap: "wrap",
    width: 70,
    height: 80,
    marginLeft: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  // Icon
  icon_chuyenbay: {
    width: 37,
    height: 37,
    borderRadius: 10,
    marginLeft: 5,
  },
  icon_combo: {
    width: 37,
    height: 37,
    borderRadius: 10,
    marginLeft: 10,
  },
  icon_experience: {
    width: 37,
    height: 37,
    borderRadius: 10,
    marginLeft: 12,
    marginTop: -10,
  },
  icon_gift: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginLeft: 15,
  },
  icon_khachsan: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
  },
  icon_taxi: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: -15,
  },
  icon_news: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: -15,
  },
  icon_Dulich: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: -2,
    marginTop: -15,
  },
  Story_icon_text: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    textAlign: "center",
  },
});
