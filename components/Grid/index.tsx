import { View, Text, FlatList, StyleSheet, Image, Pressable } from "react-native";
import PrimaryButton from "../base/Form/Button/PrimaryButton";

type GridType = {
  rowsCount: number;
  colCount: number;
  playerCount: number;
  setIsGrid: (num: boolean) => void;
};
const Grid = ({ rowsCount, colCount, playerCount, setIsGrid }: GridType) => {
  const renderGridItem = ({ index }: { index: number }) => {
    return (
      <View style={styles.cell}>
        <Text>{index}</Text>
      </View>
    );
  };

  return (
    <>
      <Pressable style={styles.iconContainer} onPress={() => setIsGrid(false)}>
        <View style={styles.borderContainer}>
          <Image style={styles.icon} source={require("../../left-arrow.png")} />
        </View>
      </Pressable>
      <View style={{ margin: 16 }}>
        <FlatList
          data={Array(Number(rowsCount) * Number(colCount)).fill(0)}
          renderItem={renderGridItem}
          keyExtractor={(item: number, index: { toString: () => string }) =>
            index.toString()
          }
          numColumns={Number(colCount)}
          style={styles.grid}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    margin:16,
    alignItems: "flex-start",
    marginTop: 20,
  },
  borderContainer: {
    borderRadius:100,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 16,
    height: 16,
  },
  grid: {
    marginTop: 20,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
  },
});

export default Grid;
