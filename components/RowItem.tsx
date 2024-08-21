// CustomItem.tsx
import React from "react";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface CustomItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    targetPrice: number;
    volume: number;
    change: number;
  };
}

const RowItem: React.FC<CustomItemProps> = ({ item }) => {
  return (
    <>
      <View className="flex flex-row px-3 py-2 border-b-[0.5px] border-[#ccc] items-center gap-2">
        <View className="flex-1 flex-row items-center gap-1">
          <Text className="text-base text-[#01AB55] font-bold">
            {item.name}
          </Text>
          <AntDesign name="down" size={8} color="black" />
        </View>
        <Text className="flex-1 text-right font-bold">{item.price.toFixed(2)}</Text>
        <Text className="flex-1 text-right font-bold">{item.targetPrice.toFixed(2)}</Text>
        <Text className="flex-1 text-right font-bold">
          {item.volume.toLocaleString()}
        </Text>
        <View
          className={`flex-1 w-full justify-center flex-row px-3 py-1 rounded-md ${
            item.change > 0 ? "bg-[#01AB55]" : "bg-[#FF3737]"
          }`}
        >
          <Text className={`text-white `}>{item.change.toFixed(2)}%</Text>
        </View>
      </View>
    </>
  );
};

export default RowItem;
