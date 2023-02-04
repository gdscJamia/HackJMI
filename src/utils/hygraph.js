import { GraphQLClient } from 'graphql-request';

export const hygraph = new GraphQLClient(
  'https://ap-south-1.cdn.hygraph.com/content/cld5q10k11e8a01t9dy008qit/master',
);