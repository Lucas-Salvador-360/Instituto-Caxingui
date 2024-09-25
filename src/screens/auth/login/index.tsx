import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle-L"
import { useState } from "react"

export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    console.log(email)

    return(
        <View
            style={styles.container}
        >
            <Text style = {styles.title}>
                
            </Text>
            <InputWithTitle
                setText={setEmail}
                title ="E-mail"
            />
            <InputWithTitle
                setText={setSenha}
                title ="Senha"
            />
            <ButtonCustom
                titleButton="lOGIN"
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 240,
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
                    backgroundColor: colors.PRIMARY,
                    position: "absolute",
                    bottom: 300,
                    width: 400, 
                    height: 40
                }}
                styleText={{
                    color: colors.WHITE
                }}
            />
        </View>
    )
}