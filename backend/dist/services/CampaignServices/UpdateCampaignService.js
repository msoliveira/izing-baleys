'use strict';const F=b,H=b;(function(c,d){const D=b,E=b,e=c();while(!![]){try{const f=parseInt(D(0x16f))/0x1+parseInt(E(0x16b))/0x2+-parseInt(D(0x165))/0x3*(-parseInt(E(0x170))/0x4)+parseInt(D(0x181))/0x5+parseInt(D(0x167))/0x6*(-parseInt(E(0x177))/0x7)+-parseInt(E(0x183))/0x8*(parseInt(D(0x166))/0x9)+-parseInt(D(0x164))/0xa*(parseInt(D(0x180))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd9b44));function b(c,d){const e=a();return b=function(f,g){f=f-0x159;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[F(0x174)]||function(c){const G=F;return c&&c[G(0x16a)]?c:{'default':c};};function a(){const M=['BqOgi','split','7PRslze','pending','findOne','mimetype','viueZ','indexOf','length','ERR_NO_UPDATE_CAMPAIGN_NOT_IN_CANCELED_PENDING','canceled','3805714laFEty','5032495hBwGjZ','reload','395528MHWrMM','error','logger','../../models/Campaign','VpWnt','all','update','default','null','getTime','nCqMH','mediaUrl','30XDxMWS','715470uFvOiu','198wfBfCQ','9038010ywgIaI','status','filename','__esModule','2605466QIeMlu','zyEnp','ERR_NO_CAMPAIGN_FOUND','start','1260483LEUMpM','16DHAbdB','map','../../errors/AppError','JUQWc','__importDefault'];a=function(){return M;};return a();}Object['defineProperty'](exports,H(0x16a),{'value':!![]});const AppError_1=__importDefault(require(H(0x172))),Campaign_1=__importDefault(require(H(0x15b))),logger_1=require('../../utils/logger'),cArquivoName=c=>{if(!c)return'';const d=c['split']('/'),e=d[d['length']-0x1];return e;},UpdateCampaignService=async({campaignData:c,medias:d,campaignId:e,tenantId:f})=>{const I=H,J=F;let g,h={...c,'mediaUrl':cArquivoName(c[I(0x163)]),'start':c[J(0x16e)]};const i=await Campaign_1[I(0x15f)][I(0x179)]({'where':{'id':e,'tenantId':f}});if(i?.[J(0x168)]!==J(0x178)&&i?.[I(0x168)]!==J(0x17f))throw new AppError_1['default'](J(0x17e),0x194);if(d&&Array['isArray'](d)&&d[J(0x17d)]){if('VpWnt'!==J(0x15c))return g&&h['__esModule']?i:{'default':j};else await Promise[I(0x15d)](d[I(0x171)](async k=>{const K=J,L=J;try{if(K(0x17b)!==K(0x175)){if(!k['filename']){if(L(0x16c)==='zyEnp'){const l=k[L(0x17a)]['split']('/')[0x1][L(0x176)](';')[0x0];k[K(0x169)]=new Date()[K(0x161)]()+'.'+l;}else{if(!e)return'';const n=f[L(0x176)]('/'),o=n[n[K(0x17d)]-0x1];return o;}}g=k;}else e[K(0x15a)][K(0x159)](f);}catch(o){logger_1[L(0x15a)]['error'](o);}})),h={...c,'mediaUrl':g?.[J(0x169)],'mediaType':g?.[I(0x17a)]['substr'](0x0,g['mimetype'][J(0x17c)]('/'))};}else c[J(0x163)]===I(0x160)&&('dtVQa'!=='dtVQa'?e={...f,'mediaUrl':'','mediaType':''}:h={...c,'mediaUrl':'','mediaType':''});if(!i){if(I(0x162)===J(0x173))throw new d[(J(0x15f))]('ERR_NO_UPDATE_CAMPAIGN_NOT_IN_CANCELED_PENDING',0x194);else throw new AppError_1['default'](J(0x16d),0x194);}return await i[I(0x15e)](h),await i[J(0x182)](),i;};exports[F(0x15f)]=UpdateCampaignService;