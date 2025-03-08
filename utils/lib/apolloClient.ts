import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_API_URL}`,
    // fetchOptions: {
    //   next: { revalidate: 10 }, // Ensure ISR triggers correctly
    // },
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          destinations: {
            merge(existing, incoming) {
              return incoming; // Prevents caching stale data
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network", // Use cache first but update if necessary
    },
    query: {
      fetchPolicy: "network-only", // Always fetch fresh data for ISR
    },
  },
});

export const GraphqlQuery = gql`
  {
    skills(orderBy: uniqueId_ASC) {
      uniqueId
      skill
      id
      proficient
      fieldType
      image {
        url
      }
      url
    }
    jobs(orderBy: from_DESC) {
      id
      company
      designation
      companyLinkedin
      companyUrl
      from
      to
      logo {
        url
      }
    }
    projects(orderBy: uniqueId_ASC) {
      id
      title
      uniqueId
      description
      demoLink
      githubLink
      techStack {
        text
      }
      image {
        url
      }
    }
  }
`;
