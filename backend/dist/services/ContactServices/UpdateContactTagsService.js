'use strict';const q=b,s=b;(function(c,d){const o=b,p=b,e=c();while(!![]){try{const f=-parseInt(o(0x11e))/0x1+parseInt(o(0x128))/0x2*(parseInt(p(0x124))/0x3)+-parseInt(o(0x120))/0x4*(parseInt(o(0x12b))/0x5)+parseInt(p(0x11c))/0x6*(-parseInt(o(0x129))/0x7)+-parseInt(o(0x12c))/0x8+-parseInt(p(0x125))/0x9*(parseInt(o(0x12a))/0xa)+parseInt(o(0x119))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x80d14));var __importDefault=this&&this[q(0x12f)]||function(c){const r=q;return c&&c[r(0x133)]?c:{'default':c};};Object[q(0x11a)](exports,q(0x133),{'value':!![]});function a(){const w=['12964SMSvyf','21pyzVXk','837690ZPgBnW','25qHbWrF','7539784QxbjER','email','default','__importDefault','tags','../../models/Contact','extraInfo','__esModule','../../models/ContactTag','profilePicUrl','33425843eiepbd','defineProperty','findOne','1717848VXEqxL','forEach','413198MVfveP','destroy','474116DSIEoK','ERR_NO_CONTACT_FOUND','push','number','486KXMgQM','81qSbZtV','name','wallets'];a=function(){return w;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x118;let h=e[f];return h;},b(c,d);}const AppError_1=__importDefault(require('../../errors/AppError')),Contact_1=__importDefault(require(s(0x131))),ContactTag_1=__importDefault(require(q(0x134))),UpdateContactService=async({tags:c,contactId:d,tenantId:e})=>{const t=q,u=s;await ContactTag_1[t(0x12e)][u(0x11f)]({'where':{'tenantId':e,'contactId':d}});const f=[];c[u(0x11d)](h=>{const v=t;f[v(0x122)]({'tagId':!h['id']?h:h['id'],'contactId':d,'tenantId':e});}),await ContactTag_1[t(0x12e)]['bulkCreate'](f);const g=await Contact_1[t(0x12e)][t(0x11b)]({'where':{'id':d,'tenantId':e},'attributes':['id',t(0x126),u(0x123),u(0x12d),u(0x118)],'include':[u(0x132),u(0x130),{'association':u(0x127),'attributes':['id',u(0x126)]}]});if(!g)throw new AppError_1[(t(0x12e))](u(0x121),0x194);return g;};exports[q(0x12e)]=UpdateContactService;