'use strict';const n=b,o=b;function a(){const r=['2197885kXYHSN','12kQCCVr','jsonwebtoken','update','7540420xHxEza','admin','../../models/ApiConfig','255405nwNdNW','default','sign','__esModule','36dVCjXy','587284VpuApT','reload','777392hEXpNh','../../config/auth','findByPk','6TvDRUs','39618yXMaxy','ERR_API_CONFIG_NOT_FOUND','815395RISiXx'];a=function(){return r;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x1c2;let h=e[f];return h;},b(c,d);}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x1d3))/0x1+parseInt(k(0x1cd))/0x2*(parseInt(l(0x1c9))/0x3)+-parseInt(k(0x1c3))/0x4+-parseInt(l(0x1cc))/0x5+-parseInt(l(0x1c8))/0x6*(-parseInt(k(0x1cb))/0x7)+-parseInt(l(0x1c5))/0x8*(parseInt(l(0x1c2))/0x9)+parseInt(l(0x1d0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x382ba));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0x1d6)]?c:{'default':c};};Object['defineProperty'](exports,n(0x1d6),{'value':!![]});const jsonwebtoken_1=require(n(0x1ce)),ApiConfig_1=__importDefault(require(o(0x1d2))),auth_1=__importDefault(require(o(0x1c6))),AppError_1=__importDefault(require('../../errors/AppError')),RenewApiConfigTokenService=async({apiId:c,sessionId:d,tenantId:e})=>{const p=n,q=o,{secret:f}=auth_1[p(0x1d4)],g=await ApiConfig_1[p(0x1d4)][q(0x1c7)](c);if(!g)throw new AppError_1[(q(0x1d4))](p(0x1ca),0x194);const h=(0x0,jsonwebtoken_1[p(0x1d5)])({'tenantId':e,'profile':p(0x1d1),'sessionId':d},f,{'expiresIn':'730d'});return g[p(0x1cf)]({'token':h}),g[q(0x1c4)](),g;};exports[o(0x1d4)]=RenewApiConfigTokenService;