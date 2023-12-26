import { View, Text, TouchableOpacity, Animated, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Feather, AntDesign } from '@expo/vector-icons';


const Vehicel = ({ scrollY, data, selectedVehicel, setSelectedVehicel, scrollView }) => {
    const { title, content, foodContent, image } = data

    const containerHeight = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [0, 60],
        extrapolate: 'clamp',
    });

    const isSelected = selectedVehicel !== null && selectedVehicel === data.id
    const handleSelect = () => {
        if (isSelected) {
            setSelectedVehicel(null)
            scrollView.current.scrollTo({ x: 0, y: 0, animated: true })
        } else {
            setSelectedVehicel(data.id)
            scrollView.current.scrollTo({ x: 0, y: 300, animated: true })
        }
    }
    return (
        <TouchableOpacity
            onPress={handleSelect}
        >
            <View className="flex-row w-full px-3 py-3 border border-gray-300 rounded-xl mt-3 relative"
                style={isSelected && style.selected}
            >
                <View className="basis-1/5 justify-center">
                    <Image style={{ width: 50, height: 40, resizeMode: 'contain' }} source={image} />
                </View>
                <View className="basis-4/5 flex-col pl-3 justify-center">
                    <View><Text className="font-semibold">{title}</Text></View>
                    <Animated.View style={{ height: containerHeight }}>
                        <View><Text className="text-gray-600">{content}</Text></View>
                        <View className="flex-row items-center">
                            <Feather name="box" size={20} color="#4B5563" />
                            <Text className="text-gray-600">{foodContent}</Text>
                        </View>
                    </Animated.View>
                </View>
                {isSelected && <View className="flex justify-center items-center absolute right-[-14] top-[-14]" >
                    <AntDesign name="checkcircle" size={30} color="#3422F1" />
                </View>}
            </View>
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    selected: {
        borderColor: '#3422F1',
    },
});
export default Vehicel