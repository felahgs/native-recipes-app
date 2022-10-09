import { ScrollView } from "react-native";
import React, { useState } from "react";

import Button from "components/Button";

import styles from "./styles";
import { TabsProps } from "./types";

const Tabs = ({ values }: TabsProps) => {
  const [selected, setSelected] = useState<number>();

  const handlePress = (idx: number, action: () => void) => {
    action();
    setSelected(idx);
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.container}>
      {values.map((value, idx) => (
        <Button
          key={`${value.name}-${idx}`}
          small
          secondary={selected !== idx}
          onPress={() => handlePress(idx, value.action)}
          title={value.name}
        />
      ))}
    </ScrollView>
  );
};

export default Tabs;
