import { View, Text, StyleSheet, Pressable, Keyboard } from 'react-native';
import Fonts from '@/styles/typography';

export default function JoinLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <Text style={Fonts.title}>{title} </Text>
        {subtitle && <Text style={Fonts.subtitle}>{subtitle}</Text>}
        <View style={styles.content}>{children}</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
});
