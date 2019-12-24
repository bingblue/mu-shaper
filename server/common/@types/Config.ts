export interface Config {
  website: {
    port: number;
    cert: any;
    key: any;
  };
  db: {
    mysql: {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
  };
}
