import React, { Component } from 'react'

export default class namecard extends Component {
    render() {
        return (
            <div>
             <div class="card">
    <div class="box">
        <div class="img">
        <img src="assets/img/avatar-1.jpg" class="rounded-circle"/>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et.</p>
        <span>
            <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
        </span>
       
        </div>
        </div>
            </div>

        )
    }
}
