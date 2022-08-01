import React from "react";
import { styled, keyframes } from "@stitches/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as styles from './styles';
import { violet, mauve, blackA } from "@radix-ui/colors";
import Wallet from "../../assets/icons/walletIcon.svg";
import Axies from "../../assets/icons/axiesIcon.svg";


export const ContentListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <styles.ListItem>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          "&:hover": { backgroundColor: mauve.mauve3 },
        }}
      >
        <styles.LinkTitle>{title}</styles.LinkTitle>
        <styles.LinkText>{children}</styles.LinkText>
      </NavigationMenuLink>
    </styles.ListItem>
  )
);

// Exports
const NavigationMenuZero = styles.StyledMenu;
const NavigationMenuList = styles.StyledList;
const NavigationMenuItem = NavigationMenu.Item;
const NavigationMenuTrigger = styles.StyledTriggerWithCaret;
const NavigationMenuTriggerNoCaret = styles.StyledTrigger;
const NavigationMenuSearchTrigger = styles.StyledTriggerWithMG;
const NavigationMenuButton = styles.StyledTriggerWithImg;
const NavigationMenuImg = styles.StyledImg;
const NavigationMenuLink = styles.StyledLink;
const NavigationMenuContent = styles.StyledContent;
const NavigationMenuViewport = styles.StyledViewport;
const NavigationMenuIndicator = styles.StyledIndicatorWithArrow;


export const NavigationMenuDemo = () => {
  return (
    <NavigationMenuZero>
      <NavigationMenuList>

      <NavigationMenuItem>
      <styles.StyledImg src={Axies}/>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styles.ContentList layout="two">
              <ContentListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ContentListItem>
              <ContentListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>
              <ContentListItem
                title="Styling"
                href="/docs/primitives/overview/styling"
              >
                Unstyled and compatible with any styling solution.
              </ContentListItem>
              <ContentListItem
                title="Animation"
                href="/docs/primitives/overview/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ContentListItem>
              <ContentListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ContentListItem>
              <ContentListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ContentListItem>
            </styles.ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Activity</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styles.ContentList layout="two">
              <ContentListItem title="Introduction" href="">
                Build high-quality, accessible design systems and web apps.
              </ContentListItem>
              <ContentListItem title="Getting started" href="">
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>
              <ContentListItem title="Styling" href="">
                Unstyled and compatible with any styling solution.
              </ContentListItem>
              <ContentListItem title="Animation" href="">
                Use CSS keyframes or any animation library of your choice.
              </ContentListItem>
              <ContentListItem title="Accessibility" href="">
                Tested in a range of browsers and assistive technologies.
              </ContentListItem>
              <ContentListItem title="Releases" href="">
                Radix Primitives releases and their changelogs.
              </ContentListItem>
            </styles.ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
            
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styles.ContentList layout="two">
              <ContentListItem title="Introduction" href="">
                Build high-quality, accessible design systems and web apps.
              </ContentListItem>
              <ContentListItem title="Getting started" href="">
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>
            </styles.ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styles.ContentList layout="two">
              <ContentListItem title="Introduction" href="">
                Build high-quality, accessible design systems and web apps.
              </ContentListItem>
              <ContentListItem title="Getting started" href="">
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>
            </styles.ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styles.ContentList layout="two">
              <ContentListItem title="Introduction" href="">
                Build high-quality, accessible design systems and web apps.
              </ContentListItem>
              <ContentListItem title="Getting started" href="">
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ContentListItem>
            </styles.ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuSearchTrigger />
        </NavigationMenuItem>


        <NavigationMenuItem>
            <styles.StyledButtonTrigger>
                Wallet Connect
                <styles.StyledImg src={Wallet}/>
            </styles.StyledButtonTrigger>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <styles.ViewportPosition>
        <NavigationMenuViewport />
      </styles.ViewportPosition>
    </NavigationMenuZero>
  );
};

export default NavigationMenuDemo;
