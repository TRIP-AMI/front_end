import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '@/styles/colors';
import Spacing from '@/styles/spacing';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import REPORT_OPTIONS from '@/constants/report';
import ReportOptionCard from '@/components/molecules/Section/ReportOptionCard';
import FooterButton from '@/components/molecules/Button/FooterButton';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

export default function ContentReportScreen() {
  const [checkedId, setCheckedId] = useState<number>(0);
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const onNextPress = () => {
    // TODO: prop 정의하기
    navigate('ReportDetail');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          <Text style={styles.title}>
            {`Please tell me the reason\nfor reporting this program.`}
          </Text>
          <Text style={styles.subtitle}>
            This content cannot be seen by AMI.
          </Text>
        </View>
        <View style={{ paddingVertical: 30 }}>
          {REPORT_OPTIONS.map((item, idx) => (
            <View>
              <ReportOptionCard
                id={item.id}
                content={item.title}
                checked={checkedId === item.id}
                onPress={() => setCheckedId(item.id)}
              />
              {idx < REPORT_OPTIONS.length - 1 && (
                <SectionDividerBar style={{ height: 1 }} />
              )}
            </View>
          ))}
        </View>
      </View>
      <View
        style={{ paddingHorizontal: Spacing.IOS392Margin, marginBottom: 8 }}
      >
        <FooterButton
          content='Next'
          onPress={onNextPress}
          disabled={checkedId === 0}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.36,
    lineHeight: 24,
    color: Colors.fontGray02,
    paddingTop: 28,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.28,
    lineHeight: 24,
    color: Colors.fontGray03,
    paddingTop: 10,
  },
});
