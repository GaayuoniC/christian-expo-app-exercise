import { Pressable, View, Text } from "react-native";
import { useState } from "react";

export function MyButton({ title, onPress }) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => onPress()}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View
        style={{
          backgroundColor: "green",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ padding: 0 }}>
          <Text>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
}
