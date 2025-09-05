import { Nullable } from '../core/nullable';
import { 
  Organizer as SharedOrganizer, 
  GameSimple, 
  GamesList, 
  TournamentSimple, 
  TournamentsList,
  HubSimple,
  HubsList,
  ChampionshipSimple,
  ChampionshipsList
} from '../shared/types';

export { 
  GameSimple, 
  GamesList, 
  TournamentSimple, 
  TournamentsList,
  HubSimple,
  HubsList,
  ChampionshipSimple,
  ChampionshipsList
};

export type Organizer = SharedOrganizer;


export interface GetOrganizerGamesParams {
  offset?: number;
  limit?: number;
}

export interface GetOrganizerTournamentsParams {
  type?: string;
  status?: string;
  game?: string;
  region?: string;
  offset?: number;
  limit?: number;
}

export interface GetOrganizerHubsParams {
  offset?: number;
  limit?: number;
}


export interface GetOrganizerChampionshipsParams {
  type?: string;
  status?: string;
  game?: string;
  region?: string;
  offset?: number;
  limit?: number;
}

