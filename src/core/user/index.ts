import { UserEntity, UserGroupEntity } from './entities';
import { UserService } from './services';

export const userEntities = [UserEntity, UserGroupEntity];

export const userProviders = [UserService];

export const userExports = [UserService];
