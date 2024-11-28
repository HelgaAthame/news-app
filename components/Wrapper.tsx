import { ReactNode } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => (
  <SafeAreaView className="flex-1 pt-[${StatusBar.currentHeight}]">
    <ScrollView
      className="flex grow flex-col bg-red-100 items-center p-4 gap-4"
      showsVerticalScrollIndicator={false}
    >
      <View className="h-full flex flex-col gap-4">{children}</View>
    </ScrollView>
  </SafeAreaView>
);
