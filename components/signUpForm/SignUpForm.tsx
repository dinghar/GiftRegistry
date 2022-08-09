import { Button, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function SignUpForm() {
  return (
    <>
      <Text>Sign Up</Text>
      <Text>Email</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Password</Text>
      <TextInput style={styles.input}></TextInput>
      <Button title="Sign Up" />
    </>
  );
}
