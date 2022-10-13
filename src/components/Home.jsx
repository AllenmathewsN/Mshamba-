import React from "react";
import tips from "../images/tips.jpg";
import healthBenefits from "../images/healthbenefits.jpg";
import superFoods from "../images/superfoods.jpg";
import freshOrganic from "../images/fresh organic.jpg";
import greenBell from "../images/greenbell.jpg";
import freshVegetables from "../images/freshvegetables.jpg";

function Home(){
    return (
        <div className="home" >
            <div>
                <h1 className="logo">M<span className="primary">SHAMBA</span></h1>
            </div>
            <div className="d">
                <h1> Know our Products and their Health Benefits </h1>
            </div>
            <div className="tu">
                <h1>
                    <span className="primary">OUR</span>  <span>GUARANTEE</span>
                </h1>
            </div>
            <div className="k">
                <div className="tips">
                    <img src={tips} alt="" />  {/*tip imported as a component*/}
                    <div className="tips1">
                        <h1> Monitoring </h1>
                        <p> Farmers are provided with field officers to manage their farming methods. Only productive methods and approved are used.</p>
                        <button> Read More </button>
                    </div>

                </div>
                <div></div>
            </div>

        </div>
    )
}
    // return(
//         <div className="home">
//             <div>
//                 <h1 className="logo">M<span className="primary">SHAMBA</span></h1>
//             </div>  
//             <div className="d">
//                 <marquee>
//                     <h1> Know our Products and their Health Benefits </h1>
//                 </marquee>
//             </div>
//             <div className="tu">
//                 <h1>
//                     <span className="primary">OUR</span>  <span>GUARANTEE</span>
//                 </h1>
//             </div>

  

//         </div>
          


//     <div className="k">

//         <div className="tips">
//             <img src={tips}/>
//             <div className="tips1">
//                 <h1> Monitoring </h1>
//                 <p> Farmers are provided with field   officers to manage their farming   methods. Only productive
//                             methods and approved are   used.
//                 </p>
//                 <button> Read More </button>
//             </div>
//         </div>
//       <div className="greenbell">
//           <img src={healthBenefits}/>
//           <div className="m">
//               <h1> Variety </h1>
//               <p> Our line of products is   wide, from Sukumawiki to   Cabbages etc. We are not   limited to
//                   exotic products only.  We also have local vegetables.</p>
//               <button> Read More </button>
//           </div>


//       </div>
//       <div className="fresh">
//           <img src={superFoods}/>
//           <div className="k1">
//               <h1> Quality </h1>
//               <p> Our quality meets international  standards in food handling   processing and distribution. 
//                   Pick up points are stationed   all over the country... </p>
//               <button> Read More </button>

//           </div>

//       </div>
//   </div>

//   <div className="kA">
//       <div className="tipsA">
//           <img src={freshOrganic}/>
//           <div className="tips1A">
//               <h1> Natural Products </h1>
//               <p> Our products are natured using  approved substances from   the WHO, KEBS and EUC.</p>
//               <button> Read More </button>

//           </div>
//       </div>
//       <div className="greenbellA">
//           <img src={greenBell}/>
//           <div className="mA">
//               <h1> Non-GMOs </h1>
//               <p> Since the country laws limits  the use of genetically modified   organisms(GMOs), our products
//                     are strictly non-GMOs
//               </p>
//               <button> Read More </button>

//           </div>

//       </div>
//       <div className="freshA">
//           <img src={freshVegetables}/>
//           <div className="k1A">
//               <h1> Vegetables</h1>
//               <p> We have a wide arrays   of different vegetables. Vegetables   are delivered timely and adhere
//                     to Kenyan Public Health laws   and regulations ...
//               </p>
//               <button> Read More </button>

//           </div>

//       </div>
//   </div>
//        </div>
//          </div>
//          </div>
//   <div className="container">
//       <h1 className="form">
//           <span className="primary">GET</span> <span>IN TOUCH</span>
//       </h1>
//       <p className="part2">We would love to respond to your queries and comments, feel free to get in touch with us</p>
//   <div className="contact-box">
//       <div className="contact-left">
//           <h3><span className="primary">Send</span> your request</h3>
//           <form>
//               <div className="input-row">
//                   <div className="input-group">
//                       <label>Name</label>
//                       <input type="text" placeholder="your name"/>
//                   </div>
//                   <div className="input-group">
//                       <label>Email</label>
//                       <input type="email" placeholder="yourname@gmail.com"/>
//                   </div>
//               </div>
//               <div className="input-row">
//                   <div className="input-group">
//                       <label>Phone</label>
//                       <input type="text" placeholder="+254 7123 456"/>
//                   </div>
//                   <div className="input-group">
//                       <label>Subject</label>
//                       <input type="email" placeholder="e.g bulk order"/>
//                   </div>
//               </div>
//               <label>Comments</label>
//               <textarea rows="5" placeholder="Your comments"></textarea>
//             <div className="butt">
//               <button className="btn1" type="submit">SEND</button>
//           </div>
//       </form>
  
//   </div>
//       <div className="contact-right">
//           <h3>Reach Us</h3>
  
//           <table>
//               <tr>
//                   <td><i className="fa-solid fa-envelope"></i>Email:</td>
//                   <td>mshambakenya@gmail.com orders@mshambakenya.com</td>
//               </tr>
//               <tr>
//                   <td><i className="fa-solid fa-phone"></i>Phone:</td>
//                   <td>+254 7456 789 +254 1024 998</td>
//               </tr>
//               <tr>
//                   <td><i className="fa-solid fa-location-dot"></i>Address:</td>
//                   <td>Ngong Lane, Ngong Lane Plaza, 1st Floor,Nairobi Kenya
//                   </td>
//               </tr>
//           </table>
//   </div>
//   </div>
//   </div>
//   </div>
//     )
// }

export default Home; 