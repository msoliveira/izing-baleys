'use strict';function a(){const S=['__createBinding','reload','profile','validate','2323778xTwgXx','KDnMT','4806402zzVQCW','wCzXs','configurable','../../models/User','email','__setModuleDefault','min','4690365GtexLB','__importDefault','mlSgn','create','tenantId','name','call','writable','ERR_NO_USER_FOUND','hasOwnProperty','string','default','__esModule','defineProperty','5959556YqLXCG','update','get','__importStar','8bFWEUP','9573636sWmazP','qoRat','7532bNHWmq','NrvAO','32561004yhopnX'];a=function(){return S;};return a();}const I=b,J=b;(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=parseInt(G(0x150))/0x1+-parseInt(H(0x157))/0x2+-parseInt(H(0x159))/0x3+parseInt(G(0x149))/0x4+-parseInt(G(0x160))/0x5+-parseInt(H(0x14e))/0x6+parseInt(H(0x152))/0x7*(parseInt(H(0x14d))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcfd5b));function b(c,d){const e=a();return b=function(f,g){f=f-0x146;let h=e[f];return h;},b(c,d);}var __createBinding=this&&this[I(0x153)]||(Object[J(0x163)]?function(c,d,e,f){const K=I,L=J;if(f===undefined)f=e;var g=Object['getOwnPropertyDescriptor'](d,e);(!g||(K(0x14b)in g?!d[K(0x147)]:g[L(0x167)]||g[K(0x15b)]))&&(L(0x151)===K(0x14f)?f[K(0x148)](g,'default',{'enumerable':!![],'value':h}):g={'enumerable':!![],'get':function(){return d[e];}}),Object[L(0x148)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[I(0x15e)]||(Object[I(0x163)]?function(c,d){const M=I;Object[M(0x148)](c,'default',{'enumerable':!![],'value':d});}:function(c,d){c['default']=d;}),__importStar=this&&this[J(0x14c)]||function(c){const N=J,O=I;if(c&&c[N(0x147)])return c;var d={};if(c!=null){for(var e in c)if(e!==O(0x146)&&Object['prototype']['hasOwnProperty'][N(0x166)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[I(0x161)]||function(c){const P=I;return c&&c[P(0x147)]?c:{'default':c};};Object[J(0x148)](exports,'__esModule',{'value':!![]});const Yup=__importStar(require('yup')),AppError_1=__importDefault(require('../../errors/AppError')),User_1=__importDefault(require(I(0x15c))),AdminUpdateUserService=async({userData:c,userId:d})=>{const Q=I,R=I,e=await User_1['default']['findOne']({'where':{'id':d},'attributes':[Q(0x165),'id','tenantId','email',Q(0x155)]});if(!e){if(R(0x158)===R(0x15a)){if(p===q)r=s;var m=t['getOwnPropertyDescriptor'](u,v);(!m||(Q(0x14b)in m?!w[Q(0x147)]:m[R(0x167)]||m[R(0x15b)]))&&(m={'enumerable':!![],'get':function(){return m[F];}}),z[Q(0x148)](A,B,m);}else throw new AppError_1[(Q(0x146))](R(0x168),0x194);}const f=Yup['object']()['shape']({'name':Yup[R(0x16a)]()[R(0x15f)](0x2),'email':Yup['string']()[Q(0x15d)](),'profile':Yup[R(0x16a)](),'password':Yup['string']()}),{email:g,password:h,profile:i,name:j}=c;try{await f[Q(0x156)]({'email':g,'password':h,'profile':i,'name':j});}catch(m){if('lTfNK'!==Q(0x162))throw new AppError_1[(Q(0x146))](m?.['message']);else{if(n&&o[R(0x147)])return p;var o={};if(q!=null){for(var p in r)if(p!==Q(0x146)&&s['prototype'][R(0x169)]['call'](t,p))u(o,v,p);}return w(o,x),o;}}await e[Q(0x14a)]({'email':g,'password':h,'profile':i,'name':j}),await e[R(0x154)]({'attributes':['id',Q(0x165),Q(0x15d),Q(0x155),Q(0x164)]});const k={'id':e['id'],'name':e[R(0x165)],'email':e['email'],'profile':e[R(0x155)],'tenantId':e[Q(0x164)]};return k;};exports[J(0x146)]=AdminUpdateUserService;