import { TextInputProps, TouchableOpacityProps } from "react-native";
export {};

declare global {
  type DemoTypes = {
    title?: string;
  };

  interface ButtonProps extends TouchableOpacityProps {
    onPress: (...e: any) => null;
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
  }

  interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
  }
}
