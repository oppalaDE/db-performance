
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model city
 * 
 */
export type city = {
  id: number
  zip: string
  city_name: string
  country_name: string
}

/**
 * Model person
 * 
 */
export type person = {
  id: number
  first_name: string
  last_name: string
  gender: string
  languages: string
  occupation: string
  interests: string
  birthdate: Date
  birth_city_id: number
  living_city_id: number
}

/**
 * Model trip
 * 
 */
export type trip = {
  id: number
  headline: string
  description: string
  person_ids: number[]
  city_ids: number[]
  no_person_and_city: boolean
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.city.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.city`: Exposes CRUD operations for the **city** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.cityDelegate<GlobalReject>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.personDelegate<GlobalReject>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.tripDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    city: 'city',
    person: 'person',
    trip: 'trip'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CityCountOutputType
   */


  export type CityCountOutputType = {
    person_person_birth_city_idTocity: number
    person_person_living_city_idTocity: number
  }

  export type CityCountOutputTypeSelect = {
    person_person_birth_city_idTocity?: boolean
    person_person_living_city_idTocity?: boolean
  }

  export type CityCountOutputTypeGetPayload<S extends boolean | null | undefined | CityCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CityCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CityCountOutputTypeArgs)
    ? CityCountOutputType 
    : S extends { select: any } & (CityCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CityCountOutputType ? CityCountOutputType[P] : never
  } 
      : CityCountOutputType




  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model city
   */


  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    zip: string | null
    city_name: string | null
    country_name: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    zip: string | null
    city_name: string | null
    country_name: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    zip: number
    city_name: number
    country_name: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    zip?: true
    city_name?: true
    country_name?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    zip?: true
    city_name?: true
    country_name?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    zip?: true
    city_name?: true
    country_name?: true
    _all?: true
  }

  export type CityAggregateArgs = {
    /**
     * Filter which city to aggregate.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs = {
    where?: cityWhereInput
    orderBy?: Enumerable<cityOrderByWithAggregationInput>
    by: CityScalarFieldEnum[]
    having?: cityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }


  export type CityGroupByOutputType = {
    id: number
    zip: string
    city_name: string
    country_name: string
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type citySelect = {
    id?: boolean
    zip?: boolean
    city_name?: boolean
    country_name?: boolean
    person_person_birth_city_idTocity?: boolean | city$person_person_birth_city_idTocityArgs
    person_person_living_city_idTocity?: boolean | city$person_person_living_city_idTocityArgs
    _count?: boolean | CityCountOutputTypeArgs
  }


  export type cityInclude = {
    person_person_birth_city_idTocity?: boolean | city$person_person_birth_city_idTocityArgs
    person_person_living_city_idTocity?: boolean | city$person_person_living_city_idTocityArgs
    _count?: boolean | CityCountOutputTypeArgs
  }

  export type cityGetPayload<S extends boolean | null | undefined | cityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? city :
    S extends undefined ? never :
    S extends { include: any } & (cityArgs | cityFindManyArgs)
    ? city  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'person_person_birth_city_idTocity' ? Array < personGetPayload<S['include'][P]>>  :
        P extends 'person_person_living_city_idTocity' ? Array < personGetPayload<S['include'][P]>>  :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (cityArgs | cityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'person_person_birth_city_idTocity' ? Array < personGetPayload<S['select'][P]>>  :
        P extends 'person_person_living_city_idTocity' ? Array < personGetPayload<S['select'][P]>>  :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof city ? city[P] : never
  } 
      : city


  type cityCountArgs = 
    Omit<cityFindManyArgs, 'select' | 'include'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface cityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one City that matches the filter.
     * @param {cityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'city'> extends True ? Prisma__cityClient<cityGetPayload<T>> : Prisma__cityClient<cityGetPayload<T> | null, null>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cityFindUniqueOrThrowArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'city'> extends True ? Prisma__cityClient<cityGetPayload<T>> : Prisma__cityClient<cityGetPayload<T> | null, null>

    /**
     * Find the first City that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cityFindFirstOrThrowArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cityFindManyArgs>(
      args?: SelectSubset<T, cityFindManyArgs>
    ): Prisma.PrismaPromise<Array<cityGetPayload<T>>>

    /**
     * Create a City.
     * @param {cityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends cityCreateArgs>(
      args: SelectSubset<T, cityCreateArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Create many Cities.
     *     @param {cityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cityCreateManyArgs>(
      args?: SelectSubset<T, cityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {cityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends cityDeleteArgs>(
      args: SelectSubset<T, cityDeleteArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Update one City.
     * @param {cityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cityUpdateArgs>(
      args: SelectSubset<T, cityUpdateArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Delete zero or more Cities.
     * @param {cityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cityDeleteManyArgs>(
      args?: SelectSubset<T, cityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cityUpdateManyArgs>(
      args: SelectSubset<T, cityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {cityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends cityUpsertArgs>(
      args: SelectSubset<T, cityUpsertArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * @param {cityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const city = await prisma.city.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: cityFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a City.
     * @param {cityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const city = await prisma.city.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: cityAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends cityCountArgs>(
      args?: Subset<T, cityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for city.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    person_person_birth_city_idTocity<T extends city$person_person_birth_city_idTocityArgs= {}>(args?: Subset<T, city$person_person_birth_city_idTocityArgs>): Prisma.PrismaPromise<Array<personGetPayload<T>>| Null>;

    person_person_living_city_idTocity<T extends city$person_person_living_city_idTocityArgs= {}>(args?: Subset<T, city$person_person_living_city_idTocityArgs>): Prisma.PrismaPromise<Array<personGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * city base type for findUnique actions
   */
  export type cityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }

  /**
   * city findUnique
   */
  export interface cityFindUniqueArgs extends cityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * city findUniqueOrThrow
   */
  export type cityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city base type for findFirst actions
   */
  export type cityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }

  /**
   * city findFirst
   */
  export interface cityFindFirstArgs extends cityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * city findFirstOrThrow
   */
  export type cityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * city findMany
   */
  export type cityFindManyArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter, which cities to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * city create
   */
  export type cityCreateArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * The data needed to create a city.
     */
    data: XOR<cityCreateInput, cityUncheckedCreateInput>
  }


  /**
   * city createMany
   */
  export type cityCreateManyArgs = {
    /**
     * The data used to create many cities.
     */
    data: Enumerable<cityCreateManyInput>
  }


  /**
   * city update
   */
  export type cityUpdateArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * The data needed to update a city.
     */
    data: XOR<cityUpdateInput, cityUncheckedUpdateInput>
    /**
     * Choose, which city to update.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city updateMany
   */
  export type cityUpdateManyArgs = {
    /**
     * The data used to update cities.
     */
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: cityWhereInput
  }


  /**
   * city upsert
   */
  export type cityUpsertArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * The filter to search for the city to update in case it exists.
     */
    where: cityWhereUniqueInput
    /**
     * In case the city found by the `where` argument doesn't exist, create a new city with this data.
     */
    create: XOR<cityCreateInput, cityUncheckedCreateInput>
    /**
     * In case the city was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cityUpdateInput, cityUncheckedUpdateInput>
  }


  /**
   * city delete
   */
  export type cityDeleteArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
    /**
     * Filter which city to delete.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city deleteMany
   */
  export type cityDeleteManyArgs = {
    /**
     * Filter which cities to delete
     */
    where?: cityWhereInput
  }


  /**
   * city findRaw
   */
  export type cityFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * city aggregateRaw
   */
  export type cityAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * city.person_person_birth_city_idTocity
   */
  export type city$person_person_birth_city_idTocityArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    where?: personWhereInput
    orderBy?: Enumerable<personOrderByWithRelationInput>
    cursor?: personWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * city.person_person_living_city_idTocity
   */
  export type city$person_person_living_city_idTocityArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    where?: personWhereInput
    orderBy?: Enumerable<personOrderByWithRelationInput>
    cursor?: personWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * city without action
   */
  export type cityArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cityInclude | null
  }



  /**
   * Model person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
    birth_city_id: number | null
    living_city_id: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
    birth_city_id: number | null
    living_city_id: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    gender: string | null
    languages: string | null
    occupation: string | null
    interests: string | null
    birthdate: Date | null
    birth_city_id: number | null
    living_city_id: number | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    gender: string | null
    languages: string | null
    occupation: string | null
    interests: string | null
    birthdate: Date | null
    birth_city_id: number | null
    living_city_id: number | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    gender: number
    languages: number
    occupation: number
    interests: number
    birthdate: number
    birth_city_id: number
    living_city_id: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
    birth_city_id?: true
    living_city_id?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
    birth_city_id?: true
    living_city_id?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    gender?: true
    languages?: true
    occupation?: true
    interests?: true
    birthdate?: true
    birth_city_id?: true
    living_city_id?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    gender?: true
    languages?: true
    occupation?: true
    interests?: true
    birthdate?: true
    birth_city_id?: true
    living_city_id?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    gender?: true
    languages?: true
    occupation?: true
    interests?: true
    birthdate?: true
    birth_city_id?: true
    living_city_id?: true
    _all?: true
  }

  export type PersonAggregateArgs = {
    /**
     * Filter which person to aggregate.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: Enumerable<personOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs = {
    where?: personWhereInput
    orderBy?: Enumerable<personOrderByWithAggregationInput>
    by: PersonScalarFieldEnum[]
    having?: personScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date
    birth_city_id: number
    living_city_id: number
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type personSelect = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    gender?: boolean
    languages?: boolean
    occupation?: boolean
    interests?: boolean
    birthdate?: boolean
    birth_city_id?: boolean
    living_city_id?: boolean
    city_person_birth_city_idTocity?: boolean | cityArgs
    city_person_living_city_idTocity?: boolean | cityArgs
  }


  export type personInclude = {
    city_person_birth_city_idTocity?: boolean | cityArgs
    city_person_living_city_idTocity?: boolean | cityArgs
  }

  export type personGetPayload<S extends boolean | null | undefined | personArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? person :
    S extends undefined ? never :
    S extends { include: any } & (personArgs | personFindManyArgs)
    ? person  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'city_person_birth_city_idTocity' ? cityGetPayload<S['include'][P]> :
        P extends 'city_person_living_city_idTocity' ? cityGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (personArgs | personFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'city_person_birth_city_idTocity' ? cityGetPayload<S['select'][P]> :
        P extends 'city_person_living_city_idTocity' ? cityGetPayload<S['select'][P]> :  P extends keyof person ? person[P] : never
  } 
      : person


  type personCountArgs = 
    Omit<personFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface personDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Person that matches the filter.
     * @param {personFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends personFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, personFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'person'> extends True ? Prisma__personClient<personGetPayload<T>> : Prisma__personClient<personGetPayload<T> | null, null>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {personFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends personFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, personFindUniqueOrThrowArgs>
    ): Prisma__personClient<personGetPayload<T>>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends personFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, personFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'person'> extends True ? Prisma__personClient<personGetPayload<T>> : Prisma__personClient<personGetPayload<T> | null, null>

    /**
     * Find the first Person that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends personFindFirstOrThrowArgs>(
      args?: SelectSubset<T, personFindFirstOrThrowArgs>
    ): Prisma__personClient<personGetPayload<T>>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends personFindManyArgs>(
      args?: SelectSubset<T, personFindManyArgs>
    ): Prisma.PrismaPromise<Array<personGetPayload<T>>>

    /**
     * Create a Person.
     * @param {personCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends personCreateArgs>(
      args: SelectSubset<T, personCreateArgs>
    ): Prisma__personClient<personGetPayload<T>>

    /**
     * Create many People.
     *     @param {personCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends personCreateManyArgs>(
      args?: SelectSubset<T, personCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {personDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends personDeleteArgs>(
      args: SelectSubset<T, personDeleteArgs>
    ): Prisma__personClient<personGetPayload<T>>

    /**
     * Update one Person.
     * @param {personUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends personUpdateArgs>(
      args: SelectSubset<T, personUpdateArgs>
    ): Prisma__personClient<personGetPayload<T>>

    /**
     * Delete zero or more People.
     * @param {personDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends personDeleteManyArgs>(
      args?: SelectSubset<T, personDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends personUpdateManyArgs>(
      args: SelectSubset<T, personUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {personUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends personUpsertArgs>(
      args: SelectSubset<T, personUpsertArgs>
    ): Prisma__personClient<personGetPayload<T>>

    /**
     * Find zero or more People that matches the filter.
     * @param {personFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const person = await prisma.person.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: personFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Person.
     * @param {personAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const person = await prisma.person.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: personAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends personCountArgs>(
      args?: Subset<T, personCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__personClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    city_person_birth_city_idTocity<T extends cityArgs= {}>(args?: Subset<T, cityArgs>): Prisma__cityClient<cityGetPayload<T> | Null>;

    city_person_living_city_idTocity<T extends cityArgs= {}>(args?: Subset<T, cityArgs>): Prisma__cityClient<cityGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * person base type for findUnique actions
   */
  export type personFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findUnique
   */
  export interface personFindUniqueArgs extends personFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * person findUniqueOrThrow
   */
  export type personFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }


  /**
   * person base type for findFirst actions
   */
  export type personFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: Enumerable<personOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: Enumerable<PersonScalarFieldEnum>
  }

  /**
   * person findFirst
   */
  export interface personFindFirstArgs extends personFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * person findFirstOrThrow
   */
  export type personFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: Enumerable<personOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * person findMany
   */
  export type personFindManyArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * Filter, which people to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: Enumerable<personOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * person create
   */
  export type personCreateArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * The data needed to create a person.
     */
    data: XOR<personCreateInput, personUncheckedCreateInput>
  }


  /**
   * person createMany
   */
  export type personCreateManyArgs = {
    /**
     * The data used to create many people.
     */
    data: Enumerable<personCreateManyInput>
  }


  /**
   * person update
   */
  export type personUpdateArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * The data needed to update a person.
     */
    data: XOR<personUpdateInput, personUncheckedUpdateInput>
    /**
     * Choose, which person to update.
     */
    where: personWhereUniqueInput
  }


  /**
   * person updateMany
   */
  export type personUpdateManyArgs = {
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
  }


  /**
   * person upsert
   */
  export type personUpsertArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * The filter to search for the person to update in case it exists.
     */
    where: personWhereUniqueInput
    /**
     * In case the person found by the `where` argument doesn't exist, create a new person with this data.
     */
    create: XOR<personCreateInput, personUncheckedCreateInput>
    /**
     * In case the person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personUpdateInput, personUncheckedUpdateInput>
  }


  /**
   * person delete
   */
  export type personDeleteArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
    /**
     * Filter which person to delete.
     */
    where: personWhereUniqueInput
  }


  /**
   * person deleteMany
   */
  export type personDeleteManyArgs = {
    /**
     * Filter which people to delete
     */
    where?: personWhereInput
  }


  /**
   * person findRaw
   */
  export type personFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * person aggregateRaw
   */
  export type personAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * person without action
   */
  export type personArgs = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: personInclude | null
  }



  /**
   * Model trip
   */


  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    person_ids: number | null
    city_ids: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    person_ids: number[] | null
    city_ids: number[] | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    headline: string | null
    description: string | null
    no_person_and_city: boolean | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    headline: string | null
    description: string | null
    no_person_and_city: boolean | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    headline: number
    description: number
    person_ids: number
    city_ids: number
    no_person_and_city: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    person_ids?: true
    city_ids?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    person_ids?: true
    city_ids?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    headline?: true
    description?: true
    no_person_and_city?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    headline?: true
    description?: true
    no_person_and_city?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    headline?: true
    description?: true
    person_ids?: true
    city_ids?: true
    no_person_and_city?: true
    _all?: true
  }

  export type TripAggregateArgs = {
    /**
     * Filter which trip to aggregate.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: Enumerable<tripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs = {
    where?: tripWhereInput
    orderBy?: Enumerable<tripOrderByWithAggregationInput>
    by: TripScalarFieldEnum[]
    having?: tripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }


  export type TripGroupByOutputType = {
    id: number
    headline: string
    description: string
    person_ids: number[]
    city_ids: number[]
    no_person_and_city: boolean
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type tripSelect = {
    id?: boolean
    headline?: boolean
    description?: boolean
    person_ids?: boolean
    city_ids?: boolean
    no_person_and_city?: boolean
  }


  export type tripGetPayload<S extends boolean | null | undefined | tripArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? trip :
    S extends undefined ? never :
    S extends { include: any } & (tripArgs | tripFindManyArgs)
    ? trip 
    : S extends { select: any } & (tripArgs | tripFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof trip ? trip[P] : never
  } 
      : trip


  type tripCountArgs = 
    Omit<tripFindManyArgs, 'select' | 'include'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface tripDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Trip that matches the filter.
     * @param {tripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tripFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tripFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'trip'> extends True ? Prisma__tripClient<tripGetPayload<T>> : Prisma__tripClient<tripGetPayload<T> | null, null>

    /**
     * Find one Trip that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tripFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tripFindUniqueOrThrowArgs>
    ): Prisma__tripClient<tripGetPayload<T>>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tripFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tripFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'trip'> extends True ? Prisma__tripClient<tripGetPayload<T>> : Prisma__tripClient<tripGetPayload<T> | null, null>

    /**
     * Find the first Trip that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tripFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tripFindFirstOrThrowArgs>
    ): Prisma__tripClient<tripGetPayload<T>>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tripFindManyArgs>(
      args?: SelectSubset<T, tripFindManyArgs>
    ): Prisma.PrismaPromise<Array<tripGetPayload<T>>>

    /**
     * Create a Trip.
     * @param {tripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
    **/
    create<T extends tripCreateArgs>(
      args: SelectSubset<T, tripCreateArgs>
    ): Prisma__tripClient<tripGetPayload<T>>

    /**
     * Create many Trips.
     *     @param {tripCreateManyArgs} args - Arguments to create many Trips.
     *     @example
     *     // Create many Trips
     *     const trip = await prisma.trip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tripCreateManyArgs>(
      args?: SelectSubset<T, tripCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {tripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
    **/
    delete<T extends tripDeleteArgs>(
      args: SelectSubset<T, tripDeleteArgs>
    ): Prisma__tripClient<tripGetPayload<T>>

    /**
     * Update one Trip.
     * @param {tripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tripUpdateArgs>(
      args: SelectSubset<T, tripUpdateArgs>
    ): Prisma__tripClient<tripGetPayload<T>>

    /**
     * Delete zero or more Trips.
     * @param {tripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tripDeleteManyArgs>(
      args?: SelectSubset<T, tripDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tripUpdateManyArgs>(
      args: SelectSubset<T, tripUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {tripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
    **/
    upsert<T extends tripUpsertArgs>(
      args: SelectSubset<T, tripUpsertArgs>
    ): Prisma__tripClient<tripGetPayload<T>>

    /**
     * Find zero or more Trips that matches the filter.
     * @param {tripFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const trip = await prisma.trip.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: tripFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Trip.
     * @param {tripAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const trip = await prisma.trip.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: tripAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends tripCountArgs>(
      args?: Subset<T, tripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tripClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * trip base type for findUnique actions
   */
  export type tripFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * Filter, which trip to fetch.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip findUnique
   */
  export interface tripFindUniqueArgs extends tripFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * trip findUniqueOrThrow
   */
  export type tripFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * Filter, which trip to fetch.
     */
    where: tripWhereUniqueInput
  }


  /**
   * trip base type for findFirst actions
   */
  export type tripFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * Filter, which trip to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: Enumerable<tripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: Enumerable<TripScalarFieldEnum>
  }

  /**
   * trip findFirst
   */
  export interface tripFindFirstArgs extends tripFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * trip findFirstOrThrow
   */
  export type tripFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * Filter, which trip to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: Enumerable<tripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * trip findMany
   */
  export type tripFindManyArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: Enumerable<tripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * trip create
   */
  export type tripCreateArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * The data needed to create a trip.
     */
    data: XOR<tripCreateInput, tripUncheckedCreateInput>
  }


  /**
   * trip createMany
   */
  export type tripCreateManyArgs = {
    /**
     * The data used to create many trips.
     */
    data: Enumerable<tripCreateManyInput>
  }


  /**
   * trip update
   */
  export type tripUpdateArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * The data needed to update a trip.
     */
    data: XOR<tripUpdateInput, tripUncheckedUpdateInput>
    /**
     * Choose, which trip to update.
     */
    where: tripWhereUniqueInput
  }


  /**
   * trip updateMany
   */
  export type tripUpdateManyArgs = {
    /**
     * The data used to update trips.
     */
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyInput>
    /**
     * Filter which trips to update
     */
    where?: tripWhereInput
  }


  /**
   * trip upsert
   */
  export type tripUpsertArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * The filter to search for the trip to update in case it exists.
     */
    where: tripWhereUniqueInput
    /**
     * In case the trip found by the `where` argument doesn't exist, create a new trip with this data.
     */
    create: XOR<tripCreateInput, tripUncheckedCreateInput>
    /**
     * In case the trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tripUpdateInput, tripUncheckedUpdateInput>
  }


  /**
   * trip delete
   */
  export type tripDeleteArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
    /**
     * Filter which trip to delete.
     */
    where: tripWhereUniqueInput
  }


  /**
   * trip deleteMany
   */
  export type tripDeleteManyArgs = {
    /**
     * Filter which trips to delete
     */
    where?: tripWhereInput
  }


  /**
   * trip findRaw
   */
  export type tripFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * trip aggregateRaw
   */
  export type tripAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * trip without action
   */
  export type tripArgs = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CityScalarFieldEnum: {
    id: 'id',
    zip: 'zip',
    city_name: 'city_name',
    country_name: 'country_name'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    gender: 'gender',
    languages: 'languages',
    occupation: 'occupation',
    interests: 'interests',
    birthdate: 'birthdate',
    birth_city_id: 'birth_city_id',
    living_city_id: 'living_city_id'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TripScalarFieldEnum: {
    id: 'id',
    headline: 'headline',
    description: 'description',
    person_ids: 'person_ids',
    city_ids: 'city_ids',
    no_person_and_city: 'no_person_and_city'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type cityWhereInput = {
    AND?: Enumerable<cityWhereInput>
    OR?: Enumerable<cityWhereInput>
    NOT?: Enumerable<cityWhereInput>
    id?: IntFilter | number
    zip?: StringFilter | string
    city_name?: StringFilter | string
    country_name?: StringFilter | string
    person_person_birth_city_idTocity?: PersonListRelationFilter
    person_person_living_city_idTocity?: PersonListRelationFilter
  }

  export type cityOrderByWithRelationInput = {
    id?: SortOrder
    zip?: SortOrder
    city_name?: SortOrder
    country_name?: SortOrder
    person_person_birth_city_idTocity?: personOrderByRelationAggregateInput
    person_person_living_city_idTocity?: personOrderByRelationAggregateInput
  }

  export type cityWhereUniqueInput = {
    id?: number
  }

  export type cityOrderByWithAggregationInput = {
    id?: SortOrder
    zip?: SortOrder
    city_name?: SortOrder
    country_name?: SortOrder
    _count?: cityCountOrderByAggregateInput
    _avg?: cityAvgOrderByAggregateInput
    _max?: cityMaxOrderByAggregateInput
    _min?: cityMinOrderByAggregateInput
    _sum?: citySumOrderByAggregateInput
  }

  export type cityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cityScalarWhereWithAggregatesInput>
    OR?: Enumerable<cityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cityScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    zip?: StringWithAggregatesFilter | string
    city_name?: StringWithAggregatesFilter | string
    country_name?: StringWithAggregatesFilter | string
  }

  export type personWhereInput = {
    AND?: Enumerable<personWhereInput>
    OR?: Enumerable<personWhereInput>
    NOT?: Enumerable<personWhereInput>
    id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    gender?: StringFilter | string
    languages?: StringFilter | string
    occupation?: StringFilter | string
    interests?: StringFilter | string
    birthdate?: DateTimeFilter | Date | string
    birth_city_id?: IntFilter | number
    living_city_id?: IntFilter | number
    city_person_birth_city_idTocity?: XOR<CityRelationFilter, cityWhereInput>
    city_person_living_city_idTocity?: XOR<CityRelationFilter, cityWhereInput>
  }

  export type personOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    languages?: SortOrder
    occupation?: SortOrder
    interests?: SortOrder
    birthdate?: SortOrder
    birth_city_id?: SortOrder
    living_city_id?: SortOrder
    city_person_birth_city_idTocity?: cityOrderByWithRelationInput
    city_person_living_city_idTocity?: cityOrderByWithRelationInput
  }

  export type personWhereUniqueInput = {
    id?: number
  }

  export type personOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    languages?: SortOrder
    occupation?: SortOrder
    interests?: SortOrder
    birthdate?: SortOrder
    birth_city_id?: SortOrder
    living_city_id?: SortOrder
    _count?: personCountOrderByAggregateInput
    _avg?: personAvgOrderByAggregateInput
    _max?: personMaxOrderByAggregateInput
    _min?: personMinOrderByAggregateInput
    _sum?: personSumOrderByAggregateInput
  }

  export type personScalarWhereWithAggregatesInput = {
    AND?: Enumerable<personScalarWhereWithAggregatesInput>
    OR?: Enumerable<personScalarWhereWithAggregatesInput>
    NOT?: Enumerable<personScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    gender?: StringWithAggregatesFilter | string
    languages?: StringWithAggregatesFilter | string
    occupation?: StringWithAggregatesFilter | string
    interests?: StringWithAggregatesFilter | string
    birthdate?: DateTimeWithAggregatesFilter | Date | string
    birth_city_id?: IntWithAggregatesFilter | number
    living_city_id?: IntWithAggregatesFilter | number
  }

  export type tripWhereInput = {
    AND?: Enumerable<tripWhereInput>
    OR?: Enumerable<tripWhereInput>
    NOT?: Enumerable<tripWhereInput>
    id?: IntFilter | number
    headline?: StringFilter | string
    description?: StringFilter | string
    person_ids?: IntNullableListFilter
    city_ids?: IntNullableListFilter
    no_person_and_city?: BoolFilter | boolean
  }

  export type tripOrderByWithRelationInput = {
    id?: SortOrder
    headline?: SortOrder
    description?: SortOrder
    person_ids?: SortOrder
    city_ids?: SortOrder
    no_person_and_city?: SortOrder
  }

  export type tripWhereUniqueInput = {
    id?: number
  }

  export type tripOrderByWithAggregationInput = {
    id?: SortOrder
    headline?: SortOrder
    description?: SortOrder
    person_ids?: SortOrder
    city_ids?: SortOrder
    no_person_and_city?: SortOrder
    _count?: tripCountOrderByAggregateInput
    _avg?: tripAvgOrderByAggregateInput
    _max?: tripMaxOrderByAggregateInput
    _min?: tripMinOrderByAggregateInput
    _sum?: tripSumOrderByAggregateInput
  }

  export type tripScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tripScalarWhereWithAggregatesInput>
    OR?: Enumerable<tripScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tripScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    headline?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    person_ids?: IntNullableListFilter
    city_ids?: IntNullableListFilter
    no_person_and_city?: BoolWithAggregatesFilter | boolean
  }

  export type cityCreateInput = {
    id: number
    zip: string
    city_name: string
    country_name: string
    person_person_birth_city_idTocity?: personCreateNestedManyWithoutCity_person_birth_city_idTocityInput
    person_person_living_city_idTocity?: personCreateNestedManyWithoutCity_person_living_city_idTocityInput
  }

  export type cityUncheckedCreateInput = {
    id: number
    zip: string
    city_name: string
    country_name: string
    person_person_birth_city_idTocity?: personUncheckedCreateNestedManyWithoutCity_person_birth_city_idTocityInput
    person_person_living_city_idTocity?: personUncheckedCreateNestedManyWithoutCity_person_living_city_idTocityInput
  }

  export type cityUpdateInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
    person_person_birth_city_idTocity?: personUpdateManyWithoutCity_person_birth_city_idTocityNestedInput
    person_person_living_city_idTocity?: personUpdateManyWithoutCity_person_living_city_idTocityNestedInput
  }

  export type cityUncheckedUpdateInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
    person_person_birth_city_idTocity?: personUncheckedUpdateManyWithoutCity_person_birth_city_idTocityNestedInput
    person_person_living_city_idTocity?: personUncheckedUpdateManyWithoutCity_person_living_city_idTocityNestedInput
  }

  export type cityCreateManyInput = {
    id: number
    zip: string
    city_name: string
    country_name: string
  }

  export type cityUpdateManyMutationInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type cityUncheckedUpdateManyInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
  }

  export type personCreateInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    city_person_birth_city_idTocity: cityCreateNestedOneWithoutPerson_person_birth_city_idTocityInput
    city_person_living_city_idTocity: cityCreateNestedOneWithoutPerson_person_living_city_idTocityInput
  }

  export type personUncheckedCreateInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    birth_city_id: number
    living_city_id: number
  }

  export type personUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    city_person_birth_city_idTocity?: cityUpdateOneRequiredWithoutPerson_person_birth_city_idTocityNestedInput
    city_person_living_city_idTocity?: cityUpdateOneRequiredWithoutPerson_person_living_city_idTocityNestedInput
  }

  export type personUncheckedUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_city_id?: IntFieldUpdateOperationsInput | number
    living_city_id?: IntFieldUpdateOperationsInput | number
  }

  export type personCreateManyInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    birth_city_id: number
    living_city_id: number
  }

  export type personUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personUncheckedUpdateManyInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_city_id?: IntFieldUpdateOperationsInput | number
    living_city_id?: IntFieldUpdateOperationsInput | number
  }

  export type tripCreateInput = {
    id: number
    headline: string
    description: string
    person_ids?: tripCreateperson_idsInput | Enumerable<number>
    city_ids?: tripCreatecity_idsInput | Enumerable<number>
    no_person_and_city: boolean
  }

  export type tripUncheckedCreateInput = {
    id: number
    headline: string
    description: string
    person_ids?: tripCreateperson_idsInput | Enumerable<number>
    city_ids?: tripCreatecity_idsInput | Enumerable<number>
    no_person_and_city: boolean
  }

  export type tripUpdateInput = {
    headline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    person_ids?: tripUpdateperson_idsInput | Enumerable<number>
    city_ids?: tripUpdatecity_idsInput | Enumerable<number>
    no_person_and_city?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tripUncheckedUpdateInput = {
    headline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    person_ids?: tripUpdateperson_idsInput | Enumerable<number>
    city_ids?: tripUpdatecity_idsInput | Enumerable<number>
    no_person_and_city?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tripCreateManyInput = {
    id: number
    headline: string
    description: string
    person_ids?: tripCreateperson_idsInput | Enumerable<number>
    city_ids?: tripCreatecity_idsInput | Enumerable<number>
    no_person_and_city: boolean
  }

  export type tripUpdateManyMutationInput = {
    headline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    person_ids?: tripUpdateperson_idsInput | Enumerable<number>
    city_ids?: tripUpdatecity_idsInput | Enumerable<number>
    no_person_and_city?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tripUncheckedUpdateManyInput = {
    headline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    person_ids?: tripUpdateperson_idsInput | Enumerable<number>
    city_ids?: tripUpdatecity_idsInput | Enumerable<number>
    no_person_and_city?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type PersonListRelationFilter = {
    every?: personWhereInput
    some?: personWhereInput
    none?: personWhereInput
  }

  export type personOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cityCountOrderByAggregateInput = {
    id?: SortOrder
    zip?: SortOrder
    city_name?: SortOrder
    country_name?: SortOrder
  }

  export type cityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cityMaxOrderByAggregateInput = {
    id?: SortOrder
    zip?: SortOrder
    city_name?: SortOrder
    country_name?: SortOrder
  }

  export type cityMinOrderByAggregateInput = {
    id?: SortOrder
    zip?: SortOrder
    city_name?: SortOrder
    country_name?: SortOrder
  }

  export type citySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CityRelationFilter = {
    is?: cityWhereInput
    isNot?: cityWhereInput
  }

  export type personCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    languages?: SortOrder
    occupation?: SortOrder
    interests?: SortOrder
    birthdate?: SortOrder
    birth_city_id?: SortOrder
    living_city_id?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    id?: SortOrder
    birth_city_id?: SortOrder
    living_city_id?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    languages?: SortOrder
    occupation?: SortOrder
    interests?: SortOrder
    birthdate?: SortOrder
    birth_city_id?: SortOrder
    living_city_id?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    languages?: SortOrder
    occupation?: SortOrder
    interests?: SortOrder
    birthdate?: SortOrder
    birth_city_id?: SortOrder
    living_city_id?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    id?: SortOrder
    birth_city_id?: SortOrder
    living_city_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableListFilter = {
    equals?: Enumerable<number> | null
    has?: number | null
    hasEvery?: Enumerable<number>
    hasSome?: Enumerable<number>
    isEmpty?: boolean
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type tripCountOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    description?: SortOrder
    person_ids?: SortOrder
    city_ids?: SortOrder
    no_person_and_city?: SortOrder
  }

  export type tripAvgOrderByAggregateInput = {
    id?: SortOrder
    person_ids?: SortOrder
    city_ids?: SortOrder
  }

  export type tripMaxOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    description?: SortOrder
    no_person_and_city?: SortOrder
  }

  export type tripMinOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    description?: SortOrder
    no_person_and_city?: SortOrder
  }

  export type tripSumOrderByAggregateInput = {
    id?: SortOrder
    person_ids?: SortOrder
    city_ids?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type personCreateNestedManyWithoutCity_person_birth_city_idTocityInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_birth_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_birth_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_birth_city_idTocityInput>
    createMany?: personCreateManyCity_person_birth_city_idTocityInputEnvelope
    connect?: Enumerable<personWhereUniqueInput>
  }

  export type personCreateNestedManyWithoutCity_person_living_city_idTocityInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_living_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_living_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_living_city_idTocityInput>
    createMany?: personCreateManyCity_person_living_city_idTocityInputEnvelope
    connect?: Enumerable<personWhereUniqueInput>
  }

  export type personUncheckedCreateNestedManyWithoutCity_person_birth_city_idTocityInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_birth_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_birth_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_birth_city_idTocityInput>
    createMany?: personCreateManyCity_person_birth_city_idTocityInputEnvelope
    connect?: Enumerable<personWhereUniqueInput>
  }

  export type personUncheckedCreateNestedManyWithoutCity_person_living_city_idTocityInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_living_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_living_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_living_city_idTocityInput>
    createMany?: personCreateManyCity_person_living_city_idTocityInputEnvelope
    connect?: Enumerable<personWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type personUpdateManyWithoutCity_person_birth_city_idTocityNestedInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_birth_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_birth_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_birth_city_idTocityInput>
    upsert?: Enumerable<personUpsertWithWhereUniqueWithoutCity_person_birth_city_idTocityInput>
    createMany?: personCreateManyCity_person_birth_city_idTocityInputEnvelope
    set?: Enumerable<personWhereUniqueInput>
    disconnect?: Enumerable<personWhereUniqueInput>
    delete?: Enumerable<personWhereUniqueInput>
    connect?: Enumerable<personWhereUniqueInput>
    update?: Enumerable<personUpdateWithWhereUniqueWithoutCity_person_birth_city_idTocityInput>
    updateMany?: Enumerable<personUpdateManyWithWhereWithoutCity_person_birth_city_idTocityInput>
    deleteMany?: Enumerable<personScalarWhereInput>
  }

  export type personUpdateManyWithoutCity_person_living_city_idTocityNestedInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_living_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_living_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_living_city_idTocityInput>
    upsert?: Enumerable<personUpsertWithWhereUniqueWithoutCity_person_living_city_idTocityInput>
    createMany?: personCreateManyCity_person_living_city_idTocityInputEnvelope
    set?: Enumerable<personWhereUniqueInput>
    disconnect?: Enumerable<personWhereUniqueInput>
    delete?: Enumerable<personWhereUniqueInput>
    connect?: Enumerable<personWhereUniqueInput>
    update?: Enumerable<personUpdateWithWhereUniqueWithoutCity_person_living_city_idTocityInput>
    updateMany?: Enumerable<personUpdateManyWithWhereWithoutCity_person_living_city_idTocityInput>
    deleteMany?: Enumerable<personScalarWhereInput>
  }

  export type personUncheckedUpdateManyWithoutCity_person_birth_city_idTocityNestedInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_birth_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_birth_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_birth_city_idTocityInput>
    upsert?: Enumerable<personUpsertWithWhereUniqueWithoutCity_person_birth_city_idTocityInput>
    createMany?: personCreateManyCity_person_birth_city_idTocityInputEnvelope
    set?: Enumerable<personWhereUniqueInput>
    disconnect?: Enumerable<personWhereUniqueInput>
    delete?: Enumerable<personWhereUniqueInput>
    connect?: Enumerable<personWhereUniqueInput>
    update?: Enumerable<personUpdateWithWhereUniqueWithoutCity_person_birth_city_idTocityInput>
    updateMany?: Enumerable<personUpdateManyWithWhereWithoutCity_person_birth_city_idTocityInput>
    deleteMany?: Enumerable<personScalarWhereInput>
  }

  export type personUncheckedUpdateManyWithoutCity_person_living_city_idTocityNestedInput = {
    create?: XOR<Enumerable<personCreateWithoutCity_person_living_city_idTocityInput>, Enumerable<personUncheckedCreateWithoutCity_person_living_city_idTocityInput>>
    connectOrCreate?: Enumerable<personCreateOrConnectWithoutCity_person_living_city_idTocityInput>
    upsert?: Enumerable<personUpsertWithWhereUniqueWithoutCity_person_living_city_idTocityInput>
    createMany?: personCreateManyCity_person_living_city_idTocityInputEnvelope
    set?: Enumerable<personWhereUniqueInput>
    disconnect?: Enumerable<personWhereUniqueInput>
    delete?: Enumerable<personWhereUniqueInput>
    connect?: Enumerable<personWhereUniqueInput>
    update?: Enumerable<personUpdateWithWhereUniqueWithoutCity_person_living_city_idTocityInput>
    updateMany?: Enumerable<personUpdateManyWithWhereWithoutCity_person_living_city_idTocityInput>
    deleteMany?: Enumerable<personScalarWhereInput>
  }

  export type cityCreateNestedOneWithoutPerson_person_birth_city_idTocityInput = {
    create?: XOR<cityCreateWithoutPerson_person_birth_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_birth_city_idTocityInput>
    connectOrCreate?: cityCreateOrConnectWithoutPerson_person_birth_city_idTocityInput
    connect?: cityWhereUniqueInput
  }

  export type cityCreateNestedOneWithoutPerson_person_living_city_idTocityInput = {
    create?: XOR<cityCreateWithoutPerson_person_living_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_living_city_idTocityInput>
    connectOrCreate?: cityCreateOrConnectWithoutPerson_person_living_city_idTocityInput
    connect?: cityWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type cityUpdateOneRequiredWithoutPerson_person_birth_city_idTocityNestedInput = {
    create?: XOR<cityCreateWithoutPerson_person_birth_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_birth_city_idTocityInput>
    connectOrCreate?: cityCreateOrConnectWithoutPerson_person_birth_city_idTocityInput
    upsert?: cityUpsertWithoutPerson_person_birth_city_idTocityInput
    connect?: cityWhereUniqueInput
    update?: XOR<cityUpdateWithoutPerson_person_birth_city_idTocityInput, cityUncheckedUpdateWithoutPerson_person_birth_city_idTocityInput>
  }

  export type cityUpdateOneRequiredWithoutPerson_person_living_city_idTocityNestedInput = {
    create?: XOR<cityCreateWithoutPerson_person_living_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_living_city_idTocityInput>
    connectOrCreate?: cityCreateOrConnectWithoutPerson_person_living_city_idTocityInput
    upsert?: cityUpsertWithoutPerson_person_living_city_idTocityInput
    connect?: cityWhereUniqueInput
    update?: XOR<cityUpdateWithoutPerson_person_living_city_idTocityInput, cityUncheckedUpdateWithoutPerson_person_living_city_idTocityInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tripCreateperson_idsInput = {
    set: Enumerable<number>
  }

  export type tripCreatecity_idsInput = {
    set: Enumerable<number>
  }

  export type tripUpdateperson_idsInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type tripUpdatecity_idsInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type personCreateWithoutCity_person_birth_city_idTocityInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    city_person_living_city_idTocity: cityCreateNestedOneWithoutPerson_person_living_city_idTocityInput
  }

  export type personUncheckedCreateWithoutCity_person_birth_city_idTocityInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    living_city_id: number
  }

  export type personCreateOrConnectWithoutCity_person_birth_city_idTocityInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutCity_person_birth_city_idTocityInput, personUncheckedCreateWithoutCity_person_birth_city_idTocityInput>
  }

  export type personCreateManyCity_person_birth_city_idTocityInputEnvelope = {
    data: Enumerable<personCreateManyCity_person_birth_city_idTocityInput>
  }

  export type personCreateWithoutCity_person_living_city_idTocityInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    city_person_birth_city_idTocity: cityCreateNestedOneWithoutPerson_person_birth_city_idTocityInput
  }

  export type personUncheckedCreateWithoutCity_person_living_city_idTocityInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    birth_city_id: number
  }

  export type personCreateOrConnectWithoutCity_person_living_city_idTocityInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutCity_person_living_city_idTocityInput, personUncheckedCreateWithoutCity_person_living_city_idTocityInput>
  }

  export type personCreateManyCity_person_living_city_idTocityInputEnvelope = {
    data: Enumerable<personCreateManyCity_person_living_city_idTocityInput>
  }

  export type personUpsertWithWhereUniqueWithoutCity_person_birth_city_idTocityInput = {
    where: personWhereUniqueInput
    update: XOR<personUpdateWithoutCity_person_birth_city_idTocityInput, personUncheckedUpdateWithoutCity_person_birth_city_idTocityInput>
    create: XOR<personCreateWithoutCity_person_birth_city_idTocityInput, personUncheckedCreateWithoutCity_person_birth_city_idTocityInput>
  }

  export type personUpdateWithWhereUniqueWithoutCity_person_birth_city_idTocityInput = {
    where: personWhereUniqueInput
    data: XOR<personUpdateWithoutCity_person_birth_city_idTocityInput, personUncheckedUpdateWithoutCity_person_birth_city_idTocityInput>
  }

  export type personUpdateManyWithWhereWithoutCity_person_birth_city_idTocityInput = {
    where: personScalarWhereInput
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyWithoutPerson_person_birth_city_idTocityInput>
  }

  export type personScalarWhereInput = {
    AND?: Enumerable<personScalarWhereInput>
    OR?: Enumerable<personScalarWhereInput>
    NOT?: Enumerable<personScalarWhereInput>
    id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    gender?: StringFilter | string
    languages?: StringFilter | string
    occupation?: StringFilter | string
    interests?: StringFilter | string
    birthdate?: DateTimeFilter | Date | string
    birth_city_id?: IntFilter | number
    living_city_id?: IntFilter | number
  }

  export type personUpsertWithWhereUniqueWithoutCity_person_living_city_idTocityInput = {
    where: personWhereUniqueInput
    update: XOR<personUpdateWithoutCity_person_living_city_idTocityInput, personUncheckedUpdateWithoutCity_person_living_city_idTocityInput>
    create: XOR<personCreateWithoutCity_person_living_city_idTocityInput, personUncheckedCreateWithoutCity_person_living_city_idTocityInput>
  }

  export type personUpdateWithWhereUniqueWithoutCity_person_living_city_idTocityInput = {
    where: personWhereUniqueInput
    data: XOR<personUpdateWithoutCity_person_living_city_idTocityInput, personUncheckedUpdateWithoutCity_person_living_city_idTocityInput>
  }

  export type personUpdateManyWithWhereWithoutCity_person_living_city_idTocityInput = {
    where: personScalarWhereInput
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyWithoutPerson_person_living_city_idTocityInput>
  }

  export type cityCreateWithoutPerson_person_birth_city_idTocityInput = {
    id: number
    zip: string
    city_name: string
    country_name: string
    person_person_living_city_idTocity?: personCreateNestedManyWithoutCity_person_living_city_idTocityInput
  }

  export type cityUncheckedCreateWithoutPerson_person_birth_city_idTocityInput = {
    id: number
    zip: string
    city_name: string
    country_name: string
    person_person_living_city_idTocity?: personUncheckedCreateNestedManyWithoutCity_person_living_city_idTocityInput
  }

  export type cityCreateOrConnectWithoutPerson_person_birth_city_idTocityInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutPerson_person_birth_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_birth_city_idTocityInput>
  }

  export type cityCreateWithoutPerson_person_living_city_idTocityInput = {
    id: number
    zip: string
    city_name: string
    country_name: string
    person_person_birth_city_idTocity?: personCreateNestedManyWithoutCity_person_birth_city_idTocityInput
  }

  export type cityUncheckedCreateWithoutPerson_person_living_city_idTocityInput = {
    id: number
    zip: string
    city_name: string
    country_name: string
    person_person_birth_city_idTocity?: personUncheckedCreateNestedManyWithoutCity_person_birth_city_idTocityInput
  }

  export type cityCreateOrConnectWithoutPerson_person_living_city_idTocityInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutPerson_person_living_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_living_city_idTocityInput>
  }

  export type cityUpsertWithoutPerson_person_birth_city_idTocityInput = {
    update: XOR<cityUpdateWithoutPerson_person_birth_city_idTocityInput, cityUncheckedUpdateWithoutPerson_person_birth_city_idTocityInput>
    create: XOR<cityCreateWithoutPerson_person_birth_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_birth_city_idTocityInput>
  }

  export type cityUpdateWithoutPerson_person_birth_city_idTocityInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
    person_person_living_city_idTocity?: personUpdateManyWithoutCity_person_living_city_idTocityNestedInput
  }

  export type cityUncheckedUpdateWithoutPerson_person_birth_city_idTocityInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
    person_person_living_city_idTocity?: personUncheckedUpdateManyWithoutCity_person_living_city_idTocityNestedInput
  }

  export type cityUpsertWithoutPerson_person_living_city_idTocityInput = {
    update: XOR<cityUpdateWithoutPerson_person_living_city_idTocityInput, cityUncheckedUpdateWithoutPerson_person_living_city_idTocityInput>
    create: XOR<cityCreateWithoutPerson_person_living_city_idTocityInput, cityUncheckedCreateWithoutPerson_person_living_city_idTocityInput>
  }

  export type cityUpdateWithoutPerson_person_living_city_idTocityInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
    person_person_birth_city_idTocity?: personUpdateManyWithoutCity_person_birth_city_idTocityNestedInput
  }

  export type cityUncheckedUpdateWithoutPerson_person_living_city_idTocityInput = {
    zip?: StringFieldUpdateOperationsInput | string
    city_name?: StringFieldUpdateOperationsInput | string
    country_name?: StringFieldUpdateOperationsInput | string
    person_person_birth_city_idTocity?: personUncheckedUpdateManyWithoutCity_person_birth_city_idTocityNestedInput
  }

  export type personCreateManyCity_person_birth_city_idTocityInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    living_city_id: number
  }

  export type personCreateManyCity_person_living_city_idTocityInput = {
    id: number
    first_name: string
    last_name: string
    gender: string
    languages: string
    occupation: string
    interests: string
    birthdate: Date | string
    birth_city_id: number
  }

  export type personUpdateWithoutCity_person_birth_city_idTocityInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    city_person_living_city_idTocity?: cityUpdateOneRequiredWithoutPerson_person_living_city_idTocityNestedInput
  }

  export type personUncheckedUpdateWithoutCity_person_birth_city_idTocityInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    living_city_id?: IntFieldUpdateOperationsInput | number
  }

  export type personUncheckedUpdateManyWithoutPerson_person_birth_city_idTocityInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    living_city_id?: IntFieldUpdateOperationsInput | number
  }

  export type personUpdateWithoutCity_person_living_city_idTocityInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    city_person_birth_city_idTocity?: cityUpdateOneRequiredWithoutPerson_person_birth_city_idTocityNestedInput
  }

  export type personUncheckedUpdateWithoutCity_person_living_city_idTocityInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_city_id?: IntFieldUpdateOperationsInput | number
  }

  export type personUncheckedUpdateManyWithoutPerson_person_living_city_idTocityInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    languages?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    interests?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_city_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}