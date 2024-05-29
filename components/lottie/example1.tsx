import React from "react";
//import LottieView from "lottie-react-native";
import { Text, View, Box, NativeBaseProvider } from "native-base";
import { NativeBaseConfigProvider } from "native-base/lib/typescript/core/NativeBaseContext";
import LottieView from "lottie-react-native";

const AnimationWithImperativeApi = () => {
  const animationRef = React.useRef<LottieView>(null);

  React.useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <LottieView
      ref={animationRef}
      source={require("../../assets/gradientBall.json")}
      style={{width: "100%", height: "100%"}}
    />
  );
}

const Animation = () => {
  return (
    <NativeBaseProvider>
      {/* Your app components here */}
      <Box bg="primary.500">
        {/* This component can now access the theme using useTheme */}
        <AnimationWithImperativeApi />
      </Box>
    </NativeBaseProvider>
  );
};

export default Animation;
