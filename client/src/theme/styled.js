import styled from "styled-components"
import Office from "assets/office.webp"


export const Img = styled.div`
background-image: ${props => `url(${props.src})`};
background-size: ${props => props.cover || "cover"};
background-position: ${props => props.position || "center"};
background-repeat:${props => props.repeat || "no-repeat"};
width: ${props => props.w || "843px"};
height: ${props => props.h || "632px"};
`

export const CardContent = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
flex-wrap:${props => props.wrap};
flex-direction: ${props => props.direction || "column"};
width: ${props => props.w || "100%"};
height: ${props => props.h || "632px"};
margin: ${props => props.m || "15px"};
padding: ${props => props.p || "15px"};
background-image: ${props => `url(${props.src})`};
background-size: ${props => props.cover || "cover"};
background-position: ${props => props.position || "center"};
background-repeat:${props => props.repeat || "no-repeat"};
border-radius:${props => props.radius};
background-color:${props => props.color || "rgba(255, 255, 255, 0.443)"};
backdrop-filter: ${props => `blur(${props.blur})` || "blur(2px)"};
overflow: hidden
`
export const Title1 = styled.h1`
color: ${props => props.color || "black"};
font-weight: ${props => props.weight || "bold"};
font-size: ${props => props.size || "x-large"};
text-align: ${props => props.align || "center"};
margin: ${props => props.m || "10px 0px -15px 0px"};
text-overflow: ${props => props.textOverflow || "ellipsis"};
text-transform: ${props => props.transform};
font-family: ${props => props.font || "'Roboto',sans serif"};

`
export const Title3 = styled.h3`
color: ${props => props.color || "black"};
font-weight: ${props => props.weight || "bold"};
font-size: ${props => props.size || "x-large"};
text-align: ${props => props.align || "center"};
margin: ${props => props.m || "10px 0px -15px 0px"};
text-overflow: ${props => props.textOverflow || "ellipsis"};
text-transform: ${props => props.transform};
overflow: hidden;
white-space:${props => props.ws || "rgb(9, 57, 154)"} nowrap;
`

export const Subtitle = styled.h5`
color: ${props => props.color || "black"};
font-weight: ${props => props.weight || "bold"};
font-size: ${props => props.size};
text-align: ${props => props.align || "center"};
margin: ${props => props.m || "15px"};
text-transform: ${props => props.transform};
`

export const Button = styled.button`
font-size: ${props => props.size || "1em"};
font-weight: ${props => props.weight || "300"};
text-transform: ${props => props.transform};
height: ${props => props.h || "auto"};
width: ${props => props.w || "auto"};
margin: ${props => props.m || "1em"};
padding: 0.25em 1em;
color: ${props => props.color || "black"};
background-color: ${props => props.bg};
border: 2px solid ${props => props.borderColor || "black"};
border-radius: 5px;
font-family: ${props => props.font || "'Roboto', sans serif"};

&:hover {
    background-color: ${props => props.hover || "black"};
    color: ${props => props.colorFontHover || "rgb(95%, 89%, 79%)"};
    transition: 0.3s;5                                                                                                                                                                            
  }
`

export const ContPage = styled.div`
margin: ${props => props.m || "10px"};
display: ${props => props.display || "flex"};
justify-content: ${props => props.justify || "center"};
flex-direction: ${props => props.direction || "row"};
`

const ParallaxContainer = styled.div`
  background-image: ${props => `url(${Office})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Content = styled.div`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const Parallax = styled(ParallaxContainer)`
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  filter: blur(5px)


  ${CardContent} {
    margin-top: 200px;
  }
`;