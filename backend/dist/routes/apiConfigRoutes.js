'use strict';var I=b,L=b;(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=parseInt(G(0x1f0))/0x1*(parseInt(H(0x1e8))/0x2)+-parseInt(G(0x1f8))/0x3*(parseInt(G(0x1eb))/0x4)+-parseInt(H(0x1e6))/0x5*(-parseInt(H(0x1e1))/0x6)+-parseInt(G(0x1f3))/0x7*(parseInt(G(0x1f7))/0x8)+parseInt(G(0x1f9))/0x9+parseInt(H(0x1f4))/0xa+-parseInt(H(0x1fb))/0xb*(parseInt(H(0x1fe))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcb266));function b(c,d){var e=a();return b=function(f,g){f=f-0x1df;var h=e[f];return h;},b(c,d);}function a(){var R=['get','__importDefault','create','defineProperty','5TvVhXK','call','48710tLNJCC','store','__setModuleDefault','923332iGDbJU','hasOwnProperty','/api-config/:apiId','configurable','__esModule','61pYgoTs','/api-config','remove','1918xErFtM','500110GaMTyT','post','getOwnPropertyDescriptor','14008BeLfBc','3nVwJBt','8737110MpKecL','../controllers/APIConfigController','9947641fDRTEd','put','__importStar','24FDbYMj','express','index','../middleware/isAuth','default','delete','writable','5069490MhJflN'];a=function(){return R;};return a();}var __createBinding=this&&this['__createBinding']||(Object[I(0x1e4)]?function(c,d,e,f){var J=I,K=I;if(f===undefined)f=e;var g=Object[J(0x1f6)](d,e);(!g||(J(0x1e2)in g?!d[K(0x1ef)]:g[J(0x1e0)]||g[K(0x1ee)]))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[K(0x1e5)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[I(0x1ea)]||(Object[L(0x1e4)]?function(c,d){var M=I;Object[M(0x1e5)](c,'default',{'enumerable':!![],'value':d});}:function(c,d){var N=L;c[N(0x202)]=d;}),__importStar=this&&this[L(0x1fd)]||function(c){var O=L,P=I;if(c&&c['__esModule'])return c;var d={};if(c!=null){for(var e in c)if(e!==O(0x202)&&Object['prototype'][O(0x1ec)][O(0x1e7)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[L(0x1e3)]||function(c){var Q=I;return c&&c[Q(0x1ef)]?c:{'default':c};};Object['defineProperty'](exports,L(0x1ef),{'value':!![]});const express_1=__importDefault(require(L(0x1ff))),isAuth_1=__importDefault(require(L(0x201))),APIConfigController=__importStar(require(I(0x1fa))),apiConfigRoutes=express_1[L(0x202)]['Router']();apiConfigRoutes[L(0x1f5)](I(0x1f1),isAuth_1['default'],APIConfigController[L(0x1e9)]),apiConfigRoutes[I(0x1e2)]('/api-config',isAuth_1['default'],APIConfigController[L(0x200)]),apiConfigRoutes[L(0x1fc)](L(0x1ed),isAuth_1[L(0x202)],APIConfigController['update']),apiConfigRoutes[L(0x1df)]('/api-config/:apiId',isAuth_1[I(0x202)],APIConfigController[I(0x1f2)]),apiConfigRoutes[I(0x1fc)]('/api-config/renew-token/:apiId',isAuth_1[L(0x202)],APIConfigController['renewTokenApi']),exports[I(0x202)]=apiConfigRoutes;