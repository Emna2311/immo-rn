import { useMemo, useState } from 'react';
import {
  View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';
import { mockListings } from '../services/mockListings';
import { Listing } from '../types/Listing';

type TypeFilter = 'Tous' | 'Vente' | 'Location';

function ListingCard({ item }: { item: Listing }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          {item.price.toLocaleString('fr-FR')} {item.type === 'Location' ? 'DT/mois' : 'DT'}
        </Text>
        <Text style={styles.meta}>
          {item.city} • {item.rooms} pièces • {item.surface} m² • {item.type}
        </Text>
      </View>
    </View>
  );
}

export default function ListingsScreen() {
  const [city, setCity] = useState('');
  const [type, setType] = useState<TypeFilter>('Tous');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(() => {
    return mockListings.filter((l) => {
      const cityOk = l.city.toLowerCase().includes(city.trim().toLowerCase());
      const typeOk = type === 'Tous' || l.type === type;
      const priceOk = maxPrice === '' || l.price <= Number(maxPrice);
      return cityOk && typeOk && priceOk;
    });
  }, [city, type, maxPrice]);

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <TextInput
          style={styles.input}
          placeholder="Ville (ex: Tunis)"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Prix max (DT)"
          value={maxPrice}
          onChangeText={setMaxPrice}
          keyboardType="numeric"
        />
        <View style={styles.chips}>
          {(['Tous', 'Vente', 'Location'] as TypeFilter[]).map((t) => (
            <TouchableOpacity
              key={t}
              style={[styles.chip, type === t && styles.chipActive]}
              onPress={() => setType(t)}
            >
              <Text style={[styles.chipText, type === t && styles.chipTextActive]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListingCard item={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Aucun bien trouvé</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  filters: { padding: 12, backgroundColor: '#fff', elevation: 2 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 8 },
  chips: { flexDirection: 'row', gap: 8 },
  chip: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#eee' },
  chipActive: { backgroundColor: '#1e88e5' },
  chipText: { color: '#333' },
  chipTextActive: { color: '#fff', fontWeight: 'bold' },
  list: { padding: 16 },
  card: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 16, overflow: 'hidden', elevation: 3 },
  image: { width: '100%', height: 180 },
  info: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 18, color: '#1e88e5', marginVertical: 4 },
  meta: { color: '#666' },
  empty: { textAlign: 'center', marginTop: 40, color: '#888' },
});