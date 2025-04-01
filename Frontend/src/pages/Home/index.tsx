import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>Home Page</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#FFFFFF",
  },
});

export default Home;