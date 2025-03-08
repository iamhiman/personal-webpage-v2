import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_API_URL}`,
    fetchOptions: { cache: "no-store" }, // Avoid browser caching, let Next.js handle it
  }),
  cache: new InMemoryCache(),
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
