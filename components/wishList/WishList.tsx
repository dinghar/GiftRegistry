import { View } from "react-native";
import { WishListItem } from "../wishListItem/WishListItem";
import { styles } from "./styles";

export function WishList() {
    return (
        <View style={styles.container}>
            <WishListItem />
            <WishListItem />
            <WishListItem />
        </View>
    );
}