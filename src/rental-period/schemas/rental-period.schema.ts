import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Product } from 'src/product/schemas/product.schema';

export type RentalPeriodDocument = HydratedDocument<RentalPeriod>;

@Schema()
@ObjectType()
export class RentalPeriod {
  @Field(() => ID, { name: 'id' })
  _id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  @Field(() => Product)
  product: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => Date)
  startDate: Date;

  @Prop({ required: true })
  @Field(() => Date)
  endDate: Date;
}

export const RentalPeriodSchema = SchemaFactory.createForClass(RentalPeriod);
