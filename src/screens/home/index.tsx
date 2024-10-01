import { styles } from "./styles";
import { Text, View } from "react-native";
import { colors } from "@/src/utils/colors";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ButtonWithIcon } from "@/src/components/buttonWithIcon";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text 
            style={styles.Title}>
            </Text>
            <ButtonWithIcon
                titleButton={
                    <View style={{ 
                        alignItems: 'center'
                         }}>
                        <FontAwesome5 name="users" size={80} color="#5e17eb" />
                        <Text style={{ 
                            color: colors.PRIMARY, 
                            fontSize: 30, 
                            fontWeight: "bold",
                            }}>
                                YOUR CLASS
                            </Text>
                    </View>
                }
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 350,
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                styleText={{
                    color: colors.PRIMARY,
                }} 
            /> 
            <ButtonWithIcon
                titleButton={
                    <View style={{ 
                        alignItems: 'center'
                         }}>
                        <FontAwesome5 name="book-open" size={80} color="#5e17eb" />
                        <Text style={{ 
                            color: colors.PRIMARY, 
                            fontSize: 30, 
                            fontWeight: "bold",
                            }}>
                                YOUR CLASS
                            </Text>
                    </View>
                }
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 100,
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                styleText={{
                    color: colors.PRIMARY,
                }} 
            />
        </View>
    );
};
