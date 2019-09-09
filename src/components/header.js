import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import {Linkout} from "../components/export"

const H = styled.header`
  display: block;
  height: 10vh;
`

const Contain = styled.div`
  display: flex;
  width: 100vw;
  padding: 2%;
`

const Logo = styled.img`
  width: 180px;
  align-self: flex-end;
`
const Text = styled.p`
  font-size: 0.9em;
  line-height: 1em;
  padding-top: 1vh;
`

const Header = ({ siteTitle }) => (
  <H>
    <Contain>
      <div style={{width: `50%`}}>
        <Logo src={logo} alt="" />
      </div>
      <Text style={{width: `25%`}}>
        4543 Liberty St. <br /> Los Angeles, CA, 90019, USA
      </Text>
      <Text style={{width: `25%`}}>
        <Linkout href="mailto:hello@opheliastu.com">
          hello@opheliastu.com
        </Linkout>
        <br />
        <Linkout href="https://instagram.com/opheliastu">
          @opheliastu
        </Linkout>
      </Text>
    </Contain>
  </H>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
