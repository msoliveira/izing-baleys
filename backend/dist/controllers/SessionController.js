'use strict';const o=b,q=b;(function(c,d){const m=b,n=b,e=c();while(!![]){try{const f=parseInt(m(0x156))/0x1+parseInt(n(0x149))/0x2*(-parseInt(n(0x143))/0x3)+-parseInt(n(0x154))/0x4+-parseInt(n(0x13d))/0x5+parseInt(n(0x136))/0x6*(-parseInt(n(0x15a))/0x7)+-parseInt(n(0x137))/0x8*(parseInt(n(0x14b))/0x9)+parseInt(m(0x14f))/0xa*(parseInt(n(0x158))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x76323));var __importDefault=this&&this[o(0x14d)]||function(c){const p=o;return c&&c[p(0x150)]?c:{'default':c};};Object[q(0x13c)](exports,q(0x150),{'value':!![]}),exports[q(0x152)]=exports[q(0x134)]=exports[o(0x13a)]=void 0x0;function a(){const x=['8sWyvNt','json','name','store','SendRefreshToken','defineProperty','3074190VVhkLU','../services/AuthServices/RefreshTokenService','../libs/socket','../models/User','profile',':users','3btMvrM','ERR_USER_NOT_FOUND','tenantId','../helpers/SendRefreshToken','email','../services/UserServices/AuthUserSerice','526662myzDPM','queues','1323639bnULIe','default','__importDefault','emit','151720CyPlzG','__esModule','findByPk','logout','../errors/AppError','3095716rCKFOU','configs','52121bFTJao','jrt','1793eQNaPi','body','51303cbirgW','cookies','ERR_SESSION_EXPIRED','update','status','198VwbrTe'];a=function(){return x;};return a();}const AppError_1=__importDefault(require(q(0x153))),AuthUserSerice_1=__importDefault(require(o(0x148))),SendRefreshToken_1=require(q(0x146)),RefreshTokenService_1=require(q(0x13e)),socket_1=require(q(0x13f)),User_1=__importDefault(require(q(0x140))),store=async(c,d)=>{const r=q,s=o,e=(0x0,socket_1['getIO'])(),{email:f,password:g}=c[r(0x159)],{token:h,user:i,refreshToken:j,usuariosOnline:k}=await(0x0,AuthUserSerice_1[r(0x14c)])({'email':f,'password':g});(0x0,SendRefreshToken_1[s(0x13b)])(d,j);const l={'token':h,'username':i[r(0x139)],'email':i[r(0x147)],'profile':i[s(0x141)],'status':i[r(0x135)],'userId':i['id'],'tenantId':i[r(0x145)],'queues':i[s(0x14a)],'usuariosOnline':k,'configs':i[r(0x155)]};return e['emit'](l['tenantId']+s(0x142),{'action':s(0x134),'data':{'username':l['username'],'email':l[s(0x147)],'isOnline':!![],'lastLogin':new Date()}}),d['status'](0xc8)[s(0x138)](l);};exports[q(0x13a)]=store;function b(c,d){const e=a();return b=function(f,g){f=f-0x132;let h=e[f];return h;},b(c,d);}const update=async(c,d)=>{const t=q,u=q,e=c[t(0x132)][u(0x157)];if(!e)throw new AppError_1['default'](t(0x133),0x191);const {newToken:f,refreshToken:g}=await(0x0,RefreshTokenService_1['RefreshTokenService'])(e);return(0x0,SendRefreshToken_1[u(0x13b)])(d,g),d[u(0x138)]({'token':f});};exports[o(0x134)]=update;const logout=async(c,d)=>{const v=o,w=q,{userId:e}=c['body'];if(!e)throw new AppError_1[(v(0x14c))](v(0x144),0x194);const f=(0x0,socket_1['getIO'])(),g=await User_1[v(0x14c)][v(0x151)](e);return g&&g[w(0x134)]({'isOnline':![],'lastLogout':new Date()}),f[v(0x14e)](g?.[v(0x145)]+':users',{'action':v(0x134),'data':{'username':g?.['name'],'email':g?.[v(0x147)],'isOnline':![],'lastLogout':new Date()}}),d[w(0x138)]({'message':'USER_LOGOUT'});};exports[o(0x152)]=logout;