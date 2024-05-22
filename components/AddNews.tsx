import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { Formik, FormikHelpers, FormikValues } from "formik";

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
    <View className="p-2 gap-2">
      <Formik
        initialValues={{
          title: "",
          description: "",
          text: "",
          img: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              value={props.values.title}
              placeholder="Title"
              onChangeText={props.handleChange("title")}
            />
            <TextInput
              value={props.values.description}
              placeholder="Description"
              onChangeText={props.handleChange("description")}
            />
            <TextInput
              value={props.values.text}
              placeholder="Text content"
              onChangeText={props.handleChange("text")}
            />
            <TextInput
              value={props.values.img}
              placeholder="Image URL"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Добавить" onPress={() => props.handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  </Modal>
);
