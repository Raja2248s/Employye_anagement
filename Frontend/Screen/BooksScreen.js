import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import BooksList from "../components/BooksList";

function BooksScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("BookDetail")}
      ></TouchableOpacity>
      <BooksList navigation={navigation} />
    </View>
  );
}

export default BooksScreen;

const styles = StyleSheet.create({});
