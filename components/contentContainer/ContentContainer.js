import { View } from "react-native";
import { styles } from "./styles";

export function ContentContainer({ children }) {
    return (
        <View style={styles.contentContainer}>
            {children}
        </View>
    );
}