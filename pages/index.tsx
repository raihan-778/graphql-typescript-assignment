import Head from "next/head";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import NavBar from "@/components/NavBar/NavBar";
import { InferGetStaticPropsType } from "next";
import MyPinnedRepo from "@/components/MyPinnedRepo/MyPinnedRepo";

export default function Home({ pinnedItems }) {
  console.log(pinnedItems);
  return (
    <>
      <Head>
        <title>next-graphql-task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar></NavBar>
        <MyPinnedRepo></MyPinnedRepo>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const token = process.env.GITHUB_ACCESS_TOKEN;
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    console.log(process.env.GITHUB_ACCESS_TOKEN);
    return {
      headers: {
        ...headers,
        authorization: `Bearer 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`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  // const client = ...

  const { data } = await client.query({
    query: gql`
      query Viewer {
        viewer {
          login
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  description
                  id
                  projectsUrl
                }
              }
            }
          }
        }
      }
    `,
  });

  const { viewer } = data;
  const pinnedItems = viewer.pinnedItems.edges.map(({ node }) => node);
  console.log(pinnedItems);

  return {
    props: {},
  };
}
