import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image from "../images/png/pensils.jpg";

export default function MediaCard() {
  return (
     
          <div>
            <>
              
                  <div class="pastcards">
                    <div class="upcomingheading"></div>
                    <div class="ucardsblock">
                      <div class="ucardblock">
                        <div class="uimgblock">
                          <img src={image} class="puimgstyle" />
                        </div>
                        <div class="ucontent">
                          <div class="ucontenttiming">
                            <p class="lead ">
                              <span class="bold">
                                Building Blocks Of Programming
                              </span>
                            </p>
                            <p class="description">
                              These are the details of the events
                            </p>
                            <div class="date">11 Jan 2020</div>
                            <div class="venue">
                              Venue: <span class="redtext"></span>
                            </div>
                            <div class="venue">
                              Entry Fee : <span class="redtext"> 0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                

            </>
          </div>
        
  );
}
