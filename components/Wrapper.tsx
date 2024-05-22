import { ReactNode } from "react";
import { View } from "react-native";

interface Props {
    children: ReactNode
}

export const Wrapper = ({ children }: Props) => (
  <View className="text-white-300 bg-red-100 h-full items-center justify-center p-4 gap-4 ">
    <View className="h-0" />
    {children}
  </View>
);
