import React, { Component } from 'react'
import image from '../../common/icons/wp2398971.jpg'

import image1 from '../../common/icons/images (1).jpeg'
import image2 from '../../common/icons/images.jpeg'

import image3 from '../../common/icons/images (3).jpeg'
import image4 from '../../common/icons/images (4).jpeg'

class LazyImages extends Component {
  render() {
    return (
      <div>
        LazyImages
        <img src={image} alt='image' loading='lazy' width='700' height='700' />
        <img src={image1} alt='image' loading='lazy' width='405' height='405' />
        <img src={image2} alt='image' loading='lazy' width='405' height='405' />
        <img src={image3} alt='image' loading='lazy' width='405' height='405' />
        <img src={image4} alt='image' loading='lazy' width='405' height='405' />
        <img
          loading='lazy'
          src='https://placekitten.com/405/405'
          width='405'
          height='405'
          alt=''
        />
        <img
          loading='lazy'
          src='https://placekitten.com/406/406'
          width='406'
          height='406'
          alt=''
        />
        <img
          loading='lazy'
          src='https://placekitten.com/407/407'
          width='407'
          height='407'
          alt=''
        />
        <img
          loading='lazy'
          src='https://placekitten.com/408/408'
          width='408'
          height='408'
          alt=''
        />
        <img
          loading='lazy'
          src='https://placekitten.com/409/409'
          width='409'
          height='409'
          alt=''
        ></img>
      </div>
    )
  }
}

export default LazyImages
