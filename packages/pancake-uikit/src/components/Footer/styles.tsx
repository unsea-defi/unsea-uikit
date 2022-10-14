import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: ${darkColors.gradients.special};
  border-top: 6px solid #707070;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${darkColors.primary};
    font-weight: 600;
    font-size: 20px;
  }
`;

export const StyledPolicyItem = styled.a`
  font-size: 12px;
  color: ${darkColors.text};
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 16px;

  &:not(:first-of-type) {
    border-left: 1px solid ${darkColors.textSubtle};
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0px;
    font-size: 14px;
  }
`;

export const StyledIconContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  background: #00000077;
  padding: 14px 18px;
  border-radius: 13px;
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
`;
