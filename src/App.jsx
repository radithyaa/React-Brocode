import Students from "./Student";
export default function App() {
  return (
    <>
      <Students name="Ahza" age={16} isStudent={true} />
      <Students name="Argie" age={18} isStudent={false} />
      <Students name="Farel" age={17} isStudent={true} />
      <Students />
    </>
  );
}
