import { SessionTableData } from "./types";

const sessionTableMapper = (sessions: any[]): SessionTableData[] =>
  sessions.map((session) => ({
    id: session.id,
    name: {
      cover: session.cover_image,
      title: session.title,
    },
    date: session.date,
    time: {
      from: session.from,
      till: session.till,
    },
    venue: session.venue,
  }));

export default sessionTableMapper;
