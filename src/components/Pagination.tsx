import { PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { useSearchParams } from "next/navigation";
import { ITEMS_PER_PAGE } from "@/global/pagination";

interface PaginationProps {
  count: number;
}

export function Pagination({ count }: PaginationProps) {
  const queryParams = useSearchParams();
  const PAGES = count / ITEMS_PER_PAGE;

  return (
    <PaginationContent className="justify-center">
      {PAGES > 1 && parseInt(queryParams?.get('offset') || '0') > 0 && (
        <PaginationItem>
          <PaginationPrevious href={`?offset=${parseInt(queryParams?.get('offset') || '0')-ITEMS_PER_PAGE}`} />
        </PaginationItem>
      )}

      {PAGES < 5 ? Array.from({ length: PAGES }).map((_, index) => (
        <PaginationItem key={index} className="mx-3">
          {index+1}
        </PaginationItem>
      )) : [1, 2, PAGES-2, PAGES-1].map((page, index) => {
        if ([2].includes(index)) {
          return (
            <>
              <PaginationEllipsis />            
              <PaginationItem key={index} className="mx-3">
                {page}
              </PaginationItem>
            </>
          );
        }

        return (
          <PaginationItem key={index} className="mx-3">
            {page}
          </PaginationItem>
        );
      })}

      {PAGES > 1 && parseInt(queryParams?.get('offset') || '0') < PAGES-1 &&(
        <PaginationItem>
          <PaginationNext href={`?offset=${parseInt(queryParams?.get('offset') || '0')+ITEMS_PER_PAGE}`} />
        </PaginationItem>
      )}
    </PaginationContent>
  );
}