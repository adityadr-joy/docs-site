(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{471:function(e,a,t){"use strict";t.r(a);var n=t(15),s=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ibm®-mq-plug-in-for-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibm®-mq-plug-in-for-zowe-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" IBM® MQ Plug-in for Zowe CLI")]),e._v(" "),t("p",[e._v("The IBM MQ Plug-in for Zowe CLI lets you issue MQSC commands to a queue manager. MQSC commands let you to perform administration tasks. For example, you can define, alter, or delete a local queue object.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" For more information about MQSC commands and the corresponding syntax, see "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.1.0/com.ibm.mq.ref.adm.doc/q085130_.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("MQSC commands"),t("OutboundLink")],1),e._v(" on the IBM Knowledge Center.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#use-cases"}},[e._v("Use cases")])]),t("li",[t("a",{attrs:{href:"#using-ibm-mq-plug-in-commands"}},[e._v("Using IBM MQ plug-in commands")])]),t("li",[t("a",{attrs:{href:"#software-requirements"}},[e._v("Software requirements")])]),t("li",[t("a",{attrs:{href:"#installing"}},[e._v("Installing")])]),t("li",[t("a",{attrs:{href:"#creating-a-user-profile"}},[e._v("Creating a user profile")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases","aria-hidden":"true"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),t("p",[e._v("You can use the plug-in to excecute MQSC Commands. With MQSC commands you can manage queue manager objects (including the queue manager itself), queues, process definitions, channels, client connection channels, listeners, services, namelists, clusters, and authentication information objects.")]),e._v(" "),t("h2",{attrs:{id:"using-ibm-mq-plug-in-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-ibm-mq-plug-in-commands","aria-hidden":"true"}},[e._v("#")]),e._v(" Using IBM MQ plug-in commands")]),e._v(" "),t("p",[e._v("For detailed documentation on commands, actions, and options available in this plug-in, see our Web Help. It is available for download in three formats: a PDF document, an interactive online version, and a ZIP file containing the HTML for the online version.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../web_help/index.html",target:"_blank"}},[e._v("Browse Online")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../zowe_web_help.zip"}},[e._v("Download (ZIP)")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../CLIReference_Zowe.pdf"}},[e._v("Download (PDF)")])])]),e._v(" "),t("h2",{attrs:{id:"software-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Software requirements")]),e._v(" "),t("p",[e._v("Before you install the plug-in, meet the software requirements in "),t("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for Zowe CLI plug-ins")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"installing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),t("p",[e._v("Use one of the following methods to install or update the plug-in:")]),e._v(" "),t("ul",[t("li",[t("p",[t("router-link",{attrs:{to:"/user-guide/cli-installplugins.html#installing-plug-ins-from-an-online-registry"}},[e._v("Installing plug-ins from an online registry")])],1)]),e._v(" "),t("li",[t("p",[t("router-link",{attrs:{to:"/user-guide/cli-installplugins.html#installing-plug-ins-from-a-local-package"}},[e._v("Installing plug-ins from a local package")])],1)])]),e._v(" "),t("h2",{attrs:{id:"creating-a-user-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-user-profile","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a user profile")]),e._v(" "),t("p",[e._v("You can create an "),t("code",[e._v("mq")]),e._v(" user profile to avoid typing your connection details on every command. An "),t("code",[e._v("mq")]),e._v(" profile contains the host, port, username, and password for the MQ Rest API server of your choice. You can create multiple profiles and switch between them as needed.")]),e._v(" "),t("p",[t("strong",[e._v("Follow these steps:")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create an "),t("code",[e._v("mq")]),e._v(" profile:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("zowe profiles create mq-profile <profileName> --host <hostname> --port <portnumber> --user <username> --password <password> --rejectUnauthorized false\n")])])]),t("p",[e._v("The result of the command displays as a success or failure message. You can use your profile when you issue commands in the mq command group.")])])]),e._v(" "),t("p",[t("strong",[e._v("Tip:")]),e._v(" For more information about the syntax, actions, and options, for a profiles create command, open Zowe CLI and issue the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("zowe profiles create mq-profile -h\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);