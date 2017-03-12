/**
 * Created by vtkp2 on 3/12/2017.
 */
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class PhotoService {
  url = 'https://jsonplaceholder.typicode.com/photos'
  constructor(
    private http: Http
  ){}

  getDefaultOption(): any{
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers})
    return options
  }

  getPhotoList():any{
    return this.http.get(this.url, this.getDefaultOption())
      .map(response =>{
        console.log(response)
        return response.json()
      })
      .catch(error => this.handleError(error))
  }
  private handleError(error){
    return Observable.throw(error);
  }
}
