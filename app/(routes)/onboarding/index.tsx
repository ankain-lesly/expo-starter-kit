import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 bg-yellow-400 items-center justify-center">
        <Text className="text-2xl font-bold text-center">
          Onboarding Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}
