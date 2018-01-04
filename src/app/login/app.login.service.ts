import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {

private baseUrl = 'http://localhost:3000/api/login';
private extractData;

private books = `{
  "confirmationMessage" :
  {
    "itinerary" :
    {
      "connections" :
      [
        {
          "origin" :
          {
            "IATACode" : "OSL",
            "City" :
            {
              "IATACode" : "OSL"
            }
          },
          "destination" :
          {
            "IATACode" : "JNB",
            "City" :
            {
              "IATACode" : "JNB"
            }
          },
          "segments" :
          [
            {
              "id" : "1",
              "departFrom" :
              {
                "IATACode" : "OSL",
                "City" :
                {
                  "IATACode" : "OSL"
                }
              },
              "arriveOn" :
              {
                "IATACode" : "AMS",
                "City" :
                {
                  "IATACode" : "AMS"
                }
              }
            },
            {
              "id" : "2",
              "departFrom" :
              {
                "IATACode" : "AMS",
                "City" :
                {
                  "IATACode" : "AMS"
                }
              },
              "arriveOn" :
              {
                "IATACode" : "JNB",
                "City" :
                {
                  "IATACode" : "JNB"
                }
              }
            }
          ]
        }
      ]
    },
    "passengers" :
    [
      {
        "firstName" : "Maya",
        "lastName" : "Trip Test",
        "title" : "MRS",
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
      },
      {
        "firstName" : "Trip",
        "lastName" : "Trip Test",
        "title" : "MSTR",
        "passengerFlightDetails" :
        [
          {
            "checkInStatus" : "STANDBY",
            "segmentId" : "1"
          },
          {
            "checkInStatus" : "NOT_ALLOWED_TO_CHECK_IN",
            "segmentId" : "2"
          }
        ]
      },
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
  },
  "bookingCode" : "KJGYY2",
  "lastName" : "pas",
  "firstName" : "",
  "ticketNumber" : "",
  "pos" : "NL",
  "country" : "NL",
  "lang" : "EN",
  "ttt" : "false",
  "carrier" : "KL",
  "consumer" : "checkin"
}`;
constructor(private http: Http) { }

doLogin(userdata): Observable<any> {
  return this.http
    .post(this.baseUrl, userdata)
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
