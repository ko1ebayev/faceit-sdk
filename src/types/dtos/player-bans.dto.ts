export type PlayerBansDto = {
  readonly end: number;
  readonly start: number;
  readonly items: Array<{
    readonly ends_at: string;
    readonly game: string;
    readonly nickname: string;
    readonly reason: string;
    readonly starts_at: string;
    readonly type: string;
    readonly user_id: string;
  }>;
};
