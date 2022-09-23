import dayjs from "dayjs";
import type { Emotion } from "../types/type";

export const ascendingSort = (emotions: Emotion[]): Emotion[] =>
  emotions.sort((a, b) => {
    if (dayjs(b.createdAt).isAfter(dayjs(a.createdAt))) return -1;
    if (dayjs(a.createdAt).isAfter(dayjs(b.createdAt))) return 1;
    return 0;
  });
