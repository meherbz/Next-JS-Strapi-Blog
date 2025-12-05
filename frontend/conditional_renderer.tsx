export default function conditional_renderer({ condition, children }) {
  if (condition) {
    return children;
  }
  return null;
}
