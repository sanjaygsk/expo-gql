import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchItem = ({ item }) => (
  <View style={styles.matchContainer}>
    {/* Match Info */}
    <View style={styles.matchInfo}>
      <Text style={styles.matchId}>Match Id: {item.id.substring(0, 4)}</Text>
      <Text style={styles.matchDate}>
        Match Date: {new Date(item.date).toLocaleDateString()}
      </Text>
    </View>

    {/* Teams Info */}
    <View style={styles.teamsInfo}>
      <Text style={styles.teamName}>{item.team1.name}</Text>
      <Text style={styles.vsText}>Vs</Text>
      <Text style={styles.teamName}>{item.team2.name}</Text>
    </View>

    {/* Match Status */}
    <View style={styles.matchStatus}>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  </View>
);

export default MatchItem;

const styles = StyleSheet.create({
  matchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  matchInfo: {
    width: "30%",
  },
  matchId: {
    fontSize: 16,
  },
  matchDate: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
  },
  teamsInfo: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  vsText: {
    fontSize: 14,
    fontStyle: "italic",
    marginHorizontal: 10,
  },
  matchStatus: {
    width: "30%",
    alignItems: "flex-end",
  },
  status: {
    fontSize: 16,
    color: "#333",
  },
});