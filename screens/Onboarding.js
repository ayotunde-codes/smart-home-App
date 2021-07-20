import React from 'react'
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Animated,
} from 'react-native'
import { slides } from '../data/slides'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions'

import { icons, images, SIZES, COLORS } from '../constants'

const Slide = ({ item }) => {
  return (
    <View>
      <Image
        source={item.image}
        style={{ width: SIZES.width, height: SIZES.height }}
      />
      <View
        style={{
          position: 'absolute',
          width: SIZES.width,
          height: SIZES.height,
          backgroundColor: 'rgba(35, 26, 2, 0.4);',
        }}
      >
        <SafeAreaView style={styles.container}>
          <View
            style={{
              width: responsiveWidth(80),
              marginLeft: 40,
              marginTop: responsiveHeight(20),
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 30,
                width: responsiveWidth(50),
                fontWeight: '700',
                lineHeight: 32,
              }}
            >
              The Perfect Dream House
            </Text>
            <Text
              style={{
                color: ' rgba(255, 255, 255, 0.8)',
                fontSize: 14,
                width: responsiveWidth(68),
                fontWeight: '500',
                lineHeight: 18,
                marginTop: 13,
              }}
            >
              A smart house with advance features that you can control with your
              mobile app
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}
const Onboarding = () => {
  const Footer = () => {
    return (
      <View
        style={{
          height: responsiveHeight(20),
          paddingHorizontal: 30,
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          zIndex: 3,
        }}
      >
          <View style={{flexDirection: 'row', justifyContent:'center'}}>
              <View
          </View>
      </View>
    )
  }
  return (
    <View>
      <StatusBar hidden={true} />
      <FlatList
        data={slides}
        contentContainerStyle={{ height: SIZES.height }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
  },
})

export default Onboarding
