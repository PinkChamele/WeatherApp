import { RequestMethodEnum } from "../enums/request-method.enum";

export interface IRequestApiOptions<OptionsType> {
  readonly url: string;
  readonly method: RequestMethodEnum;
  readonly options?: OptionsType;
}