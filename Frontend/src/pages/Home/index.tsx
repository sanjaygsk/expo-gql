import { gql, useQuery } from "@apollo/client";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const GET_ALL_MATCHES = gql`
    query GetAllMatch {
      getAllMatches {
        id
        date
        status
        team1 {
          id
          name
        }
        team2 {
          id
          name
        }
      }
    }
  `;

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
        ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: "grey", marginVertical: 10}} />}
        renderItem={({ item }) => (
          <>
          <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderBottomColor: "#000000", marginVertical: 10}}>
            <View style={{width: "20%"}}>
              <Text style={{fontSize: 16}}>Match Id: {(item.id).substring(0,4)}</Text>
              <Text style={{fontSize: 20, paddingTop: 20}}>Match Date: {new Date(item.date).toLocaleDateString()}</Text>
            </View>
            <View style={{width: "20%", marginHorizontal: "10%", flexDirection: "row", justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.team1.name}</Text>
              <Text style={{fontSize: 12, paddingHorizontal: 20, fontStyle: "italic"}}>Vs</Text>
              <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.team2.name}</Text>
            </View>
            <View style={{width: "20%"}}>
              <Text style={{fontSize: 16, }}>{item.status}</Text>
            </View>
          </View>
          </>
        )}
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