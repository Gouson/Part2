import { NextPage } from 'next'
import Link from 'next/link'
import getPosts from '../../lib/posts';
type Post = {
    id: string;
    date: string;
    title: string;
}
type Props = {
    posts: Post[]
}
const PostsIndex: NextPage<Props> = (props) => {
    const { posts } = props
    return (
        <div>
            <h1>文章列表</h1>
            {posts.map(post => <div key={post.id}>
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                    <a>{post.title}</a>
                </Link>
            </div>)}
        </div>
    )
}

export default PostsIndex

export const getStaticProps = async () => {
    const posts = await getPosts()
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    }
}