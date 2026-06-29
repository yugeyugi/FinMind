import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ title: 'Login' }} />
      <Stack.Screen name="auth/signup" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="auth/forgot-password" options={{ title: 'Forgot Password' }} />
      <Stack.Screen name="auth/otp-verify" options={{ title: 'OTP Verify' }} />
      <Stack.Screen name="home" options={{ title: 'Home' }} />
    </Stack>
  );
}