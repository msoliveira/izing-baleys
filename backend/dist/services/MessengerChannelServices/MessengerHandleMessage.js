'use strict';function a(){const C=['message','defineProperty','timestamp','./MessengerMarkRead','./MessengerShowChannel','shift','4512702HQurEv','dErdd','__importDefault','../../libs/messengerBot','location','bLryB','messenger','isFarewellMessage','../../utils/logger','length','tenantId','7MYXqag','object','fallback','1701144Aforvm','32030KBcnPH','487944yNdsTG','entry','./MessengerVerifyMediaMessage','default','type','image','2783095pvnGBK','page','sender','Tshmd','file','text','./MessengerVerifyMessage','audio','EnhHD','getMessengerBot','../TicketServices/FindOrCreateTicketService','logger','5drbiCN','6282heBtIL','messaging','__esModule','13499680WYMkgX','XwOvR','43726UfVCrY','efPRU','video','roIRh','read','./MessengerVerifyContact'];a=function(){return C;};return a();}const v=b,w=b;(function(c,d){const t=b,u=b,e=c();while(!![]){try{const f=-parseInt(t(0xf5))/0x1*(-parseInt(t(0xfb))/0x2)+parseInt(t(0x107))/0x3+parseInt(t(0x115))/0x4+-parseInt(u(0x11d))/0x5+-parseInt(u(0x117))/0x6+-parseInt(u(0x112))/0x7*(-parseInt(u(0xf9))/0x8)+parseInt(t(0xf6))/0x9*(-parseInt(u(0x116))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd02b2));var __importDefault=this&&this[v(0x109)]||function(c){return c&&c['__esModule']?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0xf0;let h=e[f];return h;},b(c,d);}Object[v(0x102)](exports,w(0xf8),{'value':!![]});const logger_1=require(v(0x10f)),FindOrCreateTicketService_1=__importDefault(require(w(0xf3))),messengerBot_1=require(v(0x10a)),MessengerVerifyContact_1=__importDefault(require(w(0x100))),MessengerVerifyMessage_1=__importDefault(require(v(0x123))),MessengerVerifyMediaMessage_1=__importDefault(require(v(0x119))),VerifyStepsChatFlowTicket_1=__importDefault(require('../ChatFlowServices/VerifyStepsChatFlowTicket')),MessengerMarkRead_1=__importDefault(require(v(0x104))),MessengerShowChannel_1=__importDefault(require(w(0x105))),VerifyBusinessHours_1=__importDefault(require('../WbotServices/helpers/VerifyBusinessHours')),getMessageType=c=>{const x=v,y=w,{attachments:d}=c,e=d&&d[x(0x110)]>0x0;if(c[y(0x122)]&&!e)return'text';if(e&&d[0x0][y(0x11b)]===x(0x11c))return y(0x11c);if(e&&d[0x0][y(0x11b)]===y(0xf0))return y(0xf0);if(e&&d[0x0][x(0x11b)]===x(0xfd))return x(0xfd);if(e&&d[0x0][y(0x11b)]==='location')return'location';if(e&&d[0x0]['type']===y(0x121))return y(0x121);if(e&&d[0x0][y(0x11b)]==='fallback')return x(0x114);},MessengerHandleMessage=async c=>{return new Promise((d,e)=>{const z=b;'EnhHD'===z(0xf1)?((async()=>{const A=z,B=z;let f,g;const h=0x1;try{if('ygsDB'===A(0x120)){(0x0,f[A(0x11a)])(g,h['tenantId']);return;}else{if(c[A(0x113)]!==A(0x11e))return;const j=c[A(0x118)]['shift'](),k=j?.[B(0xf7)][A(0x106)]();f=await(0x0,MessengerShowChannel_1[A(0x11a)])({'fbPageId':j['id']});if(!f)return;const l=await(0x0,messengerBot_1[B(0xf2)])(f['id']);if(!k?.[A(0x101)]&&k[A(0xff)]){(0x0,MessengerMarkRead_1['default'])(k,f[A(0x111)]);return;}g=await(0x0,MessengerVerifyContact_1['default'])(k[A(0x11f)],l,f[A(0x111)]);const m={...k,'type':getMessageType(k[B(0x101)]),'fromMe':![],'body':k?.[A(0x101)]?.[B(0x122)]||'','timestamp':k[B(0x103)],'message_id':k[A(0x101)]['mid']},n=await(0x0,FindOrCreateTicketService_1[B(0x11a)])({'contact':g,'whatsappId':f['id'],'unreadMessages':h,'tenantId':f[A(0x111)],'msg':m,'channel':B(0x10d)});if(n?.['isCampaignMessage']){if(B(0x108)!==A(0x108))return g&&h[A(0xf8)]?i:{'default':j};else{d();return;}}if(n?.[B(0x10e)]){if(B(0xfa)===B(0xfa)){d();return;}else{d();return;}}if(m[A(0x11b)]!==B(0x122)){if(B(0xfe)===A(0xfe))await(0x0,MessengerVerifyMediaMessage_1[B(0x11a)])(f,m,n,g);else{const {attachments:r}=e,s=r&&r[B(0x110)]>0x0;if(f['text']&&!s)return B(0x122);if(s&&r[0x0][A(0x11b)]===A(0x11c))return B(0x11c);if(s&&r[0x0][B(0x11b)]===A(0xf0))return A(0xf0);if(s&&r[0x0]['type']===B(0xfd))return A(0xfd);if(s&&r[0x0]['type']===A(0x10b))return A(0x10b);if(s&&r[0x0][A(0x11b)]===A(0x121))return B(0x121);if(s&&r[0x0][B(0x11b)]===A(0x114))return B(0x114);}}else await(0x0,MessengerVerifyMessage_1['default'])(m,n,g);await(0x0,VerifyStepsChatFlowTicket_1[B(0x11a)])(m,n),await(0x0,VerifyBusinessHours_1[B(0x11a)])(m,n),d();}}catch(r){if(B(0x10c)===B(0xfc)){d();return;}else logger_1[A(0xf4)]['error'](r),e(r);}})()):(g['logger']['error'](h),i(j));});};exports[w(0x11a)]=MessengerHandleMessage;