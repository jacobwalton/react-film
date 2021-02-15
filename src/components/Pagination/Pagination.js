import React from "react";
import { Pagination as MaterialPagination } from "@material-ui/lab";
const Pagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div>
      <MaterialPagination
        className="pagination"
        count={numOfPages}
        shape="rounded"
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
};

export default Pagination;
