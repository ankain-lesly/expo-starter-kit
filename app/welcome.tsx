import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function welcome() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 bg-blue-300 items-center justify-center">
        <Text className="text-2xl font-bold text-center">Welcome</Text>
      </View>
    </SafeAreaView>
  );
}
