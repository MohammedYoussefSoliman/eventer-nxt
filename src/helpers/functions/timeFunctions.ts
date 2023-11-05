import moment from "moment";

export const convertTimeTo24 = (time: string | moment.Moment | Date) =>
  moment(time, "h:mm a").format("HH:mm");
export const convertTimeTo12 = (time: string | moment.Moment | Date) =>
  moment(time, "hh:mm").format("LT");

export const stringDateFormatToDate = (time: string) =>
  moment(time, "hh:mm a").toDate();

export const resolveTimeWindow = (start: Date, end: Date) => {
  if (moment().diff(start) < 0) return "before";
  if (moment().diff(end) > 0) return "after";
  return "active";
};
