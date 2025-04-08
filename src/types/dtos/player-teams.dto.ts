export type PlayerTeamsDTO = {
  end: number;
  start: number;
  items: Array<{
    avatar: string;
    chat_room_id: string;
    cover_image: string;
    description: string;
    facebook: string;
    faceit_url: string;
    game: string;
    leader: string;
    members: [
      {
        avatar: string;
        country: string;
        faceit_url: string;
        membership_type: string;
        memberships: string[];
        nickname: string;
        skill_level: number;
        user_id: string;
      }
    ];
    name: string;
    nickname: string;
    team_id: string;
    team_type: string;
    twitter: string;
    website: string;
    youtube: string;
  }>;
};
