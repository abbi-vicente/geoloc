import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList } from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";
import HistoryItem from "../components/HistoryItem";

const HomeScreen = () => {
  const token = useSelector((state) => state.auth.token);
  const [geoInfo, setGeoInfo] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch user's IP info on initial load
    fetchGeoInfo();
  }, []);

  const fetchGeoInfo = async (ip = "") => {
    try {
      const response = await axios.get(`https://ipinfo.io/${ip}/geo`);
      setGeoInfo(response.data);
      if (ip) {
        setHistory([...history, { ip, data: response.data }]);
      }
    } catch (error) {
      Alert.alert("Error", "Invalid IP address");
    }
  };

  const handleSearch = () => {
    fetchGeoInfo(ipAddress);
  };

  const handleClear = () => {
    setIpAddress("");
    fetchGeoInfo();
  };

  const handleDelete = (item) => {
    const updatedHistory = history.filter((historyItem) => historyItem.ip !== item.ip);
    setHistory(updatedHistory);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>IP Address</Text>
      <TextInput style={styles.input} value={ipAddress} onChangeText={setIpAddress} keyboardType="numeric" />
      <Button title="Search" onPress={handleSearch} />
      <Button title="Clear" onPress={handleClear} />

      {geoInfo && (
        <View style={styles.geoInfo}>
          <Text>IP: {geoInfo.ip}</Text>
          <Text>City: {geoInfo.city}</Text>
          <Text>Region: {geoInfo.region}</Text>
          <Text>Country: {geoInfo.country}</Text>
          <Text>Location: {geoInfo.loc}</Text>
        </View>
      )}

      {history.length > 0 && (
        <View style={styles.history}>
          <Text style={styles.historyTitle}>Search History</Text>
          <FlatList
            data={history}
            renderItem={({ item }) => <HistoryItem item={item} onDelete={handleDelete} />}
            keyExtractor={(item) => item.ip}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  geoInfo: {
    marginTop: 16,
  },
  history: {
    marginTop: 16,
  },
  historyTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  historyItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default HomeScreen;
