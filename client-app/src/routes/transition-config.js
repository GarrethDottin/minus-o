import { Animated, Easing } from 'react-native';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps;
      const toIndex = index;
      const thisSceneIndex = scene.index;
      const height = layout.initHeight;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0],
      });

      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0],
      });

      const slideFromRight = { transform: [{ translateX }] };
      const slideFromBottom = { transform: [{ translateY }] };

      const lastSceneIndex = scenes[scenes.length - 1].index;

      if (lastSceneIndex - toIndex > 1) {
        if (scene.index === toIndex) return;
        return slideFromBottom;
      }
      if (toIndex === 1) return slideFromBottom;
      return slideFromRight;
    },
  };
};

export default transitionConfig;
