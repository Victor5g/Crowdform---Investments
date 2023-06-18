import { ActivityIndicator, View } from "react-native";

import { LoadingItem } from "./type";
import style from "./style";

const Loading = ({ loading, children }: LoadingItem) => {
  return loading ? (
    <View style={style.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  ) : (
    children
  );
};

export default Loading;
