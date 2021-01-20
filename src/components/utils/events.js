import React from 'react'

function Events(props){
    return(

        <div className="events__card">
          <div className="event-image">
           <img src={props.image}/>
          </div>
          <div className="event-info">
           <h2>Event Name</h2>
           <div className="description_event">
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum vel alias! Odit sint, optio architecto quos voluptates ipsa dignissimos accusamus cum, minus incidunt eius suscipit consequuntur totam alias illo.

               </p>
           </div>
           <div className="dateandtime">
               <span><b>Date</b>:-20 jan 2021</span>
               <span><b>Time</b>:-6-7pm</span>
               <span><b>Venue</b>:-Online</span>
           </div>
           <div className="entryfee">
               <span><b>Entry Fee</b>:-Free</span>
           </div>
          </div>
        </div>

    )
    };

    export default Events;
