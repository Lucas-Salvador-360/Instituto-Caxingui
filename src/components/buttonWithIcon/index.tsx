import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from "react-native"
import { style } from "./styles"
import { ReactNode } from "react"


interface IProps {
    titleButton: ReactNode, 
    styleContainer?: StyleProp<ViewStyle>,
    styleText?: StyleProp<TextStyle>,
    handleClick: () => void
}

export const ButtonWithIcon =({
    titleButton,
    styleContainer,
    styleText,
    handleClick}:IProps ) => {
        return(
                <TouchableOpacity 
                onPress={handleClick}
                style={[style.button, styleContainer, ]}>
                     <Text style={[style.title, styleText]}>
                        {titleButton}
                     </Text>
                </TouchableOpacity>  
        )
    }


