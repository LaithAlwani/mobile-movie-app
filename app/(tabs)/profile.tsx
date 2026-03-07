import {Image, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const profile = () => {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <Image source={icons.person} tintColor={"#a8b5db"} className="size-16 " />
      <Text className='text-white text-6xl font-bold mt-4'>profile</Text>
    </View>
  )
}

export default profile