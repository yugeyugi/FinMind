import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar,
     KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const OTP_LENGTH = 6;

const OtpVerify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);
    const updated = [...otp];
    updated[index] = digit;
    setOtp(updated);

    if (digit && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FB" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <LinearGradient
            colors={['rgba(37,99,235,0.14)', 'rgba(96,165,250,0.05)', 'transparent']}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0.8, y: 1 }}
            style={styles.heroGlow}
          />

          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.85}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={18} color="#0F172A" />
          </TouchableOpacity>

          <View style={styles.headerBlock}>
            <View style={styles.topBadge}>
              <Ionicons name="shield-checkmark-outline" size={14} color="#2563EB" />
              <Text style={styles.topBadgeText}>Verification required</Text>
            </View>

            <Text style={styles.title}>Enter verification code</Text>
            <Text style={styles.subtitle}>
              We sent a 6-digit code to your email. Enter it below to continue securely.
            </Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.otpRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputs.current[index] = ref)}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  style={styles.otpInput}
                />
              ))}
            </View>

            <Text style={styles.helperText}>
              Code expires in <Text style={styles.helperHighlight}>00:45</Text>
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.buttonWrap}
              onPress={() => router.push('/home')}
            >
              <LinearGradient
                colors={['#2563EB', '#1D4ED8']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Verify Code</Text>
                <Ionicons name="checkmark-circle-outline" size={18} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.resendRow}>
              <Text style={styles.resendText}>Didn’t receive the code? </Text>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.resendLink}>Resend</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safeArea: { flex: 1, backgroundColor: '#F5F7FB' },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    justifyContent: 'center',
  },
  heroGlow: {
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
    width: 360,
    height: 360,
    borderRadius: 180,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderWidth: 1,
    borderColor: 'rgba(15,23,42,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  headerBlock: {
    marginBottom: 24,
  },
  topBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.76)',
    borderWidth: 1,
    borderColor: 'rgba(37,99,235,0.08)',
    marginBottom: 16,
  },
  topBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -1,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15.5,
    lineHeight: 24,
    color: '#64748B',
    maxWidth: 330,
  },
  formCard: {
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(148,163,184,0.16)',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 28,
    elevation: 10,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 18,
  },
  otpInput: {
    flex: 1,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E4FF',
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  helperText: {
    textAlign: 'center',
    fontSize: 13.5,
    color: '#64748B',
    marginBottom: 22,
  },
  helperHighlight: {
    color: '#2563EB',
    fontWeight: '700',
  },
  buttonWrap: {
    borderRadius: 20,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 12,
  },
  button: {
    minHeight: 58,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  resendRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#64748B',
  },
  resendLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
  },
});