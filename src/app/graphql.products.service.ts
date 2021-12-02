import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const TOKENAUTH = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

@Injectable({
  providedIn: 'root'
})

export class GraphqlProductsService  {

    loading: boolean = true;
    posts: any;
    private querySubscription: Subscription = new Subscription;

  constructor(private apollo: Apollo) {}


   
}