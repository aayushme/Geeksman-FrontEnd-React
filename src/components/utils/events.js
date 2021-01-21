import React from 'react'

function Events(props){
    return(

        <div className="events__card">
          <div className="event-image">
           <img src={props.image}/>
          </div>
          <div className="event-info">
           <h2>{props.eventname}</h2>
           <div className="description_event">
               <p>
                   {props.description}

               </p>
           </div>
           <div className="dateandtime">
               <span><b>Date</b>{props.date}</span>
               <span><b>Time</b>{props.time}</span>
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
