import React from 'react';
// import vid from './media/WalkingOntheMoonBassLine';

const Elements = () => {
    return (<div>
        <ins>ins insert element</ins>
        <hr/>
        <del>del delete element</del>
        <hr/>
        <hr/>
        <hr/>
        <bdo dir='rtl' > 1 2 3 4 5 6  <mark>777</mark>  8 9</bdo>
        <br/>
        <div style={{display:'flex', justifyContent: 'space-evenly'}} >
        <h3>Kitties</h3>
        <details style={{marginTop: '1.5rem' }} >
            <p>Most kitties are not pink</p>
        </details> 
             </div>
             <div style={{padding: '20px', margin: '20px'}} >
             <video controls width="450">
                 {/* <source src={vid} type="video/mp4"></source> */}
                 {/* <source src="../public/media/WalkingOntheMoonBassLine.mp4" type="video/mp4"></source> */}
                 <source src="../media/WalkingOntheMoonBassLine.mp4" type="video/mp4"></source>

                    Sorry, your browser doesn't support embedded videos.
            </video>
            </div>
             {/* <object
             type='video/mp4'
              data="./media/WalkingOntheMoonBassLine.mp4"
              width='250px'
              height='200px'
             >
                 HOw did this happen???
             </object> */}
       
        <p>N0<sub>2</sub></p>
    </div>)
}

export default Elements;