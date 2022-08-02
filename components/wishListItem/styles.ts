import { StyleSheet } from "react-native";
import { vars } from "../../styles/vars";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "green",
    justifyContent: "space-between",
    padding: vars.spaceLg,
    margin: vars.spaceLg,
  },
  textContainer: {
    flexShrink: 2,
  },
  title: {
    fontSize: 14,
    marginRight: vars.spaceMd,
    marginBottom: vars.spaceSm,
  },
  url: {
    fontSize: 10,
  },
  claimButton: {
    width: 80,
    alignSelf: "center",
    flexShrink: 0,
  },
});
