(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{484:function(e,t,o){"use strict";o.r(t);var s=o(3),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"system-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System requirements")]),e._v(" "),o("p",[e._v("Before installing Zowe™, ensure that your environment meets the prerequisites.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#zos-system-requirements-host"}},[e._v("z/OS system requirements")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#zowe-application-framework-requirements-host"}},[e._v("Zowe Application Framework requirements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#multi-factor-authentication-for-zowe-desktop"}},[e._v("Multi-Factor Authentication for Zowe Desktop")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#using-web-tokens-for-sso-on-for-zlux-and-zss"}},[e._v("Using web tokens for SSO on for ZLUX and ZSS")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#creating-a-pkcs11-token"}},[e._v("Creating a PKCS#11 Token")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#accessing-token"}},[e._v("Accessing token")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#enabling-sso"}},[e._v("Enabling SSO")])])])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#zowe-cli-requirements"}},[e._v("Zowe CLI requirements")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#client-side-requirements"}},[e._v("Client-side requirements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#host-side-requirements"}},[e._v("Host-side requirements")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#free-disk-space"}},[e._v("Free disk space")])])])])]),e._v(" "),o("p",[e._v("Zowe CLI operates independently of the Zowe z/OS component and is installed on a client PC that runs Windows, Linux, or Mac operating systems.  It can access z/OS endpoints such as z/OSMF, or can access FTP, CICS, DB2, and other z/OS services through plug-ins.  The z/OS environment that Zowe CLI communicates with does not require that the Zowe z/OS component is installed.")]),e._v(" "),o("p",[e._v("The Zowe z/OS component is installed on a z/OS environment and provides a number of services that are accessed through a web browser such as an API catalog and a web desktop.  The client PC that accesses the Zowe z/OS component does not need to have the Zowe CLI installed.")]),e._v(" "),o("p",[e._v("For more information on the relationship between the Zowe z/OS components and Zowe CLI, see "),o("router-link",{attrs:{to:"/getting-started/overview.html"}},[e._v("Zowe overview")]),e._v(".")],1),e._v(" "),o("p",[e._v("The z/OS environment that Zowe CLI communicates with has some advantages that are provided by the API Mediation Layer of Zowe, such as single-sign-on and the CLI only needing to trust a single certificate for all of its endpoints.")]),e._v(" "),o("h2",{attrs:{id:"z-os-system-requirements-host"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#z-os-system-requirements-host"}},[e._v("#")]),e._v(" z/OS system requirements (host)")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("z/OS Version 2.2 or later.")])]),e._v(" "),o("li",[o("p",[e._v("IBM z/OS Management Facility (z/OSMF) Version 2.2, Version 2.3 or Version 2.4.")]),e._v(" "),o("p",[e._v("z/OSMF is an optional prerequisite for Zowe.  It is recommended that z/OSMF is present to fully exploit Zowe's capabilities.")])]),e._v(" "),o("li",[o("p",[e._v("z/OS OpenSSH V2.2.0 or higher")]),e._v(" "),o("p",[e._v("Conditional requisite for ssh connection.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("ul",[o("li",[e._v('For non-production use of Zowe (such as development, proof-of-concept, demo),  you can customize the configuration of z/OSMF to create what is known as "z/OS MF Lite" that simplifies the setup of z/OSMF. As z/OS MF Lite only supports selected REST services (JES, DataSet/File, TSO and Workflow), you will observe considerable improvements in startup time as well as a reduction in the efforts involved in setting up z/OSMF. For information about how to set up z/OSMF Lite, see '),o("router-link",{attrs:{to:"/user-guide/systemrequirements-zosmf-lite.html"}},[e._v("Configuring z/OSMF Lite (non-production environment)")])],1),e._v(" "),o("li",[e._v("For production use of Zowe, see "),o("router-link",{attrs:{to:"/user-guide/systemrequirements-zosmf.html"}},[e._v("Configuring z/OSMF")]),e._v(".")],1)])])])]),e._v(" "),o("h3",{attrs:{id:"zowe-application-framework-requirements-host"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-application-framework-requirements-host"}},[e._v("#")]),e._v(" Zowe Application Framework requirements (host)")]),e._v(" "),o("p",[e._v("The Zowe Application Framework server provides the Zowe Desktop that contains an extensible GUI with a number of applications allowing access to z/OS functions, such as the File Editor, TN3270 emulator, JES Explorer, and more. For more information, see "),o("router-link",{attrs:{to:"/getting-started/zowe-architecture.html#zlux"}},[e._v("Zowe Architecture")]),e._v(".")],1),e._v(" "),o("ul",[o("li",[o("p",[e._v("Node.js")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Note: Starting in September 2020, Node.js v6 will no longer be supported. Users are advised to update to more recent versions of Node.js")])]),e._v(" "),o("li",[e._v("On z/OS: Node.js v6.x starting with v6.14.4, v8.x (except v8.16.1), and v12.x. Note when using v12.x, it is highly recommended that plug-ins used are tagged. For more information, see "),o("router-link",{attrs:{to:"/extend/extend-desktop/mvd-buildingplugins.html#tagging-plugin-files-on-z-os"}},[e._v("Tagging on z/OS")])],1),e._v(" "),o("li",[e._v("Off z/OS: The Application Framework supports Node.js v6.14 through v12.x.")])]),e._v(" "),o("p",[e._v("To install Node.js on z/OS, follow the instructions in "),o("router-link",{attrs:{to:"/user-guide/install-nodejs-zos.html"}},[e._v("Installing Node.js on z/OS")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("IBM SDK for Java Technology Edition V8 or later")])]),e._v(" "),o("li",[o("p",[e._v("833 MB of zFS file space")])]),e._v(" "),o("li",[o("p",[e._v("(client) Supported browsers:")]),e._v(" "),o("ul",[o("li",[e._v("Google Chrome V66 or later")]),e._v(" "),o("li",[e._v("Mozilla Firefox V60 or later")]),e._v(" "),o("li",[e._v("Safari V12.0 or later")]),e._v(" "),o("li",[e._v("Microsoft Edge 17 (Windows 10)")])]),e._v(" "),o("p",[e._v("Each release of the Zowe Application Framework is tested to work on the current releases of Chrome, Firefox, Safari, and Edge, as well as the oldest release within a 1-year time span, unless the current release is also older than 1 year. For Firefox, the oldest supported release will also be from the Extended Support Release (ESR) version of Firefox, to ensure compatibility in those enterprise environments. This scheme for browser support is to ensure that Zowe works on the vast majority of browsers that people are currently using, while still allowing for use of new features and security that browsers constantly add.")])])]),e._v(" "),o("p",[e._v("If you do not see your product listed here, please contact the Zowe community so that it can be validated and included.")]),e._v(" "),o("h3",{attrs:{id:"multi-factor-authentication-for-zowe-desktop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication-for-zowe-desktop"}},[e._v("#")]),e._v(" Multi-Factor Authentication for Zowe Desktop")]),e._v(" "),o("p",[e._v("To enable multi-factor authentication, you must install "),o("a",{attrs:{href:"https://www.ibm.com/us-en/marketplace/ibm-multifactor-authentication-for-zos",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Z Multi-Factor Authentication"),o("OutboundLink")],1),e._v(". For information on using MFA in Zowe, see "),o("router-link",{attrs:{to:"/user-guide/mvd-configuration.html#multi-factor-authentication-configuration"}},[e._v("Multi-Factor Authentication")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"using-web-tokens-for-sso-on-zlux-and-zss"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-web-tokens-for-sso-on-zlux-and-zss"}},[e._v("#")]),e._v(" Using web tokens for SSO on ZLUX and ZSS")]),e._v(" "),o("p",[e._v("In order to use web tokens for SSO on ZLUX and ZSS, users must first create a PKCS#11 token. See "),o("router-link",{attrs:{to:"/user-guide/configure-certificates.html#creating-a-pkcs11-token"}},[e._v("Creating a PKCS#11 Token")]),e._v(" for more information.")],1),e._v(" "),o("h2",{attrs:{id:"zowe-cli-requirements-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-cli-requirements-client"}},[e._v("#")]),e._v(" Zowe CLI requirements (client)")]),e._v(" "),o("h3",{attrs:{id:"client-side-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#client-side-requirements"}},[e._v("#")]),e._v(" Client-side requirements")]),e._v(" "),o("p",[e._v("Zowe CLI is supported on platforms where Node.js 8.0 or higher is available, including Windows, Linux, and Mac operating systems.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Install "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js V8.0 or higher LTS versions"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),o("code",[e._v("node --version")]),e._v(" to verify that Node.js is installed.")])]),e._v(" "),o("li",[o("p",[e._v("Install a version of "),o("strong",[e._v("Node Package Manager (npm)")]),e._v(" that is compatible with your version of Node.js. For a list of compatible versions, see "),o("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Previous Releases"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" npm is included with the Node.js installation. Issue the command "),o("code",[e._v("npm --version")]),e._v(" to verify the version of npm that is installed.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" If you plan to install plug-ins, review the "),o("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for CLI plug-ins")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("z/OS:")]),e._v(" Zowe CLI can be installed on a z/OS environment and run under Unix System Services (USS).  However, the IBM DB2 and the Secure Credentials Store plug-ins will "),o("em",[e._v("not")]),e._v(" run on z/OS due to native code requirements.  As such Zowe CLI on z/OS is not supported and is currently experimental.")])])]),e._v(" "),o("h3",{attrs:{id:"host-side-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#host-side-requirements"}},[e._v("#")]),e._v(" Host-side requirements")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("When Zowe CLI runs on a client PC, it is not required that Zowe z/OS component is installed on the environment that Zowe CLI connects to.  Zowe CLI uses profiles to talk to URL endpoints, which encapsulate the connection details for the server that Zowe CLI commands communicate with. The Zowe Core CLI can communicate to z/OSMF to perform tasks such as retrieving data sets, executing TSO commands, submitting jobs, working with USS and more. For more information, see "),o("router-link",{attrs:{to:"/user-guide/cli-usingcli.html#displaying-zowe-cli-help"}},[e._v("Using Zowe CLI")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Extension plug-ins for Zowe CLI can talk to the specific endpoints they have been defined, for example the IBM CICS plug-in talks to CICS regions, the IMS DB2 plug-in talks to DB2 databases.")])])]),e._v(" "),o("h3",{attrs:{id:"free-disk-space"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#free-disk-space"}},[e._v("#")]),e._v(" Free disk space")]),e._v(" "),o("p",[e._v("Zowe CLI requires approximately "),o("strong",[e._v("100 MB")]),e._v(" of free disk space. The actual quantity of free disk space consumed might vary depending on the operating system where you install Zowe CLI.")])])}),[],!1,null,null,null);t.default=r.exports}}]);