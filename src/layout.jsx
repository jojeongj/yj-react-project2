import { Box, Button, VStack, Text, HStack, Grid, GridItem } from "@chakra-ui/react";
import { Children } from "react";
import { AiFillApple, AiFillHome, AiFillProfile, AiFillContacts } from "react-icons/ai"
import { Link } from "react-router-dom";


export default function Layout({ children }) {
  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w="sm">
          {/*헤더*/}
          <Box display={"flex"}
            justifyContent={"center"}
            lineHeight={"120px"}
            w="inherit"
            h="120px"
            bg="black"
            position="fixed"
            top={0}
            alignItems={"center"}
            zIndex={9}
          >
            <AiFillApple size={32} color="white" />
          </Box>
          {/*본문*/}
          {children}
          {/*tail*/}
          <Box w="inherit" h="120px" bg="black" position="fixed" bottom={0}>
            <HStack h="inherit" justifyContent="space-between" alignItems="center" color={"white"}>
              <Link to="/">
                <VStack w="full">
                  <AiFillHome />
                  <Text>홈</Text>
                </VStack>
              </Link>
              <Link to="/profile">
                <VStack w="full">
                  <AiFillProfile />
                  <Text>프로필</Text>
                </VStack>
              </Link>
              <Link to="/contact">
                <VStack w="full">
                  <AiFillContacts />
                  <Text>연락처</Text>
                </VStack>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}