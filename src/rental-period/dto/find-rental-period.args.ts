import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class FindRentalPeriodArgs {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  productId: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  startDate?: number;
}
