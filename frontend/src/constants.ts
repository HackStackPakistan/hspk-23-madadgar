import { environment } from './environments/environment';

export const API_URL: String = environment.backendURL;
export enum RouteLiterals {
  PROFILE = 'profile',
  REPORTS = 'reports',
  REPORTS_MAP = 'reports_map',
  SIGNUP = 'signup',
  LOGIN = 'login',
  REGISTRATION_SUCCESS = 'registration_success'
};
