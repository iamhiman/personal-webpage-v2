import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-ap-south-1.graphcms.com/v2/cl3rp79jw9fat01xi34b798k9/master",
  cache: new InMemoryCache(),
});

export const QUERY = gql`
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
