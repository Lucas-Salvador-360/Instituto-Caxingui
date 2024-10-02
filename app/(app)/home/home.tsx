import { HomeScreen } from "@/src/screens/home/";
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router";
import { View } from "react-native";


export default function lOGIN () {
    return(
        
        <>
            
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "HOME",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY,
                    },
                    headerTitleAlign: "center",
                }}
            />
            <HomeScreen/>
        </>
    )
}