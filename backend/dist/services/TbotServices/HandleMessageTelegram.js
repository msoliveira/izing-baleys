'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0xab;let h=e[f];return h;},b(c,d);}const q=b,r=b;(function(c,d){const n=b,o=b,e=c();while(!![]){try{const f=-parseInt(n(0xb8))/0x1*(parseInt(o(0xc4))/0x2)+-parseInt(n(0xb1))/0x3*(-parseInt(n(0xad))/0x4)+parseInt(o(0xb9))/0x5+parseInt(o(0xb6))/0x6+-parseInt(o(0xb4))/0x7*(parseInt(o(0xc1))/0x8)+-parseInt(n(0xb2))/0x9*(-parseInt(n(0xbc))/0xa)+-parseInt(n(0xb7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67cd0));var __importDefault=this&&this['__importDefault']||function(c){const p=b;return c&&c[p(0xc3)]?c:{'default':c};};Object['defineProperty'](exports,q(0xc3),{'value':!![]});function a(){const u=['1503890SlURcb','message','tenantId','2510dRtxtE','update','./TelegramVerifyContact','../WhatsappService/ShowWhatsAppService','telegram','4915032nuVHiB','../TicketServices/FindOrCreateTicketService','__esModule','612708rGhRKP','./TelegramVerifyMessage','timestamp','default','2347964vxkKrn','../WbotServices/helpers/VerifyBusinessHours','./TelegramVerifyMediaMessage','../ChatFlowServices/VerifyStepsChatFlowTicket','3mEqcwR','26253XXwswR','date','7cnjCjh','text','4078926zeozSC','10492416DtTlqu','1ETfbzO'];a=function(){return u;};return a();}const ShowWhatsAppService_1=__importDefault(require(q(0xbf))),TelegramVerifyContact_1=__importDefault(require(r(0xbe))),FindOrCreateTicketService_1=__importDefault(require(q(0xc2))),TelegramVerifyMediaMessage_1=__importDefault(require(q(0xaf))),TelegramVerifyMessage_1=__importDefault(require(q(0xc5))),VerifyBusinessHours_1=__importDefault(require(r(0xae))),VerifyStepsChatFlowTicket_1=__importDefault(require(r(0xb0))),HandleMessage=async(c,d)=>{const s=r,t=q,e=await(0x0,ShowWhatsAppService_1['default'])({'id':d['id']});let f,g={};f=c?.[s(0xba)],g=c?.[t(0xbd)];!f&&g&&(f=g?.['edited_message']);const h=f?.['chat'],i=await c['telegram']['getMe'](),j=i['id']===c[t(0xba)]?.['from']['id'],k={...f,'timestamp':+f[s(0xb3)]*0x3e8},l=await(0x0,TelegramVerifyContact_1[s(0xac)])(c,e[s(0xbb)]),m=await(0x0,FindOrCreateTicketService_1[s(0xac)])({'contact':l,'whatsappId':d['id'],'unreadMessages':j?0x0:0x1,'tenantId':e['tenantId'],'msg':{...k,'fromMe':j},'channel':s(0xc0)});if(m?.['isFarewellMessage'])return;!k?.[t(0xb5)]&&h?.['id']?await(0x0,TelegramVerifyMediaMessage_1[s(0xac)])(c,j,m,l):await(0x0,TelegramVerifyMessage_1[s(0xac)])(c,j,m,l),await(0x0,VerifyStepsChatFlowTicket_1[s(0xac)])({'fromMe':j,'body':f['text']||''},m),await(0x0,VerifyBusinessHours_1[s(0xac)])({'fromMe':j,'timestamp':k[t(0xab)]},m);};exports['default']=HandleMessage;