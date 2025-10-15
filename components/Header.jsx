import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Header() {
  const [active, setActive] = useState('All');
  const segments = ['All', 'Music', 'Podcasts'];

  return (
    <View style={styles.header}>
     
      <View style={styles.left}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>V</Text>
        </View>
      </View>

      <View style={styles.segmented} accessibilityLabel="Filtro">
        {segments.map((s) => (
          <TouchableOpacity
            key={s}
            onPress={() => setActive(s)}
            style={[
              styles.segment,
              active === s ? styles.segmentActive : null,
            ]}
            accessibilityState={{ pressed: active === s }}
          >
            <Text
              style={[
                styles.segmentText,
                active === s ? styles.segmentTextActive : null,
              ]}
            >
              {s}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingHorizontal: 8, 
    backgroundColor: '#2b292933',
    borderRadius: 15
    
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20, 
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6B38',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
  },
  segmented: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 'auto', 
  },
  segment: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  segmentActive: {
    backgroundColor: '#1db954',
  },
  segmentText: {
    color: '#bdbdbd',
    fontWeight: '600',
  },
  segmentTextActive: {
    color: '#000000ff',
  },
});
export default Header;