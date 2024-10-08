import { colors } from "@/src/utils/colors";
import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    button: {
        backgroundColor: colors.WHITE,
        height: 53,
        width: "90%",
        borderRadius: 8,
        elevation: 5,
        shadowColor: colors.BLACK,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: colors.PRIMARY,
        fontSize: 30,
        marginTop: 12,
        fontWeight: "bold"
    }
})