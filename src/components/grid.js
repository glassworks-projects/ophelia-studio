/* Yikes! what a monster component this is. Make sure to abstract it later. */

import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { about } from "../text/about-text.json"
import { Arena, Linkout } from "./export"

const Contain = styled(motion.div)`
    position: absolute;
    width: 90vw;
    left: 5vw;
    bottom: 5vh;
    display: grid;
    grid-row-gap: 5px;
    grid-auto-rows: minmax(1fr, auto);
    height: 55vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

const Cell = styled.div`
    border-top: 1px solid black;
    display: flex;
`

const Inner = styled.div`
    padding-left: 0.75vw;
    width: 100%;
    height: 90%;
    align-self: center;
    ${props => props.border && `border-right: 1px solid black;`}
    ${props => props.small && `font-size: 0.75em`}
`

const Info = styled(motion.div)`
    display: grid;
    overflow: hidden;
    position: absolute;
    grid-template-columns: 1fr 3fr;
    height: 0vh;
`

const H1 = styled.h1`
    font-size: 2em;
    font-weight: 300;
    &:hover {
        color: red;
    }
`
const UL = styled.ul`
    padding-top: 1em;
    list-style: none;
    margin-left: 0;
    line-height: 0.5em;
`

const ImgGrid = styled.div`
    display: grid;
    overflow: hidden;
    position: absolute;
    height: ${props => props.height};
    width: 65vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 5fr;
`

const ImgCtr = styled(motion.div)`
    position: relative;
    overflow: scroll;
    height: 0vh;
    grid-row: 1/3;
    grid-column: 2/3;
`

const trans = {ease: 'easeOut', duration: .25}

export default class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: 0,
            height: '55vh',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr'
        }
    }

    resize(x) {

        switch(x) {
            case 0 :
                this.setState({
                    expand: 0,
                    height: '55vh',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr'
                })
            break;
            case 1 : 
                this.setState({
                    expand: 1,
                    height: '80vh',
                    gridTemplateColumns: '3fr 1fr',
                    gridTemplateRows: '4fr 1fr'
                })
            break;
            case 2 : 
                this.setState({
                    expand: 2,
                    height: '80vh',
                    gridTemplateColumns: '1fr 3fr',
                    gridTemplateRows: '4fr 1fr'
                })
            break;  
            case 3 : 
                this.setState({
                    expand: 3,
                    height: '80vh',
                    gridTemplateColumns: '3fr 1fr',
                    gridTemplateRows: '1fr 4fr'
                }) 
            break;
            case 4 :
                this.setState({
                    expand: 4,
                    height: '80vh',
                    gridTemplateColumns: '1fr 3fr',
                    gridTemplateRows: '1fr 5fr'
                })
            break;
        }
    }
    render() {
        return (
            <Contain animate={{
                'height' : this.state.height,
                'gridTemplateColumns' : this.state.gridTemplateColumns,
                'gridTemplateRows' : this.state.gridTemplateRows
            }}
            transition={trans}>
                <Cell>
                    <Inner border={true}>
                        {(this.state.expand == 1) ? 
                        <motion.div style={{
                            display: `flex`,
                            flexDirection: `column`,
                            overflow: `hidden`,
                            height: `0vh`
                        }} animate={{'height' : 'auto'}}>
                            <H1 onClick={() => this.resize(0)}>X</H1>
                            <div style={{
                                alignSelf: `center`,
                                fontSize: `2em`,
                                paddingTop: `5vh`
                            }}>
                                (~‾▽‾)~
                            </div>
                            <div style={{alignSelf: `center`, paddingTop: `5vh`}}>
                                soon come
                            </div>
                        </motion.div>
                        :
                        <H1 onClick={() => this.resize(1)}>REEL</H1>
                        }
                    </Inner>
                </Cell>
                <Cell>
                    <Inner>
                        {(this.state.expand == 2) ? 
                        <Info animate={{'height' : 'auto'}} transition={trans}>
                            <H1 onClick={() => this.resize(0)}>X</H1>
                            <br />
                            <div 
                            style={{
                                gridColumn: `1/3`, 
                                borderBottom: `1px solid black`,
                                height: `15vh`
                                }}
                            >
                                {about}
                            </div>
                            <Inner small={true} border={true}>
                                CLIENTS
                                <UL>
                                    <li>
                                        <Linkout href="https://48k.club">
                                            48k
                                        </Linkout>
                                    </li>
                                    <li>
                                        <Linkout href="https://soundcloud.com/cavaliersound">
                                            Cavalier
                                        </Linkout>
                                    </li>
                                </UL>
                            </Inner>
                            <Inner small={true}> 
                                SERVICES
                                <UL>
                                    <li>Interactive Design</li>
                                    <li>Art Direction</li>
                                    <li>Web Development</li>
                                    <li>Branding & Identity</li>
                                    <li>Motion Graphics</li>
                                    <li>Graphic Design</li>
                                    <li>Exhibition Design</li>
                                </UL>

                            </Inner>
                        </Info> 
                        :
                        <H1 onClick={() => this.resize(2)}>INFO</H1>
                        }
                    </Inner>
                </Cell>
                <Cell>
                    <Inner border={true}>
                        {(this.state.expand == 3) ?
                        <motion.div style={{
                            display: `flex`,
                            flexDirection: `column`,
                            overflow: `hidden`,
                            height: `0vh`
                        }} animate={{'height' : 'auto'}}>
                            <H1 onClick={() => this.resize(0)}>X</H1>
                            <div style={{
                                alignSelf: `center`,
                                fontSize: `2em`,
                                paddingTop: `5vh`
                            }}>
                                (/￣ー￣)/~~☆’.･.･:★’.･.･:☆
                            </div>
                            <div style={{alignSelf: `center`, paddingTop: `5vh`}}>
                                soon come
                            </div>
                        </motion.div>
                        : 
                        <H1 onClick={() => this.resize(3)}>WORK</H1>
                        }
                    </Inner>
                </Cell>
                <Cell>
                    <Inner>
                        {(this.state.expand == 4) ?
                        <ImgGrid animate={{'height' : '50vh'}} transition={trans}>
                            <H1 onClick={() => this.resize(0)}>X</H1>
                                                       
                            <ImgCtr animate={{'height' : '60vh'}} transition={trans}>
                                <div style={{
                                    position: `absolute`,
                                    width: `100%`,
                                    height: `100%`
                                    }}>
                                    <Arena />
                                </div>
                            </ImgCtr>
                            <div style={{
                                display: `flex`, 
                                flexDirection: `column`, 
                                justifySelf : `start`,
                                alignItems: `flex-start`}}
                                >
                                <img 
                                src={require("../images/arena-logo.png")} 
                                style={{width: `50px`, marginBottom: `0px`}}
                                alt='' />
                                <div style={{fontSize: `0.75em`, lineHeight: `0.7em`, opacity: `0.8`}}>
                                    Feeding from 
                                    <Linkout href="https://www.are.na/jay-park">
                                        are.na
                                    </Linkout>
                                </div>
                            </div>
                        </ImgGrid>
                        :
                        <H1 onClick={() => this.resize(4)}>FEED</H1>
                        }
                        
                    </Inner>
                </Cell>
            </Contain>
        )
    }
}