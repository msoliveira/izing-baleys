'use strict';const I=b,J=b;(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=-parseInt(G(0xb0))/0x1+parseInt(H(0xc6))/0x2*(-parseInt(G(0xc4))/0x3)+-parseInt(H(0xc8))/0x4*(parseInt(G(0xb4))/0x5)+parseInt(H(0xbe))/0x6+parseInt(G(0xa9))/0x7*(-parseInt(G(0xd0))/0x8)+-parseInt(G(0xca))/0x9+parseInt(H(0xb2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xab45c));var __createBinding=this&&this[I(0xad)]||(Object[I(0xa2)]?function(c,d,e,f){const K=I,L=J;if(f===undefined)f=e;var g=Object[K(0xc3)](d,e);(!g||(L(0xa5)in g?!d[L(0xc7)]:g[K(0xce)]||g['configurable']))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[K(0xa8)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[J(0xaf)]||(Object['create']?function(c,d){Object['defineProperty'](c,'default',{'enumerable':!![],'value':d});}:function(c,d){const M=J;c[M(0xc2)]=d;}),__importStar=this&&this[I(0xb8)]||function(c){const N=I,O=J;if(c&&c[N(0xc7)])return c;var d={};if(c!=null){for(var e in c)if(e!==N(0xc2)&&Object['prototype'][N(0xbc)][O(0xab)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this['__importDefault']||function(c){return c&&c['__esModule']?c:{'default':c};};Object[J(0xa8)](exports,J(0xc7),{'value':!![]}),exports[I(0xd3)]=exports[I(0xd2)]=exports[J(0xa4)]=exports[I(0xb6)]=void 0x0;const Yup=__importStar(require(J(0xbb))),AppError_1=__importDefault(require('../errors/AppError')),CreateTagService_1=__importDefault(require(I(0xa3))),ListTagService_1=__importDefault(require(I(0xb3))),DeleteTagService_1=__importDefault(require('../services/TagServices/DeleteTagService')),UpdateTagService_1=__importDefault(require(J(0xb5))),store=async(c,d)=>{const P=I,Q=I,{tenantId:e}=c['user'];if(c['user']['profile']!==P(0xcf)){if(Q(0xb7)!==P(0xbf))throw new AppError_1[(Q(0xc2))]('ERR_NO_PERMISSION',0x193);else throw new d['default'](P(0xd1),0x193);}const f={...c['body'],'userId':c[Q(0xaa)]['id'],'tenantId':e},g=Yup[P(0xb9)]()['shape']({'tag':Yup[Q(0xc0)]()[P(0xcb)](),'color':Yup[Q(0xc0)]()[Q(0xcb)](),'userId':Yup[Q(0xc1)]()[P(0xcb)](),'tenantId':Yup[P(0xc1)]()[Q(0xcb)]()});try{if(P(0xac)==='wDQae')await g[Q(0xc5)](f);else{if(k===l)m=n;o[p]=q[r];}}catch(k){throw new AppError_1[(Q(0xc2))](k[P(0xae)]);}const h=await(0x0,CreateTagService_1[P(0xc2)])(f);return d['status'](0xc8)[P(0xbd)](h);};exports['store']=store;function b(c,d){const e=a();return b=function(f,g){f=f-0xa2;let h=e[f];return h;},b(c,d);}const index=async(c,d)=>{const R=J,S=I,{tenantId:e}=c['user'],{isActive:f}=c[R(0xba)],g=await(0x0,ListTagService_1[S(0xc2)])({'tenantId':e,'isActive':f?f==R(0xa7):![]});return d[S(0xc9)](0xc8)[S(0xbd)](g);};function a(){const X=['277428atedLK','__esModule','412gTRLZe','status','9023841VhnJby','required','shape','boolean','writable','admin','838888xgMoMR','ERR_NO_PERMISSION','update','remove','create','../services/TagServices/CreateTagService','index','get','params','true','defineProperty','7KvnBdC','user','call','wDQae','__createBinding','message','__setModuleDefault','327486sbrOGb','profile','34218400NITjhC','../services/TagServices/ListTagService','65755xLhlyH','../services/TagServices/UpdateTagService','store','kjgrO','__importStar','object','query','yup','hasOwnProperty','json','2912298KEBhZV','XnDmK','string','number','default','getOwnPropertyDescriptor','9mflkVI','validate'];a=function(){return X;};return a();}exports[I(0xa4)]=index;const update=async(c,d)=>{const T=J,U=I,{tenantId:e}=c['user'];if(c['user'][T(0xb1)]!==T(0xcf))throw new AppError_1[(T(0xc2))](T(0xd1),0x193);const f={...c['body'],'userId':c[U(0xaa)]['id'],'tenantId':e},g=Yup[U(0xb9)]()[U(0xcc)]({'tag':Yup[T(0xc0)]()[T(0xcb)](),'color':Yup['string']()[T(0xcb)](),'isActive':Yup[T(0xcd)]()[U(0xcb)](),'userId':Yup[U(0xc1)]()['required']()});try{await g[T(0xc5)](f);}catch(j){throw new AppError_1['default'](j['message']);}const {tagId:h}=c[U(0xa6)],i=await(0x0,UpdateTagService_1[U(0xc2)])({'tagData':f,'tagId':h});return d[U(0xc9)](0xc8)['json'](i);};exports['update']=update;const remove=async(c,d)=>{const V=I,W=J,{tenantId:e}=c[V(0xaa)];if(c[V(0xaa)]['profile']!=='admin')throw new AppError_1['default'](W(0xd1),0x193);const {tagId:f}=c[V(0xa6)];return await(0x0,DeleteTagService_1[W(0xc2)])({'id':f,'tenantId':e}),d[W(0xc9)](0xc8)[W(0xbd)]({'message':'Tag\x20deleted'});};exports[J(0xd3)]=remove;