import {IBaseEndpoint} from './IBaseEndpoint';
import {IEndPoint} from './IEndPoint';
export class AppConfi {
    public static Endpoints(): IBaseEndpoint {
        var base = 'http://webclassdemo.azurewebsites.net/api/';
        var personEndpoint: { [Action: string]:IEndPoint } = {
            person: {Url: base + 'people'}
        };

        return {
            Person: personEndpoint
        };
    }
}