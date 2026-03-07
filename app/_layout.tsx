import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./globals.css";

export default function RootLayout() {
  const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL as string);
  
  return (
    <ConvexProvider client={convex}>
      <StatusBar hidden={true} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#030014" },
          animation: "slide_from_left",
        }}>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </ConvexProvider>
  );
}
