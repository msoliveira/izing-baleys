'use strict';const t=b,v=b;(function(c,d){const r=b,s=b,e=c();while(!![]){try{const f=parseInt(r(0x100))/0x1+-parseInt(r(0xdd))/0x2+-parseInt(r(0xef))/0x3*(-parseInt(s(0xd3))/0x4)+parseInt(r(0x105))/0x5+parseInt(r(0xee))/0x6+parseInt(s(0xfd))/0x7+-parseInt(s(0xe6))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe88e4));var __importDefault=this&&this[t(0xd9)]||function(c){const u=t;return c&&c[u(0xf7)]?c:{'default':c};};Object[t(0xe9)](exports,v(0xf7),{'value':!![]});function a(){const A=['promisify','pGNuO','-appMessage','writeFile','logger','join','-notification','body','24320464peoQWP','../../models/MessageOffLine','../../utils/logger','defineProperty','create','getIO','status','path','9565548vZXozs','3151518tenViS','indexOf','map','error','../../models/Message','ticket','EvJrU','update','__esModule','contactId','ticketId','filename','getTime','util','4286002NckshA','findByPk','emit','1372131BQWaYZ','toString','ERR_CREATING_MESSAGE','base64','../../libs/socket','3272960Bheocd','wuwSW','chat','fromMe','4zGrylX','mimetype','contact','substr','buffer','default','__importDefault','CreateMessageOffLineService','split','quotedMsg','2582334bOrNHA'];a=function(){return A;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0xd1;let h=e[f];return h;},b(c,d);}const fs_1=require('fs'),util_1=require(t(0xfc)),path_1=require(t(0xed)),logger_1=require(t(0xe8)),MessageOffLine_1=__importDefault(require(v(0xe7))),socket_1=require(t(0x104)),Ticket_1=__importDefault(require('../../models/Ticket')),Message_1=__importDefault(require(t(0xf3))),writeFileAsync=(0x0,util_1[t(0xde)])(fs_1[t(0xe1)]),CreateMessageOffilineService=async({msg:c,tenantId:d,medias:e,ticket:f,userId:g})=>{const w=t,x=t,h=(0x0,socket_1[w(0xeb)])(),i={'wId':undefined,'ticketId':f['id'],'body':c[w(0xe5)],'contactId':f[x(0xf8)],'fromMe':c[x(0xd2)],'read':!![],'mediaType':w(0xd1),'mediaUrl':undefined,'timestamp':undefined,'userId':g};try{if(w(0x106)!=='wuwSW')throw new d(w(0x102));else{if(e){if(w(0xf5)===x(0xf5))await Promise['all'](e[x(0xf1)](async k=>{const y=x,z=x;try{if(y(0xdf)==='pGNuO'){if(!k['filename']){const o=k[y(0xd4)]['split']('/')[0x1][y(0xdb)](';')[0x0];k[z(0xfa)]=new Date()[z(0xfb)]()+'.'+o;}await writeFileAsync((0x0,path_1[z(0xe3)])(__dirname,'..','..','..','..','public',k[y(0xfa)]),k[y(0xd7)],z(0x103));}else{const q=f[y(0xd4)][z(0xdb)]('/')[0x1][y(0xdb)](';')[0x0];g['filename']=new h()[y(0xfb)]()+'.'+q;}}catch(q){logger_1[z(0xe2)][y(0xf2)](q);}const l={...i,'mediaUrl':k[y(0xfa)],'mediaType':k[z(0xd4)][z(0xd6)](0x0,k['mimetype'][z(0xf0)]('/'))},m=await MessageOffLine_1[z(0xd8)][z(0xea)](l),n=await MessageOffLine_1[y(0xd8)][z(0xfe)](m['id'],{'include':[y(0xd5),{'model':Ticket_1[y(0xd8)],'as':'ticket','where':{'tenantId':d},'include':['contact']},{'model':Message_1[z(0xd8)],'as':y(0xdc),'include':[z(0xd5)]}]});if(!n)throw new Error('ERR_CREATING_MESSAGE');h['to'](d+'-'+n[y(0xf9)][y(0x101)]())['to'](d+'-'+n['ticket']['status'])['to'](d+z(0xe4))[y(0xff)](d+z(0xe0),{'action':z(0xea),'message':n,'ticket':n['ticket'],'contact':n[y(0xf4)]['contact']}),await f[y(0xf6)]({'lastMessage':n[y(0xe5)],'lastMessageAt':new Date()[y(0xfb)]()});}));else throw new d(x(0x102));}else{const l=await MessageOffLine_1[x(0xd8)][x(0xea)]({...i,'mediaType':x(0xd1)}),m=await MessageOffLine_1[x(0xd8)][x(0xfe)](l['id'],{'include':[w(0xd5),{'model':Ticket_1['default'],'as':w(0xf4),'where':{'tenantId':d},'include':['contact']},{'model':Message_1[x(0xd8)],'as':w(0xdc),'include':[w(0xd5)]}]});if(!m)throw new Error('ERR_CREATING_MESSAGE');await f['update']({'lastMessage':m[x(0xe5)],'lastMessageAt':new Date()['getTime']()}),h['to'](d+'-'+m[x(0xf9)][w(0x101)]())['to'](d+'-'+m[w(0xf4)][w(0xec)])['to'](d+w(0xe4))[w(0xff)](d+w(0xe0),{'action':'create','message':m,'ticket':m['ticket'],'contact':m[x(0xf4)][x(0xd5)]});}}}catch(n){logger_1['logger'][w(0xf2)](w(0xda),n);}};exports[v(0xd8)]=CreateMessageOffilineService;