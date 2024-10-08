import { styles } from "./styles";
import { Text, View } from "react-native";
import { colors } from "@/src/utils/colors";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ButtonWithIcon } from "@/src/components/buttonWithIcon";
import { router } from "expo-router";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Title}>
            </Text>
            <ButtonWithIcon
                titleButton={
                    <View style={{ 
                        alignItems: 'center',
                        }}>
                        <FontAwesome5 name="users" size={80} color="#5e17eb" />
                        <Text style={{ 
                            color: colors.PRIMARY,
                            fontSize: 30,
                            marginTop: 12,
                            fontWeight: "bold"
                            }}>YOUR CLASS
                        </Text>
                    </View>
                }
                styleContainer={{
                    flexDirection: 'column',
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 400,
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            />
            <ButtonWithIcon
                titleButton={
                    <View style={{ 
                        alignItems: 'center',
                        }}>
                        <FontAwesome5 name="book-open" size={80} color="#5e17eb" />
                        <Text style={{ 
                            color: colors.PRIMARY,
                            fontSize: 30,
                            marginTop: 12,
                            fontWeight: "bold",
                            textAlign: 'center'
                            }}>YOUR STUDY MANUAL
                        </Text>
                    </View>
                }
                styleContainer={{
                    flexDirection: 'column',
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 150,
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                handleClick={() => router.navigate("/(app)/manual")}
            />
        </View>
    );
};
