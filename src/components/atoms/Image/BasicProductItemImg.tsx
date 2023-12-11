import { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function BasicProductItemImg({
  children,
  planUri,
}: {
  children: ReactNode;
  planUri: string;
}) {
  return (
    <ImageBackground
      source={{
        uri: planUri,
      }}
      resizeMode='cover'
      style={styles.imgStyle}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    flex: 1,
  },
});
