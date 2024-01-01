import { View, Text, SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CloseButton from '@components/atoms/Button/CloseButton';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';

type IconFullScreenViewProps = {
  title: string;
  detail?: string;
  button?: JSX.Element;
  buttonStyle?: ViewStyle;
};

export default function IconFullScreenView({
  title,
  detail,
  button,
  buttonStyle,
}: IconFullScreenViewProps) {
  const { resetModal } = useModalHook();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <CloseButton onPress={resetModal} />
      </View>
      <View style={styles.body}>
        <Ionicons
          name='checkmark-circle-sharp'
          size={51}
          color={Colors.primary}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {detail && <Text style={styles.detail}>{detail}</Text>}
        </View>
        <View style={[styles.button, buttonStyle]}>{button}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 24,
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 100,
    alignItems: 'center',
  },
  content: {
    paddingVertical: 30,
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: Colors.fontGray03,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 30,
  },
});
