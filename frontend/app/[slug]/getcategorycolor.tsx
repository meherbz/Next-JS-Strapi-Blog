const categoryColorMap: Map = new Map();
categoryColorMap.set("Tech", "orange");
categoryColorMap.set("Back-end", "green");
categoryColorMap.set("Front-end", "purple");

export default function (category) {
  return categoryColorMap.get(category);
}
