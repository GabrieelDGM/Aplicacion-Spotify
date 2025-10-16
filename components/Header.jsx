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
  paddingHorizontal: 20,
  marginVertical: 20,
  height: 95, 
  top: -20,
},

avatar: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#FF6B38',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 15, 
   
},
avatarText:{
  fontWeight: '800',
   color:'#000000',

},

segmented: {
  flexDirection: 'row',
  alignItems: 'center',
   
},
segment: {
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 20,
  backgroundColor: '#333333',
  marginRight: 10, 
},
  segmentActive: {
    backgroundColor: '#1db954',
  },
  segmentText: {
    color: '#f6f6f6',
    fontWeight: '600',
  },
  segmentTextActive: {
    color: '#040404',
  },
});

export default Header;
