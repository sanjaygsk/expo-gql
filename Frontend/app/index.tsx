import { StyleSheet, View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import client from "@/src/graphql/ApolloClient";
import Navigator from "@/src/navigation";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ApolloProvider client={client}>
            <Navigator />
          </ApolloProvider>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
