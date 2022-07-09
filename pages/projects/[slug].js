import styles from '../../styles/Slug.module.css';
import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl487ukop4j4101ywhu54g7ml/master"
);

const QUERY = gql`
 query Project($slug: String!) {
     project(where: {slug: $slug}) {
         id,
         title,
         slug,
         datePublished,
         project_type{
            id,
            name,
            avatar{
                url
            }
         }
         content{
             html
         }
         coverPhoto{
            id,
            url
        }
     }
 }
`;

const SLUGLIST = gql`
{
    projects {
        slug
    }
}
`

export async function getStaticPaths() {
    const {projects} = await graphcms.request(SLUGLIST);
    return{
        paths: projects.map((project) => ({params: {slug:project.slug} })),
        fallback: false,
    };
}

export async function getStaticProps({params}) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const project = data.project;
  return {
    props: {
      project,
    },
    revalidate: 10,
  };
}

export default function ProjectPost({project}) {
    return(
        <main className={styles.blog}>
            <img className={styles.cover} src={project.coverPhoto.url} alt=""/>
            <div className={styles.title}></div>
            
        </main>
    )
}

