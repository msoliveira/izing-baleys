'use strict';const H=b,I=b;(function(c,d){const F=b,G=b,e=c();while(!![]){try{const f=-parseInt(F(0x9b))/0x1*(parseInt(G(0x92))/0x2)+-parseInt(G(0x91))/0x3*(parseInt(F(0x98))/0x4)+-parseInt(G(0x9d))/0x5*(parseInt(F(0xa5))/0x6)+-parseInt(F(0xae))/0x7+parseInt(G(0xbc))/0x8+parseInt(F(0x97))/0x9*(-parseInt(G(0x9e))/0xa)+-parseInt(F(0x94))/0xb*(-parseInt(G(0xa2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2d76f));function b(c,d){const e=a();return b=function(f,g){f=f-0x91;let h=e[f];return h;},b(c,d);}Object[H(0x96)](exports,'__esModule',{'value':!![]}),exports[H(0xad)]=exports[I(0x9a)]=exports[I(0xa6)]=exports[H(0xa1)]=void 0x0;function a(){const V=['&#39;','pupa','1422155ncolyF','qMFog','Expected\x20a\x20`string`\x20in\x20the\x20first\x20argument,\x20got\x20`','Missing\x20a\x20value\x20for\x20','vuebd','&gt;','&quot;','name','object','YaCLy','rIiQn','Boa\x20Noite!','split','getHours','1286608tZStOk','replace','3xuvmAa','2uvsuNX','key','77VqOrgY','toazr','defineProperty','45ExVeAU','1141072qiKZpT','Olá!','MissingValueError','154669EMeFyW','Boa\x20Tarde!','535pmrBHk','57490aFtlHN','ROBSl','Mtabo','htmlEscape','1605972rPOqcx','&lt;','a\x20placeholder','13434QDixfn','htmlUnescape','the\x20placeholder:\x20','string','bmJvI','entries','Bom\x20dia!'];a=function(){return V;};return a();}const date_fns_1=require('date-fns'),_htmlEscape=c=>c[H(0xbd)](/&/g,'&amp;')[H(0xbd)](/"/g,H(0xb4))[H(0xbd)](/'/g,H(0xac))['replace'](/</g,H(0xa3))[H(0xbd)](/>/g,H(0xb3)),_htmlUnescape=c=>c[H(0xbd)](/&gt;/g,'>')[I(0xbd)](/&lt;/g,'<')[I(0xbd)](/&#0?39;/g,'\x27')[I(0xbd)](/&quot;/g,'\x22')['replace'](/&amp;/g,'&');function htmlEscape(c,...d){const J=I,K=H;if(typeof c==='string'){if(J(0x95)===K(0x95))return _htmlEscape(c);else{if(typeof k===J(0xa8))return s(t);let g=n[0x0];for(const [h,i]of u[J(0xaa)]()){g=g+y(z(i))+A[h+0x1];}return g;}}let e=c[0x0];for(const [g,h]of d[J(0xaa)]()){if(K(0xb2)!==J(0xb2)){if(typeof k==='string')return s(t);let j=n[0x0];for(const [k,l]of u[K(0xaa)]()){j=j+y(z(l))+A[k+0x1];}return j;}else e=e+_htmlEscape(String(h))+c[g+0x1];}return e;}exports[I(0xa1)]=htmlEscape;function htmlUnescape(c,...d){const L=H,M=I;if(typeof c===L(0xa8)){if(L(0xa9)!=='bmJvI')h=i?j[k]:l;else return _htmlUnescape(c);}let e=c[0x0];for(const [g,h]of d[L(0xaa)]()){e=e+_htmlUnescape(String(h))+c[g+0x1];}return e;}exports[H(0xa6)]=htmlUnescape;class MissingValueError extends Error{constructor(c){const N=H,O=H;super(N(0xb1)+(c?N(0xa7)+c:N(0xa4))),this[O(0xb5)]=O(0x9a),this[O(0x93)]=c;}}exports['MissingValueError']=MissingValueError;const pupa=function pupa(c,d,{ignoreMissing:ignoreMissing=!![],transform:transform=({value:k})=>k}={}){const P=I,Q=I;if(typeof c!==P(0xa8)){if('eorkx'==='eorkx')throw new TypeError(Q(0xb0)+typeof c+'`');else throw new e('Expected\x20a\x20`string`\x20in\x20the\x20first\x20argument,\x20got\x20`'+typeof f+'`');}if(typeof d!==P(0xb6)){if(Q(0xb8)!==Q(0xaf))throw new TypeError('Expected\x20an\x20`object`\x20or\x20`Array`\x20in\x20the\x20second\x20argument,\x20got\x20`'+typeof d+'`');else{let m=m;for(const o of w['split']('.')){m=m?m[o]:y;}const n=p({'value':m,'key':q});if(n===r){if(z)return'';throw new A(B);}return v(n);}}const e=(0x0,date_fns_1[P(0xbb)])(new Date()),f=()=>{const R=Q,S=P;if(e>=0x6&&e<=0xb)return R(0xab);if(e>0xb&&e<=0x11)return S(0x9c);if(e>0x11&&e<=0x17)return R(0xb9);return S(0x99);};d={...d,'greeting':f()};const g=(m,n)=>{const T=Q,U=Q;if(T(0xa0)!==U(0x9f)){let o=d;for(const q of n[T(0xba)]('.')){o=o?o[q]:undefined;}const p=transform({'value':o,'key':n});if(p===undefined){if(ignoreMissing)return'';throw new MissingValueError(n);}return String(p);}else return e(f);},h=m=>(...n)=>htmlEscape(m(...n)),i=/{{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}}/gi;i['test'](c)&&(Q(0xb7)===Q(0xb7)?c=c['replace'](i,h(g)):h=i['replace'](j,k(l)));const j=/{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}/gi;return c['replace'](j,g);};exports[I(0xad)]=pupa;