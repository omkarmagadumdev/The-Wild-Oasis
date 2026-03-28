import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import SocialLinks from "./SocialLinks";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 56.25em) {
    grid-row: auto;
    border-right: none;
    border-bottom: 1px solid var(--color-grey-100);
    padding: 1.2rem 1.6rem;
    gap: 1.2rem;
  }
`;

const DesktopOnly = styled.div`
  @media (max-width: 56.25em) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      <DesktopOnly>
        <Uploader />
      </DesktopOnly>
      <DesktopOnly>
        <SocialLinks />
      </DesktopOnly>
    </StyledSidebar>
  );
}

export default Sidebar;
