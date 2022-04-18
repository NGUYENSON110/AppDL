import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Image, Animated } from "react-native";
import Home from "../Screens/Home";
import Page1 from "../Screens/Page1";
import Page2 from "../Screens/Page2";
import Page3 from "../Screens/Page3";
import Profile from "../Screens/Profile";
import { BlurView } from "expo-blur";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#23527c",
        tabBarStyle: {
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 20,
          height: 70,
          borderRadius: 10,
          
        },
      }}
    >
        <Tab.Screen
        name="Home"
        component={Home}
        style={style.tabScreen}
        options={{
          title: '',
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
          
        }}
      />
     
      <Tab.Screen
        name="Page2"
        component={Page2}
        options={{
          title: '',
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-o" size={23} color={color} />
          ),
        }}
      />
     <Tab.Screen
        name="Page1"
        component={Page1}
        options={{
          title: '',
          tabBarLabel: 'ADD' ,
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-square-o" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Page3"
        component={Page3}
        options={{
          title: '',
          tabBarLabel: "Giỏ Hàng",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const style = StyleSheet.create({
  Tabar: {},
  item: {},
  tinyLogo: {
    width: 40,
    height: 40,
  },
  
});
