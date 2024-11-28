import { Text, Pressable } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
  color?: string;
}

export const Button = ({ text, onPress, color = "red" }: Props) => {
  let classnames = "";
  switch (color) {
    case "gray":
      classnames = "bg-gray-800 active:bg-gray-700 shadow-gray-500/50";
      break;
    default:
      classnames = "bg-red-800 active:bg-red-700 shadow-red-500/50";
  }
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-lg px-5 py-2 ${classnames} transition-all duration-200 max-w-full flex justify-center`}
    >
      <Text className="text-white uppercase text-lg tracking-wide font-semibold text-center">
        {text}
      </Text>
    </Pressable>
  );
};
