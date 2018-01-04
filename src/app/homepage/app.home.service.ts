import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers   } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HomeService {

private baseUrl = 'http://localhost:3000/api/tasks/';
private extractData;
private books = `{
  "confirmationMessage" :
  {
    "itinerary" :
    {
      "connections" :
       [
          "passengers" :
           [
                {
                    "firstName" : "Pete",
                    "lastName" : "Fromadifferentreservation",
                    "title" : "MSTR",
                    "passengerFlightDetails" :
                    [
                    {
                        "checkInStatus" : "ACCEPTED",
                        "segmentId" : "1"
                    },
                    {
                        "checkInStatus" : "ACCEPTED",
                        "segmentId" : "2"
                    }
                    ]
                }
            ]
        ]
    }
}`;
constructor(private http: Http) { }

getAll(): Observable<any> {
    const secure_token = localStorage.getItem('jwt-token');
    const headers = new Headers({ 'Authorization': 'Bearer ' + secure_token });
    const options = new RequestOptions({ headers: headers });

    return this.http
    .get(this.baseUrl, options)
    .map(response => response.json())
    .catch((res: Response) => this.onRequestError(res));
  }

  addBookWithObservable(): Observable<any> {
    return this.http.post(this.baseUrl, this.books)
               .catch(this.onRequestError);
}

  /**
   * Handles any http request error.
   * @param {Response} res Error object
   * @returns Observable of Error object
   * @memberof CarosuelService
   */

  onRequestError(res: Response) {
    const statusCode = res.status;
    const body = res.statusText;
    const error = {
      statusCode: statusCode,
      message: body
    };
    return Observable.throw(error);

}



}
