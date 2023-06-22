import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  Field,
  Float,
  ObjectType,
  Int,
  registerEnumType,
  ID,
} from '@nestjs/graphql';

export type CatDocument = HydratedDocument<Product>;

export enum ProductType {
  SIMPLE = 'SIMPLE',
  RENTABLE = 'RENTABLE',
  SPACE = 'SPACE',
}

registerEnumType(ProductType, {
  name: 'ProductType',
});

export enum RentType {
  PER_HOUR = 'PER_HOUR',
  PER_NIGHT = 'PER_NIGHT',
}

registerEnumType(RentType, {
  name: 'RentType',
});

@Schema()
@ObjectType()
export class Product {
  @Field(() => ID, { name: 'id' })
  _id: string;

  @Prop({ required: true })
  @Field(() => String)
  name: string;

  @Prop({ required: true })
  @Field(() => String)
  slug: string;

  @Prop({ required: true })
  @Field(() => String)
  seller: string;

  @Prop({ required: true })
  @Field(() => String)
  imageUrl: string;

  @Prop({ required: true })
  @Field(() => Float)
  price: number;

  @Prop({ type: String, enum: Object.values(ProductType) })
  @Field(() => ProductType, { nullable: true })
  type: ProductType;

  @Prop()
  @Field(() => Int, { nullable: true })
  stock?: number;

  @Prop({ type: String, enum: Object.values(RentType) })
  @Field(() => RentType, { nullable: true })
  rentType?: RentType;

  @Prop()
  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Prop()
  @Field(() => Float, { nullable: true })
  longitude?: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
