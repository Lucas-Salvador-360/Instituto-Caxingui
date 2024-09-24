import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle-L"

export const LoginScreen = () => {
    return(
        <View
            style={styles.container}
        >
            <Text style = {styles.title}>
                
            </Text>
            <InputWithTitle/>
            <ButtonCustom
                titleButton="lOGIN"
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 480,
                    width: 100, 
                    height: 40
                }}
                styleText={{
                    color: colors.PRIMARY
                }}
            />
            <ButtonCustom
                titleButton="esqueci minha senha"
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 540,
                    width: 400, 
                    height: 40
                }}
                styleText={{
                    color: colors.BLACK
                }}
            />
        </View>
    )
}