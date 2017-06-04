import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApolloQueryResult } from 'apollo-client';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getPosts = gql`
  query getAllPosts {
    posts {
      title
      votes
      author {
        firstName
      }
    }
  }
`;

@Injectable()
export class GraphPostsService {
  constructor(private apollo: Apollo) {}

  getPosts(): Observable<ApolloQueryResult<any>> {
    return this.apollo.query({
      query: getPosts
    })
    .map((res) => {
      return res.data;
    });
  }
}
