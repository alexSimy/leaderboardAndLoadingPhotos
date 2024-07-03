import { Request, Response } from 'express';
import { getTopTenUsers } from '../../models/users.model';

export async function httpGetTopTenUsers(req: Request, res: Response) {
  const data = await getTopTenUsers();
  if (!data) {
    return res
      .status(500)
      .json({ ok: false, message: 'Error: Failed to fetch users!' });
  }

  return res.status(200).json(await getTopTenUsers());
}
