import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { AiFillApple, AiFillHome, AiFillProfile, AiFillContacts, AiOutlineArrowLeft } from "react-icons/ai"
import { Link, useLocation, useNavigate } from "react-router-dom";

const GNB = [
  { title: "홈", href: "/", icon: AiFillHome },
  { title: "프로필", href: "/profile", icon: AiFillProfile },
  { title: "연락처", href: "/contact", icon: AiFillContacts }
]

export default function Layout({ children, canGoBack, title }) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const handleClick = () => {
    //console.log("실행되나?")
    navigate(-1)
  }
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
            {
              canGoBack
                ?
                (
                  <Box onClick={handleClick} position="absolute" left="20px" cursor="pointer">
                    <AiOutlineArrowLeft color="white" size="24px" />
                  </Box>
                )
                :
                null
            }
            {
              canGoBack ? <Text color="white">{title}</Text> : (<AiFillApple size={32} color="white" />)
            }

          </Box>
          {/*본문*/}
          {children}
          {/*tail*/}

          {
            canGoBack ? null : (<Box w="inherit" h="120px" bg="black" position="fixed" bottom={0}>
              <HStack h="inherit" justifyContent="space-between" alignItems="center" color={"white"}>
                {GNB.map((item) => (
                  <Box w="full">
                    <Link to={item.href}>
                      <VStack color={location.pathname === item.href ? "red.600" : "white"} w="full">
                        <item.icon size={24} />
                        <Text color={location.pathname === item.href ? "red.600" : "white"}>{item.title}</Text>
                      </VStack>
                    </Link>
                  </Box>)
                )}
              </HStack>
            </Box>)
          }
        </VStack>
      </Box>
    </>
  );
}