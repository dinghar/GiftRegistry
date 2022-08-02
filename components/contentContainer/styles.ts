import { StyleSheet } from "react-native";
import { vars } from "../../styles/vars";

export const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: 500,
    paddingVertical: vars.spaceXl,
    paddingHorizontal: vars.spaceLg,
    backgroundColor: "#bbb",
  },
});
