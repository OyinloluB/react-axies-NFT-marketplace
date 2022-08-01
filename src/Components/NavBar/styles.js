import {styled, keyframes } from "@stitches/react";
import { CaretDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { violet, mauve, indigo, purple, blackA } from "@radix-ui/colors";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Wallet from "../../assets/icons/walletIcon.svg";

//Keyframes
export const enterFromRight = keyframes({
    from: { transform: "translateX(200px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
  });
  
  export const enterFromLeft = keyframes({
    from: { transform: "translateX(-200px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
  });
  
  export const exitToRight = keyframes({
    from: { transform: "translateX(0)", opacity: 1 },
    to: { transform: "translateX(200px)", opacity: 0 },
  });
  
  export const exitToLeft = keyframes({
    from: { transform: "translateX(0)", opacity: 1 },
    to: { transform: "translateX(-200px)", opacity: 0 },
  });
  
  export const scaleIn = keyframes({
    from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
    to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  });
  
  export const scaleOut = keyframes({
    from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
    to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
  });
  
  export const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  
  export const fadeOut = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
  });


  //Conponents


export const StyledMenu = styled(NavigationMenu.Root, {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: '100%',
    height: 80,
    zIndex: 1,
  });
  
  export const StyledList = styled(NavigationMenu.List, {
    all: "unset",
    display: "flex",
    justifyContent: "center",
    backgroundColor: `${violet.violet12}`,
    padding: 4,
    borderRadius: 6,
    listStyle: "none",
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
  });
  
  export const itemStyles = {
    padding: "8px 12px",
    outline: "none",
    userSelect: "none",
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 15,
    color: 'white',
    "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
    "&:hover": { backgroundColor: violet.violet13 },
  };
  
  export const StyledTrigger = styled(NavigationMenu.Trigger, {
    all: "unset",
    ...itemStyles,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
  });
  
  export const StyledCaret = styled(CaretDownIcon, {
    position: "relative",
    color: violet.violet10,
    top: 1,
    "[data-state=open] &": { transform: "rotate(-180deg)" },
    "@media (prefers-reduced-motion: no-preference)": {
      transition: "transform 250ms ease",
    },
  });
  
  export const StyledMG = styled(MagnifyingGlassIcon, {
    position: "relative",
    color: violet.violet10,
    top: "71.5%",
    bottom: "8.33%",
    "[data-state=open] &": { transform: "rotate(-180deg)" },
    "@media (prefers-reduced-motion: no-preference)": {
      transition: "transform 250ms ease",
    },
  });
  
  export const StyledImg = styled("img", {
    position: "relative",
    display: "linline-block",
    padding: "0px 8px",
    "[data-state=open] &": { transform: "rotate(-180deg)" },
    "@media (prefers-reduced-motion: no-preference)": {
      transition: "transform 250ms ease",
    }
  });
  
  export const StyledButtonTrigger = styled(NavigationMenu.Trigger, {
    all: "unset",
    ...itemStyles,
    display: "flex",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
    "&:hover": { backgroundColor: violet.violet3 },
  });
  
  export const StyledButton = styled(
      "button",
      {
        all: "unset",
        ...itemStyles,
      backgroundColor: "transparent",

    "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
    "&:hover": { backgroundColor: violet.violet3 },
        border: "none",
        padding: "8px 12px",
        borderRadius: 12,
      },
    );
  
  export const StyledTriggerWithCaret = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledCaret aria-hidden />
      </StyledTrigger>
    )
  );
  
  export const StyledTriggerWithImg = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledImg src={Wallet} />
      </StyledTrigger>
    )
  );
  
  
  export const StyledTriggerWithMG = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledMG aria-hidden />
      </StyledTrigger>
    )
  );
  
  export const StyledLink = styled(NavigationMenu.Link, {
    ...itemStyles,
    display: "block",
    textDecoration: "none",
    fontSize: 15,
    lineHeight: 1,
  });
  
  export const StyledContent = styled(NavigationMenu.Content, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    "@media only screen and (min-width: 600px)": { width: "auto" },
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "250ms",
      animationTimingFunction: "ease",
      '&[data-motion="from-start"]': { animationName: enterFromLeft },
      '&[data-motion="from-end"]': { animationName: enterFromRight },
      '&[data-motion="to-start"]': { animationName: exitToLeft },
      '&[data-motion="to-end"]': { animationName: exitToRight },
    },
  });
  
  export const StyledIndicator = styled(NavigationMenu.Indicator, {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 10,
    top: "100%",
    overflow: "hidden",
    zIndex: 1,
  
    "@media (prefers-reduced-motion: no-preference)": {
      transition: "width, transform 250ms ease",
      '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
      '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
    },
  });
  
  export const StyledArrow = styled("div", {
    position: "relative",
    top: "70%",
    backgroundColor: "white",
    width: 10,
    height: 10,
    transform: "rotate(45deg)",
    borderTopLeftRadius: 2,
  });

  
  export const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
    <StyledIndicator {...props} ref={forwardedRef}>
      <StyledArrow />
    </StyledIndicator>
  ));
  
  export const StyledViewport = styled(NavigationMenu.Viewport, {
    position: "relative",
    transformOrigin: "top center",
    marginTop: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 6,
    overflow: "hidden",
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    height: "var(--radix-navigation-menu-viewport-height)",
  
    "@media only screen and (min-width: 600px)": {
      width: "var(--radix-navigation-menu-viewport-width)",
    },
    "@media (prefers-reduced-motion: no-preference)": {
      transition: "width, height, 300ms ease",
      '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
      '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
    },
  });


  // Your app...
export const ContentList = styled("ul", {
  display: "grid",
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: "none",

  variants: {
    layout: {
      one: {
        "@media only screen and (min-width: 600px)": {
          width: 500,
          gridTemplateColumns: ".75fr 1fr",
        },
      },
      two: {
        "@media only screen and (min-width: 600px)": {
          width: 600,
          gridAutoFlow: "column",
          gridTemplateRows: "repeat(3, 1fr)",
        },
      },
    },
  },
});

export const ListItem = styled("li", {});

export const LinkTitle = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: violet.violet12,
});

export const LinkText = styled("p", {
  all: "unset",
  color: mauve.mauve11,
  lineHeight: 1.4,
  fontWeight: "initial",
});


export const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: "2000px",
});
