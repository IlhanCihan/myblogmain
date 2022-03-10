import { Row, Col } from 'react-bootstrap'
import moment from 'moment';
import ErrorPage from 'next/error';
import PageLayout from "../../components/Layout";
import BlogHeader from "../../components/BlogHeader";
import BlogContent from "../../components/BlogContents";
import {getAllBlogs, getBlogBySlug, urlFor} from "../../lib/api";
import { useRouter } from 'next/router';

const BlogDetail = ({blog}) => {
    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode="404"/>
    }

    if (router.isFallback) {
        console.log('Loading fallback page')
        return (
            <PageLayout className="blog-detail-page">
                Loading...
            </PageLayout>
        )
    }
    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <BlogHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={urlFor(blog.coverImage).height(600).url()}
                        author={blog.author}
                        date={moment(blog.date).format('LLL')}
                    />
                    <hr/>
                    { blog.content &&
                    <BlogContent content={blog.content} />
                    }
                </Col>
            </Row>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const blog = await getBlogBySlug(params.slug);
    return {
        props: {blog}
    }
}

// TODO: Introduce fallback
export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    const paths = blogs?.map(b => ({params: {slug: b.slug}}));
    return {
        paths,
        fallback: true
    }
}

export default BlogDetail;