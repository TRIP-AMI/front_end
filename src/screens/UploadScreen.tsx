import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacing from '@/styles/spacing';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import BasicInput from '@/components/atoms/Input/BasicInput';
import PressHashTag from '@/components/atoms/Tag/PressHashTag';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import Counter from '@/components/molecules/Controller/Counter';

const CategoryList = [
  { id: '1', label: 'Activity' },
  { id: '2', label: 'Restaurant' },
  { id: '3', label: 'Tourism' },
  { id: '4', label: 'Photo' },
  { id: '5', label: 'K-POP' },
  { id: '6', label: 'Shopping' },
];

export default function UploadScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleCal = () => {
    navigation.navigate('Calendar');
  };

  return (
    <SafeAreaView>
      <StatusBar style='auto' />

      {/* content */}
      <ScrollView style={styles.container}>
        {/* basic info */}
        <View
          style={{
            paddingHorizontal: Spacing.IOS392Margin,
          }}
        >
          {/* title */}
          <ContentInputWrap
            title='Title'
            content={<BasicInput placeholder='No more than 50 characters.' />}
          />

          {/* Explanation */}
          <ContentInputWrap
            title='Explanation'
            content={
              <BasicInput
                placeholder='No more than 500 characters.'
                textarea
                maxLength={500}
              />
            }
          />

          {/* Category */}
          <ContentInputWrap
            title='Category'
            subTitle='Select all relevant categories.'
            content={
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '80%',
                }}
              >
                {CategoryList.map((ctry) => (
                  <PressHashTag
                    key={ctry.id}
                    label={ctry.label}
                    style={{ marginRight: 5, marginBottom: 5 }}
                  />
                ))}
              </View>
            }
          />

          {/* Hashtag */}
          <ContentInputWrap
            title='Hashtag'
            subTitle='Enter tags associated with the program (Up to 3)'
            content={<BasicInput placeholder='#tag' />}
          />

          {/* Location */}
          <ContentInputWrap
            title='Location'
            subTitle='EX) In front of Lotte Tower in Jamsil-dong, Songpa-gu, Seoul'
            content={<BasicInput placeholder='Please enter a location.' />}
          />

          {/* Available Dates */}
          <ContentInputWrap
            title='Available Dates'
            content={<Button title='calendar go' onPress={handleCal} />}
          />

          {/* Time to meet */}
          <ContentInputWrap
            title='Time to meet'
            content={<Button title='calendar go' onPress={handleCal} />}
          />

          {/* Recruited Persons */}
          <ContentInputWrap
            title='Recruited Persons'
            content={<Counter min={1} max={10} />}
          />

          {/* E-mail */}
          <ContentInputWrap title='E-mail' content={<View />} />
        </View>

        {/* Program Course */}
        <SectionDividerBar />
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          {/* temp */}
        </View>
        {/* Program Cost */}
        <SectionDividerBar />
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          {/* temp */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: '#ffffff',
  },
});
