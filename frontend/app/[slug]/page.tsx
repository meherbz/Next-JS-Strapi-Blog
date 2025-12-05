import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getPosts } from "@/fetch";
import getCategoryColor from "./getcategorycolor";

export default async function Blogpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;
  const a = slug.slug;
  const Post = await getPosts(`filters[slug][$eq]=${slug.slug}`);
  console.log(Post);
  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col-9">
          <div
            className={` h6 mb-20 c-${getCategoryColor(Post[0].category.name)}`}
          >
            {Post[0].category.name}
          </div>
          <h2 className="mb-50">{a}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col col-9">
          <BlocksRenderer content={Post[0].content} />
        </div>
      </div>
    </div>
  );
}
