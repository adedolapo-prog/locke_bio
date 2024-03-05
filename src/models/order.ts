import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import Pharmacy from "./pharmacy";

interface IOrder {
  id: number;
  product: string;
  quantity: number;
  pharmacyId: number;
  customerInfo: ICustomer;
}

interface ICustomer {
  custName: string;
  custAddress: string;
  custCity: string;
  custState: string;
  custZipcode: string;
  custCountry: string;
}

export interface IOrderExt extends Optional<IOrder, "id" | "pharmacyId"> {}

@Table({
  timestamps: true,
  tableName: "orders",
  modelName: "Order",
})
export default class Order extends Model<IOrderExt> {
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
  product!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  customerInfo!: object;

  @ForeignKey(() => Pharmacy)
  @Column
  pharmacyId!: number;

  @BelongsTo(() => Pharmacy)
  pharmacy!: Pharmacy;
}
