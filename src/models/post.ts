export class Post {

  constructor(public post_id: number, public content: string, public user_id: number, public title: string, public description = "",
              public profilePicture: string = "assets/img/speakers/puppy.jpg",) {
  }

}