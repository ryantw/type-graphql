import { registerEnumType, ObjectType, Field, Int, Float, ID, Resolver, FieldResolver, Root, Ctx, InputType, Query, Mutation, Arg, ArgsType, Args } from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { PostFilter } from "../inputs/PostFilter";
import { Role } from "../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserWhereInput {
  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  name?: NullableStringFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  age?: IntFilter | null;

  @Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  balance?: FloatFilter | null;

  @Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  amount?: FloatFilter | null;

  @Field(_type => PostFilter, {
    nullable: true,
    description: undefined
  })
  posts?: PostFilter | null;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: UserWhereInput[] | null;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: UserWhereInput[] | null;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: UserWhereInput[] | null;
}
