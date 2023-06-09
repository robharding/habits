import HabitToggle from "@/components/HabitToggle";

interface Habit {
  name: string;
  id: number;
  createdAt?: Date;
  daysCompletedThisMonth: Date[];
}

const formatDateString = (date: Date) => date.toDateString().slice(0, 10);

export default function Home() {
  const today = new Date();
  const habits: Habit[] = [
    {
      name: "Read",
      id: 0,
      createdAt: new Date(),
      daysCompletedThisMonth: [new Date()],
    },
  ];

  return (
    <div className="mt-2">
      <h2 className="text-3xl font-bold italic">Home</h2>
      <table className="table-auto">
        <thead className="text-left">
          <tr>
            <th>Habit</th>
            <th className="w-0">{formatDateString(today)}</th>
            <th>
              <div>
                {formatDateString(
                  new Date(today.getTime() + 24 * 60 * 60 * 1000)
                )}
              </div>
            </th>
            <th>
              {formatDateString(
                new Date(today.getTime() + 24 * 60 * 60 * 1000)
              )}
            </th>
            <th>
              {formatDateString(
                new Date(today.getTime() + 24 * 60 * 60 * 1000)
              )}
            </th>
            <th>
              {formatDateString(
                new Date(today.getTime() + 24 * 60 * 60 * 1000)
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Read</td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
          </tr>
          <tr>
            <td>Work Out</td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
          </tr>
          <tr>
            <td>Sleep 8hrs</td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
            <td>
              <HabitToggle />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
