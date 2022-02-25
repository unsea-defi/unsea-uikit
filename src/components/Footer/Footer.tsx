import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
  StyledPolicyItem,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";
import { Text } from "../Text";
import { policies } from "./config";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <Flex
          flexDirection={["column", null, null, "row"]}
          justifyContent="space-between"
          alignItems={["center", null, null, "flex-start"]}
          mb="42px"
        >
          <StyledIconContainer flex="1">
            <LogoWithTextIcon isDark width="230px" />
            <Text color="text" fontSize="26px" bold mb="20px" mt="20px">Utility NFT Coin</Text>
            <StyledSocialLinks />
          </StyledIconContainer>
          <Flex
            flexDirection={["column", "row", "row", "row"]}
            justifyContent="space-around"
            alignItems="center"
            width="100%"
            flex="2">
            {items?.map((item) => (
              <StyledList key={item.label}>
                <StyledListItem>{item.label}</StyledListItem>
                {item.items?.map(({ label, href, isHighlighted = false }) => (
                  <StyledListItem key={label}>
                    {href ? (
                      <Link
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        color={isHighlighted ? baseColors.warning : darkColors.text}
                        bold={false}
                      >
                        {label}
                      </Link>
                    ) : (
                      <StyledText>{label}</StyledText>
                    )}
                  </StyledListItem>
                ))}
              </StyledList>
            ))}
          </Flex>
        </Flex>
        <Flex
          flexDirection={["column", null, "row"]}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="14px" textAlign="center">@Copyright 2022 Utility, llca All Right referved.</Text>
          <Flex>
            {
              policies.map((policy) => (
                <StyledPolicyItem href={policy.href}>{policy.label}</StyledPolicyItem>
              ))
            }
          </Flex>
        </Flex>
        {/* <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <CakePrice cakePriceUsd={cakePriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box>
            <Button
              as="a"
              href="https://dex.unsea.io/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
            >
              {buyCakeLabel}
            </Button>
          </Flex>
        </StyledToolsContainer> */}
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
