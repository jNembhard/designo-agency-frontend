import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { render as rtlRender } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

export function apolloRender(
  component: JSX.Element,
  { mocks }: any = {},
  schema: any,
  realResolvers: boolean
) {
  const mockSchema = addMocksToSchema({
    schema,
    mocks,
    preserveResolvers: realResolvers,
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: mockSchema }) as unknown as ApolloLink,
    cache: new InMemoryCache(),
  });

  return rtlRender(
    <ApolloProvider client={client}>{component}</ApolloProvider>
  );
}

export function apolloSeoRender(
  component: JSX.Element,
  { mocks }: any = {},
  schema: any,
  realResolvers: boolean
) {
  const mockSchema = addMocksToSchema({
    schema,
    mocks,
    preserveResolvers: realResolvers,
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: mockSchema }) as unknown as ApolloLink,
    cache: new InMemoryCache(),
  });

  return rtlRender(
    <HelmetProvider>
      <ApolloProvider client={client}>{component}</ApolloProvider>
    </HelmetProvider>,
    { container: document.head }
  );
}
