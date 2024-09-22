import { RegisterScreen } from "@/src/screens/auth/register";
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router";


export default function Login () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "REGISTER",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY
                    },
                    headerTitleAlign: "center"
                }}
            />
            <RegisterScreen/>
        </>
    )
}