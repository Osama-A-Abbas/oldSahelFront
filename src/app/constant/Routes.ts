
import { environment } from "src/environments/environment";
const BASEURL = environment.api;

export const auth = {
  login: BASEURL + 'login',
  create: BASEURL + 'create',
  register: BASEURL + 'register'

}
