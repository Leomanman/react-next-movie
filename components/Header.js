import { Box, Container, Button, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FaSignInAlt, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { css } from '@emotion/react';
import Link from 'next/link'

const logo = css`
  width: 140px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Search = styled.a`
  float: right;
  height: 52px;
  border-right: 1px solid #393939;
  border-left: 1px solid #393939;
  color: #fff;
  font-size: 16px;
  padding: 0 15px;
  display: flex;
  align-items: center;
`

const SignInAndJoin = styled.div`
  height: 52px;
  line-height: 52px;
  color: #fff;
  border-right: 1px solid #393939;
  border-left: 1px solid #393939;
  float: left;
  padding: 0 6px;
  & > button:nth-of-type(1):after {
    content: "";
    width: 1px;
    height: 10px;
    background: white;
    position: absolute;
    right: 0;
    top: 10px;
  }
`

export default function Header() {
  return (
    <Box h='52px' bgColor="#202020" borderbottom="1px solid #393939">
      <Container h="52px" maxW={1200} pos='relative'>
        <SignInAndJoin>
          <Button
            colorScheme="transparent"
            leftIcon={<FaSignInAlt />}
          >
            登录
          </Button>
          <Button
            colorScheme="transparent"
            leftIcon={<BsFillPersonFill />}
          >
            注册
          </Button>
        </SignInAndJoin>
        <Image css={logo} src="/images/logo.png" alt=''></Image>
        <Link href="#">
          <Search>
            <FaSearch />
          </Search>
        </Link>
      </Container>
    </Box>
  )
}