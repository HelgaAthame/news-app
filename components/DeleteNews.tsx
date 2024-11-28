import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, View, Text, TextInput } from "react-native";
import { Formik } from "formik";
import { News } from "./Welcome";
import { useMutation } from "@apollo/client";
import { ALL_NEWS, REMOVE_NEWS } from "../apollo/news";
import { Button } from "./Button";

interface Props {
  visible: boolean;
  onClose: () => void;
  id: number;
  name: string;
}

export const DeleteNews = ({ visible, onClose, id, name }: Props) => {
  const [removeArticle, { error }] = useMutation(REMOVE_NEWS, {
    refetchQueries: [ALL_NEWS],
  });
  if (error) {
    return <Text>{JSON.stringify(error, null, 2)}</Text>;
  }
  return (
    <Modal visible={visible}>
      <View className="flex-row flew-nowrap relative p-2 bg-red-50 grow">
        <View className="h-full flex items-center justify-center max-w-full">
          <Text className="text-2xl font-bold text-slate-700 text-center p-2 sm:p-8">
            Area you sure you want to delete {name}?
          </Text>
        </View>
        <Pressable onPress={onClose} className="w-min absolute top-2 right-2">
          <Ionicons name="close-circle" size={40} color="gray" />
        </Pressable>
      </View>
      <View className="bg-red-50 w-full justify-between flex flex-row gap-2 p-2">
        <Button text="Cancel" onPress={onClose} color="gray" />

        <Button
          text="Delete"
          onPress={() => {
            removeArticle({ variables: { id: +id } });
            onClose();
          }}
        />
      </View>
    </Modal>
  );
};
