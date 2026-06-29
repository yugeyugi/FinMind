import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, StatusBar,
     KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

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

          <View style={styles.logoRow}>
            <View style={styles.logoShell}>
              <LinearGradient
                colors={['#4F8CFF', '#2563EB', '#1D4ED8']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.logoCard}
              >
                <Image
                  source={require('../../assets/finmind-logo.png')}
                  style={styles.logo}
                />
              </LinearGradient>
            </View>

            <View>
              <Text style={styles.brand}>FinMind</Text>
              <Text style={styles.brandSub}>Finance, made intelligent</Text>
            </View>
          </View>

          <View style={styles.headerBlock}>
            <View style={styles.topBadge}>
              <Ionicons name="lock-closed-outline" size={14} color="#2563EB" />
              <Text style={styles.topBadgeText}>Secure sign in</Text>
            </View>

            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>
              Sign in to view your spending insights, budgets, and smarter money guidance.
            </Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email address</Text>
              <View style={styles.inputWrap}>
                <Ionicons name="mail-outline" size={18} color="#64748B" />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  placeholderTextColor="#94A3B8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrap}>
                <Ionicons name="lock-closed-outline" size={18} color="#64748B" />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={secureText}
                  style={[styles.input, styles.passwordInput]}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSecureText(!secureText)}
                >
                  <Ionicons
                    name={secureText ? 'eye-off-outline' : 'eye-outline'}
                    size={18}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.forgotWrap}
              onPress={() => router.push('/auth/forgot-password')}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

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
                <Text style={styles.buttonText}>Sign In</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.googleButton} activeOpacity={0.85}>
            <Ionicons name="logo-google" size={18} color="#0F172A" />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomMeta}>
            <Text style={styles.bottomText}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/auth/signup')}>
              <Text style={styles.signupText}>Create one</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>
            Private by default • Your financial data stays protected
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
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
    marginBottom: 18,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 26,
  },

  logoShell: {
    padding: 8,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.72)',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  },

  logoCard: {
    width: 60,
    height: 60,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },

  brand: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.6,
  },

  brandSub: {
    marginTop: 2,
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
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
    fontSize: 32,
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
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(148,163,184,0.16)',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 28,
    elevation: 10,
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
  },

  inputWrap: {
    minHeight: 56,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#0F172A',
  },

  passwordInput: {
    paddingRight: 8,
  },

  forgotWrap: {
    alignSelf: 'flex-end',
    marginTop: -2,
    marginBottom: 20,
  },

  forgotText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#2563EB',
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

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 18,
    gap: 10,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },

  dividerText: {
    fontSize: 12.5,
    color: '#94A3B8',
    fontWeight: '600',
  },

  googleButton: {
    minHeight: 54,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    },

    googleButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    },
  bottomMeta: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomText: {
    fontSize: 14,
    color: '#64748B',
  },

  signupText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
  },

  footer: {
    marginTop: 22,
    textAlign: 'center',
    fontSize: 12.5,
    color: '#94A3B8',
    fontWeight: '500',
  },
});