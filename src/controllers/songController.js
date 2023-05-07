import Song from '../models/Song';
import User from '../models/User';
import path from 'path';

export const home = async (req, res) => {
  return res.sendfile(path.resolve(__dirname + '/../views/index.html'));
};
