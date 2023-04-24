import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { PropsCheckBox } from "./type";

import style from "./style";

const CheckBox = (props: PropsCheckBox) => {
  const [selected, setSelected] = useState(false);

  const selectOption = () => {
    setSelected(!selected);
    if (props.changeState) {
      props.changeState(!selected);
    }
  };

  return (
    <TouchableOpacity
      {...props}
      onPress={selectOption}
      style={[style.checkBox, selected ? style.selected : style.unSelected]}
    />
  );
};

export default CheckBox;
