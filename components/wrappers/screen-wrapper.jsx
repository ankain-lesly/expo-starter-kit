import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import colors from "@/constants/colors";

export const ScreenWrapper = ({ style, children, isStatusBar = true }) => {
  return (
    <>
      <SafeAreaView className={`${style}`} style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
      {isStatusBar && (
        <StatusBar backgroundColor={colors.primary} style="light" />
      )}
    </>
  );
};

export const ScreenWrapperScroll = ({
  style,
  children,
  contextFlex = false,
  scrollbar = false,
  isStatusBar = true,
}) => {
  return (
    <>
      <SafeAreaView className={`${style}`} style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={scrollbar}
          contentContainerStyle={contextFlex ? { flex: 1 } : {}}>
          {children}
        </ScrollView>
      </SafeAreaView>
      {isStatusBar && (
        <StatusBar backgroundColor={colors.primary} style="light" />
      )}
    </>
  );
};

export const ScreenWithKeyboardAvoiding = ({
  style,
  children,
  isStatusBar,
}) => {
  return (
    <SafeAreaView className={`${style}`} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
      </KeyboardAvoidingView>
      {isStatusBar && (
        <StatusBar backgroundColor={colors.primary} style="light" />
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
