import { NumericLiteral } from "typescript";

export interface IConfig {
  user?: string, // default process.env.PGUSER || process.env.USER
  password?: string, //default process.env.PGPASSWORD
  host?: string, // default process.env.PGHOST
  database?: string, // default process.env.PGDATABASE || process.env.USER
  port?: number, // default process.env.PGPORT
  connectionString?: string, // e.g. postgres://user:password@host:5432/database
  ssl?: any, // passed directly to node.TLSSocket, supports all tls.connect options
  types?: any, // custom type parsers
  statement_timeout?: number, // number of milliseconds before a statement in query will time out, default is no timeout
  query_timeout?: number, // number of milliseconds before a query call will timeout, default is no timeout
  connectionTimeoutMillis?: number, // number of milliseconds to wait for connection, default is no timeout
  idle_in_transaction_session_timeout?: number // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
}

export const defaultConfig: IConfig = {
  host: '127.0.0.1',
  user: 'postgres',
  database: 'postgres',
  password: '123123',
  port: 5432,
  connectionTimeoutMillis: 5000,
}
