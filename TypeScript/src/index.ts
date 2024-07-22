console.log('hello typescript');

type P = Promise<'zhao'>

type GetValueType<T> = T extends Promise<infer Val> ? Val : never;

type GetValueResult = GetValueType<Promise<'haha'>>;
type GetValueResult1 = GetValueType<P>;

type GetArrFirst<T extends unknown[]> = T extends [infer First, ...unknown[]] ? First : never;

type GetArrFirstResult = GetArrFirst<[1,2,3]>

type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false;

type StartsWithResult = StartsWith<'zhaozilong', 'zhao'>

type ReplaceStr<Str extends string, from extends string, to extends string> = Str extends `${infer Prefix}${from}${infer Suffix}` ? `${Prefix}${to}${Suffix}` : never;

type ReplaceStrResult = ReplaceStr<'zhaozilong', 'zi', 'haha'>