import { View } from "react-native";
import { AddWishListItem } from "../addwishListItem/AddWishListItem";
import { WishListItem } from "../wishListItem/WishListItem";
import { styles } from "./styles";

export function WishList() {
  return (
    <View style={styles.container}>
      <AddWishListItem />
      <WishListItem />
      <WishListItem />
      <WishListItem />
    </View>
  );
}
