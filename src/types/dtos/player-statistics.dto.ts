export type PlayerStatisticsDTO<StatisticsItem> = {
  end: number;
  start: number;
  items: Array<StatisticsItem>;
};
