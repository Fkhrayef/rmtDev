import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { pageDirection } from "../lib/types";
import { useJobItemContext } from "../lib/hooks";

export default function PaginationControls() {
  const { currentPage, totalNumberOfPages, handleChangePage } =
    useJobItemContext();

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction={"previous"}
          onClick={() => handleChangePage("previous")}
          currentPage={currentPage}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction={"next"}
          onClick={() => handleChangePage("next")}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: pageDirection;
  currentPage: number;
  onClick: () => void;
};

function PaginationButton({
  direction,
  onClick,
  currentPage,
}: PaginationButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
