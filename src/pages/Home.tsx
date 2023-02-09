import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ani } from '../components/GlobalStyle';
import { TfiArrowRight } from 'react-icons/tfi';

export const Layout = styled.section`
  overflow: hidden;
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  padding: calc(var(--container-padding) * 2) var(--container-padding);
  background-color: var(--color-bg);
`;
const HomeLayout = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
const HomeTitleBox = styled.div`
  padding-right: 2em;
  border-right: 1px solid #12121230;
  font-size: 7rem;
  font-weight: 900;
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.02em;
  transition: all 0.5s;
`;
const HomeTextBox = styled.div`
  overflow: hidden;
`;
const HomeParagraph = styled.p<{ order: number; content: string }>`
  position: relative;
  color: var(--color-grey-light);
  transform: translateY(100%);
  animation: ${ani(`to{transform: translateY(0)}`)} 0.5s ${(props) => props.order * 0.3}s forwards;
  &::before,
  &::after {
    display: block;
    position: absolute;
    inset: 0 0 0 0;
    color: var(--color-black);
    clip-path: inset(100% 0 0 0);
    animation: ${ani(`to{clip-path: inset(0 0 0 0)}`)} 2s ${(props) => 1 + props.order * 0.3}s forwards;
    content: '${(props) => props.content}';
  }
  &::after {
    color: transparent;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png');
    -webkit-background-clip: text;
    background-clip: text;
    opacity: 0.3;
  }
`;
const HomeNavList = styled.ul`
  padding-left: var(--container-padding);
  font-size: 3rem;
  font-weight: 900;
  text-transform: lowercase;
`;
const HomeNavItem = styled.li`
  overflow: hidden;
  padding: 0.5em 0;
`;
const HomeIconBox = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin-left: 0.5em;
`;
const HomeArrowIcon = styled(TfiArrowRight)`
  color: var(--color-black);
  font-size: 0.5em;
  opacity: 1;
  transform: translateX(-100%);
  transition: all 0.5s;
`;
const HomeNavLink = styled(Link)<{ order: number }>`
  display: flex;
  align-items: center;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-black);
  opacity: 0.5;
  transform: translateX(-100%);
  animation: ${ani(`to{transform: translateX(0)}`)} 0.5s ${(props) => 1 + props.order * 0.5}s forwards;
  transition: all 0.5s;
  &:hover {
    color: var(--color-black);
    opacity: 1;
    ${HomeArrowIcon} {
      transform: translateX(0);
      animation: ${ani(`0% {transform: translateX(0)}; 100%{transform: translateX(10px)}`)} 0.5s alternate infinite;
    }
  }
`;

export default function Home() {
  return (
    <HomeLayout>
      <HomeBox>
        <div>
          <HomeTitleBox>
            <HomeTextBox>
              <HomeParagraph order={0} content='Front-end'>
                Front-end
              </HomeParagraph>
            </HomeTextBox>
            <HomeTextBox>
              <HomeParagraph order={1} content='Junior Developer'>
                Junior Developer
              </HomeParagraph>
            </HomeTextBox>
            <HomeTextBox>
              <HomeParagraph order={2} content='Park Inseon'>
                Park Inseon
              </HomeParagraph>
            </HomeTextBox>
            <HomeTextBox>
              <HomeParagraph order={3} content='Portfolio'>
                Portfolio
              </HomeParagraph>
            </HomeTextBox>
          </HomeTitleBox>
        </div>
        <nav>
          <HomeNavList>
            <HomeNavItem>
              <HomeNavLink to='/about' order={1}>
                About
                <HomeIconBox>
                  <HomeArrowIcon />
                </HomeIconBox>
              </HomeNavLink>
            </HomeNavItem>
            <HomeNavItem>
              <HomeNavLink to='/projects' order={2}>
                Projects
                <HomeIconBox>
                  <HomeArrowIcon />
                </HomeIconBox>
              </HomeNavLink>
            </HomeNavItem>
            <HomeNavItem>
              <HomeNavLink to='/contact' order={3}>
                Contact
                <HomeIconBox>
                  <HomeArrowIcon />
                </HomeIconBox>
              </HomeNavLink>
            </HomeNavItem>
          </HomeNavList>
        </nav>
      </HomeBox>
    </HomeLayout>
  );
}
