import * as React from "react";
import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  TabView,
  SceneMap,
  TabBar,
  TabBarProps,
  Route,
} from "react-native-tab-view";
import item1 from "./item1";
import item2 from "./item2";
import item3 from "./item3";

const renderScene = SceneMap({
  first: item1,
  second: item2,
  third: item3,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "3" },
    { key: "second", title: "6" },
    { key: "third", title: "8" },
  ]);

  const renderTabBar = (props: TabBarProps<Route>) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: "#750E1C"}}
      style={{ backgroundColor: "#fff"}}
      labelStyle={ { color: '#000' }}
      activeColor="#000"
      inactiveColor="#000"
      renderLabel={({ route, focused, color }) => (
        <View className="flex-row gap-1 items-center">
          <Text className={`text-xs ${focused?'text-black':'text-[#6D6F75]'}`}>391871</Text>
          <View className={`px-2 py-[2px] rounded-full ${focused?'bg-[#750E1C]':'bg-[#6D6F75]'}`}>
          <Text className={`text-sm  text-white font-bold`}>{route.title}</Text>

          </View>
        </View>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      
    />
    // <></>
  );
}
