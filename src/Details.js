import React, { Component } from 'react'
import './Details.css';

let h = 1;
class Details extends Component {
    constructor() {
        super();
        this.state = {
            consumerdetails: [{
                id: 1,
                name: "rahul",
                phone: "789541014",
                email: "abc@up.com"
            },
            {
                id: 2,
                name: "mohit",
                phone: "5455454444",
                email: "art@kj.com"

            }
                ,
            {
                id: 3,
                name: "RAm",
                phone: "5455204444",
                email: "ythj@kj.com"

            }
            ],
            dummydetails:[
                {
                    name:"",
                    phone:"",
                    email:""
                }
            ]

        }
    }
    onClickHandler = (e) => {

        console.log(e);
        document.getElementById(e).style.display = "block";
        console.log(e);
    }
    onClickHandler2 = (e) => {

        console.log(e);
        document.getElementById(e).style.display = "none";
        console.log(e);
    }
    onClickHandler3=()=>{
        document.getElementById("listall").style.display="none";
        document.getElementById("listall2").style.display="block";
    }
    
    
    handleChange=(e)=>{
        
            const dl=this.state.dummydetails;
           // console.log(d1);
            

            
        
    }
    

    render() {
        
        
        return (
            <section style={{ position: "absolute", top: "40px", left: "45%" }}>
                <center>
                    <div id="listall">
                        <h1>Phone book</h1>
                        <div>
                            {this.state.consumerdetails.map((ele) => {

                                let g = "inner" + h;
                                h = h + 1;
                                return (
                                    <div id={ele.id}>
                                        <div className="labelname">{ele.name}  <span><i className="arrow down" onClick={this.onClickHandler.bind(this, g)}></i></span></div><br />
                                        <div id={g} className="hidden" >
                                            <label><i class="fa fa-phone"></i>{ele.phone}  <span><i className="fas fa-envelope-square"></i>{ele.email}

                                            </span> <span> <i class="arrow up" onClick={this.onClickHandler2.bind(this, g)}></i></span>
                                            </label><br />
                                        </div>
                                    </div>
                                )
                            })
                            }
                            <div class="circle" onClick={this.onClickHandler3}></div>
                        </div>
                    </div>
                    <div id="listall2">
                        <h1>Add the Contacts here</h1>
                        <form >
                            <label htmlFor="name"  >Name</label>
                            <input type="text" name="name" value="" onChange={this.handleChange.bind(this)}></input>
                            <button>Add</button>
                        </form>
                    </div>

                </center>
            </section>


        )
    }
}
export default Details; 