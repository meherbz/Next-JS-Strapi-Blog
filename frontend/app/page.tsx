import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Card from "../components/card/Card";
import { getPosts } from "../fetch";

export default async function Page() {
    const [featuredPosts, Posts] = await Promise.all([
        await getPosts("filters[IsFeatured][$eq]=true"),
        await getPosts("filters[IsFeatured][$eq]=false"),
    ]);

    return (
        <div className="container pb-80">
            {featuredPosts.map((featuredPost) => (
                <Card
                    key={featuredPost.id}
                    label={featuredPost.category.name}
                    title={featuredPost.title}
                    summary={featuredPost.description}
                    href={featuredPost.slug}
                    className="mb-30"
                />
            ))}
            <div className="row">
                {Posts.map((Post) => (
                    <div className="col col-4 m-mw-100" key={Post.id}>
                        <Card
                            label={Post.category.name}
                            title={Post.title}
                            summary={Post.description}
                            href={Post.slug}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
