import React from "react"
import styled from "styled-components"

const A = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
        color: red;
    }
`

export default function Linkout(props) {
    return (
        <A href={props.href} target="_blank" rel="noopener">
            {props.children}
        </A>
    )
}