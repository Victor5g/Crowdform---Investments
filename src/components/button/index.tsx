import { TouchableOpacity, Text } from "react-native";

import { PropsButton } from "./type";

import style from "./style";

const Button = (props: PropsButton) => {
  return (
    <TouchableOpacity {...props} style={style.container}>
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
