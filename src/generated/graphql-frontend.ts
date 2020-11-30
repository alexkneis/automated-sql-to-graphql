import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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

export type AuthorsBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorsBooksQuery = (
  { __typename?: 'query_root' }
  & { author: Array<(
    { __typename?: 'author' }
    & Pick<Author, 'id' | 'firstname' | 'lastname'>
    & { book: Array<(
      { __typename?: 'book' }
      & Pick<Book, 'title'>
    )> }
  )> }
);


export const AuthorsBooksDocument = gql`
    query AuthorsBooks {
  author {
    id
    firstname
    lastname
    book {
      title
    }
  }
}
    `;

/**
 * __useAuthorsBooksQuery__
 *
 * To run a query within a React component, call `useAuthorsBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorsBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorsBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthorsBooksQuery(baseOptions?: Apollo.QueryHookOptions<AuthorsBooksQuery, AuthorsBooksQueryVariables>) {
        return Apollo.useQuery<AuthorsBooksQuery, AuthorsBooksQueryVariables>(AuthorsBooksDocument, baseOptions);
      }
export function useAuthorsBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorsBooksQuery, AuthorsBooksQueryVariables>) {
          return Apollo.useLazyQuery<AuthorsBooksQuery, AuthorsBooksQueryVariables>(AuthorsBooksDocument, baseOptions);
        }
export type AuthorsBooksQueryHookResult = ReturnType<typeof useAuthorsBooksQuery>;
export type AuthorsBooksLazyQueryHookResult = ReturnType<typeof useAuthorsBooksLazyQuery>;
export type AuthorsBooksQueryResult = Apollo.QueryResult<AuthorsBooksQuery, AuthorsBooksQueryVariables>;