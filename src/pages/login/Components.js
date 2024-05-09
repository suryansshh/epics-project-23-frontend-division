import styled from 'styled-components';

export const Container = styled.div`
  position: relative; /* Ensure that the container is positioned relative to contain absolute elements */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Set the width to fill the container */
  height: 100%; /* Set the height to fill the container */
  object-fit: cover; /* Ensure the video covers the entire container */
  z-index: -1;
  filter: blur(8px); /* Add blur effect */
`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #7754f8;
   background-color: #7754f8;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: hsl(253, 92%, 65%) ;
background: -webkit-linear-gradient(to right, #7754f8, #b19dfb );
background: linear-gradient(to right, #b19dfb, #7754f8);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
   right:300px;
  transform: translateX(-0);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right:-35px;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;
export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #C7BAF6;
  }

  svg {
    margin-right: 0.5rem;
  }
`;