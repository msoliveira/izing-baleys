'use strict';function a(){const U=['../models/ApiConfig','3471395DOSzHg','logger','../models/ContactCustomField','../models/ContactTag','../models/StepsReply','../models/Campaign','default','../models/ContactWallet','../models/AutoReply','info','__importDefault','../config/database','writable','__esModule','../models/FastReply','../models/Group','155080zCrtnV','create','../models/CampaignContacts','../models/Whatsapp','127776UncwWL','../models/Contact','hasOwnProperty','../models/Ticket','DATABASE\x20DISCONNECT','afterDisconnect','../models/Queue','6181CdKJno','../models/Plan','call','../libs/Queue','../models/UserMessagesLog','../models/Baileys','3xYYbtT','15037182kJaNqq','../models/Tenant','../models/ReadMessageGroups','10968qVwHmv','1695885coLgfv','sequelize-typescript','VerifyOnlineUsers','../models/ChatFlow','../models/MessageOffLine','../models/User','prototype','../models/LogTicket','1491704SOXsye','Sequelize','add','../utils/logger','../models/Message','../models/AutoReplyLogs','addModels','../models/UsersQueues','../models/UsersGroups','__importStar'];a=function(){return U;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x12a;let h=e[f];return h;},b(c,d);}const I=b,L=b;(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=parseInt(G(0x14b))/0x1*(-parseInt(H(0x13a))/0x2)+-parseInt(H(0x150))/0x3+parseInt(H(0x158))/0x4+parseInt(H(0x12a))/0x5+-parseInt(H(0x13e))/0x6+parseInt(G(0x145))/0x7*(-parseInt(G(0x14f))/0x8)+parseInt(H(0x14c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xace67));var __createBinding=this&&this['__createBinding']||(Object[I(0x13b)]?function(c,d,e,f){const J=I,K=I;if(f===undefined)f=e;var g=Object['getOwnPropertyDescriptor'](d,e);(!g||('get'in g?!d[J(0x137)]:g[J(0x136)]||g['configurable']))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object['defineProperty'](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[L(0x13b)]?function(c,d){Object['defineProperty'](c,'default',{'enumerable':!![],'value':d});}:function(c,d){const M=I;c[M(0x130)]=d;}),__importStar=this&&this[L(0x161)]||function(c){const N=I,O=L;if(c&&c[N(0x137)])return c;var d={};if(c!=null){for(var e in c)if(e!==O(0x130)&&Object[N(0x156)][O(0x140)][N(0x147)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[I(0x134)]||function(c){const P=L;return c&&c[P(0x137)]?c:{'default':c};};Object['defineProperty'](exports,I(0x137),{'value':!![]});const sequelize_typescript_1=require(I(0x151)),User_1=__importDefault(require(I(0x155))),Setting_1=__importDefault(require('../models/Setting')),Contact_1=__importDefault(require(L(0x13f))),Ticket_1=__importDefault(require(L(0x141))),Whatsapp_1=__importDefault(require(I(0x13d))),ContactCustomField_1=__importDefault(require(L(0x12c))),Message_1=__importDefault(require(L(0x15c))),MessageOffLine_1=__importDefault(require(I(0x154))),AutoReply_1=__importDefault(require(I(0x132))),StepsReply_1=__importDefault(require(I(0x12e))),StepsReplyAction_1=__importDefault(require('../models/StepsReplyAction')),Queue_1=__importDefault(require(L(0x144))),UsersQueues_1=__importDefault(require(I(0x15f))),Tenant_1=__importDefault(require(I(0x14d))),AutoReplyLogs_1=__importDefault(require(L(0x15d))),UserMessagesLog_1=__importDefault(require(L(0x149))),FastReply_1=__importDefault(require(I(0x138))),Tag_1=__importDefault(require('../models/Tag')),ContactWallet_1=__importDefault(require(L(0x131))),ContactTag_1=__importDefault(require(L(0x12d))),Campaign_1=__importDefault(require(L(0x12f))),CampaignContacts_1=__importDefault(require(L(0x13c))),ApiConfig_1=__importDefault(require(L(0x162))),ApiMessage_1=__importDefault(require('../models/ApiMessage')),LogTicket_1=__importDefault(require(I(0x157))),ChatFlow_1=__importDefault(require(L(0x153))),QueueJobs=__importStar(require(I(0x148))),logger_1=require(L(0x15b)),InternalMessage_1=__importDefault(require('../models/InternalMessage')),Group_1=__importDefault(require(I(0x139))),UsersGroups_1=__importDefault(require(L(0x160))),ReadMessageGroups_1=__importDefault(require(I(0x14e))),Baileys_1=__importDefault(require(L(0x14a))),Plan_1=__importDefault(require(L(0x146))),dbConfig=require(I(0x135)),sequelize=new sequelize_typescript_1[(I(0x159))](dbConfig),models=[User_1['default'],Contact_1['default'],Ticket_1[L(0x130)],Message_1[I(0x130)],MessageOffLine_1[L(0x130)],Whatsapp_1[I(0x130)],ContactCustomField_1[I(0x130)],Setting_1[L(0x130)],AutoReply_1[L(0x130)],StepsReply_1[I(0x130)],StepsReplyAction_1[L(0x130)],Queue_1[L(0x130)],UsersQueues_1[I(0x130)],Tenant_1['default'],AutoReplyLogs_1['default'],UserMessagesLog_1[L(0x130)],FastReply_1[I(0x130)],Tag_1['default'],Baileys_1[I(0x130)],Plan_1[L(0x130)],ContactWallet_1[I(0x130)],ContactTag_1[L(0x130)],Campaign_1[I(0x130)],CampaignContacts_1[I(0x130)],ApiConfig_1[L(0x130)],ApiMessage_1['default'],LogTicket_1[I(0x130)],ChatFlow_1[I(0x130)],InternalMessage_1['default'],Group_1[I(0x130)],UsersGroups_1[L(0x130)],ReadMessageGroups_1['default']];sequelize[I(0x15e)](models),sequelize['afterConnect'](()=>{const Q=I,R=I;logger_1['logger'][Q(0x133)]('DATABASE\x20CONNECT'),QueueJobs[R(0x130)][R(0x15a)]('VerifyTicketsChatBotInactives',{}),QueueJobs[R(0x130)]['add']('SendMessageSchenduled',{}),QueueJobs['default'][R(0x15a)](Q(0x152),{});}),sequelize[I(0x143)](()=>{const S=L,T=L;logger_1[S(0x12b)]['info'](S(0x142));}),exports['default']=sequelize;