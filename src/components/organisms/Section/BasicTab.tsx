import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colors from '@styles/colors';

type TabTypes = {
  id: number;
  tabName: string;
  tabComponent: React.ReactNode;
};

function BasicTab({ data }: { data: TabTypes[] }) {
  const [activeTab, setActiveTab] = React.useState('Post');

  const renderTab = (item: TabTypes) => (
    <TouchableOpacity
      key={item.id.toString()}
      style={styles.tabTouch}
      onPress={() => setActiveTab(item.tabName)}
    >
      <View
        style={[styles.tab, activeTab === item.tabName && styles.activeTab]}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === item.tabName && styles.activeTabText,
          ]}
        >
          {item.tabName}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {data.map((item) => renderTab(item))}
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
