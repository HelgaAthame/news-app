import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { Formik } from "formik";
import { News } from "./Welcome";
import { useMutation } from "@apollo/client";
import { ALL_NEWS, REMOVE_NEWS } from "../apollo/news";

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
      <View className="flex-row flew-nowrap justify-between p-2 bg-red-50 grow">
        <View className="h-full flex items-center justify-center ">
          <Text className="text-2xl font-bold text-slate-700 text-center p-8">
            Area you sure you want to delete {name}?
          </Text>
        </View>
        <TouchableOpacity onPress={onClose} className="w-min ">
          <Ionicons name="close-circle" size={40} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="bg-red-50 w-full justify-between flex flex-row gap-2 p-2">
        <Button title="Cancel" onPress={onClose} color="gray" />
        <Button
          title="Delete"
          onPress={() => {
            removeArticle({ variables: { id: +id } });
            onClose();
          }}
          color="crimson"
        />
      </View>
    </Modal>
  );
};
