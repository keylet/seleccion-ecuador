// HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
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

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#003DA5" />

      {/* Header con el nombre del equipo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🇪🇨 LA TRI</Text>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Hero con logo oficial */}
        <View style={styles.heroCard}>
          <Image
            source={require('./assets/fef_logo.png')}
            style={styles.heroLogo}
            resizeMode="contain"
          />
          <Text style={styles.heroTitle}>Selección Ecuatoriana</Text>
          <Text style={styles.heroSubtitle}>
            Apodada "La Tri" por los tres colores de su bandera: amarillo, azul y rojo.
          </Text>
        </View>

        {/* Datos básicos del equipo (mínimo 3) */}
        <Text style={styles.sectionTitle}>DATOS DEL EQUIPO</Text>
        <View style={styles.infoCard}>
          <InfoRow emoji="⚽" label="Confederación" value="CONMEBOL" />
          <InfoRow emoji="🧑‍💼" label="Entrenador actual" value="Sébastien Beccacece" />
          <InfoRow emoji="🏟️" label="Estadio" value="Rodrigo Paz Delgado, Quito" />
          <InfoRow emoji="👕" label="Colores" value="Amarillo, Azul y Rojo" />
          <InfoRow emoji="🌎" label="Mundiales" value="2002, 2006, 2014, 2022" />
        </View>

        {/* Botón interactivo */}
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.85}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.ctaButtonText}>🏆 Ver Historia del Equipo</Text>
        </TouchableOpacity>

        {/* Estadísticas adicionales */}
        <Text style={styles.sectionTitle}>ESTADÍSTICAS</Text>
        <View style={styles.statsGrid}>
          {STATS.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statValor}>{s.valor}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Jugadores destacados */}
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

      {/* Modal: Historia (elemento interactivo) */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <Pressable style={styles.modalBox} onPress={() => {}}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>🏆 Historia de La Tri</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <HistoryItem year="1925" text="Fundación de la Federación Ecuatoriana de Fútbol (FEF) en Guayaquil." />
              <HistoryItem year="1938" text="Primera participación en la Copa América, marcando el debut internacional de La Tri." />
              <HistoryItem year="2002" text="Primera clasificación a un Mundial. Ecuador debuta en Corea/Japón." />
              <HistoryItem year="2006" text="Segunda Copa del Mundo en Alemania. Ecuador avanza a octavos de final por primera vez." />
              <HistoryItem year="2014" text="Tercera clasificación al Mundial de Brasil." />
              <HistoryItem year="2022" text="Qatar 2022: Ecuador abre el torneo venciendo al anfitrión 2-0, con Enner Valencia como figura." />
              <TouchableOpacity
                style={styles.modalCloseBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCloseBtnText}>Cerrar</Text>
              </TouchableOpacity>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
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

function HistoryItem({ year, text }) {
  return (
    <View style={styles.historyItem}>
      <View style={styles.historyYearBadge}>
        <Text style={styles.historyYear}>{year}</Text>
      </View>
      <Text style={styles.historyText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#F0F4FF' },
  header: {
    backgroundColor: '#003DA5',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#003DA5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 3,
  },
  scroll: { flex: 1, paddingHorizontal: 16 },

  // Hero
  heroCard: {
    backgroundColor: '#003DA5',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8,
    elevation: 8,
    shadowColor: '#003DA5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  heroLogo: {
    width: 130,
    height: 130,
    marginBottom: 14,
  },
  heroTitle: {
    color: '#FFCC00',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
    lineHeight: 20,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#003DA5',
    letterSpacing: 3,
    marginTop: 24,
    marginBottom: 10,
    opacity: 0.7,
  },

  // Info
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    elevation: 4,
    shadowColor: '#003DA5',
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
  infoEmoji: { fontSize: 22, width: 36 },
  infoText: { flex: 1 },
  infoLabel: {
    fontSize: 10,
    color: '#888',
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 14,
    color: '#003DA5',
    fontWeight: '700',
    marginTop: 2,
  },

  // CTA
  ctaButton: {
    backgroundColor: '#FFCC00',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    elevation: 6,
    shadowColor: '#FFCC00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  ctaButtonText: {
    color: '#003DA5',
    fontWeight: '900',
    fontSize: 15,
    letterSpacing: 1,
  },

  // Stats
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  statCard: {
    backgroundColor: '#003DA5',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    minWidth: '45%',
    elevation: 4,
    shadowColor: '#003DA5',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  statValor: { fontSize: 28, fontWeight: '900', color: '#FFCC00' },
  statLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },

  // Players
  playerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#003DA5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  playerDorsal: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#003DA5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  dorsalText: { color: '#FFCC00', fontWeight: '900', fontSize: 16 },
  playerInfo: { flex: 1 },
  playerName: { color: '#003DA5', fontWeight: '800', fontSize: 15 },
  playerPos: { color: '#888', fontSize: 12, marginTop: 2 },
  playerEmoji: { fontSize: 24 },

  // Footer
  footer: { alignItems: 'center', paddingVertical: 30, marginTop: 10 },
  footerText: { color: '#003DA5', fontWeight: '700', fontSize: 13, letterSpacing: 1 },
  footerSub: { color: '#888', fontSize: 11, marginTop: 6 },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalBox: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    maxHeight: '75%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: '900', color: '#003DA5' },
  modalClose: { fontSize: 18, color: '#888', fontWeight: '700' },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 12,
  },
  historyYearBadge: {
    backgroundColor: '#003DA5',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 52,
    alignItems: 'center',
  },
  historyYear: { color: '#FFCC00', fontWeight: '900', fontSize: 13 },
  historyText: { flex: 1, fontSize: 13, color: '#444', lineHeight: 20, marginTop: 2 },
  modalCloseBtn: {
    backgroundColor: '#FFCC00',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  modalCloseBtnText: { color: '#003DA5', fontWeight: '900', fontSize: 15 },
});