import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";



export const style = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.PRIMARY,
        width: "100%"
    },
    styleTitle: {
      fontFamily: 'Nunito',
      fontSize: 30,
      fontWeight: "bold",
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.WHITE,
      marginBottom: 24,
      position: "absolute",
      bottom: 400
    },
    styleImage: {
      height: 400,
      width: 400,
      position: "absolute",
      bottom: 360
    }
})
  