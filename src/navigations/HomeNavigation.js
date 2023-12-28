import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants'
import Home from '../screens/home/Home';
import Map from '../screens/map/Map';
import AddressInputer from '../screens/map/AddressInputer';
import AddMoreOrderDetail from '../screens/orderprocess/AddMoreOrderDetail';
import OrderDetail from '../screens/orderprocess/OrderDetail';
import { MaterialIcons, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import AddCommentForCourier from '../screens/orderprocess/AddCommentForCourier';

const Stack = createNativeStackNavigator();


const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTES.HOME_STACK}
        >
            <Stack.Screen name={ROUTES.HOME_STACK} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.MAP_STACK} component={Map} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.ADDRESS_INPUTER_STACK} component={AddressInputer} options={{ headerShown: false }} />
            <Stack.Screen
                name={ROUTES.MORE_ORDER_DETAIL_STACK}
                component={AddMoreOrderDetail}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <View className="flex-col justify-between space-y-1">
                            <Text className="text-lg font-semibold">Bổ sung chi tiết</Text>
                            <View className="flex-row justify-center space-x-3">
                                <View className="w-10 bg-[#3422F1]" style={{ height: 2 }}></View>
                                <View className="w-10 bg-[#3422F1]" style={{ height: 2 }}></View>
                            </View>
                        </View>

                    ),
                    headerBackVisible: false,
                }}
            />
            {/* navigeted from AddMoreOrderDetail stack */}
            <Stack.Screen
                name={ROUTES.ORDER_DETAIL_STACK}
                component={OrderDetail}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Text className="text-lg font-semibold">Chi tiết giao hàng</Text>
                    ),
                    headerBackVisible: false,
                }}
            />
            <Stack.Screen
                name={ROUTES.ADD_COMMENT_FOR_COURIER_STACK}
                component={AddCommentForCourier}
                options={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Text className="text-lg font-semibold">Ghi chú cho Tài xế</Text>
                    ),
                    headerBackVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation