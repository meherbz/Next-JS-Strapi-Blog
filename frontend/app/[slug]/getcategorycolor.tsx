const categoryColorMap: Map<string, string> = new Map();
categoryColorMap.set("Tech", "orange");
categoryColorMap.set("Back-end", "green");
categoryColorMap.set("Front-end", "purple");

export default function getCategoryColor(category: string) {
    return categoryColorMap.get(category);
}
