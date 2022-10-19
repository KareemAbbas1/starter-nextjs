"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/largeLogo2.png
/* harmony default export */ const largeLogo2 = ({"src":"/_next/static/media/largeLogo2.a73f2945.png","height":1776,"width":1572,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAG1BMVEX///////////////////////////////////8HBRbfAAAACXRSTlMDN1AaQ3RmJ4YtMwP6AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nBXLyRHAQAgEsZ4D2Pwjdll/Ad0C1NtCIuvCWvI83tjeIdJIgWiaP5wPPhPtAJ1q8HOzAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.js








const Container = external_styled_components_default().div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-iht73u-0"
})(["max-width:100vw;height:40vh;margin:0px;padding-inline-end:3rem;padding-inline-start:5rem;background-color:#16171F;display:flex;justify-content:space-between;align-items:center;@media(min-width:1400px){padding-inline:15rem;}@media(max-width:990px){height:30vh;}@media(max-width:600px){flex-direction:column;padding-inline:1rem;padding-bottom:1rem;position:relative;bottom:0;left:0;}div.newsletter-container{width:33%;margin-top:-3.5rem;color:#fff;display:flex;flex-direction:column;@media(max-width:600px){width:100%;margin-top:0;font-size:0.8rem;h4{margin-bottom:0.5rem;}}div.newsletter{width:100%;display:flex;align-items:center;input{width:70%;padding:0.8rem;margin:0px;border:none;@media(max-width:600px){padding:0.5rem;}}button{width:25%;padding:0px;color:#fff;background-color:#F26630;border:none;border-color:#F26630;border-radius:0%;border-top-right-radius:5px;border-bottom-right-radius:5px;transition:all 300ms ease-in-out;cursor:pointer;h4{padding:0px;margin:0.8rem 0;@media(max-width:600px){margin:0.54rem 0;}}&:hover{opacity:0.8;}}@media(max-width:990px){button{width:30%;padding:1px 5px;h4{font-size:0.7rem;}}}}}div.image-container{height:9rem;width:9rem;display:block;object-fit:contain;@media(max-width:990px){width:5rem;margin-top:4rem;}@media(max-width:600px){width:3rem;display:inline;margin:0;position:absolute;right:1rem;bottom:-4.5rem;}}div.icons-container{width:33%;color:#fff;margin-top:-3.5rem;@media(max-width:990px){margin-top:-2.7rem;}@media(max-width:600px){width:100%;margin-top:0rem;h4{font-size:0.8rem;margin-bottom:0.5rem;}}div.icons{width:100%;display:flex;height:auto;}div.icon{width:3.5rem;height:3.5rem;background-color:#F26630;border-radius:50%;display:flex;justify-content:center;align-items:center;margin-inline-end:2rem;transition:all 300ms ease-in-out;cursor:pointer;a{height:100%;width:100%;display:flex;align-items:center;justify-content:center;}&:hover{transform:translateY(-7px);opacity:0.8;}@media(max-width:990px){width:3rem;height:3rem;margin-inline-end:0.5rem;}@media(max-width:600px){width:2.5rem;height:2.5rem;margin-inline-end:0.5rem;}}}"]);

const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "newsletter-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: "Subscribe to get our latest Offers"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "newsletter",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "email"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Subscribe"
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "image-container",
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: largeLogo2,
        alt: "logo",
        layout: "responsive"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "icons-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: "Follow Us"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "icons",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "https://facebook.com",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Facebook, {
                size: 25,
                color: "#ffff"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "https://instagram.com",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Instagram, {
                size: 25,
                color: "#ffff"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "https://youtube.com",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Youtube, {
                size: 25,
                color: "#ffff"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "https://web.whatsapp.com",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Whatsapp, {
                size: 25,
                color: "#ffff"
              })
            })
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/navbar/styles.js

const Nav = external_styled_components_default().div.withConfig({
  displayName: "styles__Nav",
  componentId: "sc-1wotk8-0"
})(["width:100vw;height:4rem;background-color:", ";position:", ";top:0;left:0;display:flex;justify-content:space-between;align-items:center;padding-inline-start:1rem;padding-inline-end:2rem;box-sizing:border-box;z-index:1000;overflow:hidden;button,a{cursor:pointer;}button.language-icon{min-width:3.5rem;padding:0%;margin:0%;background-color:transparent;border:none;padding:0px;margin-right:0.5rem;display:flex;align-items:center;justify-content:space-between;transition:all 200ms ease;&:hover{transform:scale(1.1)}@media(min-width:1400px){min-width:4rem;}}button{background-color:#F26630;color:#fff;font-weight:bold;padding:0.45rem 1rem;border:1px solid #F26630;transition:all 500ms ease;&:hover{background-color:transparent;}}@media(min-width:1450px){padding-inline:6rem;height:5rem;button{padding:0.5rem 2rem;font-size:", ";}button.language-icon{font-size:1rem;}}@media(max-width:990px){button{padding:0.3rem 1rem;position:relative;right:35px;}button.language-icon{right:0px;margin-right:1.2rem;}}@media(max-width:990px){button{display:none;}}"], props => `${props.bg}`, props => `${props.position}`, ({
  language
}) => language === "العربية" && "1.1rem");
const WhatsApp = external_styled_components_default().button.withConfig({
  displayName: "styles__WhatsApp",
  componentId: "sc-1wotk8-1"
})(["width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;position:fixed;right:0%;top:calc(4% + 2.72rem);z-index:10;padding:0;font:2rem;border:none;outline:none;background-color:#000;color:white;cursor:pointer;border-radius:3px;transition:all 300ms ease-in-out;&:hover{transform:translateX(-8%);}@media(max-width:990px){top:calc(2% + 2.8rem);}@media(max-width:600px){width:2.65rem;height:2.65rem;top:calc(2% + 2.4rem);margin-right:2px;}"]);
const ScrollToTop = external_styled_components_default().button.withConfig({
  displayName: "styles__ScrollToTop",
  componentId: "sc-1wotk8-2"
})(["width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;position:fixed;right:0%;top:", ";z-index:99;padding:0;font:1.5rem;border:none;outline:none;background-color:#000;color:white;cursor:pointer;border-radius:3px;transition:all 300ms ease-in-out;&:hover{transform:translateX(-8%);}@media(max-width:990px){top:calc(2% + 5.9rem);}@media(max-width:600px){width:2.65rem;height:2.65rem;top:calc(2% + 5.1rem);margin-right:2px;}"], ({
  router
}) => router.pathname !== "/admin/dashboard" ? `calc(4% + 5.8rem)` : '90%');
const Button = external_styled_components_default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1wotk8-3"
})([""]);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./public/earthIcon.png
/* harmony default export */ const earthIcon = ({"src":"/_next/static/media/earthIcon.23e51a1c.png","height":100,"width":100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlMCPKobmL13S3KEhZ02IQAAAAlwSFlzAAAD6AAAA+gBtXtSawAAADBJREFUeJxFi0kKACAQw9KOs/j/D4sg2FMgKYDEXXgtB+CcSYNmd+/SB5xVV/343Q8biADBJQP5PgAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./public/logo2.png
/* harmony default export */ const logo2 = ({"src":"/_next/static/media/logo2.23eca014.png","height":380,"width":1069,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXwZS+ZjGb2YyupwmfIxFvxZTC2l2l9o6fxZTB9qqcphVJGAAAACnRSTlMCB0IhPyhTSiRULIBfiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAB5JREFUeJxjYGZhZGQAAU42diYmJg5WBmYWRgaQEAADdAA8HfJjSgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/navbar/SideNav.js







const NavLinks = external_styled_components_default().ul.withConfig({
  displayName: "SideNav__NavLinks",
  componentId: "sc-12h58ha-0"
})(["list-style:none;display:flex;width:", ";height:", ";background-color:", ";padding-block:", ";margin-top:", ";position:", ";right:", ";top:0;z-index:9;transform:", ";transition:all 300ms ease;div{display:flex;flex-flow:", ";align-items:", ";width:100%;margin:0px;padding:0px;padding-right:", ";transform:", ";@media(min-width:1400px){transform:", ";}@media(max-width:990px){transform:", ";}@media(max-width:690px){transform:", ";}}li{margin-inline:", ";margin-block:", ";font-size:", ";font-weight:700;text-transform:uppercase;cursor:pointer;a{color:", ";text-decoration:none;}::after{content:'';display:block;width:0;height:2px;background:#F26630;transition:width .3s;}&:hover::after{width:100%;}@media(max-width:990px){display:", ";}}h3{display:", ";}@media(min-width:1450px){li{font-size:", ";}}@media(max-width:600px){width:200px;padding-inline:1rem;}"], ({
  open
}) => open ? "300px" : "", ({
  open
}) => open && "100vh", ({
  open
}) => open ? "#fff" : "transparent", ({
  open
}) => open && "1.5rem", ({
  open
}) => open && "-1rem", ({
  open
}) => open ? "fixed" : "", ({
  open
}) => open ? "0" : "", ({
  open
}) => open && 'translateX(0)', ({
  open,
  language
}) => open && language === "English" ? "column nowrap" : open && language === "العربية" ? "column-reverse nowrap" : "row", ({
  language
}) => language === "العربية" && "flex-end", ({
  open
}) => open && "2rem", ({
  language,
  open
}) => language === "العربية" && open ? 'translateY(-42%)' : '', ({
  language,
  open
}) => language === "العربية" && open ? 'translateY(-59%)' : '', ({
  language,
  open
}) => language === "العربية" && open ? 'translateY(-69%)' : '', ({
  language,
  open
}) => language === "العربية" && open ? 'translateY(-45%)' : '', ({
  open
}) => open === false && "2rem", ({
  open
}) => open && "1rem", ({
  language
}) => language === "English" ? "0.75rem" : "0.9rem", ({
  open
}) => open ? "#000" : "#fff", ({
  open
}) => !open && "none", ({
  open
}) => open ? "block" : "none", ({
  language
}) => language === "English" ? "0.9rem" : "1rem");

const SideNav = ({
  open,
  setOpen,
  language,
  onLinkClick
}) => {
  // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Handle navigate to section out of the home page

  const router = (0,router_.useRouter)();
  const currentRoute = router.pathname;
  return /*#__PURE__*/jsx_runtime_.jsx(NavLinks, {
    id: "side-nav",
    open: open,
    width: width,
    language: language,
    children: language === "English" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Menu"
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#trips-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "trips-section",
            onClick: e => onLinkClick(e),
            children: "Trips"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#camps-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "camps-section",
            onClick: e => onLinkClick(e),
            children: "Camps"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#services-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "services-section",
            onClick: e => onLinkClick(e),
            children: "Services"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#gallery-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "gallery-section",
            onClick: e => onLinkClick(e),
            children: "Gallery"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#aboutus-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "aboutus-section",
            onClick: e => onLinkClick(e),
            children: "About Us"
          })
        })
      }), open && /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#contact-us-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "contact-us-section",
            onClick: e => onLinkClick(e),
            children: "Contact Us"
          })
        })
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [open && /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#contact-us-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "contact-us-section",
            onClick: e => onLinkClick(e),
            children: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#aboutus-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "aboutus-section",
            onClick: e => onLinkClick(e),
            children: "\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#gallery-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "gallery-section",
            onClick: e => onLinkClick(e),
            children: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#services-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "services-section",
            onClick: e => onLinkClick(e),
            children: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#camps-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "camps-section",
            onClick: e => onLinkClick(e),
            children: "\u062D\u062C\u0632 \u0645\u062E\u064A\u0645"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => setOpen(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: currentRoute !== "/" ? '/#trips-section' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            goto: "trips-section",
            onClick: e => onLinkClick(e),
            children: "\u0627\u0644\u0631\u062D\u0644\u0627\u062A"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0627\u0644\u0642\u0627\u0626\u0645\u0629"
      })]
    })
  });
};

/* harmony default export */ const navbar_SideNav = (SideNav);
;// CONCATENATED MODULE: ./components/navbar/Burger.js








const BurgerMenu = external_styled_components_default().div.withConfig({
  displayName: "Burger__BurgerMenu",
  componentId: "sc-678rg9-0"
})(["width:2.1rem;height:2.1rem;position:fixed;margin-top:", ";right:", ";z-index:10;display:none;align-items:center;background-color:", ";border-radius:3px;padding:5px 8px;padding-right:6px;transition:all 300ms ease-in-out;cursor:pointer;&:hover{transform:translateX(-8%);}@media(min-width:1400px){margin-top:", ";margin-right:-5px;margin-top:", ";}@media(max-width:990px){display:flex;margin-top:0.5%;}@media(max-width:600px){width:1.8rem;height:1.8rem;margin-top:0%;margin-right:-4px;}div{width:2rem;height:0.25rem;background-color:", ";border-radius:10px;transform-origin:1.5px;transition:all 500ms ease;&:nth-child(1){transform:", ";}&:nth-child(2){transform:", ";opacity:", ";}&:nth-child(3){transform:", ";}}@media(min-width:1450px){right:", ";}@media(max-width:990px){display:flex;justify-content:space-around;flex-flow:column nowrap;right:", ";}@media(max-width:768px){right:", ";}@media(max-width:600px){right:", ";}"], ({
  open
}) => !open ? "2%" : "0px", ({
  language,
  open
}) => language === "العربية" && open ? "21.5%" : "0%", ({
  open
}) => !open && "#000", ({
  open
}) => !open ? "1.4%" : "0px", ({
  open
}) => !open ? "1.9%" : "0px", ({
  open
}) => open ? '#ccc' : '#fff', ({
  open
}) => open ? 'rotate(45deg)' : 'rotate(0)', ({
  open
}) => open ? 'translateX(100%)' : 'translateX(0)', ({
  open
}) => open ? 0 : 1, ({
  open
}) => open ? 'rotate(-45deg)' : 'rotate(0)', ({
  language,
  open
}) => language === "العربية" && open ? "15%" : "5px", ({
  language,
  open
}) => language === "العربية" && open ? "29%" : "", ({
  language,
  open
}) => language === "العربية" && open ? "37%" : "", ({
  language,
  open
}) => language === "العربية" && open ? "51%" : "1.5%");

const Burger = ({
  language,
  onLinkClick,
  open,
  setOpen
}) => {
  const router = (0,router_.useRouter)(); // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)

  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(null);
  const {
    0: scroll,
    1: setScroll
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setWidth(window.innerWidth);
    setScroll(window.scrollY);
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 10);
    const handleScroll = (0,external_lodash_.debounce)(() => setScroll(window.scrollY), 10);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Handle navbar background visibility onScroll and route change

  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", navbarVisibility);

    const navbarVisibility = () => {
      if (scroll > 70 && width > 990 && router.pathname !== "/admin/dashboard") {
        document.getElementById("menu").style.display = "flex";
        document.getElementById("menu").style.justifyContent = "space-around";
        document.getElementById("menu").style.flexFlow = "column";
      } else if (width <= 990) {
        document.getElementById("menu").style.display = "flex";
      } else {
        document.getElementById("menu").style.display = "none";
      }
    };

    window.addEventListener("scroll", navbarVisibility);
    return () => {
      window.removeEventListener("scroll", navbarVisibility);
    };
  }, [width, scroll, router]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(BurgerMenu, {
      id: "menu",
      open: open,
      language: language,
      onClick: () => setOpen(!open),
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(navbar_SideNav, {
      onLinkClick: onLinkClick,
      open: open,
      setOpen: setOpen,
      language: language
    })]
  });
};

/* harmony default export */ const navbar_Burger = (Burger);
;// CONCATENATED MODULE: ./components/navbar/NavBar.js













const NavBar = ({
  language,
  setLanguage,
  onLinkClick,
  open,
  setOpen
}) => {
  const {
    0: reRender,
    1: setReRender
  } = (0,external_react_.useState)(false);
  const {
    0: admin,
    1: setAdmin
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []); // Handle path name

  const router = (0,router_.useRouter)(); // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)

  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Handle Language

  const toggleLanguage = () => {
    if (language === "English") {
      setLanguage("العربية");
    } else {
      setLanguage("English");
    }
  }; // Handle navigate to section out of the home page


  const currentRoute = router.pathname;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Nav, {
    language: language,
    bg: router.pathname === "/" ? "transparent" : "#16171F",
    position: router.pathname !== "/admin/dashboard" ? "absolute" : "fixed",
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: logo2,
          alt: "logo",
          width: 140,
          height: 50
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(navbar_Burger, {
      open: open,
      setOpen: setOpen,
      onLinkClick: onLinkClick,
      language: language
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "language-icon",
        onClick: toggleLanguage,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: language === "English" ? "العربية" : "En"
        }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          width: 24,
          height: 24,
          src: earthIcon,
          alt: "toggle language"
        })]
      }), !admin ? /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: currentRoute !== "/" ? '/#contact-us-section' : '',
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          goto: "contact-us-section",
          onClick: e => onLinkClick(e),
          children: language === "English" ? "Contact Us" : "اتصل بنا"
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
          style: {
            color: '#fff'
          },
          children: admin && admin.username
        })
      })]
    })]
  });
};

/* harmony default export */ const navbar_NavBar = (NavBar);
;// CONCATENATED MODULE: ./components/Layout.js






const Layout = ({
  children,
  language,
  setLanguage,
  onLinkClick,
  open,
  setOpen
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(navbar_NavBar, {
      language: language,
      setLanguage: setLanguage,
      open: open,
      setOpen: setOpen,
      onLinkClick: onLinkClick
    }), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const {
    0: language,
    1: setLanguage
  } = (0,external_react_.useState)("English");
  const {
    0: notifications,
    1: setNotifications
  } = (0,external_react_.useState)(false); // Handle Show Side Buttons

  const {
    0: showSideButtons,
    1: setShowSideButtons
  } = (0,external_react_.useState)(false);

  const navbarVisibility = () => {
    if (window.scrollY > 70) {
      setShowSideButtons(true);
    } else {
      setShowSideButtons(false);
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", navbarVisibility);
    return () => {
      window.removeEventListener("scroll", navbarVisibility);
    };
  }, []); // Handle Scroll To Top Button

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  /* Hnadle Scroll To section */


  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);

  const scrollTo = id => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop
    });
  }; // Handle path name


  const router = (0,router_.useRouter)();

  const onLinkClick = e => {
    if (false) {}
  };
  /* End Hnadle Scroll To section */


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Layout, {
    language: language,
    setLanguage: setLanguage,
    open: open,
    setOpen: setOpen,
    onLinkClick: onLinkClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      language: language,
      onLinkClick: onLinkClick,
      notifications: notifications,
      setNotifications: setNotifications
    })), showSideButtons && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [router.pathname !== "/admin/dashboard" && /*#__PURE__*/jsx_runtime_.jsx(WhatsApp, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Whatsapp, {
          size: 30
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ScrollToTop, {
        router: router,
        id: "myBtn",
        onClick: topFunction,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretUp, {
          size: 25
        })
      })]
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3468:
/***/ ((module) => {

module.exports = require("react-bootstrap-icons");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,2383,1563,1664,5675], () => (__webpack_exec__(2044)));
module.exports = __webpack_exports__;

})();