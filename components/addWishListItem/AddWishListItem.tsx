import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function AddWishListItem() {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Add Item" />
    </View>
  );
}
