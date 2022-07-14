import { Button, View } from "react-native";
import { styles } from "./styles";

interface AuthButtonProps {
    title: string
}

export function AuthButton(props: AuthButtonProps) {
    return (
        <View  style={styles.authButton}>
            <Button title={props.title}/>
        </View>
    )
}
