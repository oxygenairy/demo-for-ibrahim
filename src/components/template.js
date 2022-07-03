import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
//import { Link } from "react-router-dom";

class Template extends React.Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            //caches for implementation
            constant:6,
            show: true,
            isHeader: true,
            left: typeof this.props.left == "undefined" ? 0 : 3,
            right: typeof this.props.right == "undefined" ? 0 : 3,
            content: typeof this.props.left == "undefined" && typeof this.props.right == "undefined" ? 12 :
                     typeof this.props.left == "undefined" || typeof this.props.right == "undefined" ? 9 :
                     6
        }
    }

    //linking props and state
    static getDerivedStateFromProps(props, state) {
        return {
            //setup for caches

        }
    }

    //perform animation after load/render or after effect
    componentDidMount() {
         setTimeout(() => {
            this.setState({ 
                show: true,
            })
        }, 2000)
    }

    //render/load 
    render() {
        //begining of page
        return <>
            {/*Real template here*/}
            <div className ="casing  p-0 bg-light text-white text-center">
                {this.state.isHeader && 
                    <div className = 'templateHeader '>
                        {/*Header*/}
                        <Header 
                            //props
                            title = {typeof this.props.title != "undefined" ? this.props.title : null}
                        />
                    </div>
                }
                <div className = 'templateContent'>
                    {/*body*/}
                    <div className="templateBody">
                        <div className={ 'align-start text-dark col-md-'+ this.state.left }>
                            {typeof this.props.left != "undefined" ? this.props.left : null}
                        </div>
                        <div className={' bodyContent align-middle text-dark col-md-'+ this.state.content }>
                             {typeof this.props.child != "undefined" ? this.props.child : <h1 className="center ">No content to show<br/>Pass a component as a prop to child in template</h1>}
                        </div>
                        <div className={ 'align-start text-dark col-md-'+ this.state.right }>
                            {typeof this.props.right != "undefined" ? this.props.right : null}
                        </div>
                    </div>
                    {/*footer*/}
                    <div className = 'templateFooter bg-dark'>
                        <Footer />
                    </div>
                </div>
                
            </div>
        </>
    }
}

export default Template;