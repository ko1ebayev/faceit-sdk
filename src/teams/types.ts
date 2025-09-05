import { UserSimple, Team, TournamentSimple, TournamentsList } from '../shared/types';

export { UserSimple, Team, TournamentSimple, TournamentsList };

export interface TeamStats {
  team_id: string;
  game_id: string;
  lifetime: Record<string, any>;
  segments: Record<string, any>[];
}

export interface GetTeamTournamentsParams {
  offset?: number;
  limit?: number;
}