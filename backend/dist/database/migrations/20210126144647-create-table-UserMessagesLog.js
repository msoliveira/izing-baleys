'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0xc8;let h=e[f];return h;},b(c,d);}const s=b,t=b;(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=-parseInt(q(0xd9))/0x1*(-parseInt(q(0xdf))/0x2)+-parseInt(r(0xcd))/0x3*(-parseInt(q(0xca))/0x4)+-parseInt(q(0xde))/0x5*(parseInt(r(0xdc))/0x6)+-parseInt(r(0xd5))/0x7+parseInt(q(0xdb))/0x8+parseInt(r(0xce))/0x9*(-parseInt(q(0xcc))/0xa)+parseInt(r(0xe0))/0xb*(-parseInt(r(0xcf))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa15e7));function a(){const y=['DataTypes','50mEswmi','2112729ArGQcw','778122TQsHar','6528vcxaes','DATE','sequelize','Users','createTable','CASCADE','7515606zOGnnj','UserMessagesLog','exports','INTEGER','443BPHrLD','dropTable','9966320FcXRfI','1137396vZlMYf','STRING','10jLjqqV','3796PrmTpu','4950zRatli','defineProperty','Tickets','4GxonwP'];a=function(){return y;};return a();}Object[s(0xc8)](exports,'__esModule',{'value':!![]});const sequelize_1=require(t(0xd1));module[t(0xd7)]={'up':c=>{const u=t,v=s;return c[u(0xd3)](v(0xd6),{'id':{'type':sequelize_1['DataTypes']['INTEGER'],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'messageId':{'type':sequelize_1[v(0xcb)][v(0xdd)],'allowNull':!![],'defaultValue':null},'userId':{'type':sequelize_1['DataTypes'][v(0xd8)],'references':{'model':v(0xd2),'key':'id'},'onUpdate':u(0xd4),'onDelete':'RESTRICT'},'ticketId':{'type':sequelize_1[u(0xcb)][v(0xd8)],'references':{'model':u(0xc9),'key':'id'},'onUpdate':u(0xd4),'onDelete':'SET\x20NULL','allowNull':!![]},'createdAt':{'type':sequelize_1[v(0xcb)]['DATE'](0x6),'allowNull':![]},'updatedAt':{'type':sequelize_1[u(0xcb)][u(0xd0)](0x6),'allowNull':![]}});},'down':c=>{const w=t,x=t;return c[w(0xda)](x(0xd6));}};