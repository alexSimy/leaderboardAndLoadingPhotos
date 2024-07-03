import { LeaderboardUser, IntermediateUser } from '../types/users';

function randomScore() {
  return Math.floor(Math.random() * 5000);
}

export async function getTopTenUsers(): Promise<LeaderboardUser[] | undefined> {
  try {
    const response = await fetch(`${process.env.RESOURCES_API}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users!');
    }
    const intermediateData: IntermediateUser[] = await response.json();
    let data = intermediateData.map((u: IntermediateUser): LeaderboardUser => {
      return {
        id: u.id,
        name: u.name,
        score: randomScore(),
      };
    });
    data = data.sort((u1, u2) => {
      return u2.score - u1.score;
    });
    return data;
  } catch (err) {
    console.error(`Get Top Ten Users : ${err}`);
  }
}
