'use strict';const a4=b,a7=b;(function(c,d){const a0=b,a1=b,e=c();while(!![]){try{const f=-parseInt(a0(0x15b))/0x1*(-parseInt(a1(0x12b))/0x2)+-parseInt(a1(0x162))/0x3+-parseInt(a1(0x160))/0x4+-parseInt(a0(0x150))/0x5*(parseInt(a1(0x13c))/0x6)+-parseInt(a1(0x133))/0x7*(parseInt(a0(0x13a))/0x8)+-parseInt(a1(0x158))/0x9+parseInt(a0(0x15e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2e24d));function a(){const ab=['./ChatFlow','AutoIncrement','isActiveDemand','messagesOffLine','./AutoReply','autoReply','PrimaryKey','whatsappId','Model','contactId','default','protocol','defineProperty','DATE','__importDefault','function','./Tenant','is_chat_ia','status','67600iWBDEl','scheduledMessages','yyyyddMMHHmmss','AllowNull','chatFlowId','sequelize-typescript','lastMessage','ForeignKey','1909602VDrUJE','lastInteractionBot','chatFlow','1WDPIbi','__metadata','queueId','10883670vVruFK','isGroup','70520iphfAw','botRetries','1005582HHruKm','isFarewellMessage','./MessageOffLine','startedAttendanceAt','tenantId','channel','length','design:paramtypes','design:type','__esModule','updatedAt','queue','stepsReply','tenant','decorate','./Whatsapp','VIRTUAL','createdAt','BelongsTo','Column','./User','prototype','pending','closedAt','isTransference','INTEGER','Default','176228McQVcp','HasMany','answered','date-fns','getDataValue','isCreated','metadata','./StepsReply','32851FVxetz','UpdatedAt','DataType','messages','format','object','BIGINT','144zEkUET','lastMessageAt','150SYZwGu'];a=function(){return ab;};return a();}var __decorate=this&&this['__decorate']||function(e,f,g,h){const a2=b,a3=b;var j=arguments['length'],k=j<0x3?f:h===null?h=Object['getOwnPropertyDescriptor'](f,g):h,l;if(typeof Reflect===a2(0x138)&&typeof Reflect[a2(0x170)]===a3(0x14c))k=Reflect[a2(0x170)](e,f,g,h);else{for(var m=e[a3(0x168)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[a2(0x149)](f,g,k),k;},__metadata=this&&this[a4(0x15c)]||function(c,d){const a5=a4,a6=a4;if(typeof Reflect===a5(0x138)&&typeof Reflect['metadata']===a6(0x14c))return Reflect[a6(0x131)](c,d);},__importDefault=this&&this[a7(0x14b)]||function(c){const a8=a4;return c&&c[a8(0x16b)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x120;let h=e[f];return h;},b(c,d);}Object[a4(0x149)](exports,a4(0x16b),{'value':!![]});const sequelize_typescript_1=require(a4(0x155)),date_fns_1=require(a4(0x12e)),Contact_1=__importDefault(require('./Contact')),Message_1=__importDefault(require('./Message')),User_1=__importDefault(require(a4(0x124))),Whatsapp_1=__importDefault(require(a4(0x171))),AutoReply_1=__importDefault(require(a7(0x141))),StepsReply_1=__importDefault(require(a4(0x132))),Queue_1=__importDefault(require('./Queue')),Tenant_1=__importDefault(require(a4(0x14d))),MessageOffLine_1=__importDefault(require(a7(0x164))),ChatFlow_1=__importDefault(require(a4(0x13d)));let Ticket=class Ticket extends sequelize_typescript_1[a7(0x145)]{get[a4(0x148)](){const a9=a4,aa=a7,c=this[a9(0x12f)](a9(0x121)),d=(0x0,date_fns_1[aa(0x137)])(new Date(c),aa(0x152)),e=this[aa(0x12f)]('id');return''+d+e;}};__decorate([sequelize_typescript_1[a7(0x143)],sequelize_typescript_1[a7(0x13e)],sequelize_typescript_1[a4(0x123)],__metadata(a4(0x16a),Number)],Ticket['prototype'],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])({'defaultValue':a4(0x126)}),__metadata(a7(0x16a),String)],Ticket[a4(0x125)],a4(0x14f),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a4(0x16a),Number)],Ticket[a4(0x125)],'unreadMessages',void 0x0),__decorate([sequelize_typescript_1[a7(0x123)],__metadata(a7(0x16a),String)],Ticket[a4(0x125)],a4(0x156),void 0x0),__decorate([sequelize_typescript_1[a4(0x123)],__metadata(a7(0x16a),String)],Ticket[a7(0x125)],a7(0x167),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x12a)])(!![]),sequelize_typescript_1[a7(0x123)],__metadata('design:type',Boolean)],Ticket[a4(0x125)],a7(0x12d),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x12a)])(![]),sequelize_typescript_1[a4(0x123)],__metadata('design:type',Boolean)],Ticket[a4(0x125)],a7(0x15f),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x12a)])(![]),sequelize_typescript_1[a4(0x123)],__metadata(a7(0x16a),Boolean)],Ticket[a4(0x125)],a7(0x13f),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x12a)])(![]),sequelize_typescript_1[a7(0x123)],__metadata(a7(0x16a),Boolean)],Ticket[a7(0x125)],a7(0x163),void 0x0),__decorate([sequelize_typescript_1['CreatedAt'],__metadata(a4(0x16a),Date)],Ticket[a4(0x125)],a4(0x121),void 0x0),__decorate([sequelize_typescript_1[a4(0x134)],__metadata(a4(0x16a),Date)],Ticket[a7(0x125)],a4(0x16c),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x123)])(sequelize_typescript_1['DataType'][a7(0x14a)]),__metadata(a7(0x16a),Date)],Ticket[a7(0x125)],a7(0x159),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x123)])(sequelize_typescript_1['DataType'][a4(0x129)]),__metadata('design:type',Number)],Ticket[a4(0x125)],a7(0x161),void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1['DataType'][a7(0x139)]),__metadata(a4(0x16a),Number)],Ticket[a7(0x125)],a4(0x127),void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a4(0x135)]['BIGINT']),__metadata(a7(0x16a),Number)],Ticket[a7(0x125)],a4(0x13b),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x123)])(sequelize_typescript_1['DataType']['BIGINT']),__metadata(a4(0x16a),Number)],Ticket[a4(0x125)],a7(0x165),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(![]),sequelize_typescript_1[a4(0x123)],__metadata(a4(0x16a),Boolean)],Ticket[a7(0x125)],a7(0x14e),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x157)])(()=>User_1[a4(0x147)]),sequelize_typescript_1[a4(0x123)],__metadata(a7(0x16a),Number)],Ticket[a4(0x125)],'userId',void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>User_1[a4(0x147)]),__metadata(a4(0x16a),User_1[a4(0x147)])],Ticket[a4(0x125)],'user',void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x157)])(()=>Contact_1[a7(0x147)]),sequelize_typescript_1[a7(0x123)],__metadata(a7(0x16a),Number)],Ticket[a7(0x125)],a4(0x146),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x122)])(()=>Contact_1[a4(0x147)]),__metadata(a4(0x16a),Contact_1['default'])],Ticket[a7(0x125)],'contact',void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x157)])(()=>Whatsapp_1['default']),sequelize_typescript_1[a7(0x123)],__metadata(a7(0x16a),Number)],Ticket['prototype'],a4(0x144),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x122)])(()=>Whatsapp_1[a7(0x147)]),__metadata(a4(0x16a),Whatsapp_1[a4(0x147)])],Ticket['prototype'],'whatsapp',void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x12c)])(()=>Message_1[a7(0x147)]),__metadata(a7(0x16a),Array)],Ticket[a4(0x125)],a7(0x136),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>AutoReply_1[a7(0x147)]),sequelize_typescript_1[a7(0x123)],__metadata(a7(0x16a),Number)],Ticket[a7(0x125)],'autoReplyId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x122)])(()=>AutoReply_1[a7(0x147)]),__metadata(a4(0x16a),AutoReply_1[a7(0x147)])],Ticket[a4(0x125)],a4(0x142),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x157)])(()=>StepsReply_1['default']),sequelize_typescript_1[a7(0x123)],__metadata(a7(0x16a),Number)],Ticket[a7(0x125)],'stepAutoReplyId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x122)])(()=>StepsReply_1['default']),__metadata(a7(0x16a),StepsReply_1[a4(0x147)])],Ticket[a4(0x125)],a4(0x16e),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x157)])(()=>ChatFlow_1[a4(0x147)]),sequelize_typescript_1[a7(0x123)],__metadata(a4(0x16a),Number)],Ticket['prototype'],a7(0x154),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x122)])(()=>ChatFlow_1[a7(0x147)]),__metadata('design:type',ChatFlow_1['default'])],Ticket[a7(0x125)],a4(0x15a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x12a)])(null),sequelize_typescript_1[a4(0x153)],(0x0,sequelize_typescript_1[a7(0x123)])(sequelize_typescript_1[a7(0x135)][a4(0x129)]),__metadata(a4(0x16a),Number)],Ticket[a7(0x125)],'stepChatFlow',void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Queue_1[a4(0x147)]),(0x0,sequelize_typescript_1[a7(0x12a)])(null),sequelize_typescript_1[a7(0x153)],sequelize_typescript_1['Column'],__metadata(a4(0x16a),Number)],Ticket[a4(0x125)],a7(0x15d),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x122)])(()=>Queue_1['default']),__metadata(a4(0x16a),Queue_1[a4(0x147)])],Ticket[a7(0x125)],a7(0x16d),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x157)])(()=>Tenant_1[a7(0x147)]),sequelize_typescript_1['Column'],__metadata(a7(0x16a),Number)],Ticket[a7(0x125)],a4(0x166),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x12a)])(null),(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a4(0x135)][a7(0x120)]),__metadata(a4(0x16a),Object)],Ticket[a7(0x125)],a4(0x128),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x12a)])(null),(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a4(0x135)][a4(0x120)]),__metadata(a4(0x16a),Boolean)],Ticket[a7(0x125)],a7(0x130),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x12a)])([]),(0x0,sequelize_typescript_1[a7(0x123)])(sequelize_typescript_1[a7(0x135)][a4(0x120)]),__metadata(a7(0x16a),Array)],Ticket[a7(0x125)],a7(0x151),void 0x0),__decorate([(0x0,sequelize_typescript_1[a4(0x122)])(()=>Tenant_1[a4(0x147)]),__metadata(a7(0x16a),Tenant_1[a7(0x147)])],Ticket['prototype'],a7(0x16f),void 0x0),__decorate([(0x0,sequelize_typescript_1['HasMany'])(()=>MessageOffLine_1[a4(0x147)]),__metadata(a4(0x16a),Array)],Ticket[a4(0x125)],a4(0x140),void 0x0),__decorate([(0x0,sequelize_typescript_1['Default'])(null),sequelize_typescript_1[a4(0x153)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a7(0x135)]['JSONB']),__metadata(a4(0x16a),Object)],Ticket[a4(0x125)],'apiConfig',void 0x0),__decorate([(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1['DataType'][a7(0x120)]),__metadata('design:type',String),__metadata(a4(0x169),[])],Ticket[a4(0x125)],'protocol',null),Ticket=__decorate([sequelize_typescript_1['Table']],Ticket),exports['default']=Ticket;