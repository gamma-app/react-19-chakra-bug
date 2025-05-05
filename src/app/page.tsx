'use client'

import { Button, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import { useMemo } from "react";

export default function Home() {
  const rightIcon = <Text>Click me</Text> // Causes SSR crash
  const rightIconMemoized = useMemo(() => <Text>Click me</Text>, []) // No SSR crash

  return (
    <ChakraProvider>
      <Flex direction="column" w="100%" h="100vh">
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Button
            rightIcon={rightIcon}
          >
            Click me
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
