import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"
import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"
import { useState } from "react"

export const RegisterScreen = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confSenha, setConfirmar] = useState("")
    return(
        <View
            style={styles.container}
        >
            <Text style = {styles.title}>
                
            </Text>
            <InputWithTitle
                setText={setNome}
                title="Nome:"
            />
            <InputWithTitle
                setText={setEmail}
                title="E-mail:"
            />
            <InputWithTitle
                setText={setSenha}
                title="Senha:"
            />
            <InputWithTitle
                setText={setConfirmar}
                title="Confirmar Senha:"
            />
            <ButtonCustom
                titleButton="LOGIN"
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 150,
                    width: 100, 
                    height: 40
                }}
                styleText={{
                    color: colors.PRIMARY
                }}
            />
        </View>
    )
}