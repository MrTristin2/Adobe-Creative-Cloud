this.CCDLibs=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){e.exports=n(3)(0)},function(e,t,n){e.exports=n(3)(22)},function(e,t,n){e.exports=n(3)(408)},function(e,t){e.exports=common},function(e,t){e.exports={components:{Spaces:{id:"Spaces",output:"Spaces",globalReference:"CCDSpaces",loadCSS:!0},Libs:{id:"CCLibs",output:"CCLibs",globalReference:"CCDLibs"},Files:{id:"CloudDocs",output:"CloudDocs",globalReference:"CCDCloudDocs",loadCSS:!0},ShareSheet:{id:"ShareSheet",output:"ShareSheet",globalReference:"CCDShareSheet",loadCSS:!0},OneUp:{id:"OneUp",output:"OneUp",globalReference:"CCDOneUp",loadCSS:!0},UAB:{id:"UAB",output:"UAB",globalReference:"UniversalAssetBrowser",loadCSS:!1}}}},function(e,t,n){const o=n(8),{components:i}=n(4);e.exports={components:{oneUpView:o.OneUpView,listView:o.ListView,teamView:o.TeamView,personalView:o.PersonalView},name:"Libs",initialize:o.initialize,id:i.Libs.id}},function(e,t,n){(function(e){function n(e,t){for(var n=0,o=e.length-1;o>=0;o--){var i=e[o];"."===i?e.splice(o,1):".."===i?(e.splice(o,1),n++):n&&(e.splice(o,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};function r(e,t){if(e.filter)return e.filter(t);for(var n=[],o=0;o<e.length;o++)t(e[o],o,e)&&n.push(e[o]);return n}t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,o="/"===s.charAt(0))}return(o?"/":"")+(t=n(r(t.split("/"),function(e){return!!e}),!o).join("/"))||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===s(e,-1);return(e=n(r(e.split("/"),function(e){return!!e}),!o).join("/"))||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function o(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=o(e.split("/")),r=o(n.split("/")),s=Math.min(i.length,r.length),a=s,c=0;c<s;c++)if(i[c]!==r[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return(l=l.concat(r.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),n=t[0],o=t[1];return n||o?(o&&(o=o.substr(0,o.length-1)),n+o):"."},t.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return i(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(7))},function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(e){o=s}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function b(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var o=n(1);const{components:i}=n(4);var r,s;!function(e){e.Libraries="/assets/libraries",e.LibrariesDefault="/assets/libraries/default",e.LibrariesBrowseMore="/assets/libraries/teamLibs",e.LibrariesPublicLibs="/assets/libraries/publicLibs",e.LibrariesSharesheet="/assets/libraries/sharesheet/:shareAction/:libId",e.LibrariesElement="/assets/libraries/:libId/elements/:elementId",e.LibrariesLegacyOneUp="/assets/libraries/:libId",e.LibrariesOneUp="/assets/libraries/id/:libId",e.Files="/assets/files",e.Spaces="/assets/spaces/:urn?",e.SpacesRoot="/assets/spaces",e.AssetsRoot="/assets",e.FilesOneUp="/assets/files/oneUp/id/:urn",e.FilesOneUpOnboarding="/assets/files/oneUp",e.SpacesOneUp="/assets/spaces/oneUp/id/:urn",e.Deleted="/assets/files/cloud-content-archive",e.SharedWithYou="/assets/files/shared-with-you",e.YourDocuments="/assets/files/cloud-content"}(r||(r={})),function(e){e.ActionsManager="actionsManager",e.Analytics="analyticsStore",e.AppActionsManager="appActionsManager",e.Apps="appsStore",e.Assets="assetsStore",e.AssetsFiles="assetsFiles",e.AssetsFilesPreview="assetsFilesPreviewStore",e.AssetsLibs="assetsLibsStore",e.AssetsSpaces="assetsSpacesStore",e.AssetsTranslation="AssetsTranslationUtilStore",e.CCUCore="CCUCore",e.Container="containerStore",e.Dialogs="dialogManager",e.Events="events",e.ExtensionManager="extensionManager",e.ExternalGateway="externalGateway",e.FeatureFlags="featureFlags",e.FilesIMSStore="filesIMSStore",e.FilePicker="filePicker",e.Files="filesStore",e.FileSystem="fileSystem",e.FilesContext="FilesContextStore",e.FilteredAppsStore="filteredAppsStore",e.Identity="identityStore",e.LibsContext="LibsContextStore",e.Locale="localeStore",e.Network="networkState",e.Onboarding="onboardingTourStore",e.OpenCore="openCoreStore",e.OpenCoreApp="openCoreAppStore",e.OpenCoreFFHelper="openCoreFFHelper",e.Preferences="preferencesStore",e.Router="ccdRouter",e.NotificationStore="notificationStore",e.SpacesContext="SpacesContextStore",e.SpacesOpenStore="spacesOpenStore",e.SyncStore="syncStore",e.Toasts="toastManager",e.Vulcan="vulcanStore",e.UABContext="uabContext",e.WebArticle="webArticle"}(s||(s={}));var a;!function(e){e.DELETED="cloud-content-archive",e.SHARED_WITH_YOU="shared-with-you",e.YOUR_DOCUMENTS="cloud-content"}(a||(a={}));const c={LIBRARIES:"application/vnd.adobe.library+dcx",AERO:"application/vnd.adobe.real+dcx",APPLE_NUMBERS:"application/vnd.apple.numbers",CANVAS:"application/vnd.adobe.hz.canvas+dcx",EXPRESS:"application/vnd.adobe.hz.express+dcx",EXPRESS_PAGE:"application/vnd.adobe.hztemp.page+dcx",ILLUSTRATOR_CLOUD_DOCUMENT:"document/vnd.adobe.illustrator+dcx",FONT_FILE:"application/x-font-type1",FR_CLOUD_DOCUMENT:"application/vnd.adobe.gemini+dcx",PS_CLOUD_DOCUMENT:"document/vnd.adobe.psdc+dcx",PS_CLOUD_DOCUMENT_DEP:"document/vnd.adobe.cpsd+dcx",XD_CLOUD_DOCUMENT:"application/vnd.adobe.xd.cloudproject+dcx",XD_LOCAL:"application/vnd.adobe.sparkler.project+dcxucf",MIGRATED_GEMINI:"document/vnd.adobe.gemini+dcx",PS_LOCAL:"application/vnd.adobe.photoshop",ILLUSTRATOR_LOCAL:"application/vnd.adobe.illustrator",FOLDER:"application/vnd.adobe.directory+json",SPACE:"project",LIBRARY:"library",PDF:"application/pdf",PSX_MIX:"document/vnd.adobe.psxc.mix+dcx",PSX_EDIT:"document/vnd.adobe.psxc.edit+dcx",PSX_FIX:"document/vnd.adobe.psxc.fix+dcx",PSX_COLLAGE:"document/vnd.adobe.psxc.collage+dcx",SPARK_POST:"application/vnd.adobe.theo.document+dcx",SPARK_PAGE:"application/vnd.adobe.luca.document+dcx",SPARK_PAGE_PROJECT:"application/vnd.adobe.luca.project+dcx",SPARK_VIDEO:"application/vnd.adobe.ginger.document+dcx",SPARK_VIDEO_PROJECT:"application/vnd.adobe.ginger.project+dcx",INDD_CLOUD_DOC:"document/vnd.adobe.indesign+dcx",XD_SHAREDARTIFACT:"application/vnd.adobe.xd.sharedartifact+dcx",XD_PROTOTYPE:"application/vnd.adobe.uxdesign.prototype+dcx",GENERIC:"application/octet-stream"},l=[c.EXPRESS,c.EXPRESS_PAGE],u=(c.SPARK_PAGE,c.SPARK_PAGE_PROJECT,c.SPARK_POST,c.SPARK_VIDEO,c.SPARK_VIDEO_PROJECT,c.AERO,c.CANVAS,c.ILLUSTRATOR_CLOUD_DOCUMENT,c.FR_CLOUD_DOCUMENT,c.PS_CLOUD_DOCUMENT,c.PS_CLOUD_DOCUMENT_DEP,c.XD_CLOUD_DOCUMENT,c.MIGRATED_GEMINI,c.PSX_MIX,c.PSX_EDIT,c.PSX_FIX,c.PSX_COLLAGE,c.INDD_CLOUD_DOC,i.Files.id,i.Libs.id,i.Spaces.id,i.ShareSheet.id,i.OneUp.id,i.UAB.id,c.XD_CLOUD_DOCUMENT,c.ILLUSTRATOR_CLOUD_DOCUMENT,c.PS_CLOUD_DOCUMENT,c.PS_CLOUD_DOCUMENT_DEP,{LIBRARY_LOAD_FLAG:"ccd.fw.loading.CCLibs",LIBS_PANEL_LOAD_FLAG_PREFIX:"ccd.assets.loading.LibrariesPanel.",LIBS_PANEL_LOAD_LATEST:"ccd.assets.loading.LibrariesPanel.latest",CLOUD_DOCS_LOAD_FLAG:"ccd.fw.loading.CloudDocs",SPACES_LOAD_FLAG:"ccd.fw.loading.Spaces",ZERO_STORAGE_FLAG:"ccd.fw.filesPanelEnabled",ASSETS_UI_FLAG:"ccd.fw.visibility.CCDAssets",DC_ON_ACP_MIGRATION_FLAG:"ccd.assets.acpMigrationCompleted",ASSETS_URL_FLAG:"ccd.fw.loading.assets.url"});var d,p;!function(e){e.USER_CONTEXT_DATA="UserContextData",e.HIDE_ONBOARDING="HideOnboarding",e.SHOW_ONBOARDING="ShowOnboarding",e.CFU="Start24HrWorkflow"}(d||(d={})),function(e){e.viewInWeb="open-assets-web"}(p||(p={}));var f;!function(e){e.StartTrial="startTrial",e.BuyNow="buy-now",e.Update="update",e.Try="try",e.Buy="buy",e.Retry="retry",e.Install="install",e.NotCompatible="not-compatible"}(f||(f={}));var h=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})};const g="CCDAssetsLibs: AssetsLibsStore";const m=new((()=>{class e{constructor(){this.context=null,this.isInitializationFailed=!1,this.designLibraryInitComplete=!1,this.handleRouteActions=(e=>C(this,void 0,void 0,function*(){e.startsWith(r.Libraries)&&(yield Object(o.when)(()=>this.designLibraryInitComplete),e===r.LibrariesBrowseMore&&window.CCLibraries.openBrowseLibs(),e===r.LibrariesPublicLibs&&window.CCLibraries.openPublicLibs())})),this.actionHandler=(e=>{e&&e.id&&setTimeout(()=>this.handleRouteActions(e.id),0)}),this.init=(e=>{console.info(`${g} init`),this.context=e,e.onStoreRegister(s.ActionsManager,()=>{const t=e.get(s.ActionsManager);t.registerActionHandler(r.LibrariesBrowseMore,this.actionHandler),t.registerActionHandler(r.LibrariesPublicLibs,this.actionHandler)}),e.registerStore(s.AssetsLibs,this)}),this.onBackClick=(()=>{const e=this.context.get(s.Router);if(!e)return;const{history:t}=e,{index:n,entries:o,location:i}=t,{pathname:a,search:c}=i,l=`${a}${c}`;let u=n-1;for(;u>0;){const{pathname:e,search:t}=o[u];if(`${e}${t}`!==l)break;u-=1}if(0===u||n-u<0)return console.error(`${g} onBackClick: indices: ${u} : ${n}.`),void e.push(r.Libraries);e.go(-1*(n-u))}),this.createNewLibrary=(e=>{window.CCLibraries.createNewLibrary(e)}),this.browseAllLibraries=(()=>{window.CCLibraries.openBrowseLibs()}),this.getLibraryIdByUrn=(e=>{if(void 0!==window.CCLibraries){const t=window.CCLibraries.getLibraryByAssetId(e);return t?t.id:""}return""})}get initializationFailed(){return this.isInitializationFailed}setInitializationFailed(e){this.isInitializationFailed=e}setDesignLibraryInitComplete(e){this.designLibraryInitComplete=e}}return h([o.observable,b("design:type",Object)],e.prototype,"isInitializationFailed",void 0),h([o.observable,b("design:type",Object)],e.prototype,"designLibraryInitComplete",void 0),h([o.action,b("design:type",Function),b("design:paramtypes",[Boolean]),b("design:returntype",void 0)],e.prototype,"setInitializationFailed",null),h([o.action,b("design:type",Function),b("design:paramtypes",[Boolean]),b("design:returntype",void 0)],e.prototype,"setDesignLibraryInitComplete",null),e})());function L(e){m.context.logEvent({"event.workflow":"Debug","event.subcategory":"CC Library","event.type":e,"event.subtype":"log","event.error_code":"ACCC_LIBRARIES_LOAD_STATUS"}),m.context.logETSEvent("ACCC_LIBRARIES_LOAD_STATUS","",{Status:e})}function S(e,t,n=""){m.context.logEvent({"event.workflow":"Debug","event.subcategory":"CC Library","event.type":e,"event.subtype":t,"event.value":n})}function v(e,t=!0,n={}){const o=document.createElement("script");return o.src=e,Object.entries(n).forEach(e=>{o[e.key]=e.value}),new Promise((n,i)=>{o.onload=n,o.onerror=(()=>{const o=`CCDAssets: Script at path ${e} failed to load`;console.debug(o),t?i(o):n()}),document.getElementsByTagName("body")[0].appendChild(o)})}const y="assets-files: utilities:";var E=function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})};const P="CCDAssetsLibs: PanelManager",w=class{static searchCCDQueryParams(e){return String(new URL(String(document.location)).searchParams.get(e))}static getFileNameWithoutExtension(e){return e.replace(/\.[^/.]+$/,"")}static getExtensionFromFileName(e){return/(?:\.([^.]+))?$/.exec(e)[1]}static compareVersions(e,t){const n=e.split("."),o=t.split(".");let i=0;for(;i<Math.min(n.length,o.length);i+=1){const e=parseInt(n[i],10),t=parseInt(o[i],10);if(e>t)return 1;if(e<t)return-1}return n.length===o.length?0:n.length<o.length?-1:1}static getAvailableFileName(e,t,n){let o,i="";const r=n&&n.length;o=r?`${t}${i}.${n}`:`${t}${i}`;let s=1;for(;e.includes(o);)i=` (${s})`,o=r?`${t}${i}.${n}`:`${t}${i}`,s+=1;return o}static getLocalExtensionFromCloudMimeType(e){switch(e){case c.PS_CLOUD_DOCUMENT_DEP:return"psd";case c.XD_CLOUD_DOCUMENT:return"xd";case c.ILLUSTRATOR_CLOUD_DOCUMENT:return"ai";case c.INDD_CLOUD_DOC:return"indd";default:return""}}static getServiceParam(e){let t="",n="";if(e)if(e instanceof Array){const{serviceCode:o,serviceLevel:i}=e[0];t=o,n=i}else{const{serviceCode:o,serviceLevel:i}=e;t=o,n=i}else console.error(`${y} getServiceParam: serviceAccount is undefined`);return{serviceCode:t,serviceLevel:n}}}.compareVersions,A="error",_="info",D="CC_LIBRARIES_PANEL_EXTENSION_",O="ccd_manifest.json",x="com.adobe.ccd.extension.fs",R="com.adobe.cclibrariespanel",T=n(6);const U=new class{constructor(){this.cepPanels=new Map,this.libsPanelFESData=[],this.loadLatestPanelFromCEP=!1,this.getCEPExtPath=(()=>T.join(this.fileSystem.getTokenPath("PATH_TYPE_CEP"),"extensions"))}init(e){this.context=e,this.fileSystem=this.context.get(s.FileSystem),this.featureFlagsStore=this.context.get(s.FeatureFlags),this.getLibsPanelFESData()}getLibsPanelFESData(){try{const e=this.featureFlagsStore.getFESData(u.LIBS_PANEL_LOAD_FLAG_PREFIX,!0),{data:t}=e;this.libsPanelFESData=t}catch(e){console.error(`${P}: could not fetch '${u.LIBS_PANEL_LOAD_FLAG_PREFIX}' flags`,e)}try{const e=this.featureFlagsStore.getFESData(u.LIBS_PANEL_LOAD_LATEST);this.loadLatestPanelFromCEP=e&&e.state}catch(e){console.error(`${P}: could not fetch '${u.LIBS_PANEL_LOAD_LATEST}' flag`,e)}}fetchCEPPanels(){return E(this,void 0,void 0,function*(){if(this.cepPanels.size>0)console.log(`${P}: CEP panels already fetched. Hence skipping.`);else try{console.debug(`${P}: fetching candidate libs panel from CEP`);const{appVersion:e}=window.appContext,t=this.context.get(s.ExtensionManager),n=yield t.loadExtension(x),o=this.getCEPExtPath(),i=(yield n.readdir(o)).filter(e=>e.startsWith(D)),r=new Map;for(let t=0;t<i.length;t+=1){const s=T.join(o,i[t],O);try{const o=yield n.readFile(s,{encoding:"utf8"}),a=JSON.parse(o);a.id!==R?console.log(`${P}: Skipping incompatible panel ${i[t]}.`+` Incompatible id: ${a.id}`):w(e,a.minCCDVersion)<0?console.log(`${P}: Skipping incompatible panel ${i[t]}`+" CCD version incompatible. "+`CCD Version:${e} minCCDVersion:${a.minCCDVersion}`):r.set(i[t],a)}catch(e){console.log(`${P}: Skipping incompatible panel ${i[t]}`+" could not read ccd_manifest.json")}}if(console.log(`${P}: Total CCD compatible CEP panels: ${r.size}`),r.size>0){const e=[...r.keys()];e.sort((e,t)=>w(r.get(t).version,r.get(e).version)),e.forEach(e=>{this.cepPanels.set(e,r.get(e))}),console.debug(`${P}: Sorted candidate panels from CEP,`,this.cepPanels)}}catch(e){console.error(`${P}: Error while fetching libs panel from CEP: ${e}`)}})}getCEPPanel(){if(!this.cepPanels||!this.cepPanels.size)return"";const{platform:e,appVersion:t}=window.appContext;if(this.loadLatestPanelFromCEP){for(const[e,n]of this.cepPanels)if(w(t,n.minCCDVersion)>=0)return console.log(`${P}: Latest compatible Panel: ${e}`),e;return console.log(`${P}: No panel compatible with CCD ${t} found`),""}try{for(const[n,o]of this.cepPanels){const i=o.version;for(const o of this.libsPanelFESData){const r=o[e]?o[e]:o.xplat;if(w(t,r.minCCDVersion)>=0&&0===w(i,r.libsPanelVersion))return console.debug(`${P}: FF matching Panel ${n} found`),n}}}catch(e){console.error(`${P}: Failed to finalize CEP panel version: '${e}'`)}return""}loadBundledPanel(e){return E(this,void 0,void 0,function*(){window.ccLibrariesPublicPath=`${e}/designLibraries/`,yield v(`${e}/designLibraries/main.js`),console.log(`${P}: Loaded libs panel from bundled`),S(_,"bundled_panel")})}loadCEPPanel(){return E(this,void 0,void 0,function*(){try{yield this.fetchCEPPanels();const e=this.getCEPPanel();if(e){const t=this.getCEPExtPath(),n=this.cepPanels.get(e).resources.js;return window.ccLibrariesPublicPath=`${t}/${e}/`,yield v(`${t}/${e}/${n}`),console.log(`${P}: Loaded libs panel from CEP extensions: ${e}`),S(_,"CEP_panel",e),!0}S(A,"CEP_panel","CEP_panel_not_found"),console.log(`${P}: Could not find any CEP panel`)}catch(e){console.error(`${P}: Could not load libs panel from CEP extensions: '${e}'`),S(A,"CEP_panel","exception_occured")}return!1})}};var I=function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})};const F={light:{panelBackgroundColor:{color:{alpha:255,green:245,blue:245,red:245}}},darkest:{panelBackgroundColor:{color:{alpha:255,green:50,blue:50,red:50}}}},M=e=>{const{context:t}=e;return m.init(t),(({context:e,resourcePath:t,languageCode:n})=>I(void 0,void 0,void 0,function*(){try{U.init(e),(yield U.loadCEPPanel())||(console.log("CCDAssetsLibs: falling back to load bundled panel"),yield U.loadBundledPanel(t));const i=e.get(s.Vulcan),r=e.get(s.Container),a=r.currentTheme,c="darkest"===a?F.darkest:F.light,l="darkest"===a?F.light:F.darkest;yield window.CCLibraries.init(e,i,l,n),window.CCLibraries.updateTheme(c),Object(o.reaction)(()=>r.currentTheme,e=>{console.log(`Updating Libs theme to ${e}`);const t="darkest"===e?F.darkest:F.light;window.CCLibraries.updateTheme(t)});const u=e.get(s.SyncStore);u&&(u.libraries.sync=window.CCLibraries.sync),L("success"),m.setDesignLibraryInitComplete(!0)}catch(e){m.setInitializationFailed(!0),m.setDesignLibraryInitComplete(!1),L("error"),console.error(`CCDAssetsLibs: Error while loading libraries: ${e}`)}}))(e),m};var $=n(0),N=n.n($),j=n(2),B=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let k=(()=>{let e=class extends $.Component{constructor(){super(...arguments),this.hideContextMenu=(()=>{m.context.hideContextMenu()})}componentDidMount(){const e=document.querySelector("library-list-view");e.shadowRoot&&e.shadowRoot.addEventListener("scroll",this.hideContextMenu,!0)}componentWillUnmount(){const e=document.querySelector("library-list-view");e.shadowRoot&&e.shadowRoot.removeEventListener("scroll",this.hideContextMenu,!0)}render(){const{match:e}=this.props;if(!e)return console.error("CCDAssetsLibs: ListViewDeprecated: render, no route matched"),null;const t=e.url?e.url.split(r.AssetsRoot)[1]:"";return N.a.createElement("library-list-view",{route:t})}};return e=B([j.withRouter],e)})();class V extends $.Component{constructor(){super(...arguments),this.hideContextMenu=(()=>{m.context.hideContextMenu()})}componentDidMount(){const e=document.querySelector("library-teams-view");e.shadowRoot&&e.shadowRoot.addEventListener("scroll",this.hideContextMenu,!0)}componentWillUnmount(){const e=document.querySelector("library-teams-view");e.shadowRoot&&e.shadowRoot.removeEventListener("scroll",this.hideContextMenu,!0)}render(){const{teamNames:e,teamId:t,filterBy:n,sortBy:o,sortOrder:i,viewType:r,theme:s}=this.props;return N.a.createElement("div",{style:{flexGrow:1,position:"relative"}},N.a.createElement("library-teams-view",{teamnames:e,teamid:t,filterby:n,sortby:o,sortorder:i,viewtype:r,theme:s}))}}var G=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let X=(()=>{let e=class extends $.Component{constructor(){super(...arguments),this.hideContextMenu=(()=>{m.context.hideContextMenu()})}componentDidMount(){const e=document.querySelector("library-contents-view");e.shadowRoot&&e.shadowRoot.addEventListener("scroll",this.hideContextMenu,!0)}componentWillUnmount(){const e=document.querySelector("library-contents-view");e.shadowRoot&&e.shadowRoot.removeEventListener("scroll",this.hideContextMenu,!0)}render(){const{match:e}=this.props;if(!e)throw new Error("CCDAssetsLibs: OneUpView: render, no route matched");const t=e.url?e.url.split(r.AssetsRoot)[1]:"";return N.a.createElement("library-contents-view",{route:t})}};return e=G([j.withRouter],e)})();class z extends $.Component{constructor(){super(...arguments),this.hideContextMenu=(()=>{m.context.hideContextMenu()})}componentDidMount(){const e=document.querySelector("library-personal-view");e.shadowRoot&&e.shadowRoot.addEventListener("scroll",this.hideContextMenu,!0)}componentWillUnmount(){const e=document.querySelector("library-personal-view");e.shadowRoot&&e.shadowRoot.removeEventListener("scroll",this.hideContextMenu,!0)}render(){return N.a.createElement("library-personal-view",null)}}n.d(t,"initialize",function(){return W}),n.d(t,"OneUpView",function(){return X}),n.d(t,"ListView",function(){return k}),n.d(t,"TeamView",function(){return V}),n.d(t,"PersonalView",function(){return z});var H=function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})};function W(e,t){return H(this,void 0,void 0,function*(){try{const{locale:n}=e.get(s.Locale),o=e.get(s.LibsContext);return M({context:o,resourcePath:t,languageCode:n})}catch(e){console.error(`AssetsFiles: Error while initializing AssetsFiles component: ${e}`)}return Promise.reject()})}}]);
