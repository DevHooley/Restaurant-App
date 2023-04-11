import people from "./PeopleData";

export default function Example() {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person: any) => (
        <li key={person.email} className="flex py-4">
          <img className="h-20 w-20 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
