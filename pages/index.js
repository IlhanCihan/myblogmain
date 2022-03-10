import {useState} from "react";
import {useGetBlogsPages} from "../actions/pagination";
import PageLayout from "../components/Layout";
import FilteringMenu from "../components/FilteringMenu";
import {Button, Row} from "react-bootstrap";
import {getPaginatedBlogs} from "../lib/api";


export default function Home({blogs}) {
    const [filter, setFilter] = useState({
        view: { list: 0 }
    });

    // loadMore: to load more data
    // isLoadingMore: is true whenever we are making request to fetch data
    // isReachingEnd: is true when we loaded all of the data, data is empty (empty array)

    const {
        pages,
        isLoadingMore,
        isReachingEnd,
        loadMore
    } = useGetBlogsPages({blogs, filter});

    return (
        <PageLayout>

            <FilteringMenu
                filter={filter}
                onChange={(option, value) =>
                    setFilter({...filter, [option]: value})
                }
            />
            <hr/>
            <Row className="mb-5">
                {pages}
            </Row>
            <div style={{textAlign: 'center'}}>
                <Button
                    onClick={loadMore}
                    disabled={isReachingEnd || isLoadingMore}
                    size="lg"
                    variant="outline-secondary">
                    {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'}
                </Button>
            </div>
        </PageLayout>
    )
}

export async function getStaticProps() {
    const blogs = await getPaginatedBlogs({offset: 0});
    return {
        props: {
            blogs
        }
    }
}