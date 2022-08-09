import { Button, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function LoginForm() {
  return (
    <>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Password</Text>
      <TextInput style={styles.input}></TextInput>
      <Button title="Log In" />
    </>
  );
}
