'use strict';const t=b,u=b;(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=-parseInt(q(0xaa))/0x1+-parseInt(q(0xba))/0x2*(parseInt(q(0xbc))/0x3)+parseInt(q(0xaf))/0x4*(parseInt(r(0xab))/0x5)+parseInt(q(0xb3))/0x6*(parseInt(r(0xae))/0x7)+parseInt(r(0xac))/0x8+-parseInt(r(0xb0))/0x9+parseInt(q(0xb6))/0xa*(parseInt(r(0xb8))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xad8cf));function b(c,d){const e=a();return b=function(f,g){f=f-0xaa;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this['__importDefault']||function(c){const s=b;return c&&c[s(0xad)]?c:{'default':c};};Object[t(0xb4)](exports,'__esModule',{'value':!![]});function a(){const x=['55QhgkOS','update','515836YTWGiP','findOne','3GmverV','default','1026184LJKHeZ','3616895yTYWqW','2833064aQqqcn','__esModule','3878NGOHUe','4mNhJBy','360972mDhIHY','create','../../models/ApiMessage','9744OtKtMp','defineProperty','ERR_CREATING_MESSAGE','115730uBIPWc','reload'];a=function(){return x;};return a();}const ApiMessage_1=__importDefault(require(u(0xb2))),UpsertMessageAPIService=async({sessionId:c,messageId:d,body:e,ack:f,number:g,mediaName:h,mediaUrl:i,timestamp:j,externalKey:k,messageWA:l,apiConfig:m,tenantId:n})=>{const v=u,w=t;let o;const p=await ApiMessage_1['default'][v(0xbb)]({'where':{'messageId':d,'tenantId':n}});p?(await p[w(0xb9)]({'sessionId':c,'messageId':d,'body':e,'ack':f,'number':g,'mediaName':h,'mediaUrl':i,'timestamp':j,'externalKey':k,'messageWA':l,'apiConfig':m,'tenantId':n}),o=await p[w(0xb7)]()):o=await ApiMessage_1[w(0xbd)][v(0xb1)]({'sessionId':c,'messageId':d,'body':e,'ack':f,'number':g,'mediaName':h,'mediaUrl':i,'timestamp':j,'externalKey':k,'messageWA':l,'apiConfig':m,'tenantId':n});if(!o)throw new Error(w(0xb5));return o;};exports[t(0xbd)]=UpsertMessageAPIService;