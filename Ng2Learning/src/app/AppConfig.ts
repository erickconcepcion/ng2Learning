import {IBaseEndpoint} from './IBaseEndpoint';
import {IEndPoint} from './IEndPoint';
export class AppConfig {
    public static Endpoints(baseIndex: number): IBaseEndpoint {
        var baseUrls = [
            'http://webclassdemo.azurewebsites.net/api/',
            'http://localhost:2998/api/'
            ];
        var base = baseUrls[baseIndex]
        var personEndpoint: { [Action: string]:IEndPoint } = {
            person: {Url: base + 'people'}
        };

        return {
            Person: personEndpoint
        };
    }
}