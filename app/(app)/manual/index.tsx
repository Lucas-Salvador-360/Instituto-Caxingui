import { ManualScreen } from "@/src/screens/manual/list";
import { View } from "react-native";
import Constants from "expo-constants";
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router";

const StatusBarHeight = Constants.statusBarHeight

export default function Manual () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "YOUR STUDY MANUAL",
                    headerTitleStyle: {
                        fontSize: 20
                    },
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY,
                    },
                    headerTitleAlign: "center"
                }}
            />
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