function CategoryList({ category, activeCategory }) {
  return (
    <button
      className={`category-btn ${
        activeCategory === category ? "activebBtn" : ""
      }`}
      data-cat-name={category}
    >
      {category}
    </button>
  );
}
export { CategoryList };
