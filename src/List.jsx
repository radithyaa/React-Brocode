/* eslint-disable react/prop-types */
export default function List({ category, items }) {
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //Sort by Alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); //Sort by Reverse Alphabetical
  //   fruits.sort((a, b) => a.calories - b.calories); //Sort by Calories
  //   fruits.sort((a, b) => b.calories - a.calories); //Sort by Reverse Calories

  const listItems = items.map(({ id, name, calories }) => (
    <li key={id}>
      {/* Isi dari List */}
      {id}.{name}: <b>{calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="text-2xl font-medium">
        {category ? category : "Category"}
      </h3>
      <ul>{listItems}</ul>
    </>
  );
}
