import { useUsers } from "../../features/users/useUsers";
import Loader from "../../ui/Loader";
import EmptyResult from "../../ui/EmptyResult";
import RecordsRow from "./RecordsRow";
import Pagination from "../../ui/Pagination";

function RecordsTable() {
  const { users, isLoading, count } = useUsers();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="divide-y-4 divide-color_light rounded-lg bg-color_white">
        <header className="grid grid-cols-[0.3fr_1.5fr_0.8fr_1fr_0.8fr_1fr_1.3fr_0.2fr]  rounded-t-lg bg-color_primary px-6 py-2 font-semibold text-color_white">
          <div></div>
          <div>Name</div>
          <div>Lots</div>
          <div>Amount</div>
          <div>Count</div>
          <div>Pending</div>
          <div>Status</div>
          <div></div>
        </header>

        {users.map((user, index) => (
          <RecordsRow key={user.id} user={user} index={index} />
        ))}

        <Pagination count={count} />
      </div>
    </>
  );
}

export default RecordsTable;
