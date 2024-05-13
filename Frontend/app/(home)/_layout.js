import { Stack } from "expo-router";
// import { Chart } from "./Chart";
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="employees" />
      <Stack.Screen name="adddetails" />
      <Stack.Screen name="markattendance" />
      <Stack.Screen name="[user]" />
      <Stack.Screen name="summary" />
      <Stack.Screen name="chart" />
      <Stack.Screen name="attendancereport" />
    </Stack>
  );
}
