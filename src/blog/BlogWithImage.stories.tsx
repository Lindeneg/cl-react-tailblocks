import { BlogWithImageItem } from "./BlogWithImageItem";

export default {
  title: "BlogWithImageItem",
  component: BlogWithImageItem,
};

export function BlogWithImageItemStory() {
  return (
    <BlogWithImageItem
      imgSrc="https://dummyimage.com/720x400"
      label="CATEGORY"
      title="The Catalyzer"
      content="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      onClick={(e) => {}}
      views={1200}
      comments={6}
      theme="dark"
    />
  );
}
