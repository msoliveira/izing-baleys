'use strict';const m=b,o=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x80;let h=e[f];return h;},b(c,d);}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x83))/0x1+-parseInt(k(0x8e))/0x2+parseInt(k(0x90))/0x3*(-parseInt(k(0x88))/0x4)+-parseInt(l(0x86))/0x5*(-parseInt(k(0x85))/0x6)+-parseInt(k(0x87))/0x7+parseInt(l(0x82))/0x8+-parseInt(l(0x8c))/0x9*(-parseInt(k(0x81))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x97fa0));var __importDefault=this&&this[m(0x8a)]||function(c){const n=m;return c&&c[n(0x84)]?c:{'default':c};};Object[m(0x80)](exports,m(0x84),{'value':!![]});const StepsReplyAction_1=__importDefault(require(o(0x89))),AppError_1=__importDefault(require('../../../errors/AppError')),DeleteStepsReplyActionService=async c=>{const p=m,q=m,d=await StepsReplyAction_1['default'][p(0x8b)]({'where':{'id':c}});if(!d)throw new AppError_1[(p(0x8d))](q(0x8f),0x194);await d['destroy']();};function a(){const r=['findOne','16749yWJEfo','default','2348082QOVBNh','ERR_NO_STEPS_REPLY_FOUND','3nvfPLW','defineProperty','9710GCdQHU','6341680kmxEgu','391472hOVrlF','__esModule','410772ZLbFif','5zXTFKt','467705TOyhdz','1653516XomObi','../../../models/StepsReplyAction','__importDefault'];a=function(){return r;};return a();}exports[m(0x8d)]=DeleteStepsReplyActionService;