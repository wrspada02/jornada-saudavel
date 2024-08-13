import { useState } from "react";
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

      {Array.from({ length: 4 }).map((_, index) => (
        <PaginationItem key={index} className="mx-3">
          {parseInt(queryParams?.get('offset') || '0')/ITEMS_PER_PAGE+index+1}
        </PaginationItem>
      ))}

      {PAGES > 1 && parseInt(queryParams?.get('offset') || '0') < PAGES &&(
        <PaginationItem>
          <PaginationNext href={`?offset=${parseInt(queryParams?.get('offset') || '0')+ITEMS_PER_PAGE}`} />
        </PaginationItem>
      )}
    </PaginationContent>
  );
}