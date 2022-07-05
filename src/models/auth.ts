export type AccountType = {
  id?: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  userName: string;
  avatar?: string;
  dateOfBirth?: string;
  roles?: Array<string>;
};

export type AuthorizedType = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  profile?: AccountType;
};

export type LoginRequest = {
  username: string;
  password: string;
};

