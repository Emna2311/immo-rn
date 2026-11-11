import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsScreen from '../screens/ListingsScreen';
import MapScreen from '../screens/MapScreen';
import MessagesScreen from '../screens/MessagesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Annonces" component={ListingsScreen} />
        <Tab.Screen name="Carte" component={MapScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Favoris" component={FavoritesScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}