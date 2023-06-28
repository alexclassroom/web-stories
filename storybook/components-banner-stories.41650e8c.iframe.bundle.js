"use strict";(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[7951],{"./packages/design-system/src/icons/cross.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgCross=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.854 9.146a.5.5 0 1 0-.708.708L15.293 16l-6.147 6.146a.5.5 0 0 0 .708.708L16 16.707l6.146 6.147a.5.5 0 0 0 .708-.708L16.707 16l6.147-6.146a.5.5 0 0 0-.708-.708L16 15.293 9.854 9.146Z",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCross)},"./packages/design-system/src/icons/launch.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgLaunch=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgLaunch)},"./packages/design-system/src/components/banner/stories/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BannerNoBackgroundImage:()=>BannerNoBackgroundImage,DashboardBanner:()=>DashboardBanner,EditorBanner:()=>EditorBanner,_default:()=>_default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var types=__webpack_require__("./packages/design-system/src/theme/types.ts"),typography_text=__webpack_require__("./packages/design-system/src/components/typography/text/index.ts"),typography_link=__webpack_require__("./packages/design-system/src/components/typography/link/index.tsx"),src=__webpack_require__("./packages/react/src/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),cross=__webpack_require__("./packages/design-system/src/icons/cross.svg"),button_button=__webpack_require__("./packages/design-system/src/components/button/button.tsx"),constants=__webpack_require__("./packages/design-system/src/components/button/constants.ts"),headline=__webpack_require__("./packages/design-system/src/components/typography/headline/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Title=(0,styled_components_browser_esm.ZP)(headline.s).withConfig({displayName:"banner__Title",componentId:"sc-z6zfp9-0"})(["grid-area:title;padding-left:8px;"]),Content=styled_components_browser_esm.ZP.div.withConfig({displayName:"banner__Content",componentId:"sc-z6zfp9-1"})(["grid-area:content;margin-bottom:4px;max-width:600px;min-width:50%;"]),CloseButton=(0,styled_components_browser_esm.ZP)(button_button.z).withConfig({displayName:"banner__CloseButton",componentId:"sc-z6zfp9-2"})(["grid-area:closeButton;justify-self:end;align-self:flex-start;"]),CloseButtonPlaceholder=styled_components_browser_esm.ZP.div.withConfig({displayName:"banner__CloseButtonPlaceholder",componentId:"sc-z6zfp9-3"})(["grid-area:closeButton;justify-self:end;align-self:flex-start;width:32px;height:32px;"]),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"banner__Container",componentId:"sc-z6zfp9-4"})(["display:grid;width:100%;min-height:60px;align-items:baseline;padding:6px 8px;background-color:",";border-radius:",";max-height:184px;grid-template-columns:1fr 32px;grid-template-rows:3;grid-column-gap:0;grid-template-areas:'. closeButton' 'title title' 'content content';text-align:center;& + &{margin-top:18px;}","{padding-left:0;margin-top:-10px;}","{margin:8px auto 18px;max-width:600px;}"],(_ref=>{let{theme}=_ref;return theme.colors.gray[5]}),(_ref2=>{let{theme}=_ref2;return theme.borders.radius.medium}),Title,Content),Banner=(0,src.Gp)(((_ref3,ref)=>{let{children,closeButtonLabel,title,onClose,...rest}=_ref3;return(0,jsx_runtime.jsxs)(Container,{ref,...rest,children:[(0,jsx_runtime.jsx)(Title,{as:"h2",size:types.TextSize.XSmall,children:title}),onClose?(0,jsx_runtime.jsx)(CloseButton,{type:constants.L$.Tertiary,variant:constants.Wu.Square,size:constants.qE.Small,"aria-label":closeButtonLabel,onClick:onClose,children:(0,jsx_runtime.jsx)(cross.Z,{"aria-hidden":!0})}):(0,jsx_runtime.jsx)(CloseButtonPlaceholder,{}),(0,jsx_runtime.jsx)(Content,{children})]})})),banner=Banner,stories={title:"DesignSystem/Components/Banner",component:Banner,args:{title:"my banner",isDashboard:!1,message:"I am a banner child"},argTypes:{onClose:{action:"close banner clicked"}}},_default={render:_ref=>{let{message,...args}=_ref;return(0,jsx_runtime.jsx)(banner,{closeButtonLabel:"Dismiss storybook banner",...args,children:(0,jsx_runtime.jsx)(typography_text.x.Paragraph,{size:types.TextSize.XSmall,children:message})})}},EditorBanner={render:_ref2=>{let{message,...args}=_ref2;return(0,jsx_runtime.jsx)(banner,{closeButtonLabel:"Dismiss storybook banner",onClose:e=>args.onClose(e),...args,children:(0,jsx_runtime.jsx)(typography_text.x.Paragraph,{size:types.TextSize.XSmall,children:message})})},args:{title:"Animations are here!",isDashboard:!1,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},DashboardBanner={render:_ref3=>{let{message,...args}=_ref3;return(0,jsx_runtime.jsx)(banner,{closeButtonLabel:"Dismiss storybook banner",onClose:e=>args.onClose(e),...args,children:(0,jsx_runtime.jsxs)(typography_text.x.Paragraph,{size:types.TextSize.XSmall,children:[message,(0,jsx_runtime.jsx)(typography_link.r,{size:types.TextSize.XSmall,href:"https://policies.google.com/privacy",children:"Google Privacy Policy"})]})})},args:{title:"Help improve the editor!",isDashboard:!0,message:"Check the box to help us improve the Web Stories plugin by allowing tracking of product usage stats. All data are treated in accordance with "}},BannerNoBackgroundImage={render:_ref4=>{let{message,...args}=_ref4;return(0,jsx_runtime.jsx)(banner,{closeButtonLabel:"Dismiss storybook banner",onClose:e=>args.onClose(e),...args,children:(0,jsx_runtime.jsx)(typography_text.x.Paragraph,{size:types.TextSize.XSmall,children:message})})},args:{title:"New Feature!",isDashboard:!0,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}},"./packages/design-system/src/components/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>ButtonAsLink,z:()=>Button});__webpack_require__("./node_modules/react/index.js");var _googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/index.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/theme/helpers/outline.ts"),_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/theme/helpers/expandPresetStyles.ts"),_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/design-system/src/theme/types.ts"),_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/design-system/src/theme/constants/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/button/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const base=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["display:flex;align-items:center;justify-content:space-around;padding:0;margin:0;background:transparent;border:none;cursor:pointer;color:",";",";",";&:active{background-color:",";color:",";}&:disabled,&[aria-disabled='true']{pointer-events:none;background-color:",";color:",";}transition:background-color ",",color ",";"],(_ref=>{let{theme}=_ref;return theme.colors.fg.primary}),(_ref2=>{let{theme}=_ref2;return _theme__WEBPACK_IMPORTED_MODULE_4__.L(theme.colors.border.focus)}),(_ref3=>{let{theme,size}=_ref3;return _theme__WEBPACK_IMPORTED_MODULE_5__._({preset:{...theme.typography.presets.label[size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?_theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Small:_theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Medium]},theme})}),(_ref4=>{let{theme}=_ref4;return theme.colors.interactiveBg.active}),(_ref5=>{let{theme}=_ref5;return theme.colors.interactiveFg.active}),(_ref6=>{let{theme}=_ref6;return theme.colors.interactiveBg.disable}),(_ref7=>{let{theme}=_ref7;return theme.colors.fg.disable}),_constants__WEBPACK_IMPORTED_MODULE_6__.ok,_constants__WEBPACK_IMPORTED_MODULE_6__.ok),anchorBase=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["&:hover,&:focus{color:",";}"],(_ref8=>{let{theme}=_ref8;return theme.colors.interactiveFg.active})),buttonColors={[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Primary]:_ref9=>{let{theme}=_ref9;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";color:",";&:active{background-color:",";color:",";}&:hover,&:focus{background-color:",";color:"," !important;}"],theme.colors.interactiveBg.brandNormal,theme.colors.interactiveFg.brandNormal,theme.colors.interactiveBg.active,theme.colors.interactiveFg.active,theme.colors.interactiveBg.brandHover,theme.colors.interactiveFg.brandHover)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Secondary]:_ref10=>{let{theme}=_ref10;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";&:hover,&:focus{background-color:",";}&:disabled{&:hover,&:focus{background-color:",";}}"],theme.colors.interactiveBg.secondaryNormal,theme.colors.interactiveBg.secondaryHover,theme.colors.interactiveBg.disable)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Tertiary]:_ref11=>{let{theme}=_ref11;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";&:hover,&:focus{background-color:",";}&:disabled,&[aria-disabled='true']{background-color:",";&:hover,&:focus{background-color:",";}}"],theme.colors.interactiveBg.tertiaryNormal,theme.colors.interactiveBg.tertiaryHover,theme.colors.interactiveBg.tertiaryNormal,theme.colors.interactiveBg.tertiaryNormal)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Quaternary]:_ref12=>{let{theme}=_ref12;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";border:1px solid ",";&:hover{border-color:",";}&:focus{box-shadow:none;border-color:",";}&:active{border-color:",";background-color:",";}",";"," &:disabled,&[aria-disabled='true']{border-color:",";background-color:",";}"],theme.colors.interactiveBg.quaternaryNormal,theme.colors.border.defaultNormal,theme.colors.border.quaternaryHover,theme.colors.border.quaternaryHover,theme.colors.border.quaternaryActive,theme.colors.interactiveBg.quaternaryNormal,_theme__WEBPACK_IMPORTED_MODULE_4__.L,(_ref13=>{let{isToggled}=_ref13;return isToggled&&(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["border-color:",";"],theme.colors.border.defaultPress)}),theme.colors.border.disable,theme.colors.interactiveBg.quaternaryNormal)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Plain]:(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)([""])},rectangle=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";min-width:1px;min-height:1em;border-radius:",";padding:",";"],(_ref14=>{let{$type}=_ref14;return $type&&buttonColors[$type]}),(_ref15=>{let{theme}=_ref15;return theme.borders.radius.small}),(_ref16=>{let{size}=_ref16;return size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?"8px 16px":"18px 32px"})),square=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";border-radius:",";"," svg{width:","px;height:","px;}"],(_ref17=>{let{$type}=_ref17;return $type&&buttonColors[$type]}),(_ref18=>{let{theme}=_ref18;return theme.borders.radius.small}),(_ref19=>{let{size}=_ref19;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["width:","px;height:","px;"],size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE:_theme__WEBPACK_IMPORTED_MODULE_8__.Z.LARGE_BUTTON_SIZE,size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE:_theme__WEBPACK_IMPORTED_MODULE_8__.Z.LARGE_BUTTON_SIZE)}),_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE,_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE),circle=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["border-radius:",";"],(_ref20=>{let{theme}=_ref20;return theme.borders.radius.round})),icon=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";width:","px;height:","px;svg{width:100%;height:100%;}"],(_ref21=>{let{$type}=_ref21;return $type&&buttonColors[$type]}),_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE,_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE);function getTextSize(size){switch(size){case _constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small:return _theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Small;case _constants__WEBPACK_IMPORTED_MODULE_6__.qE.Medium:default:return _theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Medium}}const link=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",""],(_ref22=>{let{theme,size}=_ref22;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";color:",";border-radius:0;:hover{color:",";}&:active,&:disabled,&[aria-disabled='true']{background-color:",";}"],_theme__WEBPACK_IMPORTED_MODULE_5__._({preset:theme.typography.presets.link[getTextSize(size)],theme}),theme.colors.fg.linkNormal,theme.colors.fg.linkHover,theme.colors.opacity.footprint)})),ButtonRectangle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonRectangle",componentId:"sc-1wfpfsz-0"})([""," ",""],base,rectangle),AnchorRectangle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorRectangle",componentId:"sc-1wfpfsz-1"})([""," "," ",""],base,anchorBase,rectangle),ButtonSquare=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonSquare",componentId:"sc-1wfpfsz-2"})([""," ",""],base,square),AnchorSquare=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorSquare",componentId:"sc-1wfpfsz-3"})([""," "," ",""],base,anchorBase,square),ButtonCircle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonCircle",componentId:"sc-1wfpfsz-4"})([""," "," ",""],base,square,circle),AnchorCircle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorCircle",componentId:"sc-1wfpfsz-5"})([""," "," "," ",""],base,anchorBase,square,circle),ButtonIcon=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonIcon",componentId:"sc-1wfpfsz-6"})([""," ",""],base,icon),AnchorIcon=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorIcon",componentId:"sc-1wfpfsz-7"})([""," "," ",""],base,anchorBase,icon),ButtonLink=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonLink",componentId:"sc-1wfpfsz-8"})([""," ",""],base,link),AnchorLink=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorLink",componentId:"sc-1wfpfsz-9"})([""," "," ",""],base,anchorBase,link),Button=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.Gp)((function Button(_ref23,ref){let{size=_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Medium,type=_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Plain,variant=_constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle,children,...rest}=_ref23;const elementProps={ref,size,$type:type,...rest};switch(variant){case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonRectangle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Circle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonCircle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Square:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonSquare,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Icon:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonIcon,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Link:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonLink,{...elementProps,children});default:return null}})),ButtonAsLink=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.Gp)((function ButtonAsLink(_ref24,ref){let{size=_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Medium,type=_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Plain,variant=_constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle,children,...rest}=_ref24;const elementProps={ref,size,$type:type,...rest};switch(variant){case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorRectangle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Circle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorCircle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Square:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorSquare,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Icon:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorIcon,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Link:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorLink,{...elementProps,children});default:return null}}))},"./packages/design-system/src/components/button/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L$:()=>ButtonType,Wu:()=>ButtonVariant,ok:()=>BUTTON_TRANSITION_TIMING,qE:()=>ButtonSize});let ButtonType=function(ButtonType){return ButtonType.Primary="primary",ButtonType.Secondary="secondary",ButtonType.Tertiary="tertiary",ButtonType.Quaternary="quaternary",ButtonType.Plain="plain",ButtonType}({}),ButtonSize=function(ButtonSize){return ButtonSize.Small="small",ButtonSize.Medium="medium",ButtonSize}({}),ButtonVariant=function(ButtonVariant){return ButtonVariant.Circle="circle",ButtonVariant.Rectangle="rectangle",ButtonVariant.Square="square",ButtonVariant.Icon="icon",ButtonVariant.Link="link",ButtonVariant}({});const BUTTON_TRANSITION_TIMING="0.3s ease 0s"},"./packages/design-system/src/components/typography/headline/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Headline});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/theme/types.ts"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/theme/helpers/expandPresetStyles.ts"),_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/theme/helpers/outline.ts"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/typography/styles.ts");const Headline=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.h1.withConfig({displayName:"headline__Headline",componentId:"sc-yhwct1-0"})(["",";"," ",""],_styles__WEBPACK_IMPORTED_MODULE_1__.y,(_ref=>{let{theme,size=_theme__WEBPACK_IMPORTED_MODULE_2__.TextSize.Medium}=_ref;return _theme__WEBPACK_IMPORTED_MODULE_3__._({preset:theme.typography.presets.headline[size],theme})}),(_ref2=>{let{as,theme}=_ref2;return"a"===as&&(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)([":hover{color:",";}",""],theme.colors.fg.linkHover,_theme__WEBPACK_IMPORTED_MODULE_4__.L(theme.colors.border.focus))}))},"./packages/design-system/src/components/typography/link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/theme/helpers/expandPresetStyles.ts"),_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/design-system/src/theme/helpers/outline.ts"),_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/design-system/src/theme/types.ts"),_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/typography/styles.ts"),_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/icons/launch.svg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledLaunch=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_icons__WEBPACK_IMPORTED_MODULE_4__.Z).withConfig({displayName:"link__StyledLaunch",componentId:"sc-qlyh5o-0"})(["width:12px;margin-left:0.5ch;margin-bottom:2px;stroke-width:0;vertical-align:text-bottom;"]),StyledAnchor=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"link__StyledAnchor",componentId:"sc-qlyh5o-1"})(["",";"],(_ref=>{let{size,theme}=_ref;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";",";color:",";text-decoration:none;cursor:pointer;vertical-align:baseline;:hover{color:",";}:focus{color:"," !important;}",""],_styles__WEBPACK_IMPORTED_MODULE_5__.y,_theme__WEBPACK_IMPORTED_MODULE_6__._({preset:theme.typography.presets.link[size],theme}),theme.colors.fg.linkNormal,theme.colors.fg.linkHover,theme.colors.fg.linkNormal,_theme__WEBPACK_IMPORTED_MODULE_7__.L(theme.colors.border.focus))}));function ConditionalSpanWrapper(_ref2){let{isWrapped,children}=_ref2;return isWrapped?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children})}const Link=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.Gp)((function Link(_ref3,ref){let{children,size=_theme__WEBPACK_IMPORTED_MODULE_8__.TextSize.Medium,...props}=_ref3;const isExternalLink="_blank"===props.target;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledAnchor,{ref,size,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ConditionalSpanWrapper,{isWrapped:isExternalLink,children:[children,isExternalLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledLaunch,{})]})})}))},"./packages/design-system/src/components/typography/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>defaultTypographyStyle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const defaultTypographyStyle=_ref=>{let{theme}=_ref;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";color:",";margin:0;padding:0;&:focus{box-shadow:none;}"],theme.typography.family.primary,theme.colors.fg.primary)}},"./packages/design-system/src/components/typography/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/design-system/src/theme/types.ts"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/theme/helpers/expandPresetStyles.ts"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/typography/styles.ts");const textCss=_ref=>{let{isBold=!1,size=_theme__WEBPACK_IMPORTED_MODULE_0__.TextSize.Medium,theme}=_ref;return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["",";",";font-weight:",";"],_styles__WEBPACK_IMPORTED_MODULE_2__.y,_theme__WEBPACK_IMPORTED_MODULE_3__._({preset:theme.typography.presets.paragraph[size],theme}),isBold?theme.typography.weight.bold:theme.typography.presets.paragraph[size].weight)},Paragraph=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.p.withConfig({displayName:"text__Paragraph",componentId:"sc-1kd0vh8-0"})(["",";"],textCss),Span=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span.withConfig({displayName:"text__Span",componentId:"sc-1kd0vh8-1"})(["",";"],textCss),Kbd=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.kbd.withConfig({displayName:"text__Kbd",componentId:"sc-1kd0vh8-2"})(["",";background-color:transparent;white-space:nowrap;"],textCss),Text={Label:styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.label.withConfig({displayName:"text__Label",componentId:"sc-1kd0vh8-3"})(["",";color:",";"],(_ref2=>{let{isBold=!1,size=_theme__WEBPACK_IMPORTED_MODULE_0__.TextSize.Medium,theme}=_ref2;return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["",";",";font-weight:",";"],_styles__WEBPACK_IMPORTED_MODULE_2__.y,_theme__WEBPACK_IMPORTED_MODULE_3__._({preset:theme.typography.presets.label[size],theme}),isBold?theme.typography.weight.bold:theme.typography.presets.label[size].weight)}),(_ref3=>{let{disabled,theme}=_ref3;return disabled?theme.colors.fg.disable:"auto"})),Span,Kbd,Paragraph}},"./packages/design-system/src/theme/helpers/expandPresetStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>expandTextPreset,_:()=>expandPresetStyles});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/theme/types.ts");const expandPresetStyles=_ref=>{let{preset,theme}=_ref;return preset?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-size:","px;font-weight:",";letter-spacing:","px;line-height:","px;text-decoration:none;"],theme.typography.family.primary,preset.size,preset.weight,preset.letterSpacing,preset.lineHeight):(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)([""])},expandTextPreset=presetSelector=>_ref2=>{let{theme}=_ref2;return expandPresetStyles({preset:presetSelector(theme.typography.presets,_types__WEBPACK_IMPORTED_MODULE_1__.TextSize),theme})}},"./packages/design-system/src/theme/helpers/outline.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>focusableOutlineCSS,R:()=>focusCSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const focusCSS=(accent,background)=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["outline:none;box-shadow:",";"],(_ref=>{let{theme}=_ref;return`0px 0px 0 2px ${background||theme.colors.bg.primary}, 0px 0px 0 4px ${"string"==typeof accent?accent:theme.colors.border.focus}`})),focusableOutlineCSS=(colorOrProps,background)=>{const accent="string"==typeof colorOrProps?colorOrProps:colorOrProps?.theme?.colors?.border?.focus;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&:focus-visible{",";}"],focusCSS(accent,background))}}}]);