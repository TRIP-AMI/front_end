import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import PostItemList from '@components/organisms/Section/PostItemList';
import colors from '@styles/colors';

type RouteType = {
  key: string;
  title: string;
  indicator: number;
};

const renderScene = ({ route }: { route: RouteType }) => {
  switch (route.key) {
    case 'post':
      return <PostItemList />;
    case 'review':
      return <PostItemList />;
    default:
      return null;
  }
};

// TODO indicator 길이 바뀌는게 한박자 느림...
function MyTab() {
  const layoutSize = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'post', title: 'Post', indicator: 0.12 },
    { key: 'review', title: 'Review', indicator: 0.173 },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layoutSize.width }}
        renderTabBar={({ navigationState, position, jumpTo, layout }) => (
          <TabBar
            style={styles.tabBar}
            activeColor={colors.titleBlack}
            inactiveColor={colors.inactiveColor}
            renderLabel={({ route, color }) => (
              <Text
                style={{
                  color,
                  fontFamily:
                    color === colors.titleBlack
                      ? 'Montserrat-Bold'
                      : 'Montserrat-SemiBold',
                  fontSize: 16,
                }}
              >
                {route.title}
              </Text>
            )}
            indicatorStyle={{
              width:
                Dimensions.get('window').width *
                routes[navigationState.index].indicator,
              height: 2,
              backgroundColor: colors.tabIndicator,
              left:
                (Dimensions.get('window').width / routes.length -
                  Dimensions.get('window').width *
                    routes[navigationState.index].indicator) /
                2,
            }}
            navigationState={navigationState}
            position={position}
            jumpTo={jumpTo}
            layout={layout}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    marginBottom: 15,
    height: 45,
    backgroundColor: '#FFFFFF',
  },
});

export default MyTab;
