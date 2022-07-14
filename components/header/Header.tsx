import { Text, View } from "react-native";
import { AuthButton } from "./authButton/AuthButton"
import { styles } from "./styles";

export function Header() {
    return <View style={styles.header}>
        <View style={styles.headerSection}/>
        <Text style={styles.headerText}>Registry</Text>
        <View style={[styles.authContainer, styles.headerSection]}>
            <View style={styles.authButtonContainer}>
                <AuthButton title="Log In"/>
                <AuthButton title="Sign Up"/>
            </View>
        </View>
    </View>
}