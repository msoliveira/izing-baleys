'use strict';var I=b,L=b;function b(c,d){var e=a();return b=function(f,g){f=f-0x12c;var h=e[f];return h;},b(c,d);}function a(){var S=['/tickets/:ticketId/logs','prototype','427640NIeEQP','express','__createBinding','show','getOwnPropertyDescriptor','/tickets','remove','default','defineProperty','Router','2XYvkbn','126DIWcbq','get','index','configurable','../middleware/isAuth','writable','529249ICgqKE','create','__setModuleDefault','hasOwnProperty','post','__importDefault','put','__esModule','18021580ywjSIV','/tickets/:ticketId','../controllers/TicketController','1595480BjUBXQ','2220693eQqLIr','56665KpoThf','call','4936636dkorRd','678OMYWqv'];a=function(){return S;};return a();}(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=-parseInt(G(0x135))/0x1+-parseInt(G(0x12e))/0x2*(-parseInt(H(0x141))/0x3)+-parseInt(H(0x144))/0x4+-parseInt(H(0x140))/0x5+parseInt(G(0x145))/0x6*(parseInt(G(0x142))/0x7)+parseInt(G(0x148))/0x8*(-parseInt(G(0x12f))/0x9)+parseInt(H(0x13d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98e4a));var __createBinding=this&&this[I(0x14a)]||(Object['create']?function(c,d,e,f){var J=I,K=I;if(f===undefined)f=e;var g=Object[J(0x14c)](d,e);(!g||(K(0x130)in g?!d[J(0x13c)]:g[K(0x134)]||g[J(0x132)]))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[K(0x12c)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[I(0x137)]||(Object[I(0x136)]?function(c,d){var M=L,N=L;Object[M(0x12c)](c,M(0x14f),{'enumerable':!![],'value':d});}:function(c,d){var O=L;c[O(0x14f)]=d;}),__importStar=this&&this['__importStar']||function(c){var P=L,Q=L;if(c&&c['__esModule'])return c;var d={};if(c!=null){for(var e in c)if(e!==P(0x14f)&&Object[Q(0x147)][Q(0x138)][P(0x143)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[I(0x13a)]||function(c){var R=L;return c&&c[R(0x13c)]?c:{'default':c};};Object[L(0x12c)](exports,L(0x13c),{'value':!![]});const express_1=__importDefault(require(I(0x149))),isAuth_1=__importDefault(require(I(0x133))),TicketController=__importStar(require(I(0x13f))),ticketRoutes=express_1['default'][I(0x12d)]();ticketRoutes[L(0x130)](L(0x14d),isAuth_1[I(0x14f)],TicketController[L(0x131)]),ticketRoutes[L(0x130)](L(0x13e),isAuth_1[L(0x14f)],TicketController[I(0x14b)]),ticketRoutes[L(0x139)](L(0x14d),isAuth_1[L(0x14f)],TicketController['store']),ticketRoutes[I(0x13b)](L(0x13e),isAuth_1[I(0x14f)],TicketController['update']),ticketRoutes['delete'](I(0x13e),isAuth_1[L(0x14f)],TicketController[L(0x14e)]),ticketRoutes[L(0x130)](L(0x146),isAuth_1[I(0x14f)],TicketController['showLogsTicket']),exports[L(0x14f)]=ticketRoutes;