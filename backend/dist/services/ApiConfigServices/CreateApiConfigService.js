'use strict';const o=b,q=b;(function(c,d){const m=b,n=b,e=c();while(!![]){try{const f=-parseInt(m(0x1aa))/0x1+-parseInt(n(0x1b2))/0x2*(-parseInt(m(0x1ad))/0x3)+parseInt(n(0x1b3))/0x4*(parseInt(m(0x1b4))/0x5)+parseInt(n(0x1b5))/0x6+parseInt(n(0x1b0))/0x7+-parseInt(m(0x1ac))/0x8+parseInt(n(0x1ae))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8ba99));var __importDefault=this&&this[o(0x1a9)]||function(c){const p=o;return c&&c[p(0x1a8)]?c:{'default':c};};function a(){const t=['sign','8555848DLZvEo','903GTqDyO','6440292omvbBd','defineProperty','4033141SnMtOR','../../config/auth','1994fNAnWu','2584llmQDM','5695SpEzjE','18756ewAJng','730d','__esModule','__importDefault','689230TKwoIx'];a=function(){return t;};return a();}Object[o(0x1af)](exports,o(0x1a8),{'value':!![]});const jsonwebtoken_1=require('jsonwebtoken'),ApiConfig_1=__importDefault(require('../../models/ApiConfig')),auth_1=__importDefault(require(q(0x1b1))),CreateApiConfigService=async({name:c,sessionId:d,urlServiceStatus:e,urlMessageStatus:f,userId:g,authToken:h,tenantId:i})=>{const r=q,s=o,{secret:j}=auth_1['default'],k=(0x0,jsonwebtoken_1[r(0x1ab)])({'tenantId':i,'profile':'admin','sessionId':d},j,{'expiresIn':r(0x1a7)}),l=await ApiConfig_1['default']['create']({'name':c,'sessionId':d,'token':k,'authToken':h,'urlServiceStatus':e,'urlMessageStatus':f,'userId':g,'tenantId':i});return l;};function b(c,d){const e=a();return b=function(f,g){f=f-0x1a7;let h=e[f];return h;},b(c,d);}exports['default']=CreateApiConfigService;