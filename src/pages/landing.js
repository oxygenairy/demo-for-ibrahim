//components
import React from "react";
import Template from "../components/template";

class Landing extends React.Component {
//helper functions
   leftBar(){ 
        //add your left bar modules or components below
        return <>
            <div>
                <h1 className="font-dark">This is a sample Landing page left bar</h1>
            </div>
            <h3>All your left bar components are structured here</h3>
        </>
    }
    rightBar(){
        //add your right bar modules or components below
        return <>
            <div>
                <h1 className="font-dark">This is a sample Landing page right bar</h1>
            </div>
            <h3>All your right bar components are structured here</h3>
        </>
    }

    child(){
         //add your main content modules or components below
        return <>
        <div>
            <h1 className="font-dark ">This is a sample Landing page Content</h1>
        </div>
        <h3>All your Content components are structured here</h3>
    </>
    }
    


   render(){
   return <Template 
        //props
            title="Landing Page"
            left= {this.leftBar()}
            right= {this.rightBar()}
            child= {this.child()}
            
         />
    }
}
    






    
export default Landing;