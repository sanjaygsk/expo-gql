import MatchItem from "@/src/components/MatchItem";
import { GET_ALL_MATCHES } from "@/src/graphql/queries";
import { useQuery } from "@apollo/client";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_MATCHES);

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.getAllMatches || []}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 8,
          marginVertical: 10
        }}
        renderItem={MatchItem}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#000000",
    padding: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    padding: 8,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    color: "#000000",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#000000",
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "red",
  },
});

export default Home;