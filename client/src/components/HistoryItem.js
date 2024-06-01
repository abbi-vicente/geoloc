import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HistoryItem = ({ item, selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item.ip)}>
      <View style={styles.historyItem}>
        <View>
          <Text>{item.ip}</Text>
          <Text>
            {item.data.city}, {item.data.region}
          </Text>
        </View>
        <Text style={[styles.checkbox, { color: selected ? "blue" : "black" }]}>{selected ? "✓" : " "}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  checkbox: {
    fontSize: 18,
  },
});

export default HistoryItem;
