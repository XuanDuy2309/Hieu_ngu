import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const IntroLayout = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-lg font-bold'>IntroLayout</Text>
      <Link href={"/(tabs)/item1"}>go</Link>
    </View>
  )
}

export default IntroLayout