import React from "react";
import { Button, Center, PresenceTransition, NativeBaseProvider } from "native-base";

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Center>
      <Button shadow={2} onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </Button>
      <PresenceTransition visible={isOpen} initial={{
      opacity: 0,
      scale: 0,
      translateY: -300
    }} animate={{
      opacity: 1,
      scale: 1,
      translateY: 0,
      transition: {
        duration: 250
      }
    }}>
        <Center mt="7" bg="teal.500" rounded="md" w="200" h="100" _text={{
        color: "white"
      }} shadow={2}>
          Fade
        </Center>
      </PresenceTransition>
    </Center>;
};

const PresenceTransitionTeste = () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };

export default PresenceTransitionTeste;