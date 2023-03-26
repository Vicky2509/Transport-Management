import React from 'react'
import '../../Frontend CSS/Apply.css';
const ApplyNow = () => {
  return (
    <form className="signup-form" action="/register" method="post">

    
<div className="form-header">
  <h1>Apply Now</h1>
</div>


<div className="form-body">


  <div className="horizontal-group">
    <div className="form-group left">
      <label htmlFor="firstname" className="label-title">Name *</label>
      <input type="text" id="firstname" className="form-input" placeholder="Enter your name" required="required" />
    </div>
    <div className="form-group right">
      <label htmlFor="lastname" className="label-title">Registration No</label>
      <input type="number" id="lastname" className="form-input" placeholder="Enter your Registration No" />
    </div>
  </div>

 
  <div className="form-group">
    <label htmlFor="email" className="label-title">Email*</label>
    <input type="email" id="email" className="form-input" placeholder="enter your email" required="required"/>
  </div>
  <div className="form-group left">
      <label htmlFor="Stream" className="label-title">Mobile No</label>
      <input type="number" id="password" className="form-input" placeholder="Enter your Mobile No" required="required"/>
    </div>
  <div className="form-group right">
      <label className="label-title">Campus</label>
      <div className='check'>
        <label><input type="checkbox" className="lich" value="Bhubaneswar"/>Bhubaneswar</label>
        <label><input type="checkbox" className="lich" value="iOS"/>Paralakhemundi</label>
        <label><input type="checkbox"  className="lich" value="Andriod"/>Raygada</label>
        <label><input type="checkbox"  className="lich"  value="Game"/>Bolangir</label>
        <label><input type="checkbox"   className="lich"  value="Game"/>Balesore</label>
      </div>
    </div>
 
  <div className="horizontal-group">
   
    <div className="form-group left" >
      <label className="label-title">Course</label>
      <select className="form-input" id="level" >
        <option value="B">B.TECH</option>
        <option value="I">M.TECH</option>
        <option value="A">DIPLOMA</option>
        <option value="A">MBA</option>
        <option value="A">BBA</option>
        <option value="A">BSC</option>
        <option value="A">MSC</option>
        <option value="A">D.PHARMA</option>
        <option value="A">B.PHARAMA</option>
        <option value="A">MA</option>
      </select>
    </div>
    <div className="form-group right">
      <label htmlFor="experience" className="label-title">Passing Year</label>
      <input type="number" min="2016" max="2028"  value="2023" className="form-input"/>
    </div>
  </div>


  <div className="horizontal-group">
  
    <div className="form-group left">
      <label className="label-title">Gender:</label>
      <div className="input-group">
        <label htmlFor="male"><input type="radio" name="gender" value="male" id="male"/> Male</label>
        <label htmlFor="female"><input type="radio" name="gender" value="female" id="female"/> Female</label>
      </div>
    </div>
  
  </div>





  <div className="horizontal-group">
    <div className="form-group left" >
      <label htmlFor="choose-file" className="label-title">Upload Payment ScreenShot <br/>
      *1st You have to pay your transportation fees as per your Route</label>
      <input type="file" id="choose-file" size="80"/>
    </div>
   
  </div>

  
</div>


<div className="form-footer">
 
  <button type="submit" className="btn">SUBMIT</button>
</div>

</form>
  )
}

export default ApplyNow
