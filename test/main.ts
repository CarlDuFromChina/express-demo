import * as t from '../common/isNull';

console.log('123 is empty' + t.isEmpty('123'));
console.log('empty str：' + t.isEmpty(''));
console.log('[] is empty：' + t.isEmpty([]));
console.log('[1, 2 ,3] is empty：' + t.isEmpty([1, 2, 3]));
console.log('{} is empty：' + t.isEmpty({}));
console.log('{a: 123} is empty：' + t.isEmpty({ a: 123 }));