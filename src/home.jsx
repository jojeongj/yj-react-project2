import { Box, GridItem, Text, VStack, Grid } from "@chakra-ui/react";
import Layout from "./layout";

const dataTour = [
    {
        text: "6월이벤트",
        image:
            "https://images.unsplash.com/photo-1684323730687-22830e382106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        text: "7월이벤트",
        image:
            "https://plus.unsplash.com/premium_photo-1676320102845-4fa58706484e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1545&q=80"
    },
    {
        text: "8월이벤트",
        image:
            "https://images.unsplash.com/photo-1684182413379-7f1ee71b021b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1482&q=80"
    }
]
const product = [
    {
        text: "팔공산 투어",
        image:
            "https://images.unsplash.com/photo-1684527953931-e0fe92d884c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        text: "지리산 투어",
        image:
            "https://images.unsplash.com/photo-1602866846830-cdd275073c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVEJTlEJTkxJUVCJUIwJUIxJUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        text: "앞산 투어",
        image:
            "https://images.unsplash.com/photo-1626884550211-aa2a84cf0105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTlEJTkxJUVCJUIwJUIxJUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        text: "뒷산 투어",
        image:
            "https://images.unsplash.com/photo-1564566800380-aa5a49acb065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVEJTlEJTkxJUVCJUIwJUIxJUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
]
export default function Home() {
    return <>
        <Layout>
            <VStack w="inherit" py="140px" px={4} alignItems={"flex-start"} spacing={16}>
                {/*최산상품 컨테이너*/}
                <VStack w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600} fontSize={24}>
                        최신상품
                    </Text>
                    <Grid gap={2}
                        gridTemplateColumns={"repeat(2, 1fr)"} w="full">
                        {
                            product
                                .map((item, index) => (
                                    <GridItem h="200px"
                                        key={index}
                                        border={"1px"}
                                        rounded={"md"}
                                        borderColor="gray.300"
                                        backgroundImage={`url(${item.image})`}
                                        backgroundSize={"cover"}
                                        backgroundPosition={"center center"}
                                        position="relative"
                                        overflow={"hidden"}
                                    >
                                        <Box position="absolute" top={0} left={0} w="full" h="full" bg="rgba(0,0,0,0.6)">
                                            <Text color={"white"}
                                                position="absolute"
                                                w="full" bottom="0"
                                                align="center"
                                                fontWeight={600}
                                                py={4}>
                                                {item.text}
                                            </Text>
                                        </Box>
                                    </GridItem>
                                ))}
                    </Grid>
                </VStack>
                {/*이벤트 컨테이너*/}
                <VStack w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600} fontSize={24}>
                        이벤트
                    </Text>
                    <Grid gap={4} w="full">
                        {
                            dataTour
                                .map((item, index) => (
                                    <GridItem rounded={"10"}
                                        key={index}
                                        w="full" h="120px"
                                        backgroundImage={`url(${item.image})`}
                                        backgroundSize="cover"
                                        backgroundPosition="center center"
                                        position={"relative"}
                                    >
                                        <Box position="absolute"
                                            top={0}
                                            left={0}
                                            w="full"
                                            h="full"
                                            bgGradient={"linear(to-b, rgba(255,255,255,0.1), rgba(255,255,255,0.9))"}>
                                            <Text
                                                w="full"
                                                align="center"
                                                position="absolute"
                                                top="50%"
                                                left="50%"
                                                transform={"translate(-50%, -50%)"}
                                                fontWeight={900}
                                                fontSize="20"
                                                color="red.600"
                                            >
                                                {item.text}
                                            </Text>
                                        </Box>
                                    </GridItem>
                                ))}
                    </Grid>
                </VStack>
            </VStack>
        </Layout>
    </>
}