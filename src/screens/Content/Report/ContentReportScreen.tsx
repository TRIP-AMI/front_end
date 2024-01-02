import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import Colors from '@/styles/colors';
import Spacing from '@/styles/spacing';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import REPORT_OPTIONS from '@/constants/report';
import ReportOptionCard from '@/components/molecules/Section/ReportOptionCard';
import {
  ContentStackNavigationProp,
  ContentStackParamList,
} from '@/navigations/Common/ContentStack';
import { ReportOptionType } from '@/types/ReportTypes';
import ReportTitleText from '@/components/atoms/Text/ReportTitleText';
import ReportFooterButton from '@/components/molecules/Footer/ReportFooterButton';

export type ContentReportScreenProps = StackScreenProps<
  ContentStackParamList,
  'Report'
>;

export default function ContentReportScreen({
  route,
}: ContentReportScreenProps) {
  const { programId } = route.params;
  const [checkedId, setCheckedId] = useState<number>(0);
  const [question, setQuestion] = useState<string>('');
  const { navigate } = useNavigation<ContentStackNavigationProp>();
  const TITLE = `Please tell me the reason\nfor reporting this program.`;
  const SUBTITLE = `This content cannot be seen by AMI.`;
  const onOptionPress = (item: ReportOptionType) => {
    setCheckedId(item.id);
    setQuestion(item.question);
  };

  const onNextPress = () => {
    if (checkedId === 0) return;
    navigate('ReportDetail', { programId, title: question });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <ReportTitleText title={TITLE} />
          <Text style={styles.subtitle}>{SUBTITLE}</Text>
        </View>
        <View>
          {REPORT_OPTIONS.map((item) => (
            <View key={item.id}>
              <ReportOptionCard
                content={item.title}
                checked={checkedId === item.id}
                onPress={() => onOptionPress(item)}
              />
              {item.id !== REPORT_OPTIONS.length && (
                <SectionDividerBar style={{ height: 1 }} />
              )}
            </View>
          ))}
        </View>
      </View>
      <ReportFooterButton
        title='Next'
        onPress={onNextPress}
        disabled={checkedId === 0}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    paddingVertical: 28,
    paddingHorizontal: Spacing.IOS392Margin,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.28,
    lineHeight: 24,
    color: Colors.fontGray03,
    paddingTop: 10,
  },
  footer: {
    paddingHorizontal: Spacing.IOS392Margin,
    marginBottom: 8,
  },
});
