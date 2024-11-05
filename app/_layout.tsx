import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      // Default line of code. Shows "index" on top of app screen. YUCK.
      // <Stack.Screen name="index" />

      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
