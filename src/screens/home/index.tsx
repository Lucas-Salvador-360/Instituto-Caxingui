import { styles } from "./styles";
import { Text, View } from "react-native";
import { colors } from "@/src/utils/colors";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ButtonWithIcon } from "@/src/components/buttonWithIcon";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Title}>
            </Text>
            <ButtonWithIcon
                titleButton={
                    <>
                        <FontAwesome5 name="users" size={24} color="#5e17eb" />
                        YOUR CLASS
                    </>
                }
                styleContainer={{
                    flexDirection: 'column',
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 300,
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                styleText={{
                    color: colors.PRIMARY
                }}
            />
        </View>
    );
};
