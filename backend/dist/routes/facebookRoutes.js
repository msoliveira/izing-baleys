'use strict';var I=b,J=b;(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=-parseInt(G(0x11f))/0x1+parseInt(G(0x122))/0x2*(-parseInt(H(0x128))/0x3)+parseInt(H(0x12a))/0x4*(parseInt(H(0x136))/0x5)+parseInt(H(0x131))/0x6*(-parseInt(H(0x127))/0x7)+parseInt(H(0x134))/0x8*(parseInt(G(0x12e))/0x9)+parseInt(G(0x137))/0xa+parseInt(G(0x121))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcbbaa));function a(){var S=['16101YpZLdR','__createBinding','4NKMINJ','getOwnPropertyDescriptor','prototype','__esModule','531IQQqjN','hasOwnProperty','express','39030QuKYvU','get','create','61816Fyaeyb','defineProperty','6124060uAiWKS','3487500StAMcw','Router','../controllers/facebookController','post','1205297yFHSgZ','default','13446873lamcTj','442xHoOcN','__importStar','__setModuleDefault','configurable','/fb/logout-pages','28NSUqzA'];a=function(){return S;};return a();}var __createBinding=this&&this[I(0x129)]||(Object[J(0x133)]?function(c,d,e,f){var K=I,L=I;if(f===undefined)f=e;var g=Object[K(0x12b)](d,e);(!g||(L(0x132)in g?!d[L(0x12d)]:g['writable']||g[K(0x125)]))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[L(0x135)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[I(0x124)]||(Object[J(0x133)]?function(c,d){var M=I,N=I;Object[M(0x135)](c,M(0x120),{'enumerable':!![],'value':d});}:function(c,d){var O=J;c[O(0x120)]=d;}),__importStar=this&&this[I(0x123)]||function(c){var P=I,Q=I;if(c&&c[P(0x12d)])return c;var d={};if(c!=null){for(var e in c)if(e!=='default'&&Object[P(0x12c)][P(0x12f)]['call'](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this['__importDefault']||function(c){var R=J;return c&&c[R(0x12d)]?c:{'default':c};};function b(c,d){var e=a();return b=function(f,g){f=f-0x11e;var h=e[f];return h;},b(c,d);}Object[I(0x135)](exports,I(0x12d),{'value':!![]});const express_1=require(I(0x130)),FacebookController=__importStar(require(I(0x139))),isAuth_1=__importDefault(require('../middleware/isAuth')),fbRoutes=(0x0,express_1[J(0x138)])();fbRoutes[J(0x11e)]('/fb/register-pages',isAuth_1[I(0x120)],FacebookController['store']),fbRoutes[J(0x11e)](I(0x126),isAuth_1[J(0x120)],FacebookController['facebookLogout']),exports[I(0x120)]=fbRoutes;