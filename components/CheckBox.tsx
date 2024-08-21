import React from "react";
import { View, Text } from "react-native";

interface Props {
    label?:string|"";
}

const Checkbox: React.FC<Props> = ({label}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <View className={`flex flex-row items-center`}>
      <View
        className={`w-4 h-4 border border-gray-400 rounded ${
          isChecked ? "bg-blue-500" : "bg-white"
        }`}
      >
        {isChecked && (
          <View className={`w-2 h-2 bg-white rounded-full absolute top-1 left-1`} />
        )}
      </View>
      <Text className={`ml-2`}>{label}</Text>
    </View>
  );
};

export default Checkbox;