import {IEndPoint} from './IEndPoint';
export interface IBaseEndpoint {
    Person: { [Action: string]: IEndPoint};
}