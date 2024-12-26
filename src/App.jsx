import List from "./List";

export default function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "mango", calories: 37 },
  ];
  const vegetables = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "mango", calories: 37 },
  ];

  return (
    <>
      {fruits.length > 0 && <List category="Fruits" items={fruits}></List>}
      {vegetables.length > 0 && (
        <List category="Vegetables" items={vegetables}></List>
      )}
    </>
  );
}
