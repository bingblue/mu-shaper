import { createConnection } from "typeorm"
import config from '../../config'
const mysql = async () => {
  return await createConnection({
    type: "mysql",
    logging: true,
    entities: ["server/models/*.ts"],
    ...config.db.mysql
  })
}
export { mysql }
