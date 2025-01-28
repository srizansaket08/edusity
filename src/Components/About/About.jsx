import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Now is the winter of our discontent
  Made glorious summer by this sun of York;
  And all the clouds that lour'd upon our house
  In the deep bosom of the ocean buried.
  Now are our brows bound with victorious wreaths</p>
            <p>  And now, instead of mounting barded steeds
  To fright the souls of fearful adversaries,
  He capers nimbly in a lady's chamber
  To the lascivious pleasing of a lute.
  But I, that am not shaped for sportive tricks,
  Nor made to court an amorous looking-glass;</p>
            <p>
  I, that am rudely stamp'd, and want love's majesty
  To strut before a wanton ambling nymph;
  I, that am curtail'd of this fair proportion,
  </p>
        </div>
    </div>
  )
}

export default About