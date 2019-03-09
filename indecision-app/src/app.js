//installed validator@8.0.0

import validator from 'validator'; //webpack looks for it in node modules folder when named this way

console.log(validator.isEmail('shawn.noruzi@gmail.com'));