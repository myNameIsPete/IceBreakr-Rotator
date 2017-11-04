import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import {Post} from '../models/Post.model';

@Component({
  selector: 'app-rotator',
  templateUrl: './rotator.component.html',
  styleUrls: ['./rotator.component.css']
})

export class RotatorComponent implements OnInit {

  postsCollection: AngularFirestoreCollection<Post>;

  public myInterval: Number = 500;
  public posts: Observable<Post[]>;
  public activeSlideIndex: Number = 0;
  public noWrapSlides: Boolean = false;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.postsCollection = this.afs.collection('posts');
    this.posts = this.postsCollection.valueChanges();
    this.posts.subscribe(data => this.activeSlideIndex = 0);
  }

}
