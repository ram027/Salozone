import React, {  Component } from 'react'
import M  from  'materialize-css/dist/js/materialize.min.js';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import './landing.css'
import SimpleSlider from './carousel'


let flag=true;

class Landing extends Component{ 
          
         state={
           phone:""
         }
          componentDidMount(){
                    let sidenav = document.querySelector('#slide-out');
                    M.Sidenav.init(sidenav, {edge:"right"});
                   let defaultValue=document.querySelector('.react-tel-input input');
                   
                    // defaultValue.style.value=+91;
                   defaultValue.placeholder='Enter mobile number'
                 
                   console.log(defaultValue.nextElementSibling.children[0].children[0])
                   defaultValue.nextElementSibling.children[0].children[0].className='flag in';

                   let showFlag=document.querySelector('.click-login .selected-flag');
                   let showVal=document.querySelector('.click-login input');
                   
                   
                   showVal.placeholder="Enter your mobile number"
                   showFlag.children[0].className='flag in'; 
                  



          }
          handleChange = value => {
            console.log(value);
            this.setState({ phone: value }, () => {
              console.log(this.state.phone);
            });
          };
          handleCreateAnAccount=()=>{
            
                 let auth=document.querySelector('.click-login');
                 let firstDiv=document.querySelector('.first-div');
                 auth.style.display='block';
                 firstDiv.style.display='none';
                
          }
          handleLogin=()=>{
            let auth=document.querySelector('.click-login');
            auth.style.display='none';
            let firstDiv=document.querySelector('.first-div');
            firstDiv.style.display='block'
          }
          handleEmail=()=>{
            let showEmail=document.querySelector('.email-second-choice');
            let showButton=document.querySelector('.email-auth-button');
            let hidePhone=document.querySelector('.inter-phone')
            if(flag){
              showEmail.style.display='block';
              hidePhone.style.display='none';
              //console.log(showEmail)
              showButton.textContent='Continue with mobile number';
              flag=false;
            }else{
              showEmail.style.display='none';
              hidePhone.style.display='block';
              showButton.textContent='Continue with email ';
              flag=true;
            }
          
            


          }
         
          render()
           {       
           return (
            <div className=' container' style={{backgroundColor:"#f4f6ff"}}>

               {/* navbar section */}
            <div className='nav-style' style={{marginTop:"20px"}}>  
                <nav style={{backgroundColor:"#fff",height:"0"}}>
                       <div className=''>
                            <a href="/" className="brand-logo" style={{color:"#3c4852"}}>Salozone</a>
                            <h5  data-target="slide-out" className="sidenav-trigger show-on-large right " style={{backgroundColor:"white",color:"grey",marginTop:"17px",cursor:"pointer"}}>Login</h5>
                       </div>
                 </nav>
            </div> 




                 {/* sidenav section */}
                <ul id="slide-out" className="sidenav right" style={{width:"40%",backgroundColor:""}} >
                    
                      <div className='first-div' style={{padding:"25px 50px"}}>
                          
                          <i className="material-icons sidenav-close"   ><span style={{cursor:"pointer"}}>close</span></i>
                         <h5 className='auth' style={{color:"#3c4852",fontWeight:"640",fontSize:"2.0rem",marginTop:"22px"}}>Login</h5>
                         <p >or <span className='create-an-account' onClick={this.handleCreateAnAccount}>create your account</span></p>
                        <div className='inter-phone'>
                         <ReactPhoneInput style={{marginTop:"30px"}} 
                               inputExtraProps={{
                                 name: "phone",
                                 required: true,
                                 autoFocus: true
                                     }}
                             defaultCountry={ 'us'  }
                             value={this.state.phone}
                             onChange={this.handleChange}
                          /></div>
                          <input type='email' placeholder='enter email here ' className='email-second-choice' style={{marginTop:"30px",paddingLeft:"9px"}}/>
                         <div style={{marginTop:"40px"}}>
                           <button type='button' className='btn auth-button ' style={{backgroundColor:"#08bd80"}}>Login</button>
                           <span  className='right text-black email-auth-button' onClick={this.handleEmail} style={{cursor:"pointer"}} >Continue with email</span>
                         </div>



                      </div>

                      {/* new account section */}
                      <div className='click-login' style={{padding:"25px 50px",display:'none'}}>
                           <i className="material-icons sidenav-close"   ><span style={{cursor:"pointer"}}>close</span></i>
                                <h5 className='auth' style={{color:"#3c4852",fontWeight:"640",fontSize:"2.0rem",marginTop:"22px"}}>Join Salozone</h5>
                                <p >or <span className='create-an-account' onClick={this.handleLogin}>Login into your account</span></p>
                                <ReactPhoneInput style={{marginTop:"30px"}}
                                      inputExtraProps={{
                                        name: "phone",
                                        required: true,
                                        autoFocus: true
                                            }}
                                    defaultCountry={ 'us'  }
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                 />
                                <div style={{marginTop:"40px"}}>
                                  <button type='button' className='btn auth-button ' style={{backgroundColor:"#08bd80"}}>Continue</button>
                                 </div>
                      </div>
                      {/* end of new account section */}
                </ul>
                {/* end of sidenav section */}

              <div style={{position:"absolute", marginTop:"35px"}}>
                 <div className='' style={{marginTop:"100px",width:"1060px"}}>
                        < SimpleSlider />
                  </div>
              </div>




        </div>
        )
        // end of return
                        }
                        // end of render
  
}

export default Landing
