import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "author" */
export type Author = {
  __typename?: 'author';
  /** An array relationship */
  book: Array<Book>;
  /** An aggregated array relationship */
  book_aggregate: Book_Aggregate;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastname?: Maybe<Scalars['String']>;
};


/** columns and relationships of "author" */
export type AuthorBookArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** columns and relationships of "author" */
export type AuthorBook_AggregateArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};

/** aggregated selection of "author" */
export type Author_Aggregate = {
  __typename?: 'author_aggregate';
  aggregate?: Maybe<Author_Aggregate_Fields>;
  nodes: Array<Author>;
};

/** aggregate fields of "author" */
export type Author_Aggregate_Fields = {
  __typename?: 'author_aggregate_fields';
  avg?: Maybe<Author_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Author_Max_Fields>;
  min?: Maybe<Author_Min_Fields>;
  stddev?: Maybe<Author_Stddev_Fields>;
  stddev_pop?: Maybe<Author_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Author_Stddev_Samp_Fields>;
  sum?: Maybe<Author_Sum_Fields>;
  var_pop?: Maybe<Author_Var_Pop_Fields>;
  var_samp?: Maybe<Author_Var_Samp_Fields>;
  variance?: Maybe<Author_Variance_Fields>;
};


/** aggregate fields of "author" */
export type Author_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Author_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "author" */
export type Author_Aggregate_Order_By = {
  avg?: Maybe<Author_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Author_Max_Order_By>;
  min?: Maybe<Author_Min_Order_By>;
  stddev?: Maybe<Author_Stddev_Order_By>;
  stddev_pop?: Maybe<Author_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Author_Stddev_Samp_Order_By>;
  sum?: Maybe<Author_Sum_Order_By>;
  var_pop?: Maybe<Author_Var_Pop_Order_By>;
  var_samp?: Maybe<Author_Var_Samp_Order_By>;
  variance?: Maybe<Author_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "author" */
export type Author_Arr_Rel_Insert_Input = {
  data: Array<Author_Insert_Input>;
  on_conflict?: Maybe<Author_On_Conflict>;
};

/** aggregate avg on columns */
export type Author_Avg_Fields = {
  __typename?: 'author_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "author" */
export type Author_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "author". All fields are combined with a logical 'AND'. */
export type Author_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Author_Bool_Exp>>>;
  _not?: Maybe<Author_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Author_Bool_Exp>>>;
  book?: Maybe<Book_Bool_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "author" */
export enum Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = 'author_pkey'
}

/** input type for incrementing integer column in table "author" */
export type Author_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "author" */
export type Author_Insert_Input = {
  book?: Maybe<Book_Arr_Rel_Insert_Input>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Author_Max_Fields = {
  __typename?: 'author_max_fields';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "author" */
export type Author_Max_Order_By = {
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Author_Min_Fields = {
  __typename?: 'author_min_fields';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "author" */
export type Author_Min_Order_By = {
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** response of any mutation on the table "author" */
export type Author_Mutation_Response = {
  __typename?: 'author_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Author>;
};

/** input type for inserting object relation for remote table "author" */
export type Author_Obj_Rel_Insert_Input = {
  data: Author_Insert_Input;
  on_conflict?: Maybe<Author_On_Conflict>;
};

/** on conflict condition type for table "author" */
export type Author_On_Conflict = {
  constraint: Author_Constraint;
  update_columns: Array<Author_Update_Column>;
  where?: Maybe<Author_Bool_Exp>;
};

/** ordering options when selecting data from "author" */
export type Author_Order_By = {
  book_aggregate?: Maybe<Book_Aggregate_Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** primary key columns input for table: "author" */
export type Author_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "author" */
export enum Author_Select_Column {
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname'
}

/** input type for updating data in table "author" */
export type Author_Set_Input = {
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Author_Stddev_Fields = {
  __typename?: 'author_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "author" */
export type Author_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Author_Stddev_Pop_Fields = {
  __typename?: 'author_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "author" */
export type Author_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Author_Stddev_Samp_Fields = {
  __typename?: 'author_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "author" */
export type Author_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Author_Sum_Fields = {
  __typename?: 'author_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "author" */
export type Author_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "author" */
export enum Author_Update_Column {
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname'
}

/** aggregate var_pop on columns */
export type Author_Var_Pop_Fields = {
  __typename?: 'author_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "author" */
export type Author_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Author_Var_Samp_Fields = {
  __typename?: 'author_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "author" */
export type Author_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Author_Variance_Fields = {
  __typename?: 'author_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "author" */
export type Author_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "book" */
export type Book = {
  __typename?: 'book';
  /** An object relationship */
  author?: Maybe<Author>;
  authorid?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

/** aggregated selection of "book" */
export type Book_Aggregate = {
  __typename?: 'book_aggregate';
  aggregate?: Maybe<Book_Aggregate_Fields>;
  nodes: Array<Book>;
};

/** aggregate fields of "book" */
export type Book_Aggregate_Fields = {
  __typename?: 'book_aggregate_fields';
  avg?: Maybe<Book_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Book_Max_Fields>;
  min?: Maybe<Book_Min_Fields>;
  stddev?: Maybe<Book_Stddev_Fields>;
  stddev_pop?: Maybe<Book_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Book_Stddev_Samp_Fields>;
  sum?: Maybe<Book_Sum_Fields>;
  var_pop?: Maybe<Book_Var_Pop_Fields>;
  var_samp?: Maybe<Book_Var_Samp_Fields>;
  variance?: Maybe<Book_Variance_Fields>;
};


/** aggregate fields of "book" */
export type Book_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Book_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "book" */
export type Book_Aggregate_Order_By = {
  avg?: Maybe<Book_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Book_Max_Order_By>;
  min?: Maybe<Book_Min_Order_By>;
  stddev?: Maybe<Book_Stddev_Order_By>;
  stddev_pop?: Maybe<Book_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Book_Stddev_Samp_Order_By>;
  sum?: Maybe<Book_Sum_Order_By>;
  var_pop?: Maybe<Book_Var_Pop_Order_By>;
  var_samp?: Maybe<Book_Var_Samp_Order_By>;
  variance?: Maybe<Book_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "book" */
export type Book_Arr_Rel_Insert_Input = {
  data: Array<Book_Insert_Input>;
  on_conflict?: Maybe<Book_On_Conflict>;
};

/** aggregate avg on columns */
export type Book_Avg_Fields = {
  __typename?: 'book_avg_fields';
  authorid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "book" */
export type Book_Avg_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "book". All fields are combined with a logical 'AND'. */
export type Book_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Book_Bool_Exp>>>;
  _not?: Maybe<Book_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Book_Bool_Exp>>>;
  author?: Maybe<Author_Bool_Exp>;
  authorid?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "book" */
export enum Book_Constraint {
  /** unique or primary key constraint */
  BookPkey = 'book_pkey'
}

/** input type for incrementing integer column in table "book" */
export type Book_Inc_Input = {
  authorid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "book" */
export type Book_Insert_Input = {
  author?: Maybe<Author_Obj_Rel_Insert_Input>;
  authorid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Book_Max_Fields = {
  __typename?: 'book_max_fields';
  authorid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "book" */
export type Book_Max_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Book_Min_Fields = {
  __typename?: 'book_min_fields';
  authorid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "book" */
export type Book_Min_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "book" */
export type Book_Mutation_Response = {
  __typename?: 'book_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Book>;
};

/** input type for inserting object relation for remote table "book" */
export type Book_Obj_Rel_Insert_Input = {
  data: Book_Insert_Input;
  on_conflict?: Maybe<Book_On_Conflict>;
};

/** on conflict condition type for table "book" */
export type Book_On_Conflict = {
  constraint: Book_Constraint;
  update_columns: Array<Book_Update_Column>;
  where?: Maybe<Book_Bool_Exp>;
};

/** ordering options when selecting data from "book" */
export type Book_Order_By = {
  author?: Maybe<Author_Order_By>;
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "book" */
export type Book_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "book" */
export enum Book_Select_Column {
  /** column name */
  Authorid = 'authorid',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "book" */
export type Book_Set_Input = {
  authorid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Book_Stddev_Fields = {
  __typename?: 'book_stddev_fields';
  authorid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "book" */
export type Book_Stddev_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Book_Stddev_Pop_Fields = {
  __typename?: 'book_stddev_pop_fields';
  authorid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "book" */
export type Book_Stddev_Pop_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Book_Stddev_Samp_Fields = {
  __typename?: 'book_stddev_samp_fields';
  authorid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "book" */
export type Book_Stddev_Samp_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Book_Sum_Fields = {
  __typename?: 'book_sum_fields';
  authorid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "book" */
export type Book_Sum_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "book" */
export enum Book_Update_Column {
  /** column name */
  Authorid = 'authorid',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Book_Var_Pop_Fields = {
  __typename?: 'book_var_pop_fields';
  authorid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "book" */
export type Book_Var_Pop_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Book_Var_Samp_Fields = {
  __typename?: 'book_var_samp_fields';
  authorid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "book" */
export type Book_Var_Samp_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Book_Variance_Fields = {
  __typename?: 'book_variance_fields';
  authorid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "book" */
export type Book_Variance_Order_By = {
  authorid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "author" */
  delete_author?: Maybe<Author_Mutation_Response>;
  /** delete single row from the table: "author" */
  delete_author_by_pk?: Maybe<Author>;
  /** delete data from the table: "book" */
  delete_book?: Maybe<Book_Mutation_Response>;
  /** delete single row from the table: "book" */
  delete_book_by_pk?: Maybe<Book>;
  /** insert data into the table: "author" */
  insert_author?: Maybe<Author_Mutation_Response>;
  /** insert a single row into the table: "author" */
  insert_author_one?: Maybe<Author>;
  /** insert data into the table: "book" */
  insert_book?: Maybe<Book_Mutation_Response>;
  /** insert a single row into the table: "book" */
  insert_book_one?: Maybe<Book>;
  /** update data of the table: "author" */
  update_author?: Maybe<Author_Mutation_Response>;
  /** update single row of the table: "author" */
  update_author_by_pk?: Maybe<Author>;
  /** update data of the table: "book" */
  update_book?: Maybe<Book_Mutation_Response>;
  /** update single row of the table: "book" */
  update_book_by_pk?: Maybe<Book>;
};


/** mutation root */
export type Mutation_RootDelete_AuthorArgs = {
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Author_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_BookArgs = {
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Book_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AuthorArgs = {
  objects: Array<Author_Insert_Input>;
  on_conflict?: Maybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Author_OneArgs = {
  object: Author_Insert_Input;
  on_conflict?: Maybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BookArgs = {
  objects: Array<Book_Insert_Input>;
  on_conflict?: Maybe<Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_OneArgs = {
  object: Book_Insert_Input;
  on_conflict?: Maybe<Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorArgs = {
  _inc?: Maybe<Author_Inc_Input>;
  _set?: Maybe<Author_Set_Input>;
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_By_PkArgs = {
  _inc?: Maybe<Author_Inc_Input>;
  _set?: Maybe<Author_Set_Input>;
  pk_columns: Author_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BookArgs = {
  _inc?: Maybe<Book_Inc_Input>;
  _set?: Maybe<Book_Set_Input>;
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Book_By_PkArgs = {
  _inc?: Maybe<Book_Inc_Input>;
  _set?: Maybe<Book_Set_Input>;
  pk_columns: Book_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "book" */
  book: Array<Book>;
  /** fetch aggregated fields from the table: "book" */
  book_aggregate: Book_Aggregate;
  /** fetch data from the table: "book" using primary key columns */
  book_by_pk?: Maybe<Book>;
};


/** query root */
export type Query_RootAuthorArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** query root */
export type Query_RootAuthor_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** query root */
export type Query_RootAuthor_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBookArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** query root */
export type Query_RootBook_AggregateArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** query root */
export type Query_RootBook_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "book" */
  book: Array<Book>;
  /** fetch aggregated fields from the table: "book" */
  book_aggregate: Book_Aggregate;
  /** fetch data from the table: "book" using primary key columns */
  book_by_pk?: Maybe<Book>;
};


/** subscription root */
export type Subscription_RootAuthorArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuthor_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Order_By>>;
  where?: Maybe<Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuthor_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBookArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBook_AggregateArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBook_By_PkArgs = {
  id: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  author: ResolverTypeWrapper<Author>;
  author_aggregate: ResolverTypeWrapper<Author_Aggregate>;
  author_aggregate_fields: ResolverTypeWrapper<Author_Aggregate_Fields>;
  author_aggregate_order_by: Author_Aggregate_Order_By;
  author_arr_rel_insert_input: Author_Arr_Rel_Insert_Input;
  author_avg_fields: ResolverTypeWrapper<Author_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  author_avg_order_by: Author_Avg_Order_By;
  author_bool_exp: Author_Bool_Exp;
  author_constraint: Author_Constraint;
  author_inc_input: Author_Inc_Input;
  author_insert_input: Author_Insert_Input;
  author_max_fields: ResolverTypeWrapper<Author_Max_Fields>;
  author_max_order_by: Author_Max_Order_By;
  author_min_fields: ResolverTypeWrapper<Author_Min_Fields>;
  author_min_order_by: Author_Min_Order_By;
  author_mutation_response: ResolverTypeWrapper<Author_Mutation_Response>;
  author_obj_rel_insert_input: Author_Obj_Rel_Insert_Input;
  author_on_conflict: Author_On_Conflict;
  author_order_by: Author_Order_By;
  author_pk_columns_input: Author_Pk_Columns_Input;
  author_select_column: Author_Select_Column;
  author_set_input: Author_Set_Input;
  author_stddev_fields: ResolverTypeWrapper<Author_Stddev_Fields>;
  author_stddev_order_by: Author_Stddev_Order_By;
  author_stddev_pop_fields: ResolverTypeWrapper<Author_Stddev_Pop_Fields>;
  author_stddev_pop_order_by: Author_Stddev_Pop_Order_By;
  author_stddev_samp_fields: ResolverTypeWrapper<Author_Stddev_Samp_Fields>;
  author_stddev_samp_order_by: Author_Stddev_Samp_Order_By;
  author_sum_fields: ResolverTypeWrapper<Author_Sum_Fields>;
  author_sum_order_by: Author_Sum_Order_By;
  author_update_column: Author_Update_Column;
  author_var_pop_fields: ResolverTypeWrapper<Author_Var_Pop_Fields>;
  author_var_pop_order_by: Author_Var_Pop_Order_By;
  author_var_samp_fields: ResolverTypeWrapper<Author_Var_Samp_Fields>;
  author_var_samp_order_by: Author_Var_Samp_Order_By;
  author_variance_fields: ResolverTypeWrapper<Author_Variance_Fields>;
  author_variance_order_by: Author_Variance_Order_By;
  book: ResolverTypeWrapper<Book>;
  book_aggregate: ResolverTypeWrapper<Book_Aggregate>;
  book_aggregate_fields: ResolverTypeWrapper<Book_Aggregate_Fields>;
  book_aggregate_order_by: Book_Aggregate_Order_By;
  book_arr_rel_insert_input: Book_Arr_Rel_Insert_Input;
  book_avg_fields: ResolverTypeWrapper<Book_Avg_Fields>;
  book_avg_order_by: Book_Avg_Order_By;
  book_bool_exp: Book_Bool_Exp;
  book_constraint: Book_Constraint;
  book_inc_input: Book_Inc_Input;
  book_insert_input: Book_Insert_Input;
  book_max_fields: ResolverTypeWrapper<Book_Max_Fields>;
  book_max_order_by: Book_Max_Order_By;
  book_min_fields: ResolverTypeWrapper<Book_Min_Fields>;
  book_min_order_by: Book_Min_Order_By;
  book_mutation_response: ResolverTypeWrapper<Book_Mutation_Response>;
  book_obj_rel_insert_input: Book_Obj_Rel_Insert_Input;
  book_on_conflict: Book_On_Conflict;
  book_order_by: Book_Order_By;
  book_pk_columns_input: Book_Pk_Columns_Input;
  book_select_column: Book_Select_Column;
  book_set_input: Book_Set_Input;
  book_stddev_fields: ResolverTypeWrapper<Book_Stddev_Fields>;
  book_stddev_order_by: Book_Stddev_Order_By;
  book_stddev_pop_fields: ResolverTypeWrapper<Book_Stddev_Pop_Fields>;
  book_stddev_pop_order_by: Book_Stddev_Pop_Order_By;
  book_stddev_samp_fields: ResolverTypeWrapper<Book_Stddev_Samp_Fields>;
  book_stddev_samp_order_by: Book_Stddev_Samp_Order_By;
  book_sum_fields: ResolverTypeWrapper<Book_Sum_Fields>;
  book_sum_order_by: Book_Sum_Order_By;
  book_update_column: Book_Update_Column;
  book_var_pop_fields: ResolverTypeWrapper<Book_Var_Pop_Fields>;
  book_var_pop_order_by: Book_Var_Pop_Order_By;
  book_var_samp_fields: ResolverTypeWrapper<Book_Var_Samp_Fields>;
  book_var_samp_order_by: Book_Var_Samp_Order_By;
  book_variance_fields: ResolverTypeWrapper<Book_Variance_Fields>;
  book_variance_order_by: Book_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars['String'];
  author: Author;
  author_aggregate: Author_Aggregate;
  author_aggregate_fields: Author_Aggregate_Fields;
  author_aggregate_order_by: Author_Aggregate_Order_By;
  author_arr_rel_insert_input: Author_Arr_Rel_Insert_Input;
  author_avg_fields: Author_Avg_Fields;
  Float: Scalars['Float'];
  author_avg_order_by: Author_Avg_Order_By;
  author_bool_exp: Author_Bool_Exp;
  author_inc_input: Author_Inc_Input;
  author_insert_input: Author_Insert_Input;
  author_max_fields: Author_Max_Fields;
  author_max_order_by: Author_Max_Order_By;
  author_min_fields: Author_Min_Fields;
  author_min_order_by: Author_Min_Order_By;
  author_mutation_response: Author_Mutation_Response;
  author_obj_rel_insert_input: Author_Obj_Rel_Insert_Input;
  author_on_conflict: Author_On_Conflict;
  author_order_by: Author_Order_By;
  author_pk_columns_input: Author_Pk_Columns_Input;
  author_set_input: Author_Set_Input;
  author_stddev_fields: Author_Stddev_Fields;
  author_stddev_order_by: Author_Stddev_Order_By;
  author_stddev_pop_fields: Author_Stddev_Pop_Fields;
  author_stddev_pop_order_by: Author_Stddev_Pop_Order_By;
  author_stddev_samp_fields: Author_Stddev_Samp_Fields;
  author_stddev_samp_order_by: Author_Stddev_Samp_Order_By;
  author_sum_fields: Author_Sum_Fields;
  author_sum_order_by: Author_Sum_Order_By;
  author_var_pop_fields: Author_Var_Pop_Fields;
  author_var_pop_order_by: Author_Var_Pop_Order_By;
  author_var_samp_fields: Author_Var_Samp_Fields;
  author_var_samp_order_by: Author_Var_Samp_Order_By;
  author_variance_fields: Author_Variance_Fields;
  author_variance_order_by: Author_Variance_Order_By;
  book: Book;
  book_aggregate: Book_Aggregate;
  book_aggregate_fields: Book_Aggregate_Fields;
  book_aggregate_order_by: Book_Aggregate_Order_By;
  book_arr_rel_insert_input: Book_Arr_Rel_Insert_Input;
  book_avg_fields: Book_Avg_Fields;
  book_avg_order_by: Book_Avg_Order_By;
  book_bool_exp: Book_Bool_Exp;
  book_inc_input: Book_Inc_Input;
  book_insert_input: Book_Insert_Input;
  book_max_fields: Book_Max_Fields;
  book_max_order_by: Book_Max_Order_By;
  book_min_fields: Book_Min_Fields;
  book_min_order_by: Book_Min_Order_By;
  book_mutation_response: Book_Mutation_Response;
  book_obj_rel_insert_input: Book_Obj_Rel_Insert_Input;
  book_on_conflict: Book_On_Conflict;
  book_order_by: Book_Order_By;
  book_pk_columns_input: Book_Pk_Columns_Input;
  book_set_input: Book_Set_Input;
  book_stddev_fields: Book_Stddev_Fields;
  book_stddev_order_by: Book_Stddev_Order_By;
  book_stddev_pop_fields: Book_Stddev_Pop_Fields;
  book_stddev_pop_order_by: Book_Stddev_Pop_Order_By;
  book_stddev_samp_fields: Book_Stddev_Samp_Fields;
  book_stddev_samp_order_by: Book_Stddev_Samp_Order_By;
  book_sum_fields: Book_Sum_Fields;
  book_sum_order_by: Book_Sum_Order_By;
  book_var_pop_fields: Book_Var_Pop_Fields;
  book_var_pop_order_by: Book_Var_Pop_Order_By;
  book_var_samp_fields: Book_Var_Samp_Fields;
  book_var_samp_order_by: Book_Var_Samp_Order_By;
  book_variance_fields: Book_Variance_Fields;
  book_variance_order_by: Book_Variance_Order_By;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
}>;

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['author'] = ResolversParentTypes['author']> = ResolversObject<{
  book?: Resolver<Array<ResolversTypes['book']>, ParentType, ContextType, RequireFields<AuthorBookArgs, never>>;
  book_aggregate?: Resolver<ResolversTypes['book_aggregate'], ParentType, ContextType, RequireFields<AuthorBook_AggregateArgs, never>>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_aggregate'] = ResolversParentTypes['author_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['author_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_aggregate_fields'] = ResolversParentTypes['author_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['author_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Author_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['author_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['author_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['author_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['author_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['author_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['author_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['author_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['author_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['author_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_avg_fields'] = ResolversParentTypes['author_avg_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_max_fields'] = ResolversParentTypes['author_max_fields']> = ResolversObject<{
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_min_fields'] = ResolversParentTypes['author_min_fields']> = ResolversObject<{
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_mutation_response'] = ResolversParentTypes['author_mutation_response']> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_stddev_fields'] = ResolversParentTypes['author_stddev_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_stddev_pop_fields'] = ResolversParentTypes['author_stddev_pop_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_stddev_samp_fields'] = ResolversParentTypes['author_stddev_samp_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_sum_fields'] = ResolversParentTypes['author_sum_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_var_pop_fields'] = ResolversParentTypes['author_var_pop_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_var_samp_fields'] = ResolversParentTypes['author_var_samp_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Author_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['author_variance_fields'] = ResolversParentTypes['author_variance_fields']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['book'] = ResolversParentTypes['book']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType>;
  authorid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_aggregate'] = ResolversParentTypes['book_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['book_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['book']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_aggregate_fields'] = ResolversParentTypes['book_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['book_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Book_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['book_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['book_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['book_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['book_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['book_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['book_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['book_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['book_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['book_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_avg_fields'] = ResolversParentTypes['book_avg_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_max_fields'] = ResolversParentTypes['book_max_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_min_fields'] = ResolversParentTypes['book_min_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_mutation_response'] = ResolversParentTypes['book_mutation_response']> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['book']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_stddev_fields'] = ResolversParentTypes['book_stddev_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_stddev_pop_fields'] = ResolversParentTypes['book_stddev_pop_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_stddev_samp_fields'] = ResolversParentTypes['book_stddev_samp_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_sum_fields'] = ResolversParentTypes['book_sum_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_var_pop_fields'] = ResolversParentTypes['book_var_pop_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_var_samp_fields'] = ResolversParentTypes['book_var_samp_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Book_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['book_variance_fields'] = ResolversParentTypes['book_variance_fields']> = ResolversObject<{
  authorid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = ResolversObject<{
  delete_author?: Resolver<Maybe<ResolversTypes['author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AuthorArgs, 'where'>>;
  delete_author_by_pk?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Author_By_PkArgs, 'id'>>;
  delete_book?: Resolver<Maybe<ResolversTypes['book_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_BookArgs, 'where'>>;
  delete_book_by_pk?: Resolver<Maybe<ResolversTypes['book']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Book_By_PkArgs, 'id'>>;
  insert_author?: Resolver<Maybe<ResolversTypes['author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AuthorArgs, 'objects'>>;
  insert_author_one?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Author_OneArgs, 'object'>>;
  insert_book?: Resolver<Maybe<ResolversTypes['book_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_BookArgs, 'objects'>>;
  insert_book_one?: Resolver<Maybe<ResolversTypes['book']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Book_OneArgs, 'object'>>;
  update_author?: Resolver<Maybe<ResolversTypes['author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AuthorArgs, 'where'>>;
  update_author_by_pk?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Author_By_PkArgs, 'pk_columns'>>;
  update_book?: Resolver<Maybe<ResolversTypes['book_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_BookArgs, 'where'>>;
  update_book_by_pk?: Resolver<Maybe<ResolversTypes['book']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Book_By_PkArgs, 'pk_columns'>>;
}>;

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = ResolversObject<{
  author?: Resolver<Array<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Query_RootAuthorArgs, never>>;
  author_aggregate?: Resolver<ResolversTypes['author_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthor_AggregateArgs, never>>;
  author_by_pk?: Resolver<Maybe<ResolversTypes['author']>, ParentType, ContextType, RequireFields<Query_RootAuthor_By_PkArgs, 'id'>>;
  book?: Resolver<Array<ResolversTypes['book']>, ParentType, ContextType, RequireFields<Query_RootBookArgs, never>>;
  book_aggregate?: Resolver<ResolversTypes['book_aggregate'], ParentType, ContextType, RequireFields<Query_RootBook_AggregateArgs, never>>;
  book_by_pk?: Resolver<Maybe<ResolversTypes['book']>, ParentType, ContextType, RequireFields<Query_RootBook_By_PkArgs, 'id'>>;
}>;

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = ResolversObject<{
  author?: SubscriptionResolver<Array<ResolversTypes['author']>, "author", ParentType, ContextType, RequireFields<Subscription_RootAuthorArgs, never>>;
  author_aggregate?: SubscriptionResolver<ResolversTypes['author_aggregate'], "author_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthor_AggregateArgs, never>>;
  author_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['author']>, "author_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuthor_By_PkArgs, 'id'>>;
  book?: SubscriptionResolver<Array<ResolversTypes['book']>, "book", ParentType, ContextType, RequireFields<Subscription_RootBookArgs, never>>;
  book_aggregate?: SubscriptionResolver<ResolversTypes['book_aggregate'], "book_aggregate", ParentType, ContextType, RequireFields<Subscription_RootBook_AggregateArgs, never>>;
  book_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['book']>, "book_by_pk", ParentType, ContextType, RequireFields<Subscription_RootBook_By_PkArgs, 'id'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  author?: AuthorResolvers<ContextType>;
  author_aggregate?: Author_AggregateResolvers<ContextType>;
  author_aggregate_fields?: Author_Aggregate_FieldsResolvers<ContextType>;
  author_avg_fields?: Author_Avg_FieldsResolvers<ContextType>;
  author_max_fields?: Author_Max_FieldsResolvers<ContextType>;
  author_min_fields?: Author_Min_FieldsResolvers<ContextType>;
  author_mutation_response?: Author_Mutation_ResponseResolvers<ContextType>;
  author_stddev_fields?: Author_Stddev_FieldsResolvers<ContextType>;
  author_stddev_pop_fields?: Author_Stddev_Pop_FieldsResolvers<ContextType>;
  author_stddev_samp_fields?: Author_Stddev_Samp_FieldsResolvers<ContextType>;
  author_sum_fields?: Author_Sum_FieldsResolvers<ContextType>;
  author_var_pop_fields?: Author_Var_Pop_FieldsResolvers<ContextType>;
  author_var_samp_fields?: Author_Var_Samp_FieldsResolvers<ContextType>;
  author_variance_fields?: Author_Variance_FieldsResolvers<ContextType>;
  book?: BookResolvers<ContextType>;
  book_aggregate?: Book_AggregateResolvers<ContextType>;
  book_aggregate_fields?: Book_Aggregate_FieldsResolvers<ContextType>;
  book_avg_fields?: Book_Avg_FieldsResolvers<ContextType>;
  book_max_fields?: Book_Max_FieldsResolvers<ContextType>;
  book_min_fields?: Book_Min_FieldsResolvers<ContextType>;
  book_mutation_response?: Book_Mutation_ResponseResolvers<ContextType>;
  book_stddev_fields?: Book_Stddev_FieldsResolvers<ContextType>;
  book_stddev_pop_fields?: Book_Stddev_Pop_FieldsResolvers<ContextType>;
  book_stddev_samp_fields?: Book_Stddev_Samp_FieldsResolvers<ContextType>;
  book_sum_fields?: Book_Sum_FieldsResolvers<ContextType>;
  book_var_pop_fields?: Book_Var_Pop_FieldsResolvers<ContextType>;
  book_var_samp_fields?: Book_Var_Samp_FieldsResolvers<ContextType>;
  book_variance_fields?: Book_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
