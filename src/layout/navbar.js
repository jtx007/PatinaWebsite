import styled from "styled-components"
import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import { Link } from 'gatsby'

const Nav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
`
const StyledLink = styled(Link)`
    color: #99CC99;
    text-decoration: none;
    margin-right: 15px;
`

const Navbar = () => {
    return (
        <Nav>
            <StaticQuery
                query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            navbarlinks {
                                id
                                name
                                link
                            }
                        }
                    }
                }
            `}
            render={data => {
                const links = data.site.siteMetadata.navbarlinks
                return links.map((link) => {
                    return <StyledLink key={link.id} to={link.link}>{link.name}</StyledLink>
                })

            }}
            />

        </Nav>
    )
}



export default Navbar;
