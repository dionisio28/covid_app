import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigation from "./src/routes";

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
