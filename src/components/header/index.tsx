import { View } from "react-native";

import style from "./style";

const Header = ({ children }: any) => {
  return <View style={style.container}>{children}</View>;
};

export default Header;
