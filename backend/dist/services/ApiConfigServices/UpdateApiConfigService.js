'use strict';const p=b,q=b;(function(c,d){const n=b,o=b,e=c();while(!![]){try{const f=-parseInt(n(0x170))/0x1*(parseInt(n(0x178))/0x2)+parseInt(n(0x17e))/0x3+-parseInt(n(0x179))/0x4*(parseInt(n(0x177))/0x5)+parseInt(o(0x174))/0x6+-parseInt(o(0x17d))/0x7*(parseInt(o(0x173))/0x8)+-parseInt(n(0x16e))/0x9*(parseInt(n(0x171))/0xa)+-parseInt(n(0x176))/0xb*(-parseInt(n(0x17a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9b409));var __importDefault=this&&this[p(0x17c)]||function(c){return c&&c['__esModule']?c:{'default':c};};function a(){const t=['420190tJAoYG','update','40irrYSN','2852886ezvTor','default','11654533AHkfZt','5sYwXKF','206PhQLTf','2751384TcPpgc','24WsDUED','__esModule','__importDefault','312284XIhMyU','855390BnUpkE','225WabRap','ERR_API_CONFIG_NOT_FOUND','2741qxjzOw'];a=function(){return t;};return a();}Object['defineProperty'](exports,q(0x17b),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),ApiConfig_1=__importDefault(require('../../models/ApiConfig')),UpdateApiConfigService=async({apiData:c,apiId:d,tenantId:e})=>{const r=q,s=q,f=await ApiConfig_1[r(0x175)]['findOne']({'where':{'id':d,'tenantId':e}});if(!f)throw new AppError_1[(s(0x175))](r(0x16f),0x194);const {name:g,sessionId:h,urlServiceStatus:i,urlMessageStatus:j,userId:k,authToken:l,isActive:m}=c;return await f[s(0x172)]({'name':g,'sessionId':h,'urlServiceStatus':i,'urlMessageStatus':j,'userId':k,'authToken':l,'isActive':m}),await f['reload'](),f;};function b(c,d){const e=a();return b=function(f,g){f=f-0x16e;let h=e[f];return h;},b(c,d);}exports[p(0x175)]=UpdateApiConfigService;