import React, {useState} from 'react';

import './index.css';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = this.props.selected;
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;
    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
     <div>
        <div className="wheel-container">
        {/* <div className="triangle"></div> */}
        <div className={`wheel ${spinning}`} style={wheelVars}>
          <div className="center">
            <span>
              <p className="p">
              {this.props.totalSpins}
              </p>
              speens <br/> left
            </span>
          </div>
          {items.map((item, index) => (
            <div className="wheel-item section" key={index} style={{ '--item-nb': index }}>
              {item.display}
            </div>
          ))}
        </div>
      </div>
      <div className="btn-cont">
        <button className="btn" onClick={this.selectItem}>SPIN</button>
      </div>
     </div>
    );
  }
}





// export const Wheel = (props)=>{
//  const [selectedItem, setSelectedItem] = useState(null);


//   const selectItem = ()=> {
//     console.log('in select');
//     if (selectedItem === null) {
//       console.log('if stmt');
//       const selected = props.selected;
//       setSelectedItem(selected)
//     } else {
//       console.log('else stmt');
//       setSelectedItem(null);
//       setTimeout(selectItem, 500);
//     }
//     console.log('after all ');
//   }


//   const { items } = props;
//   const wheelVars = {
//     '--nb-item': items.length,
//     '--selected-item': selectedItem,
//   };
//   const spinning = selectedItem !== null ? 'spinning' : '';


//   return (
//     <div>
//        <div className="wheel-container">
//        {/* <div className="triangle"></div> */}
//        <div className={`wheel ${spinning}`} style={wheelVars}>
//          <div className="center">
//            <span>
//              <p className="p">
//              {props.totalSpins}
//              </p>
//              speens <br/> left
//            </span>
//          </div>
//          {items.map((item, index) => (
//            <div className="wheel-item section" key={index} style={{ '--item-nb': index }}>
//              {item.display}
//            </div>
//          ))}
//        </div>
//      </div>
//      <div className="btn-cont">
//        <button className="btn" onClick={()=>selectItem()}>SPIN</button>
//      </div>
//     </div>
//    );
// }


























// import React, {useState} from 'react';
// import axios from 'axios';
// import './index.css';

// const Wheel = (props)=>{
//   const [selectedItem, setSelectedItem] = useState(null);
//   // const selectItem = () => {
//   //   console.log('start selected item');
//   //   if (selectedItem === null) {
//   //     // axios.get('https://spinwheel.betsense.ge/Wheel/Spin/spinwheel_2/testUserRoma/testSpin_roma', {
//   //     //   headers: {
//   //     //     Authorization: "3uA2FpK4tdWtC1Ex",
//   //     //     Accept: 'application/json',
//   //     //   }
//   //     // }).then(res => res.JSON()).then(data => {
//   //     //   const selectedItem = data.stopSectionID;
//   //     // })
//   //     setSelectedItem(5);
//   //   } else {
//   //     setSelectedItem(null);
//   //     setTimeout(()=>{selectItem()}, 500);
//   //   }
//   // }

//   const selectItem = () => {
//     if (selectedItem === null) {
//       console.log('in if');
//       const selected = 5;
//       if (props.onSelectItem) {
//         props.onSelectItem(selectedItem);
//       }
//       setSelectedItem(selected);
//     } else {
//       console.log('in else');
//       setSelectedItem(null);
//       selectItem();
//     }
//   }
//   const items = props.items;
//   const wheelVars = {
//     '--nb-item': items.length,
//     '--selected-item': selectedItem,
//   };
//   const spinning = selectedItem !== null ? 'spinning' : '';

//   return (
//    <div>
//       <div className="wheel-container">
//       {/* <div className="triangle"></div> */}
//       <div className={`wheel ${spinning}`} style={wheelVars}>
//         <div className="center">
//           <span>
//             <p className="p">
//             {props.totalSpins}
//             </p>
//             speens <br/> left
//           </span>
//         </div>
//         {items.map((item, index) => (
//           <div className="wheel-item section" key={index} style={{ '--item-nb': index }}>
//             {item.display}
//           </div>
//         ))}
//       </div>
//     </div>
//     <div>
//       <button onClick={()=>selectItem()}>SPIN</button>
//     </div>
//    </div>
//   );
// }

// export default Wheel;