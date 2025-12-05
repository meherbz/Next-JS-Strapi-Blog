import Card from "../components/card/Card";
import { getPosts } from "../fetch";

export default async function Page() {
  const [featuredPosts, Posts] = await Promise.all([
    await getPosts("filters[IsFeatured][$eq]=true"),
    await getPosts("filters[IsFeatured][$eq]=false"),
  ]);
  await getPosts("filters[IsFeatured][$eq]=true");

  return (
    <div className="container pb-80">
      <Card
        label="Tech"
        title="yaboha"
        summary="keseh boha bravo"
        href="#"
        className="mb-30"
      />
      <div className="row">
        <div className="col col-4">
          <Card label="Front-end" title="yaboha" summary="k" href="#" />
        </div>
        <div className="col col-4">
          <Card label="Back-end" title="yaboha" summary="keseh boha" href="#" />
        </div>
        <div className="col col-4">
          <Card
            label="Front-end"
            title="yaboha"
            summary="keseh boha"
            href="#"
          />
        </div>
      </div>
    </div>
  );
}
