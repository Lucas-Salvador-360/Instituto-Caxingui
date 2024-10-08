import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ManualProps } from "./list";



export function CardHorizontalManual ({manual}: {manual: ManualProps}) {
    return( 
            <Pressable style={styles.container}>
                <Image
                source={ { uri: manual.foto }}
                style = {styles.Image}
                />
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    alignItems: 'center', 
                    marginBottom: 24
                }}>
                    <Text style = {styles.Title}
                    >
                    {manual.nome}
                    </Text>
                </View>
            </Pressable>
    )
}