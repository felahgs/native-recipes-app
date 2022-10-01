import {
  TextInput as NativeTextInput,
  TextInputProps,
  StyleProp,
} from "react-native";

export interface SearchInput
  extends JSX.IntrinsicAttributes,
    JSX.IntrinsicClassAttributes<NativeTextInput>,
    Readonly<TextInputProps> {
  passedStyle?: StyleProp<{}>;
}
