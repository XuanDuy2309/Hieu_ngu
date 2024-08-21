import { View, Text, StatusBar } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import HamburgerMenu from "@/assets/icons/HamburgurMenu";
import Ionicons from "@expo/vector-icons/Ionicons";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerTitle: "Cổ phiếu",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: () => (
              <Ionicons
                name="chevron-back-sharp"
                size={24}
                color="black"
                onPress={() => router.back()}
              />
            ),
            headerRight: () => (
              <View className="flex-row gap-2 items-center">
                <AntDesign name="search1" size={24} color="black" />
                <HamburgerMenu width={32} height={32} />
              </View>
            ),
          }}
        />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
