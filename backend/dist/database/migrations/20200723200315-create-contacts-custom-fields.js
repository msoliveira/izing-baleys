'use strict';const s=b,t=b;function a(){const x=['INTEGER','982082pWokit','dropTable','241372mbRXsn','2135jxroom','DATE','850685yGXzKv','408NdvCJf','exports','5EWSjoX','1729432jvrqhD','defineProperty','STRING','45nlOveK','2442HPsXHh','4832070yCAQul','3753450aTzmhD','CASCADE','2YdFOTs','sequelize','DataTypes'];a=function(){return x;};return a();}(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=parseInt(q(0x174))/0x1*(-parseInt(r(0x170))/0x2)+-parseInt(r(0x16e))/0x3+-parseInt(q(0x176))/0x4*(parseInt(q(0x167))/0x5)+-parseInt(r(0x16c))/0x6*(parseInt(q(0x162))/0x7)+-parseInt(q(0x168))/0x8*(-parseInt(q(0x16b))/0x9)+-parseInt(q(0x16d))/0xa+parseInt(r(0x164))/0xb*(parseInt(r(0x165))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5998));function b(c,d){const e=a();return b=function(f,g){f=f-0x162;let h=e[f];return h;},b(c,d);}Object[s(0x169)](exports,'__esModule',{'value':!![]});const sequelize_1=require(s(0x171));module[s(0x166)]={'up':c=>{const u=s,v=s;return c['createTable']('ContactCustomFields',{'id':{'type':sequelize_1['DataTypes']['INTEGER'],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'name':{'type':sequelize_1[u(0x172)][u(0x16a)],'allowNull':![]},'value':{'type':sequelize_1[u(0x172)]['STRING'],'allowNull':![]},'contactId':{'type':sequelize_1[u(0x172)][v(0x173)],'references':{'model':'Contacts','key':'id'},'onUpdate':'CASCADE','onDelete':u(0x16f),'allowNull':![]},'createdAt':{'type':sequelize_1[v(0x172)][u(0x163)],'allowNull':![]},'updatedAt':{'type':sequelize_1[u(0x172)][v(0x163)],'allowNull':![]}});},'down':c=>{const w=t;return c[w(0x175)]('ContactCustomFields');}};