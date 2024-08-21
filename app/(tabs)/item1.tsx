import { View, Text, FlatList } from "react-native";
import CheckBox from "@/components/CheckBox";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RowItem from "@/components/RowItem";
import UpAndDown from "@/assets/icons/UpAndDown";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

const item1 = () => {
  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full">
      <FlatList
        data={[
          {
            id: "2",
            name: "DIG",
            price: 28.8,
            targetPrice: 29.2,
            volume: 138000,
            change: 1.4,
          },
          {
            id: "3",

            name: "PVC",
            price: 17.13,
            targetPrice: 16.8,
            volume: 0,
            change: -1.95,
          },
          {
            id: "4",

            name: "VCI",
            price: 48.27,
            targetPrice: 50.0,
            volume: 95000,
            change: 3.58,
          },
          {
            id: "5",

            name: "DCM",
            price: 35.17,
            targetPrice: 39.1,
            volume: 61000,
            change: 11.16,
          },
          {
            id: "6",

            name: "DCM",
            price: 35.17,
            targetPrice: 39.1,
            volume: 61000,
            change: 11.16,
          },
          {
            id: "7",

            name: "DCM",
            price: 35.17,
            targetPrice: 39.1,
            volume: 61000,
            change: 11.16,
          },
        ]}
        ListHeaderComponent={() => (
          <View>
            <View className="h-2 w-10 rounded bg-[#ccc] mx-auto"></View>

            <View className="mx-3 mt-3">
              <Text className="font-bold">Danh mục nắm giữ</Text>
            </View>

            <View className=" p-3 bg-[#F4F4F8] mx-3 rounded-3xl mt-3">
              <View className="flex-row justify-between border-b border-[#ccc] border-dotted pb-3">
                <Text>
                  Lãi lỗ danh mục{" "}
                  <Feather name="eye-off" size={12} color="#88888E" />
                </Text>
                <View>
                  <Text className="text-base font-bold text-[#01AB55]">
                    +123
                  </Text>
                  <Text className="text-[#01AB55] bg-[#CFF8E1] border border-[#01AB55] text-xs px-[4px] rounded-xl ">
                    +0.12%
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="flex flex-row items-center">
                  Lai/lo hom nay{" "}
                  <Ionicons
                    name="information-circle-outline"
                    size={12}
                    color="black"
                  />
                </Text>
                <Text className="font-bold">0</Text>
              </View>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="flex flex-row items-center">
                  Lai/lo hom nay{" "}
                  <Ionicons
                    name="information-circle-outline"
                    size={12}
                    color="black"
                  />
                </Text>
                <Text className="font-bold">0</Text>
              </View>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="flex flex-row items-center">
                  Lai/lo hom nay{" "}
                  <Ionicons
                    name="information-circle-outline"
                    size={12}
                    color="black"
                  />
                </Text>
                <Text className="font-bold">0</Text>
              </View>
            </View>

            <View className="my-3 mx-3 flex-row justify-between items-center">
              <CheckBox label="An khoi luong" />
              <Text className="text-[#86101F] border-[#86101F] border w-fit px-4 py-2 rounded-3xl">
                Ban nhieu ma
              </Text>
            </View>

            <View className="mt-5 flex-row gap-2 items-center p-4 px-3 py-2 border-b-[0.5px] border-[#ccc]">
              <Text className="flex-1 uppercase font-medium opacity-40">
                Mã Cp
              </Text>
              <Text className="flex-1 uppercase font-medium opacity-40">
                Giá vốn
              </Text>
              <Text className="flex-1 uppercase font-medium opacity-40">
                Giá TT
              </Text>
              <Text className="flex-1 text-center uppercase font-medium opacity-40">
                KL
                <UpAndDown width={10} height={10} style={{ opacity: 0.5 }} />
              </Text>
              <Text className="flex-1 uppercase font-medium opacity-40">
                Lãi/Lỗ
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RowItem item={item} />}
      />
      <View className="flex-row gap-2 justify-center items-center px-3 pt-3 pb-9 border-t border-[#ccc] bg-[#fff]">
        <Text className="flex-1 py-2 bg-[#1BB366] text-center text-white rounded-full">
          Mua
        </Text>
        <Text className="flex-1 py-2 bg-[#DF4C55] text-center text-white rounded-full">
          Ban
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default item1;
