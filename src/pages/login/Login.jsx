import React, { useState } from 'react';
import * as Components from './Components';
import './login.scss';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function Login() {
  const [signIn, toggle] = useState(true);

  return (
    <div className="mainbody">
      <div className="insidebody">
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>
              <Components.Input type="text" placeholder="Name" />
              <Components.Input type="email" placeholder="Email" />
              <Components.Input type="password" placeholder="Password" />
              <Components.Button>Sign Up</Components.Button>
              <Components.SocialButtons>
                <Components.SocialButton>
                  <GoogleIcon />
                  Google
                </Components.SocialButton>
                <Components.SocialButton>
                  <GitHubIcon />
                  GitHub
                </Components.SocialButton>
              </Components.SocialButtons>
            </Components.Form>
          </Components.SignUpContainer>
          <div></div>
          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input type="email" placeholder="Email" />
              <Components.Input type="password" placeholder="Password" />
              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              <Components.Button>Sign In</Components.Button>
              <Components.SocialButtons>
                <Components.SocialButton>
                  <GoogleIcon />
                  Google
                </Components.SocialButton>
                <Components.SocialButton>
                  <GitHubIcon />
                  GitHub
                </Components.SocialButton>
              </Components.SocialButtons>
            </Components.Form>
          </Components.SignInContainer>
          <div className="desccontent">
            <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>
                <Components.LeftOverlayPanel className="contentbody" signinIn={signIn}>
                  <Components.Title>staff.io</Components.Title>
                  <Components.Paragraph>Please login with your personal info</Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
                </Components.LeftOverlayPanel>
                <Components.RightOverlayPanel className="contentbody" signinIn={signIn}>
                  <Components.Title>staff.io</Components.Title>
                  <Components.Paragraph>Enter Your personal details</Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
                </Components.RightOverlayPanel>
              </Components.Overlay>
            </Components.OverlayContainer>
          </div>
        </Components.Container>
      </div>
    </div>
  );
}

export default Login;