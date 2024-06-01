import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import StoreProvider from "./src/store";

const App = () => {
  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  );
};

export default App;
