import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import { ManualProps } from "./list";



export function CardHorizontalManual ({manual}: {manual: ManualProps}) {
    return(  
        <Pressable>
            <Image
                source={ { uri: manual.foto }}
                style = {styles.Image}
            />
        </Pressable>
    )
}