'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0xe8;let h=e[f];return h;},b(c,d);}function a(){const r=['20BMBOKY','__esModule','\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','3730587FlkVZQ','8016491bWufZB','6926760OTxmRi','admin','QueryTypes','../../database','default','2gSVgUJ','sequelize','194003arAvcO','14541885cBFbYB','3604200MHPmNY','1305768oJJWZh','query'];a=function(){return r;};return a();}const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0xf2))/0x1*(parseInt(l(0xf0))/0x2)+parseInt(k(0xe9))/0x3+parseInt(k(0xf5))/0x4*(parseInt(k(0xf7))/0x5)+-parseInt(l(0xeb))/0x6+parseInt(k(0xea))/0x7+-parseInt(l(0xf4))/0x8+-parseInt(k(0xf3))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa3073));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0xf8)]?c:{'default':c};};Object['defineProperty'](exports,n(0xf8),{'value':!![]});const sequelize_1=require(n(0xf1)),database_1=__importDefault(require(n(0xee))),query='\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22tenantId\x22\x20=\x20:tenantId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a',queryAdmin=o(0xe8),DashTicketsQueue=async({startDate:c,endDate:d,tenantId:e,userId:f,userProfile:g})=>{const p=n,q=o,h=await database_1['default'][p(0xf6)](g==q(0xec)?queryAdmin:query,{'replacements':{'tenantId':e,'startDate':c,'endDate':d,'userId':f},'type':sequelize_1[q(0xed)]['SELECT']});return h;};exports[n(0xef)]=DashTicketsQueue;