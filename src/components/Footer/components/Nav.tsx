import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://bscscan.com/address/0xb594eb091b1cc711879ce5379f5fd06c4b028833#code"
      >
       𝒄𝒐𝒏𝒕𝒓𝒂𝒄𝒕 𝒎𝒂𝒔𝒕𝒆𝒓𝒄𝒉𝒆𝒇
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://exchange.backup.finance/#/swap?inputCurrency="
      >
        𝐭𝐫𝐚𝐝𝐞 𝐛𝐮𝐩-𝐛𝐧𝐛
      </StyledLink>
      <StyledLink target="_blank" href="http://backup.medium.com">
        𝐛𝐚𝐜𝐤𝐮𝐩 𝐧𝐞𝐰𝐬
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/BACKUP_FINANCE">
         𝐭𝐰𝐢𝐭𝐭𝐞𝐫
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/BACKUPSWAP">
        𝐭𝐞𝐥𝐞𝐠𝐫𝐚𝐦
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
