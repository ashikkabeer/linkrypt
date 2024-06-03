
import { hashPassword, comparePassword } from './auth.utils';

import { signToken, validateToken } from './jwt.utils';

const AuthUtils = {
  hashPassword,
  comparePassword,
};
const JwtUtils = {
  signToken,
  validateToken,
};

export { AuthUtils, JwtUtils };