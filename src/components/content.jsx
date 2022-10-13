import React from "react";

function Content(){
    return(
    
        <div className="content">
        <div class="content1">
            <h3>The Ultimate M-Shamba Product Experience</h3>
           <div class="content2">
            <div class="form1">
                <h3>Please Fill in the form</h3>
                <form action="" class="myForm">
                    <label for="item">Enter item Id</label>
                    <input id="item" name="item" type="number"/>
                    <button class="btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
        </div>
            
    ) 
} 

export default Content;