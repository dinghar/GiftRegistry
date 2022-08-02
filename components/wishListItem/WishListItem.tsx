import { Button, Text, View } from "react-native";
import { styles } from "./styles";

export function WishListItem() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          To Kill a Mockingbird by Harper Lee Mockingbird by Harper Lee
          Mockingbird by Harper Lee
        </Text>
        <Text style={styles.url}>www.amazon.com/tokillamockingbird</Text>
      </View>
      <View style={styles.claimButton}>
        <Button title="Claim" />
      </View>
    </View>
  );
}
