'use strict';var a2=b,a5=b;(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=-parseInt(a0(0xfb))/0x1*(-parseInt(a1(0x124))/0x2)+-parseInt(a1(0x11e))/0x3+parseInt(a0(0x10b))/0x4*(-parseInt(a1(0xfa))/0x5)+parseInt(a1(0x10c))/0x6+-parseInt(a0(0x126))/0x7+parseInt(a1(0x11b))/0x8*(parseInt(a0(0x101))/0x9)+-parseInt(a1(0x10a))/0xa*(-parseInt(a0(0x106))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x51eff));function b(c,d){var e=a();return b=function(f,g){f=f-0xfa;var h=e[f];return h;},b(c,d);}var __decorate=this&&this[a2(0xfc)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments['length'],k=j<0x3?f:h===null?h=Object[a3(0x11a)](f,g):h,l;if(typeof Reflect===a4(0x108)&&typeof Reflect[a4(0x113)]===a3(0x104))k=Reflect[a3(0x113)](e,f,g,h);else{for(var m=e[a3(0x107)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this[a5(0xfd)]||function(c,d){var a6=a5,a7=a5;if(typeof Reflect===a6(0x108)&&typeof Reflect[a7(0xfe)]===a6(0x104))return Reflect['metadata'](c,d);},__importDefault=this&&this[a2(0x112)]||function(c){var a8=a5;return c&&c[a8(0x11f)]?c:{'default':c};};Object[a5(0x118)](exports,a2(0x11f),{'value':!![]});const sequelize_typescript_1=require(a2(0x105)),Ticket_1=__importDefault(require('./Ticket')),User_1=__importDefault(require(a5(0x125))),Queue_1=__importDefault(require(a2(0x117)));function a(){var a9=['default','__importDefault','decorate','BelongsTo','Table','ForeignKey','./Queue','defineProperty','design:type','getOwnPropertyDescriptor','677288WrxLFC','UpdatedAt','DATE','854442WCUTjM','__esModule','updatedAt','ticketId','CreatedAt','Column','4oJVNKw','./User','1956178GDvxPw','2095435ulVFYo','167227LJSQbN','__decorate','__metadata','metadata','queueId','type','27taKWXr','prototype','user','function','sequelize-typescript','1062490IjTxQv','length','object','DataType','10UKIMOO','4MguEQy','3803658loiHVA','createdAt','PrimaryKey','AutoIncrement','AllowNull'];a=function(){return a9;};return a();}let LogTicket=class LogTicket extends sequelize_typescript_1['Model']{};__decorate([sequelize_typescript_1[a2(0x10e)],sequelize_typescript_1[a2(0x10f)],sequelize_typescript_1[a5(0x123)],__metadata(a2(0x119),Number)],LogTicket[a2(0x102)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x123)])(sequelize_typescript_1[a5(0x109)]['TEXT']),__metadata('design:type',String)],LogTicket[a2(0x102)],a5(0x100),void 0x0),__decorate([sequelize_typescript_1[a5(0x122)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a2(0x109)]['DATE'](0x6)),__metadata('design:type',Date)],LogTicket[a2(0x102)],a2(0x10d),void 0x0),__decorate([sequelize_typescript_1[a5(0x11c)],(0x0,sequelize_typescript_1[a2(0x123)])(sequelize_typescript_1[a2(0x109)][a2(0x11d)](0x6)),__metadata('design:type',Date)],LogTicket[a2(0x102)],a2(0x120),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Ticket_1[a2(0x111)]),sequelize_typescript_1['Column'],__metadata('design:type',Number)],LogTicket['prototype'],a5(0x121),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x114)])(()=>Ticket_1[a5(0x111)]),__metadata(a5(0x119),Ticket_1['default'])],LogTicket[a2(0x102)],'ticket',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x116)])(()=>User_1[a2(0x111)]),(0x0,sequelize_typescript_1['Default'])(null),sequelize_typescript_1[a5(0x110)],sequelize_typescript_1[a2(0x123)],__metadata('design:type',Number)],LogTicket['prototype'],'userId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x114)])(()=>User_1[a5(0x111)]),__metadata('design:type',User_1['default'])],LogTicket['prototype'],a2(0x103),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Queue_1['default']),sequelize_typescript_1[a5(0x123)],__metadata(a2(0x119),Number)],LogTicket['prototype'],a2(0xff),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x114)])(()=>Queue_1['default']),__metadata(a2(0x119),Queue_1[a2(0x111)])],LogTicket[a2(0x102)],'queue',void 0x0),LogTicket=__decorate([sequelize_typescript_1[a5(0x115)]],LogTicket),exports[a2(0x111)]=LogTicket;