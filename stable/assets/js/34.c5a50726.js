(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{265:function(e,t,r){e.exports=r.p+"assets/img/zowe-zos-install-diagram.368c39cb.png"},326:function(e,t,r){"use strict";r.r(t);var o=r(3),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installation-roadmap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation-roadmap"}},[e._v("#")]),e._v(" Installation roadmap")]),e._v(" "),o("p",[e._v("To install Zowe™ on z/OS, there are two parts. The first part is the Zowe runtime that consists of three components: Zowe Application Framework, z/OS Explorer Services, and Zowe API Mediation Layer. The second part is the Zowe Cross Memory Server. This is an authorized server application that provides privileged services to Zowe in a secure manner.")]),e._v(" "),o("p",[e._v("Review the installation diagram and the introduction in this topic to see the general installation sequence and the most important tasks that are to be performed during installation and configuration. You can click each step on the diagram for detailed instructions.")]),e._v(" "),o("figure",[o("img",{attrs:{usemap:"#home_map1",border:"0",id:"install-flow",src:r(265),width:"750",alt:"Click each step to get more details on the flow."}}),e._v(" "),o("figcaption")]),e._v(" "),o("map",{attrs:{name:"home_map1",id:"home_map1"}},[o("area",{attrs:{href:"installandconfig.html#planning-the-installation-of-zowe-z-os-components",alt:"Plan and prepare for the installation",title:"Plan and prepare for the installation",shape:"rect",coords:"231, 40, 387, 80"}}),e._v(" "),o("area",{attrs:{href:"systemrequirements.html",alt:"Configure system requirements",title:"Configure system requirements",shape:"rect",coords:"230, 158, 388, 201"}}),e._v(" "),o("area",{attrs:{href:"https://www.zowe.org/#download",alt:"Download Zowe SMP/E build",title:"Download the Zowe SMP/E build from zowe.org",shape:"rect",coords:"143, 342, 324, 385"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-smpe.html",alt:"Install the Zowe SMP/E build",title:"Install the Zowe SMP/E build",shape:"rect",coords:"141, 407, 322, 451"}}),e._v(" "),o("area",{attrs:{href:"https://www.zowe.org/#download",alt:"Download the Zowe convenience build",title:"Download the Zowe convenience build from zowe.org",shape:"rect",coords:"334, 343, 515, 386"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-zos-convenience-build.html#obtaining-and-preparing-the-convenience-build",alt:"Verify, transfer, and expand the PAX file on z/OS",title:"Verify, transfer, and expand the PAX file on z/OS",shape:"rect",coords:"336, 407, 514, 450"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-zos-convenience-build.html#installing-the-zowe-runtime",alt:"Install the Zowe runtime",title:"Install the Zowe runtime",shape:"rect",coords:"335, 469, 515, 513"}}),e._v(" "),o("area",{attrs:{href:"configure-zos-system.html",alt:"Configure the z/OS system for Zowe",title:"Configure the z/OS system for Zowe",shape:"rect",coords:"163, 565, 507, 610"}}),e._v(" "),o("area",{attrs:{href:"configure-certificates.html",alt:"Configure Zowe certificates",title:"Create the Zowe certificates keystore directory",shape:"rect",coords:"164, 638, 507, 683"}}),e._v(" "),o("area",{attrs:{href:"configure-instance-directory.html",alt:"Create and configure the Zowe instance directory",title:"Create and configure the Zowe instance directory",shape:"rect",coords:"163, 711, 508, 758"}}),e._v(" "),o("area",{attrs:{href:"configure-xmem-server.html",alt:"Configure the Zowe cross memory server",title:"Install and configure the Zowe cross memory server (ZWESISTC)",shape:"rect",coords:"162, 783, 507, 832"}}),e._v(" "),o("area",{attrs:{href:"configure-zowe-server.html",alt:"Configure the Zowe started task",title:"Install the Zowe started task (ZWESVSTC)",shape:"rect",coords:"163, 860, 507, 905"}}),e._v(" "),o("area",{attrs:{href:"verify-zowe-runtime-install.html",alt:"Verify Zowe installation on z/OS",title:"Verify Zowe installation on z/OS",shape:"rect",coords:"163, 948, 508, 993"}})]),e._v(" "),o("h2",{attrs:{id:"stage-1-plan-and-prepare"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-1-plan-and-prepare"}},[e._v("#")]),e._v(" Stage 1: Plan and prepare")]),e._v(" "),o("p",[e._v("Before you start the installation, review the information on hardware and software requirements and other considerations. See "),o("router-link",{attrs:{to:"/user-guide/installandconfig.html"}},[e._v("Planning the installation")]),e._v(" for details.")],1),e._v(" "),o("h2",{attrs:{id:"stage-2-install-the-zowe-runtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-2-install-the-zowe-runtime"}},[e._v("#")]),e._v(" Stage 2: Install the Zowe runtime")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Ensure that the software requirements are met. The prerequisites are described in "),o("router-link",{attrs:{to:"/user-guide/systemrequirements.html"}},[e._v("System requirements")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Choose the method of installing Zowe on z/OS.")]),e._v(" "),o("p",[e._v("The Zowe z/OS binaries are distributed in the following formats. They contain the same contents but you install them by using different methods. You can choose which method to use depending on your needs.")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Convenience build")])]),e._v(" "),o("p",[e._v("The Zowe z/OS binaries are packaged as a PAX file. You install this build by running shell script within a UNIX System Services (USS) shell.  Convenience builds are full product installs.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("SMP/E build")])]),e._v(" "),o("p",[e._v("The Zowe z/OS binaries are packaged as the following files that you can download. You install this build through SMP/E.")]),e._v(" "),o("ul",[o("li",[e._v("A pax.Z file, which contains an archive (compressed copy) of the FMIDs to be installed.")]),e._v(" "),o("li",[e._v("A readme file, which contains a sample job to decompress the pax.Z file, transform it into a format that SMP/E can process, and invoke SMP/E to extract and expand the compressed SMP/E input data sets.")])])])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" The SMP/E build is currently in alpha, which means that it is available for early testing. You can provide any feedback about your experience with Zowe SMP/E as issues in the "),o("a",{attrs:{href:"https://github.com/zowe/zowe-install-packaging/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("zowe-install-packaging GitHub repo"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("While the procedure to obtain and install the convenience build or SMP/E build are different, the procedure to configure a Zowe runtime are the same irrespective of how the build is obtained and installed.")])]),e._v(" "),o("li",[o("p",[e._v("Obtain and install the Zowe build.")]),e._v(" "),o("ul",[o("li",[e._v("For how to obtain the convenience build and install it, see "),o("router-link",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html"}},[e._v("Installing Zowe runtime from a convenience build")]),e._v(".")],1),e._v(" "),o("li",[e._v("For how to obtain the SMP/E build and install it, see "),o("router-link",{attrs:{to:"/user-guide/install-zowe-smpe.html"}},[e._v("Installing Zowe SMP/E Alpha")]),e._v(".")],1)])])]),e._v(" "),o("p",[e._v("After successful installation of either a convenience build or an SMP/E build, there will be a zFS folder that contains the unconfigured Zowe runtime "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(", a SAMPLIB library "),o("code",[e._v("SZWESAMP")]),e._v(" that contains sample members, and a load library "),o("code",[e._v("SZWEAUTH")]),e._v(" that contains load modules. The steps to prepare the z/OS environment to launch Zowe are the same irrespective of the installation method.")]),e._v(" "),o("h2",{attrs:{id:"stage-3-configure-the-zowe-runtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-3-configure-the-zowe-runtime"}},[e._v("#")]),e._v(" Stage 3: Configure the Zowe runtime")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Configure the z/OS security manager to prepare for launching the Zowe started tasks. For instructions, see "),o("router-link",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(".")],1),e._v(" "),o("p",[e._v("A SAMPLIB JCL member "),o("code",[e._v("ZWESECUR")]),e._v(" is provided to assist with the configuration. You can submit the "),o("code",[e._v("ZWESECUR")]),e._v(" JCL member as-is or customize it depending on site preferences.")]),e._v(" "),o("p",[e._v("If Zowe has already been launched on the z/OS system from a previous release of Version 1.8 or later, then you are applying a newer Zowe build. You can skip this security configuration step unless told otherwise in the release documentation.")])]),e._v(" "),o("li",[o("p",[e._v("Configure the Zowe certificates keystore and truststore directory. For instructions, see "),o("router-link",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(".")],1),e._v(" "),o("p",[e._v("If you have already created a keystore directory from a previous release of Version 1.8 or later, then you may reuse the existing keystore directory.")]),e._v(" "),o("p",[e._v("The Zowe keystore directory contains the key used by the Zowe desktop and the Zowe API mediation layer to secure its TLS communication with clients (such as web browsers or REST AI clients). The keystore directory also has a truststore where public keys of any servers that Zowe communicates to (such as z/OSMF) are held.")]),e._v(" "),o("p",[e._v("A keystore directory needs to be created for a Zowe instance to be launched successfully, and a keystore directory can be shared between Zowe instances and between Zowe runtimes, including between different Zowe releases, unless specified otherwise in the release documentation.")])]),e._v(" "),o("li",[o("p",[e._v("Create and customize an instance directory that contains configuration data required to launch a Zowe runtime and is where log files are stored. For instructions, see "),o("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1),e._v(" "),o("p",[e._v("A single Zowe runtime can be launched multiple times from different instance directories, each specifying different port ranges, applications to include at start-up, paths of associated runtimes (Java, Node, z/OSMF).")]),e._v(" "),o("p",[e._v("Next, you will install and configure the Zowe started tasks. Zowe has two high level started tasks: "),o("code",[e._v("ZWESVSTC")]),e._v(" that launches the Zowe desktop and API mediation layer address spaces, and "),o("code",[e._v("ZWESISTC")]),e._v(" that is a cross memory server that runs all of the APF-authorized code.  The JCLs for the tasks are included in the PDS SAMPLIB "),o("code",[e._v("SZWESAMP")]),e._v(" installed by Zowe and the load modules for the cross memory server are included in the PDS load library "),o("code",[e._v("SZWEAUTH")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("(Only required for launching the Zowe desktop) Configure the "),o("code",[e._v("ZWESISTC")]),e._v(" cross memory server and install the load libraries. For instructions, see "),o("router-link",{attrs:{to:"/user-guide/configure-xmem-server.html"}},[e._v("Installing and configuring the Zowe cross memory server (ZWESISTC)")]),e._v(".")],1),e._v(" "),o("p",[e._v("The cross memory server is only required if you want to use the Zowe desktop. The cross memory server is not used by API Mediation Layer. If you want to use Zowe API Mediation Layer only, you can skip this step.")]),e._v(" "),o("p",[e._v("Which components of Zowe are started is determined by the "),o("code",[e._v("LAUNCH_COMPONENT_GROUPS")]),e._v(" value in the "),o("code",[e._v("instance.env")]),e._v(" file in the Zowe instance directory, see "),o("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#component-groups"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Configure the "),o("code",[e._v("ZWESVSTC")]),e._v(" started task. For instructions, see "),o("router-link",{attrs:{to:"/user-guide/configure-zowe-server.html"}},[e._v("Installing the Zowe started task (ZWESVSTC)")]),e._v(".")],1)])]),e._v(" "),o("h2",{attrs:{id:"stage-4-verify-the-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-4-verify-the-installation"}},[e._v("#")]),e._v(" Stage 4: Verify the installation")]),e._v(" "),o("p",[e._v("Verify that Zowe is installed correctly on z/OS. See "),o("router-link",{attrs:{to:"/user-guide/verify-zowe-runtime-install.html"}},[e._v("Verifying Zowe installation on z/OS")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"looking-for-troubleshooting-help"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#looking-for-troubleshooting-help"}},[e._v("#")]),e._v(" Looking for troubleshooting help?")]),e._v(" "),o("p",[e._v("If you encounter unexpected behavior when installing or verifying the Zowe runtime on z/OS, see the "),o("router-link",{attrs:{to:"/troubleshoot/troubleshooting.html"}},[e._v("Troubleshooting")]),e._v(" section for tips.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);