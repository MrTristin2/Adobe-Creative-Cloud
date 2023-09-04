(window["webpackJsonp-pdfverbs-web"]=window["webpackJsonp-pdfverbs-web"]||[]).push([[53],{EJsU:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r("prSB"),a=r.n(n),s=r("jQsN"),i=r.n(s),c=r("butC"),o=r.n(c),p=r("2bPg"),u=r.n(p),d=r("+lnk"),l=r("nOB5"),g=r("RZ3+"),f=r("ip5t"),v=function isIntegration(){return"integration"===d.envUtil.getEnvVar("app_identifier")},_=d.logging.getLogger("SplitPdfProvider.js"),b=function SplitPdfProvider(){var e=this;u()(this,SplitPdfProvider),this.ready=o()(i.a.mark((function _callee(){var t;return i.a.wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.providers.dcapi();case 2:return t=r.sent,e.dcapi=t.getDcapi(),r.next=6,d.providers["lifecycle-progress"]();case 6:return e.lifecycleProgress=r.sent,r.next=9,d.providers.asset2();case 9:return e.assetProvider=r.sent,r.abrupt("return",e);case 11:case"end":return r.stop()}}),_callee)}))),this.splitPdf=function(){var t=o()(i.a.mark((function _callee2(t,r){var n,s,c,o,p,u,b,m,h,x,w,P,k,y,F,I,U,S,j,A,J;return i.a.wrap((function _callee2$(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.lifecycleProgress.getJobById(t),s={persistence:"transient"},c=n.overwriteOnSave,o=void 0!==c&&c,p=n.createFolder,u=void 0!==p&&p,b=n.settingsDropinParams,m=n.assetForOperation,h=void 0===m?{}:m,x=n.inputAsset,w=void 0===x?{}:x,P=n.parentUri,k=b.dataSource,y=b.outputFilename,F=o?"overwrite":"auto_rename",P){i.next=16;break}return i.prev=7,i.next=10,e.assetProvider.getFolderRoot();case 10:P=i.sent,i.next=16;break;case 13:i.prev=13,i.t0=i.catch(7),_.warn("Error fetching root folder uri",i.t0);case 16:if(I="",!u){i.next=24;break}if(U="".concat(y,"-").concat(r),v()){i.next=23;break}return i.next=22,e.getFolderUri(P,U);case 22:I=i.sent;case 23:e.lifecycleProgress.updateJob({jobId:t,settingsDropinParams:a()(a()({},b),{},{outputFolder:U})});case 24:return S=e.getAssetUri(k),j=e.getPageRanges(k),A={"x-request-id":e.dcapi.getUuid("sp"),"x-api-app-info":"dc-web-app","x-api-client-id":"api_browser"},i.next=29,Object(f.H)();case 29:if(!i.sent){i.next=36;break}return A["x-user-action-name"]="split-pdf",i.next=34,Object(f.x)("dcweb/mock_data");case 34:(J=i.sent)&&J.mock_limit_verb_expiry&&(A["X-Verb-Expiry"]=J.mock_limit_verb_expiry);case 36:return!d.auth2.isSignedIn||h.origAsset||w.origAsset||v()||(s.parent_uri=I||P,s.persistence="permanent"),i.abrupt("return",e.dcapi.call(g.d,{accept:l.a.new_asset_job_v1,content_type:l.a.splitpdf_parameters,content:a()({asset_uri:S,on_dup_name:F,params:{page_ranges:j}},s),headers:A}).then((function(r){return e.lifecycleProgress.updateJob({jobId:t,parentUri:I||P,acrobatResponse:r}),e.lifecycleProgress.startFetchStatus(t)})));case 38:case"end":return i.stop()}}),_callee2,null,[[7,13]])})));return function(e,r){return t.apply(this,arguments)}}(),this.getAssetUri=function(t){var r=t.getItem(0,0).parentAssetId;return e.assetProvider.getAssetURI(r)},this.getFolderUri=function(){var t=o()(i.a.mark((function _callee3(t,r){var n,a;return i.a.wrap((function _callee3$(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,e.assetProvider.createFolder({parent_uri:t,name:r,on_dup_name:"auto_rename"});case 3:return n=s.sent,a=n.uri,s.abrupt("return",a);case 8:return s.prev=8,s.t0=s.catch(0),_.error("Failed to create folder",s.t0),s.abrupt("return","");case 12:case"end":return s.stop()}}),_callee3,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}(),this.getPageRanges=function(e){for(var t=e.getItemsLength(),r=e.getSplitItems().map((function(e){return e.pageNum})),n=[],a=1,s=0;s<r.length;s++)n.push({start:a,end:r[s]}),a=r[s]+1;return n.push({start:a,end:t}),n}};b.getInstance=d.providerUtil.getSingletonFunction(b)}}]);
