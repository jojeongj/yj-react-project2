import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./layout";

export default function Profile() {
    return (
        <Layout>
            <VStack as="form" bg="gray.400" minH="100vh" py="140px" w="full" px={4} spacing={6}>
                <VStack spacing={6}>
                    <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        size="xl" color="black" bg="white" name='조정' />
                    <Text fontSize={20} fontFamily={600}>조정</Text>
                    <Text fontSize={14}>풀스택 개발자를 꿈꾸는 조정</Text>
                </VStack>
                <HStack w="80%">
                    <Box border="1px" rounded="x1" px="20px" py="1" w="140px" align="center" color="yellow.600">Contact</Box>
                    <Box border="1px" rounded="x1" px="20px" py="1" w="140px" align="center" color="yellow.600">Follow</Box>
                </HStack>
            </VStack>
        </Layout>
    );
}
