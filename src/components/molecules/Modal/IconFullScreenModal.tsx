import { View, StyleSheet, Text } from 'react-native';
import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/styles/colors';

export default function ApplyCompleteModal({
  title,
  detail,
  button,
  noClose,
}: {
  title: string;
  detail?: string;
  button?: JSX.Element;
  noClose?: boolean;
}) {
  return (
    <BasicFullScreenModal noClose={noClose}>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <Ionicons
          name='checkmark-circle-sharp'
          size={51}
          color={Colors.primary}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {detail && <Text style={styles.detail}>{detail}</Text>}
        </View>
      </View>
      {/* 버튼 들어가는 경우 */}
      <View style={styles.button}>{button}</View>
    </BasicFullScreenModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.32,
    paddingVertical: 10,
    textAlign: 'center',
  },
  detail: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: Colors.fontGray03,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
  },
});
