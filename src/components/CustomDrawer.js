import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../constants'
const CustomDrawer = (props) => {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity
                className="h-[140] flex-col  ml-[-40] justify-around items-center bg-gray-50 pt-6 "
                onPress={() => navigation.navigate(ROUTES.PROFILE_DRAWER)}
            >
                <Image
                    source={require('../assets/logo/user.png')}
                    className="w-[60] h-[60] rounded-full"
                />
                <View>
                    <Text className="text-xl font-medium">Nguyễn Thế Anh</Text>
                </View>
            </TouchableOpacity>
            <View>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer