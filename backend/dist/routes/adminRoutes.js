'use strict';var I=b,M=b;(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=-parseInt(G(0x180))/0x1*(parseInt(H(0x174))/0x2)+parseInt(G(0x19d))/0x3*(-parseInt(G(0x192))/0x4)+-parseInt(G(0x18f))/0x5*(parseInt(H(0x18e))/0x6)+parseInt(H(0x18b))/0x7+parseInt(H(0x175))/0x8*(parseInt(G(0x18d))/0x9)+parseInt(H(0x191))/0xa*(parseInt(G(0x186))/0xb)+parseInt(H(0x178))/0xc*(parseInt(H(0x17d))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa7b4c));function b(c,d){var e=a();return b=function(f,g){f=f-0x170;var h=e[f];return h;},b(c,d);}function a(){var S=['3876SvBKji','/admin/settings/:tenantId','/admin/empresa/:tenantId','updateUser','storeChannel','35633QEIwkL','/admin/tenants','indexChatFlow','1753QfnBtm','/admin/status/tenant/:tenantId','/admin/users/:tenantId','signup','/empresa/signup','defineProperty','77DiuHbQ','writable','__setModuleDefault','put','/admin/chatflow/:tenantId','6770498zmAKPW','getUsersByTenant','9vCpmZs','1962WByRfO','8885jfVsAo','indexTenants','489690YpjJdS','12dUZMVL','call','indexUsers','adminUpdateTenant','hasOwnProperty','configurable','__importStar','getOwnPropertyDescriptor','XebGs','create','post','428619NgbCOy','/admin/channels','/admin/users/:userId','updateSettings','prototype','__createBinding','../middleware/isAuthAdmin','__esModule','store','__importDefault','express','indexChannels','default','858vUwGqd','2026552lRdfkZ','get','updateStatusEmpresa'];a=function(){return S;};return a();}var __createBinding=this&&this[I(0x1a2)]||(Object['create']?function(c,d,e,f){var J=I,K=I;if(f===undefined)f=e;var g=Object[J(0x199)](d,e);(!g||(K(0x176)in g?!d[J(0x1a4)]:g[K(0x187)]||g[J(0x197)]))&&(g={'enumerable':!![],'get':function(){var L=J;return'XebGs'===L(0x19a)?d[e]:e[f];}}),Object[K(0x185)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[I(0x188)]||(Object[I(0x19b)]?function(c,d){var N=M,O=M;Object[N(0x185)](c,O(0x173),{'enumerable':!![],'value':d});}:function(c,d){var P=M;c[P(0x173)]=d;}),__importStar=this&&this[I(0x198)]||function(c){var Q=I,R=I;if(c&&c[Q(0x1a4)])return c;var d={};if(c!=null){for(var e in c)if(e!==R(0x173)&&Object[Q(0x1a1)][Q(0x196)][Q(0x193)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[M(0x170)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object['defineProperty'](exports,M(0x1a4),{'value':!![]});const express_1=__importDefault(require(M(0x171))),AdminController=__importStar(require('../controllers/AdminController')),isAuthAdmin_1=__importDefault(require(M(0x1a3))),adminRoutes=express_1[I(0x173)]['Router']();adminRoutes['get']('/admin/users',isAuthAdmin_1['default'],AdminController[I(0x194)]),adminRoutes['put'](I(0x19f),isAuthAdmin_1[M(0x173)],AdminController[I(0x17b)]),adminRoutes['post'](M(0x17e),isAuthAdmin_1[I(0x173)],AdminController[M(0x1a5)]),adminRoutes[I(0x176)](M(0x17e),isAuthAdmin_1[M(0x173)],AdminController[M(0x190)]),adminRoutes[M(0x176)](I(0x18a),isAuthAdmin_1['default'],AdminController[I(0x17f)]),adminRoutes[I(0x176)](I(0x182),isAuthAdmin_1['default'],AdminController[I(0x18c)]),adminRoutes[I(0x189)](I(0x179),isAuthAdmin_1[M(0x173)],AdminController[I(0x1a0)]),adminRoutes[I(0x189)](I(0x181),isAuthAdmin_1[I(0x173)],AdminController[M(0x177)]),adminRoutes['put'](M(0x17a),isAuthAdmin_1[I(0x173)],AdminController[I(0x195)]),adminRoutes[M(0x176)](M(0x19e),isAuthAdmin_1[I(0x173)],AdminController[M(0x172)]),adminRoutes['post'](M(0x19e),isAuthAdmin_1[I(0x173)],AdminController[I(0x17c)]),adminRoutes[M(0x19c)](M(0x184),AdminController[M(0x183)]),exports[M(0x173)]=adminRoutes;