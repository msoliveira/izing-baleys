'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x118))/0x1*(-parseInt(k(0x120))/0x2)+parseInt(l(0x124))/0x3*(parseInt(l(0x126))/0x4)+parseInt(k(0x129))/0x5*(-parseInt(k(0x121))/0x6)+parseInt(l(0x11f))/0x7+-parseInt(l(0x11c))/0x8*(parseInt(l(0x11b))/0x9)+parseInt(l(0x116))/0xa+parseInt(l(0x128))/0xb*(parseInt(k(0x11e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4eff6));var __importDefault=this&&this[m(0x11d)]||function(c){const n=m;return c&&c[n(0x117)]?c:{'default':c};};Object[o(0x119)](exports,o(0x117),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0x115;let h=e[f];return h;},b(c,d);}function a(){const r=['2201178lJakZn','4EKAVNl','6sNJGaT','\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','\x0a\x20\x20select\x20label,\x20qtd,\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20\x20from\x20(\x0a\x20\x20select\x0a\x20\x20t.channel\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20where\x20t.\x22tenantId\x22\x20=\x20:tenantId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.channel\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','275874uEwsEr','SELECT','4zAzVUh','query','2286922sbixqt','1192495oFzhLI','../../database','admin','3414150JXpLNZ','__esModule','117970LUCzQM','defineProperty','default','118287OyqSkv','96jQWhmp','__importDefault','12TayCAp'];a=function(){return r;};return a();}const sequelize_1=require('sequelize'),database_1=__importDefault(require(o(0x12a))),queryAdmin=m(0x122),query=o(0x123),DashTicketsChannels=async({startDate:c,endDate:d,tenantId:e,userId:f,userProfile:g})=>{const p=o,q=m,h=await database_1[p(0x11a)][q(0x127)](g==q(0x115)?queryAdmin:query,{'replacements':{'tenantId':e,'startDate':c,'endDate':d,'userId':f},'type':sequelize_1['QueryTypes'][p(0x125)]});return h;};exports[m(0x11a)]=DashTicketsChannels;