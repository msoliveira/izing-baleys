'use strict';function a(){const A=['4gQAgnc','DataTypes','createTable','Tickets','628970XzMGrC','960SWfxNp','CASCADE','143CFxmfH','dropTable','11524734dtZDIG','89219jYHPvb','Users','2UhAbrZ','SET\x20NULL','sequelize','Contacts','pending','INTEGER','3983184aloepW','56JwQZnb','6KVFjhg','790byhWpF','DATE','21906aCwnGI','STRING','1820820avrJlx','defineProperty','112511bdIjQK'];a=function(){return A;};return a();}const u=b,v=b;(function(c,d){const s=b,t=b,e=c();while(!![]){try{const f=-parseInt(s(0x125))/0x1*(-parseInt(s(0x127))/0x2)+-parseInt(s(0x12d))/0x3*(-parseInt(t(0x11b))/0x4)+parseInt(s(0x11f))/0x5*(parseInt(s(0x12f))/0x6)+parseInt(t(0x11a))/0x7*(-parseInt(s(0x120))/0x8)+parseInt(t(0x132))/0x9*(-parseInt(t(0x130))/0xa)+-parseInt(t(0x122))/0xb*(parseInt(s(0x134))/0xc)+parseInt(s(0x124))/0xd*(parseInt(s(0x12e))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf2f8c));function b(c,d){const e=a();return b=function(f,g){f=f-0x119;let h=e[f];return h;},b(c,d);}Object[u(0x119)](exports,'__esModule',{'value':!![]});const sequelize_1=require(u(0x129));module['exports']={'up':c=>{const w=v,x=u;return c[w(0x11d)](w(0x11e),{'id':{'type':sequelize_1[w(0x11c)]['INTEGER'],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'status':{'type':sequelize_1['DataTypes'][w(0x133)],'defaultValue':w(0x12b),'allowNull':![]},'lastMessage':{'type':sequelize_1['DataTypes'][x(0x133)]},'contactId':{'type':sequelize_1[x(0x11c)][w(0x12c)],'references':{'model':w(0x12a),'key':'id'},'onUpdate':'CASCADE','onDelete':'CASCADE'},'userId':{'type':sequelize_1[x(0x11c)][x(0x12c)],'references':{'model':w(0x126),'key':'id'},'onUpdate':w(0x121),'onDelete':x(0x128)},'createdAt':{'type':sequelize_1['DataTypes'][w(0x131)](0x6),'allowNull':![]},'updatedAt':{'type':sequelize_1[x(0x11c)][w(0x131)](0x6),'allowNull':![]}});},'down':c=>{const y=v,z=u;return c[y(0x123)](z(0x11e));}};