import React from "react";      
import { SafeAreaView, View, Text, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = () => {
  const {container, city, cityText, country, countryText, populationText, populationWrapper, rowLayout,
        riseSetText, riseSetWrapper} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/sunset.jpg')} style={styles.image}>
        <Text style={[city, cityText]}>Prague</Text>
        <Text style={[country, countryText]}>Czech Republic</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"white"}
            iconText={"70,000"}
            bodyTextStyles={populationText}
          />
          
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            iconText={"06:00:00am"}
            bodyTextStyles={riseSetText}
          />

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            iconText={"19:00:00pm"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1,
  },
  city: {
    fontSize: 30,
  },
  country: {
    fontSize: 15,
  },
  cityText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center"
  },
  countryText: {
    fontSize: 15,
    justifyContent: "center",
    alignSelf: "center",
    color: "white"
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 20
  },
  populationText: {
    color: "white",
    fontSize: 20,
    marginLeft: 7.5,
    color: "white",
    fontWeight: "bold"
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 20
  },
  riseSetText: {
    fontSize: 20,
    marginLeft: 7.5,
    fontWeight: "bold",
    color: "white"
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  }
});

export default City;