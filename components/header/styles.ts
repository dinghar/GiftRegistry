import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        padding: 30,
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 24,
    },
    authContainer: {
        display: "flex",
        flexDirection: "row",
    },
    headerSection: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-end"
    },
    authButtonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
    },
})