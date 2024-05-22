import { Ionicons } from "@expo/vector-icons";
import { Modal, TouchableOpacity, View, Text, TextInput } from "react-native";
import { Formik } from "formik";

interface Props {
  visible: boolean;
  onClose: () => void;
}
export const AddNews = ({ visible, onClose }: Props) => (
  <Modal visible={visible} className="bg-red-100">
    <View className="flex-row flew-nowrap justify-between p-2 items-center">
      <Text className="text-2xl font-bold text-slate-700 text-center grow">
        Add new article
      </Text>
      <TouchableOpacity onPress={onClose} className="w-min ">
        <Ionicons name="close-circle" size={40} color="gray" />
      </TouchableOpacity>
    </View>
    <View className="p-2 gap-2"></View>
  </Modal>
);
