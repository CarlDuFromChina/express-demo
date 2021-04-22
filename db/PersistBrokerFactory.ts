import { Client } from 'pg';
import { isNil } from "../common/isNull";
import defaultConfig from './dbConfig';

interface IClient {
  connect: () => Promise<any>,
  query: (sql: string, values: Array<any>) => Promise<any>,
  end(): void
}

interface IResult {
  command: string,
  rowCount: number,
  rows: Array<any>,
  fields: Array<any>,
  RowCtor: any,
  rowAsArray: boolean
}

class PersistBroker {
  client: IClient;

  constructor(config?: Object) {
    if (isNil(config)) {
      this.client = new Client(defaultConfig);
    } else {
      this.client = new Client(config)
    }
  }

  /**
   * 
   * @param sql SQL语句
   * @param values 参数
   * @returns 
   */
  execute(sql: string, values?: Array<Object>): Promise<IResult> {
    return this.client.connect()
      .then(() => this.client.query(sql, values))
      .catch((err) => {
        console.error(err.stack);
      })
      .finally(() => {
        this.client.end();
      });
  }

  /**
   * 获取当前时间
   * @returns current time
   */
  async getNow() {
    const result = await this.execute('SELECT NOW()');
    return result.rows[0].now;
  }
}

export default PersistBroker;
