import Header from "@/src/components/header";
import { HomeScreen } from "@/src/screens/home/";
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';


export default function Home () {
    return(
        
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
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
            <Header/>
            <HomeScreen/>
        </>
    )
}