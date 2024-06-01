import NewBlogButton from "./NewBlogButton";
import ReloadButton from "./ReloadButton";
import SelectTagButton from "./SelectTagButton";

const TableActions = () => {
  return (
    <div className="table_filter w-full flex items-center align-middle justify-start gap-4 bg-white p-4 rounded-xl shadow-sm">
      <NewBlogButton />
      <ReloadButton />
      <SelectTagButton />
      <span>select by author</span>
      <span>select by approved State</span>
    </div>
  );
};

export default TableActions;
