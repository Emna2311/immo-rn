import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { mockListings } from '../services/mockListings';
import { Listing } from '../types/Listing';

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
  return (
    <FlatList
      data={mockListings}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListingCard item={item} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  card: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 16, overflow: 'hidden', elevation: 3 },
  image: { width: '100%', height: 180 },
  info: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 18, color: '#1e88e5', marginVertical: 4 },
  meta: { color: '#666' },
});