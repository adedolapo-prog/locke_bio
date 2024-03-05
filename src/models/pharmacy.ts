import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { Optional } from "sequelize";
import Order from "./order";

interface IPharmacy {
  id: number;
  integrationName: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  fax: string;
  phone: string;
}

export interface IPharmacyExt extends Optional<IPharmacy, "id"> {}

@Table({
  timestamps: true,
  tableName: "pharmacy",
  modelName: "Pharmacy",
})
export default class Pharmacy extends Model<IPharmacyExt> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  integrationName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  zipcode!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fax!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone!: string;

  @HasMany(() => Order)
  orders!: Order[];
}
