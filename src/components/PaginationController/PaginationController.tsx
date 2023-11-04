import { useTheme } from "@emotion/react";
import { Flex } from "@/components/Grids";
import { IconButton } from "@/components/Buttons";
import { P1, P3 } from "@/components/Typography/Typography";
import { usePagination } from "@/hooks";
import { DotButton, Wrapper } from "./styles";
import { PaginationProps } from "./types";

export default function PaginationController({
  pagesLength,
  handleNext,
  dotClick,
  handlePrev,
  activePage = 1,
}: PaginationProps) {
  const { colors } = useTheme();
  const paging = usePagination({
    totalPageCount: pagesLength,
    currentPage: activePage,
    siblingCount: 1,
  });
  if (pagesLength <= 1) return null;

  return (
    <Wrapper align="center">
      <IconButton
        className="prev--button"
        disabled={activePage === 1}
        icon="chevron-left"
        onClick={() => handlePrev()}
      />
      <Flex align="center">
        {paging.map((num) => {
          if (num === "...") {
            return (
              <Flex width="40px" justify="center" align="center">
                <P1 text={num} color={colors.pallet[50]} />
              </Flex>
            );
          }
          return (
            <DotButton
              key={`pagination-dot-${num}`}
              active={num === activePage}
              onClick={() => {
                dotClick(num);
              }}
            >
              <P3 text={num} color="inherit" />
            </DotButton>
          );
        })}
      </Flex>
      <IconButton
        className="next--button"
        disabled={activePage === pagesLength}
        onClick={() => handleNext()}
        icon="chevron-right"
      />
    </Wrapper>
  );
}
