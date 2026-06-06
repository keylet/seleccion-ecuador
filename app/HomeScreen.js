import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const PLAYERS = [
  { nombre: 'Hernán Galíndez', posicion: 'Portero', dorsal: '1', club: 'Aucas' },
  { nombre: 'Piero Hincapié', posicion: 'Defensa', dorsal: '2', club: 'Leverkusen' },
  { nombre: 'Byron Castillo', posicion: 'Defensa', dorsal: '5', club: 'León' },
  { nombre: 'Moisés Caicedo', posicion: 'Mediocampista', dorsal: '10', club: 'Chelsea' },
  { nombre: 'Kendry Páez', posicion: 'Mediocampista', dorsal: '20', club: 'Chelsea' },
  { nombre: 'Enner Valencia', posicion: 'Delantero', dorsal: '13', club: 'Fenerbahçe' },
  { nombre: 'Gonzalo Plata', posicion: 'Delantero', dorsal: '11', club: 'Al-Qadsiah' },
];

const STATS = [
  { label: 'Mundiales', valor: '4' },
  { label: 'Copas América', valor: '10+' },
  { label: 'Ranking FIFA', valor: 'Top 50' },
  { label: 'Fundación FEF', valor: '1925' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#003087" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🇪🇨 LA TRI</Text>
        <View style={{ width: 70 }} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Hero Card */}
        <View style={styles.heroCard}>
          <Text style={styles.heroEmoji}>🏆</Text>
          <Text style={styles.heroTitle}>Selección Ecuatoriana</Text>
          <Text style={styles.heroSubtitle}>
            Apodada "La Tri" por los tres colores de su bandera:
            amarillo, azul y rojo.
          </Text>
        </View>

        {/* Stats */}
        <Text style={styles.sectionTitle}>ESTADÍSTICAS</Text>
        <View style={styles.statsGrid}>
          {STATS.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statValor}>{s.valor}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Info Card */}
        <Text style={styles.sectionTitle}>SOBRE EL EQUIPO</Text>
        <View style={styles.infoCard}>
          <InfoRow emoji="🏟️" label="Estadio" value="Rodrigo Paz Delgado, Quito" />
          <InfoRow emoji="👕" label="Colores" value="Amarillo, Azul y Rojo" />
          <InfoRow emoji="🎽" label="Uniforme local" value="Amarillo con detalles azules" />
          <InfoRow emoji="⚽" label="Confederación" value="CONMEBOL" />
          <InfoRow emoji="🌎" label="Clasificaciones" value="Qatar 2002, 2006, 2014, 2022" />
        </View>

        {/* Jugadores */}
        <Text style={styles.sectionTitle}>JUGADORES DESTACADOS</Text>
        {PLAYERS.map((p, i) => (
          <View key={i} style={styles.playerCard}>
            <View style={styles.playerDorsal}>
              <Text style={styles.dorsalText}>{p.dorsal}</Text>
            </View>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{p.nombre}</Text>
              <Text style={styles.playerPos}>{p.posicion} · {p.club}</Text>
            </View>
            <Text style={styles.playerEmoji}>
              {p.posicion === 'Portero' ? '🧤' :
               p.posicion === 'Defensa' ? '🛡️' :
               p.posicion === 'Mediocampista' ? '⚙️' : '🎯'}
            </Text>
          </View>
        ))}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>🇪🇨 Arriba Ecuador · Vamos La Tri 🇪🇨</Text>
          <Text style={styles.footerSub}>Federación Ecuatoriana de Fútbol © 2025</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function InfoRow({ emoji, label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoEmoji}>{emoji}</Text>
      <View style={styles.infoText}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  header: {
    backgroundColor: '#003087',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#003087',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  backBtn: {
    width: 70,
  },
  backText: {
    color: '#FFD100',
    fontWeight: '700',
    fontSize: 14,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 3,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heroCard: {
    backgroundColor: '#003087',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8,
    elevation: 8,
    shadowColor: '#003087',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  heroEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  heroTitle: {
    color: '#FFD100',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#003087',
    letterSpacing: 3,
    marginTop: 24,
    marginBottom: 10,
    opacity: 0.7,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statCard: {
    backgroundColor: '#FFD100',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    minWidth: '45%',
    elevation: 4,
    shadowColor: '#FFD100',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  statValor: {
    fontSize: 28,
    fontWeight: '900',
    color: '#003087',
  },
  statLabel: {
    fontSize: 11,
    color: '#003087',
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    elevation: 4,
    shadowColor: '#003087',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4FF',
  },
  infoEmoji: {
    fontSize: 24,
    width: 40,
  },
  infoText: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    color: '#888',
    fontWeight: '600',
    letterSpacing: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#003087',
    fontWeight: '700',
    marginTop: 2,
  },
  playerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#003087',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  playerDorsal: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#003087',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  dorsalText: {
    color: '#FFD100',
    fontWeight: '900',
    fontSize: 16,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    color: '#003087',
    fontWeight: '800',
    fontSize: 15,
  },
  playerPos: {
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
  playerEmoji: {
    fontSize: 24,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 10,
  },
  footerText: {
    color: '#003087',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1,
  },
  footerSub: {
    color: '#888',
    fontSize: 11,
    marginTop: 6,
  },
});
