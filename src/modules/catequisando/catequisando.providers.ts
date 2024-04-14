import { DataSource } from "typeorm";
import { Catequisando } from "./entities/catequisando.entity";

export const CatequisandoProviders = [
  {
    provide: "CATEQUISANDO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Catequisando),
    inject: ["DATA_SOURCE"],
  },
];
