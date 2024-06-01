import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import LoginScreen from "./LoginScreen";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      // Make a POST request to the signup endpoint
      const response = await axios.post("http://localhost:4000/api/users/signup", { email, password });

      // Handle successful signup (e.g., show a success message)
      Alert.alert("Signup Successful", "You have successfully signed up!");

      // Redirect to login screen
      navigation.navigate("Login");
    } catch (error) {
      // Handle signup error (e.g., display an error message)
      Alert.alert("Signup Failed", "An error occurred during signup. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="I already have an account" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
});

export default SignupScreen;
