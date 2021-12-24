import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profle',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: any = {
    name: "V",
    avatar: "http://geekcity.ru/wp-content/uploads/2020/10/v-for-vendetta-movie-paint-by-number-art-kit-2106-p.jpg",
    wonGames: 50,
  };
  public userCards: any[] = [
    {
      name: "Wolf",
      hp: 3,
      damage: 2,
      img: "https://media.istockphoto.com/vectors/wolf-mascot-vector-icon-vector-id1060855964?k=20&m=1060855964&s=612x612&w=0&h=zxPQ6tlUnSsDIcnlzaMkY-tn5DljavLklWEJnJbwmjs="
    },
    {
      name: "Owl",
      hp: 1,
      damage: 2,
      img: "https://image.shutterstock.com/image-vector/owl-logo-vector-template-260nw-1282917331.jpg"
    },
    {
      name: "Cat",
      hp: 9,
      damage: 1,
      img: "https://media.istockphoto.com/vectors/cat-in-round-sunglasses-icon-vector-id1070887284?k=20&m=1070887284&s=612x612&w=0&h=2NvYSTRkalrhIYa0w4JPb6XjP6UoyncoJEVz9n1N-n8="
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
