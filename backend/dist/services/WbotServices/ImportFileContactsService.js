'use strict';const B=b,D=b;(function(c,d){const z=b,A=b,e=c();while(!![]){try{const f=-parseInt(z(0x7a))/0x1*(parseInt(A(0x77))/0x2)+-parseInt(A(0x9b))/0x3*(parseInt(z(0x70))/0x4)+parseInt(A(0x78))/0x5+-parseInt(A(0x75))/0x6*(-parseInt(A(0xa7))/0x7)+parseInt(A(0x99))/0x8*(-parseInt(A(0xa1))/0x9)+parseInt(z(0x73))/0xa*(parseInt(A(0x85))/0xb)+-parseInt(z(0x86))/0xc*(-parseInt(z(0x83))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa03ca));var __importDefault=this&&this[B(0xaa)]||function(c){const C=B;return c&&c[C(0x9a)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x6e;let h=e[f];return h;},b(c,d);}Object['defineProperty'](exports,D(0x9a),{'value':!![]}),exports[D(0x88)]=void 0x0;const lodash_1=require('lodash'),xlsx_1=__importDefault(require(D(0x9c))),Contact_1=__importDefault(require(B(0xa2))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),AppError_1=__importDefault(require(D(0x91))),wbot_baileys_1=require(B(0x6e));async function ImportFileContactsService(c,d,e,f){const E=B,F=B,g=xlsx_1[E(0x87)]['readFile'](d?.[F(0x95)]),h=(0x0,lodash_1[E(0x80)])(Object[E(0x93)](g[F(0x6f)])),i=xlsx_1[E(0x87)][F(0x8e)][F(0xa8)](h,{'header':0x0}),j=[];i[E(0x9e)](l=>{const G=F,H=F;if(G(0x89)!==H(0x89))throw new d[(H(0x87))](G(0x71),0x194);else{let n='',o='',p='';((0x0,lodash_1[H(0x8f)])(l,H(0xb0))||(0x0,lodash_1[G(0x8f)])(l,'Nome'))&&(n=l[G(0xb0)]||l[H(0x7f)]),((0x0,lodash_1[G(0x8f)])(l,H(0x92))||(0x0,lodash_1[G(0x8f)])(l,H(0xa6))||(0x0,lodash_1[G(0x8f)])(l,H(0x9d))||(0x0,lodash_1['has'])(l,G(0x72)))&&(o=l[G(0x92)]||l['número']||l[G(0x9d)]||l[H(0x72)],o=(''+o)[G(0xa9)](/\D/g,'')),((0x0,lodash_1[H(0x8f)])(l,H(0x94))||(0x0,lodash_1[H(0x8f)])(l,H(0xae))||(0x0,lodash_1['has'])(l,G(0x97))||(0x0,lodash_1[H(0x8f)])(l,H(0x90)))&&(G(0x82)!==H(0xac)?p=l[G(0x94)]||l[H(0xae)]||l[H(0x97)]||l[G(0x90)]:(j=k['numero']||l[H(0xa6)]||m['Numero']||n['Número'],o=(''+p)[G(0xa9)](/\D/g,''))),n=n||o,n&&o&&o[H(0x81)]>=0xa&&(G(0x8b)!==H(0xa0)?j[G(0x7d)]({'name':n,'number':o,'email':p,'tenantId':c}):e['push'](f));}});const k=[];for(const l of j){if(F(0xab)===E(0xab))try{l[F(0x76)]=l[F(0x76)][F(0xa9)]('-','')[E(0xa9)]('\x20','')[F(0xa9)]('(','')[E(0xa9)](')','');const m=await Whatsapp_1['default'][F(0x74)]({'where':{'status':F(0xad),'tenantId':c,'type':F(0x8d)}});if(!m){if('AqIkX'!=='AqIkX')return g&&h[F(0x9a)]?i:{'default':j};else throw new AppError_1[(F(0x87))](F(0x71),0x194);}const n=(0x0,wbot_baileys_1[E(0x84)])(m['id']),o=l[F(0x76)]+F(0x8c),p=await n[F(0x7c)](o);if(p[0x0][F(0x96)]==![]){if(F(0xa3)!==F(0x9f))throw new AppError_1[(E(0x87))](F(0x98),0x194);else h=i['email']||j['e-mail']||k[E(0x97)]||l[E(0x90)];}l['number']=p[0x0][F(0xa5)][E(0xaf)]('@')[0x0];const [q,r]=await Contact_1[F(0x87)][F(0x8a)]({'where':{'number':l[F(0x76)],'tenantId':l['tenantId']},'defaults':l}),s=q;r&&(E(0xb2)===E(0xb2)?k[E(0x7d)](q):h[F(0x7d)]({'name':i,'number':j,'email':k,'tenantId':l})),e?.[F(0x81)]&&await s[F(0x7e)](e,{'through':{'tenantId':c}}),f?.[E(0x81)]&&await s[E(0x79)](f,{'through':{'tenantId':c}});}catch(w){'dsELY'===E(0xa4)?console[F(0x7b)](F(0xb1)+l['number']):f=g['nome']||h[E(0x7f)];}else throw new d[(E(0x87))](F(0x98),0x194);}return k;}function a(){const I=['forEach','hCZRK','mDjQg','2097iJMYNM','../../models/Contact','NjXLq','dsELY','jid','número','7004914wToZsJ','sheet_to_json','replace','__importDefault','YTtjW','zNWXh','CONNECTED','e-mail','split','nome','Número\x20não\x20é\x20uma\x20conta\x20válida\x20','qWiwE','../../libs/wbot-baileys','Sheets','496HYwXCE','NOT_FOUND_WHATSAPP_CONNECTED','Número','10VHLXrv','findOne','6UmAxjC','number','752642pgfHiz','3233840ydUsRn','setWallets','2JuppKd','error','onWhatsApp','push','setTags','Nome','head','length','fbmuU','26AVFIYC','getWbot','3120029ETzfPU','1810752cyvHom','default','ImportFileContactsService','AqXgn','findOrCreate','lVNBe','@$s.whatsapp.net','whatsapp','utils','has','E-mail','../../errors/AppError','numero','values','email','path','exists','Email','CONTACT_NOT_FOUND','424fjHlgK','__esModule','19635ondoVY','xlsx','Numero'];a=function(){return I;};return a();}exports[B(0x88)]=ImportFileContactsService;