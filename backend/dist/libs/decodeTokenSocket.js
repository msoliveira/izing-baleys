'use strict';function a(){const E=['SzhwH','1548940ULqCFc','12554185fUrNqz','error','__importDefault','__esModule','24XsqpyV','jsonwebtoken','8Rkekun','24230puGIDP','default','szoxW','2HeoZGQ','Token\x20not\x20provided','secret','3482052gltfFr','verify','isValid','17853jSyAPM','635490BuPJut','1045887oLgTxe','data','335817wQSaJu','logger','YybTK'];a=function(){return E;};return a();}const z=b,B=b;(function(c,d){const x=b,y=b,e=c();while(!![]){try{const f=parseInt(x(0x160))/0x1+parseInt(y(0x159))/0x2*(parseInt(y(0x161))/0x3)+-parseInt(x(0x15c))/0x4+parseInt(y(0x167))/0x5*(-parseInt(x(0x153))/0x6)+-parseInt(x(0x168))/0x7+-parseInt(x(0x155))/0x8*(parseInt(x(0x163))/0x9)+-parseInt(y(0x156))/0xa*(-parseInt(y(0x15f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee557));var __importDefault=this&&this[z(0x151)]||function(c){const A=z;return c&&c[A(0x152)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x151;let h=e[f];return h;},b(c,d);}Object['defineProperty'](exports,z(0x152),{'value':!![]});const jsonwebtoken_1=require(z(0x154)),auth_1=__importDefault(require('../config/auth')),logger_1=require('../utils/logger'),decode=c=>{const C=B,D=z,d={'isValid':![],'data':{'id':'','profile':'','tenantId':0x0}};if(!c)return C(0x165)!==C(0x158)?(logger_1[D(0x164)]['error'](D(0x15a)),d):g&&h[D(0x152)]?i:{'default':j};try{const f=(0x0,jsonwebtoken_1['verify'])(c,auth_1[C(0x157)][D(0x15b)]),{id:g,profile:h,tenantId:i}=f;d[C(0x15e)]=!![],d['data']={'id':g,'profile':h,'tenantId':i};}catch(j){if(C(0x166)!=='SzhwH'){const l={'isValid':![],'data':{'id':'','profile':'','tenantId':0x0}};if(!i)return o[C(0x164)][D(0x169)](C(0x15a)),l;try{const m=(0x0,p[C(0x15d)])(q,r[C(0x157)][D(0x15b)]),{id:n,profile:o,tenantId:p}=m;l['isValid']=!![],l[D(0x162)]={'id':n,'profile':o,'tenantId':p};}catch(q){t[C(0x164)][D(0x169)](q);}return l;}else logger_1[D(0x164)]['error'](j);}return d;};exports[B(0x157)]=decode;