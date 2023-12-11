import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colors from '@styles/colors';

type TabTypes = {
  tabName: string;
  tabComponent: React.ReactNode;
};

function BasicTab({ data }: { data: TabTypes[] }) {
  const [activeTab, setActiveTab] = React.useState('Post');

  const renderTab = (tabName: string) => (
    <TouchableOpacity
      key={tabName}
      style={styles.tabTouch}
      onPress={() => setActiveTab(tabName)}
    >
      <View style={[styles.tab, activeTab === tabName && styles.activeTab]}>
        <Text
          style={[
            styles.tabText,
            activeTab === tabName && styles.activeTabText,
          ]}
        >
          {tabName}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {data.map((item) => renderTab(item.tabName))}
      </View>
      {data.map((item) => activeTab === item.tabName && item.tabComponent)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    height: 45,
    flexDirection: 'row',
    marginBottom: 25,
  },
  tabTouch: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.blank,
  },
  tab: {
    paddingTop: 13,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.tabIndicator,
  },
  tabText: {
    flex: 1,
    color: colors.inactiveColor,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 19,
  },
  activeTabText: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
});

export default BasicTab;
