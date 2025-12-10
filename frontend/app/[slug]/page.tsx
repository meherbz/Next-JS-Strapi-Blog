import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getPosts } from "@/fetch";
import type { Category, Post } from "@/strapitypes";
import getCategoryColor from "./getcategorycolor";

export default async function Blogpage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = await params;
    const a = slug.slug;
    const posts: Post[] = await getPosts(`filters[slug][$eq]=${slug.slug}`);
    return (
        <div className="container pb-80">
            <div className="row mb-50">
                <div className="col col-9">
                    <div
                        className={` h6 mb-20 c-${getCategoryColor(posts[0].category.name)}`}
                    >
                        {posts[0].category.name}
                    </div>
                    <h2 className="mb-50">{a}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col col-9">
                    <BlocksRenderer content={posts[0].content} />
                </div>
            </div>
        </div>
    );
}
