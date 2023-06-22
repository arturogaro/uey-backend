import { ArgsType, Field } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProductType } from '../schemas/product.schema';

@ArgsType()
export class FindProductsArgs {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  id?: string;

  @Field(() => ProductType, { nullable: true })
  @IsOptional()
  @IsEnum(ProductType)
  type?: string;
}
