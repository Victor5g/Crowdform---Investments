import { ActivityIndicator, View } from "react-native";

import { LoadingItem } from "./type";
import style from "./style";

const Loading = ({ loading, invertColor, children }: LoadingItem) => {
  return loading ? (
    <View style={style.container}>
      <ActivityIndicator
        size="small"
        color={invertColor ? "#FFFFFF" : "#000000"}
      />
    </View>
  ) : (
    children
  );
};

export default Loading;
