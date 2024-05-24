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
import { News } from "./Welcome";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_NEWS } from "../apollo/news";

interface Props {
  visible: boolean;
  onClose: () => void;
  //addArticle: (article: News) => void;
}

const formInput =
  "border rounded-md border-slate-400 active:border-slate-700 p-2";
const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(250, "Too Long!")
    .required("Required"),
  text: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  img: Yup.string()
    .min(2, "Too Short!")
    .max(250, "Too Long!")
    .url("Invalid URL")
    .required("Required"),
});

export const AddNews = ({ visible, onClose /*, addArticle*/ }: Props) => {
  const [addArticle, { error }] = useMutation(CREATE_NEWS);
  if (error) {
    return <Text>{JSON.stringify(error, null, 2)}</Text>;
  }
  return (
    <Modal visible={visible}>
      <View className="flex-row flew-nowrap justify-between p-2 items-center bg-red-50">
        <Text className="text-2xl font-bold text-slate-700 text-center grow">
          Add new article
        </Text>
        <TouchableOpacity onPress={onClose} className="w-min ">
          <Ionicons name="close-circle" size={40} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="gap-2 bg-red-50 grow">
        <Formik
          initialValues={{
            title: "",
            description: "",
            text: "",
            img: "",
          }}
          onSubmit={(values, action) => {
            addArticle({
              variables: {
                news: values as News,
              },
            });
            action.resetForm();
          }}
          validationSchema={AddSchema}
        >
          {(props) => (
            <View className="p-3 gap-3 w-full grow m-0">
              <View className="h-14 justify-end">
                {props.errors.title && props.touched.title ? (
                  <Text className="text-red-600 font-semibold text-xs">
                    {props.errors.title}
                  </Text>
                ) : null}
                <TextInput
                  className={formInput}
                  value={props.values.title}
                  placeholder="Title"
                  onChangeText={props.handleChange("title")}
                />
              </View>
              <View className="h-14 justify-end">
                {props.errors.description && props.touched.description ? (
                  <Text className="text-red-600 font-semibold text-xs">
                    {props.errors.description}
                  </Text>
                ) : null}
                <TextInput
                  className={formInput}
                  value={props.values.description}
                  placeholder="Description"
                  onChangeText={props.handleChange("description")}
                />
              </View>
              <View className="h-14 justify-end">
                {props.errors.text && props.touched.text ? (
                  <Text className="text-red-600 font-semibold text-xs">
                    {props.errors.text}
                  </Text>
                ) : null}
                <TextInput
                  className={formInput}
                  value={props.values.text}
                  placeholder="Text content"
                  onChangeText={props.handleChange("text")}
                />
              </View>
              <View className="h-14 justify-end">
                {props.errors.img && props.touched.img ? (
                  <Text className="text-red-600 font-semibold text-xs">
                    {props.errors.img}
                  </Text>
                ) : null}
                <TextInput
                  className={formInput}
                  value={props.values.img}
                  placeholder="Image URL"
                  onChangeText={props.handleChange("img")}
                />
              </View>
              <View>
                <Button
                  title="Добавить"
                  onPress={() => props.handleSubmit()}
                  color="crimson"
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};
