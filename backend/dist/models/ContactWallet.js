'use strict';function b(c,d){var e=a();return b=function(f,g){f=f-0x8f;var h=e[f];return h;},b(c,d);}var a2=b,a5=b;(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=-parseInt(a0(0xa6))/0x1+-parseInt(a1(0xa5))/0x2+parseInt(a1(0xa0))/0x3*(-parseInt(a1(0x8f))/0x4)+parseInt(a1(0x93))/0x5*(parseInt(a0(0x99))/0x6)+-parseInt(a0(0xb3))/0x7*(parseInt(a0(0xac))/0x8)+-parseInt(a1(0xb5))/0x9*(-parseInt(a0(0x9d))/0xa)+-parseInt(a1(0xae))/0xb*(-parseInt(a0(0xa9))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x56ae6));var __decorate=this&&this[a2(0xb2)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments[a3(0xa3)],k=j<0x3?f:h===null?h=Object[a3(0x9f)](f,g):h,l;if(typeof Reflect===a4(0xa7)&&typeof Reflect[a4(0x9e)]===a3(0xb6))k=Reflect[a3(0x9e)](e,f,g,h);else{for(var m=e[a4(0xa3)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[a4(0x96)](f,g,k),k;},__metadata=this&&this[a5(0xab)]||function(c,d){var a6=a5,a7=a5;if(typeof Reflect===a6(0xa7)&&typeof Reflect[a6(0x97)]==='function')return Reflect[a7(0x97)](c,d);},__importDefault=this&&this['__importDefault']||function(c){var a8=a5;return c&&c[a8(0xa4)]?c:{'default':c};};Object[a2(0x96)](exports,a5(0xa4),{'value':!![]});const sequelize_typescript_1=require(a5(0xb4)),Contact_1=__importDefault(require(a5(0x92))),Tenant_1=__importDefault(require(a5(0xad))),User_1=__importDefault(require(a5(0x90)));let ContactWallet=class ContactWallet extends sequelize_typescript_1[a5(0xa8)]{};function a(){var a9=['./Contact','15055oWzNuI','createdAt','Table','defineProperty','metadata','tenant','636qEKBqu','contact','Column','tenantId','657070odayLH','decorate','getOwnPropertyDescriptor','169551PPvvki','walletId','prototype','length','__esModule','173514GnnQuq','8149OLwgEP','object','Model','588kRzbUb','CreatedAt','__metadata','264OYORkF','./Tenant','122507GDUZZL','updatedAt','default','ForeignKey','__decorate','93863oRtKpu','sequelize-typescript','27MHpUgX','function','design:type','wallet','contactId','12MVHieG','./User','BelongsTo'];a=function(){return a9;};return a();}__decorate([sequelize_typescript_1['PrimaryKey'],sequelize_typescript_1['AutoIncrement'],sequelize_typescript_1[a2(0x9b)],__metadata('design:type',Number)],ContactWallet[a2(0xa2)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0xb1)])(()=>Contact_1['default']),sequelize_typescript_1[a2(0x9b)],__metadata(a2(0xb7),Number)],ContactWallet[a5(0xa2)],a2(0xb9),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x91)])(()=>Contact_1[a5(0xb0)]),__metadata(a2(0xb7),Contact_1[a2(0xb0)])],ContactWallet['prototype'],a2(0x9a),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0xb1)])(()=>User_1[a5(0xb0)]),sequelize_typescript_1[a2(0x9b)],__metadata(a2(0xb7),Number)],ContactWallet[a2(0xa2)],a5(0xa1),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>User_1['default']),__metadata(a5(0xb7),User_1[a2(0xb0)])],ContactWallet[a2(0xa2)],a5(0xb8),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0xb1)])(()=>Tenant_1[a5(0xb0)]),sequelize_typescript_1['Column'],__metadata(a5(0xb7),Number)],ContactWallet[a2(0xa2)],a5(0x9c),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x91)])(()=>Tenant_1[a5(0xb0)]),__metadata(a5(0xb7),Tenant_1[a5(0xb0)])],ContactWallet[a2(0xa2)],a5(0x98),void 0x0),__decorate([sequelize_typescript_1[a5(0xaa)],__metadata('design:type',Date)],ContactWallet[a5(0xa2)],a5(0x94),void 0x0),__decorate([sequelize_typescript_1['UpdatedAt'],__metadata('design:type',Date)],ContactWallet[a2(0xa2)],a5(0xaf),void 0x0),ContactWallet=__decorate([sequelize_typescript_1[a2(0x95)]],ContactWallet),exports[a5(0xb0)]=ContactWallet;