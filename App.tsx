import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import OverviewProvider from "./src/context";

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <OverviewProvider>
          <Routes />
        </OverviewProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
