import { Axios } from "axios";

export class HttpProvider {
  constructor(readonly http: Axios) {}
}
