import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { render as rtlRender } from "@testing-library/react";

export function apolloRender(
  component: JSX.Element,
  { mocks }: any = {},
  schema: any
) {
  const mockSchema = addMocksToSchema({
    schema,
    mocks,
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: mockSchema }) as unknown as ApolloLink,
    cache: new InMemoryCache(),
  });

  return rtlRender(
    <ApolloProvider client={client}>{component}</ApolloProvider>
  );
}
