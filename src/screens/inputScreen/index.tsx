import { ButtonCustom } from "@/src/components/buttonCustom"
import { Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native"
import { style } from "./styles"
import { router } from "expo-router"
import { colors } from "@/src/utils/colors"

export const InputScreen = () => {

    return(
      <View
        style={style.containerStyle}
      >
       
        <Image
          source={require("../../components/img/image-removebg.png")}    
          style={style.styleImage}  
          resizeMode="cover"
        />
         <Text
          style={style.styleTitle}
        >INSTITUTO CAXINGUI</Text>
        <ButtonCustom
          titleButton="REGISTER"
          handleClick={() => {}}
          styleContainer= {{
            marginTop: 40,
            marginBottom: 32,
            width: 200, 
            height: 80,
            position: 'absolute',
            bottom: 250
          }}
          styleText={{
            color: colors.PRIMARY,
            fontSize: 30
          }}
          handleClick={() => router.navigate("/(app)/auth/register")}
        />
        <ButtonCustom 
          titleButton="LOGIN" 
          styleContainer={{
            backgroundColor: colors.WHITE,
            width: 200, 
            height: 80, 
            position: 'absolute',
            bottom: 150
          }} 
          styleText={{
            color: colors.PRIMARY,
            fontSize: 30
          }}
          handleClick={() => router.navigate("/(app)/auth/login")}
        />
      </View>
    )
}
