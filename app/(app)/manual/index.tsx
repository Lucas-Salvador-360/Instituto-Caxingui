import { ManualScreen } from "@/src/screens/manual/list";
import { View } from "react-native";
import Constants from "expo-constants";
import { colors } from "@/src/utils/colors";

const StatusBarHeight = Constants.statusBarHeight

export default function Manual () {
    return(
        <>
            <View
          style={{
            marginTop: StatusBarHeight + 8,
            width: '100%',         
            paddingHorizontal: 16,
            backgroundColor: colors.WHITE
          }}
        >  
        </View>
            <ManualScreen/>
        </>
    )
}