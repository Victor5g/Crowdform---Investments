import { TouchableOpacityProps } from "react-native";

export interface PropsCheckBox extends TouchableOpacityProps {
  changeState?: (value: boolean) => void;
}
