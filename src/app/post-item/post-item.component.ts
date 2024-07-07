import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../../model/Post';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})

export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() hidePost: EventEmitter<Post> = new EventEmitter;

  constructor() {
    this.post = {
      id: 0,
      title: '',
      body: '',
      votes: 1
    }
  }

  ngOnInit(): void {
  }

  upvote(post: Post) {
    post.votes += 1;
    return post;
  }

  downvote(post: Post) {
    post.votes -= 1;
    return post;
  }

  hide(post: Post) {
    this.hidePost.emit(post);
    return post;
  }
}
