import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
        <StyledLink
        target="_blank"
        href="https://exchange.backup.finance/">
        </StyledLink>
        Trade BUP-BNB
      </StyledLink> /}
      <StyledLink target="_blank" href="https://discord.com/">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/Backupfinance">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/BACKUP_FINANCE">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://backupfinance.medium.com/">
        Medium
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
