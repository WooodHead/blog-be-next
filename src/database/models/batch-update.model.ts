import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class BatchUpdateModel {
  @Field({ nullable: true })
  public readonly ok?: number

  @Field({ nullable: true })
  public readonly n?: number

  @Field({ nullable: true })
  public readonly nModified?: number
}
