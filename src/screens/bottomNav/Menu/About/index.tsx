import { View, StyleSheet, ScrollView, Image } from 'react-native';

// import ContentImg from '../../../../../assets/images/about_tripami.png';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          // eslint-disable-next-line import/extensions
          source={require('@/assets/images/about_tripami.png')}
          style={{ width: '100%', objectFit: 'contain' }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
