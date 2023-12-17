import { View, Text, StyleSheet } from 'react-native';

export default function JoinLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

// TODO: 스타일 전체적으로 수정 필요
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    paddingVertical: 30,
  },
});
