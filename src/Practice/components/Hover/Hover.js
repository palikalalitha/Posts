import React, { Component } from 'react'
import { Box, HoverBox, Text, Image } from './styledComponents'
import { FiChevronDown } from 'react-icons/fi'
import image from '../../common/icons/unnamed.jpg'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const Images = [
  {
    id: 1,
    image: '../../common/icons/images (4).jpeg'
  },
  {
    id: 2,
    image: '../../common/icons/images (6).jpeg'
  },
  {
    id: 3,
    image: '../../common/icons/50df34b9e93f30269853b96b09c37e3b.jpg'
  },
  {
    id: 4,
    image: '../../common/icons/images (5).jpeg'
  },
  {
    id: 5,
    image: '../../common/icons/unnamed.jpg'
  }
]

const list = [1, 2, 3, 4]

@observer
class Hover extends Component {
  @observable isHovering
  @observable showHoverElements
  constructor() {
    super()
    this.isHovering = false
    this.showHoverElements = false
  }
  handleMouseHover = () => {
    this.isHovering = !this.isHovering
    this.showHoverElements = false
  }
  handleHover = () => {
    this.showHoverElements = true
  }

  render() {
    console.log(Images)
    return (
      <>
        <Box>
          {list.map(item => (
            <>
              <Text
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
              >
                {this.isHovering && (
                  <h1>
                    <FiChevronDown onClick={this.handleHover} />
                  </h1>
                )}
                {this.showHoverElements && <div>Im Hover element</div>}
              </Text>
            </>
          ))}
        </Box>
        <Box>
          {/* <img src={image} />
          {Images.map(item => (
            <img src={item.image} alt={item.id}></img>
          ))} */}
        </Box>
      </>
    )
  }
}

export default Hover

// import React, { Component } from 'react'
// import { observable } from 'mobx'
// import { observer } from 'mobx-react'
// const label = flipped => {
//   if (flipped === null) {
//     return <div style={{ width: '200px', height: '200px' }}>item</div>
//   }
//   return flipped ? (
//     <div style={{ width: '200px', height: '200px' }}>true</div>
//   ) : (
//     'Good bye'
//   )
// }
// const list = [1, 2, 3, 4]

// @observer
// class Hover extends Component {
//   @observable flipped
//   @observable showItem

//   constructor(props) {
//     super(props)
//     this.flipped = false
//     this.showItem = false
//     // this.state = { flipped: null }
//   }

//   // shouldComponentUpdate(nextState) {
//   //   // if (this.flipped) {
//   //   //   return true
//   //   // }
//   //   return false
//   // }

//   mouseOut() {
//     this.flipped = false
//     // this.showItem = false
//     // console.log("Mouse out!!!");
//     // this.setState({ flipped: false })
//   }

//   mouseOver = () => {
//     // alert('hover')
//     this.flipped = true
//     // this.showItem = true
//     //console.log("Mouse over!!!");
//     // this.setState({ flipped: true })
//   }

//   getMyItem = () => {
//     alert('came')
//     this.showItem = true
//   }
//   render() {
//     return (
//       <>
//         <div
//           style={{
//             width: '200px',
//             height: '200px',
//             backgroundColor: 'pink',
//             marginRight: '10px',
//             display: 'flex',
//             flexDirection: 'column'
//           }}
//           onMouseOver={() => this.mouseOver()}
//           onMouseOut={() => this.mouseOut()}
//         >
//           {1}
//           {this.flipped ? (
//             <button onClick={this.getMyItem}>click me</button>
//           ) : (
//             <p></p>
//           )}
//         </div>
//         {this.showItem ? (
//           <div
//             style={{
//               width: '200px',
//               height: '200px',
//               backgroundColor: 'purple'
//             }}
//           >
//             lalli
//           </div>
//         ) : null}
//       </>
//     )
//   }
// }

// export default Hover
