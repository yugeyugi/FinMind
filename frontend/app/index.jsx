import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FB" />

      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(37,99,235,0.16)', 'rgba(96,165,250,0.06)', 'transparent']}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.8, y: 1 }}
          style={styles.heroGlow}
        />

        <View style={styles.topBadge}>
          <Ionicons name="sparkles-outline" size={14} color="#2563EB" />
          <Text style={styles.topBadgeText}>Smart financial wellness</Text>
        </View>

        <View style={styles.logoShell}>
          <LinearGradient
            colors={['#4F8CFF', '#2563EB', '#1D4ED8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconCard}
          >
            <Image
              source={require('../assets/finmind-logo.png')}
              style={styles.icon}
            />
          </LinearGradient>
        </View>

        <Text style={styles.brand}>FinMind</Text>

        <Text style={styles.tagline}>
          Finance, made intelligent
        </Text>

        <Text style={styles.description}>
          Track spending, uncover patterns, and receive timely insights that help
          you make calmer, smarter financial decisions.
        </Text>

        <View style={styles.featureRow}>
          <View style={styles.featureChip}>
            <Text style={styles.featureChipText}>Insights</Text>
          </View>
          <View style={styles.featureChip}>
            <Text style={styles.featureChipText}>Budgets</Text>
          </View>
          <View style={styles.featureChip}>
            <Text style={styles.featureChipText}>Forecasts</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonWrap} onPress={() => router.push('/auth/login')}>
          <LinearGradient
            colors={['#2563EB', '#1D4ED8']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Secure insights • Better decisions
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 28,
  },

  heroGlow: {
    position: 'absolute',
    top: 110,
    width: 360,
    height: 360,
    borderRadius: 180,
  },

  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.72)',
    borderWidth: 1,
    borderColor: 'rgba(37,99,235,0.08)',
    marginBottom: 22,
  },

  topBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  logoShell: {
    padding: 14,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.6)',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 10,
  },

  iconCard: {
    width: 156,
    height: 156,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.28,
    shadowRadius: 24,
    elevation: 18,
  },

  icon: {
    width: 92,
    height: 92,
    resizeMode: 'contain',
  },

  brand: {
    marginTop: 28,
    fontSize: 38,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -1.2,
  },

  tagline: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
    textAlign: 'center',
  },

  description: {
    marginTop: 14,
    fontSize: 15.5,
    lineHeight: 25,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 330,
    paddingHorizontal: 6,
  },

  featureRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 22,
    marginBottom: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  featureChip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  featureChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },

  buttonWrap: {
    borderRadius: 20,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 12,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 28,
    paddingVertical: 17,
    borderRadius: 20,
    minWidth: 210,
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  footer: {
    position: 'absolute',
    bottom: 36,
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
});