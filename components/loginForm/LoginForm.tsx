import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function LoginForm() {
  return (
    <>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput></TextInput>
      <Text>Password</Text>
      <TextInput></TextInput>
      <Button title="Log In" />
    </>
  );
}
