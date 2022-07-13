import { Text, View } from 'react-native';
import { styles } from "./styles";

export function WishListItem() {
    return (
        <View style={styles.container}>
            <Text>To Kill a Mockingbird by Harper Lee</Text>
        </View>
    );
}