export type SessionTableData = {
  id: number;
  name: {
    cover: string;
    title: string;
  };
  date: string;
  time: {
    from: string;
    till: string;
  };
  venue: {
    id: number;
    image: string;
    name: string;
    venue_type: string | null;
  };
};

export type SessionTableProps = {
  sessions: any[];
  limit: number;
  count: number;
  handlePrev: () => void;
  handleNext: () => void;
  dotClick: (value: number) => void;
  activePage: number;
};
