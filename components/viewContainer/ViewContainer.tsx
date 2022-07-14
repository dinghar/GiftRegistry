import { View } from "react-native";
import { styles } from "./styles";

export function ViewContainer({ children }) {
    return <View style={styles.viewContainer}>{children}</View>
}