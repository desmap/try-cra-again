import 'reflect-metadata'
import { ObjectId } from 'bson'
import { ObjectType, ID, Field, ArgsType, Int } from 'type-graphql'
import { IsMongoId, MaxLength, ArrayMaxSize } from 'class-validator'
import check from './check'

@ObjectType()
@ArgsType()
export default class Movie {
  static check = check

  @IsMongoId()
  @Field(type => ID, { nullable: true })
  _id?: ObjectId

  @Field({ nullable: true })
  desc?: string

  @MaxLength(255)
  @Field({ nullable: true })
  title?: string

  @ArrayMaxSize(2)
  @Field(type => [Int!], { nullable: true })
  cursor?: number[]
}
