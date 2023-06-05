import { Button, Input, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import Layout from "./layout";
import { useState } from "react";

export default function Contact() {
    const [CSSFontFeatureValuesRule, setValues] = useState({ name: "", email: "", mobile: "" })

    const [name, setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <Layout>
            <VStack as="form" py="140px" w="full" alignItems={"flex-start"} px={4} spacing={6}>
                <Text fontWeight={700} fontSize={20}>
                    무료상담신청
                </Text>
                <VStack w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600}>이름</Text>
                    <Input onChange={handleChange} value={name} bg="gray.100" placeholder="이름을 입력해 주세요" />
                </VStack>
                <VStack w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600}>연락처</Text>
                    <Input bg="gray.100" placeholder="연락처를 입력해 주세요" />
                </VStack>
                <VStack w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600}>email</Text>
                    <Input bg="gray.100" placeholder="이메일을 입력해 주세요" />
                </VStack>
                <RadioGroup>
                    <Stack direction='row'>
                        <Radio value='1'>남성</Radio>
                        <Radio value='2'>여성</Radio>
                    </Stack>
                </RadioGroup>
                <Button colorScheme='blue'>전송하기</Button>
            </VStack>
        </Layout>
    )
}
