import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Modal, View, Platform } from "react-native";

export default function TestModal({ isOpen, withInput, children, ...rest }) {
  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent
      statusBarTranslucent
      {...rest}>
      {/* Content */}
      {withInput ? (
        <KeyboardAvoidingView
          className={`flex-1`}
          behavior={
            Platform.OS == "ios" ? "padding" : "height"
          }></KeyboardAvoidingView>
      ) : (
        <View style={{ flex: 1 }}>{children}</View>
      )}
      <StatusBar backgroundColor={""} style="light" />
    </Modal>
  );
}
