import { SearchForm, Backdrop } from "../../components";

export const Search = () => {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <SearchForm />
    </>
  );
};
