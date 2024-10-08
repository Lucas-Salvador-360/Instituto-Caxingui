import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";




export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.WHITE,
        width: "100%"
    },
    Title: {
        fontFamily: 'Nunito',
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.PRIMARY,
        marginBottom: 24,
        position: "absolute",
        bottom: 450
    },
    Image: {
        width: 200,
        height: 300,
        borderRadius: 20
    }
})