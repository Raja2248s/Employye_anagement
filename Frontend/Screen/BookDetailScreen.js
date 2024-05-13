import React from "react";
import { View, StyleSheet, Text } from "react-native";

function BookDetailScreen({ route, navigation }) {
  const { book } = route.params;

  return (
    <View>
      <Text>
        {book.title} - {book.author}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default BookDetailScreen;
