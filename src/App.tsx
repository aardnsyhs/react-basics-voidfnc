import Welcome from "./components/Welcome";
import HeaderCustom from "./components/HeaderCustom";
import ProfileCard from "./components/ProfileCard";

type Teacher = {
  name: string;
  year: number;
  job: string;
  id: number;
};

const teachers: Teacher[] = [
  {
    name: "Ardiansyah Sulistyo",
    year: 2006,
    job: "Student",
    id: 1,
  },
  {
    name: "Budi",
    year: 2000,
    job: "Content Creator",
    id: 2,
  },
  {
    name: "Usman",
    year: 2002,
    job: "Business Man",
    id: 3,
  },
];

// Component
function App() {
  return (
    <>
      <HeaderCustom />
      <h1>Hello World</h1>
      <div style={{ display: "flex", gap: "8px", flexDirection: "row" }}>
        {teachers.map((teacher) => {
          return (
            <ProfileCard
              name={teacher.name}
              year={teacher.year}
              job={teacher.job}
              key={teacher.id}
            />
          );
        })}
      </div>
      <Welcome />
    </>
  );
}

export default App;
