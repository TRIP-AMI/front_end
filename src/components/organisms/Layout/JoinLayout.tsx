import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

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
      <Text style={styles.title}>{title} </Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View style={styles.content}>{children}</View>
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
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.36,
    lineHeight: 24,
    color: Colors.fontGray02,
    paddingTop: 20,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
    color: Colors.fontGray03,
    paddingTop: 8,
  },
});
