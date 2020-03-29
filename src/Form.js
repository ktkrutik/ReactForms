import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Miss',
            firstName: '',
            fnErr: '',
            lastName: '',
            lnErr: '',
            email: '', 
            emailErr: '',
            phone: '',
            phoneErr: '',
            zip: '',
            zipErr: '',
            // source: '',
            // sourceChecked: false,
            sourceErr: '',
            comments: '',
            comErr: '',
            courses: 'React'
        }
    }

    validateFirstName = () => {
        const firstName = document.getElementById("firstName");

        if(this.state.firstName === ""){
            this.setState({
                fnErr: "Please enter your First Name"
            })
            firstName.style.background="red"
        }
        else{
            const regex = /^[a-zA-Z\s]+$/;
            if(regex.test(this.state.firstName) === false){
               this.setState({
                    fnErr:  "Please enter a valid first name"
               }) 
               firstName.style.background="red"
            }
            else{
                this.setState({
                    fnErr:  ""
               }) 
               firstName.style.background=""
            }
        }
    }

    validateLastName = () => {
        const lastName = document.getElementById("lastName");

        if(this.state.lastName === ""){
            this.setState({
                lnErr: "Please enter your Last Name"
            })
            lastName.style.background="red"
        }
        else{
            const regex = /^[a-zA-Z\s]+$/;
            if(regex.test(this.state.lastName) === false){
               this.setState({
                    lnErr:  "Please enter a valid last name"
               }) 
               lastName.style.background="red"
            }
            else{
                this.setState({
                    lnErr:  ""
               }) 
               lastName.style.background=""
            }
        }
    }

    validateEmail = () => {
        const email = document.getElementById("email");

        if(this.state.email === ""){
            this.setState({
                emailErr: "Please enter your Email"
            })
            email.style.background="red"
        }
        else{
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(regex.test(this.state.email) === false){
               this.setState({
                    emailErr:  "Please enter a valid email"
               }) 
               email.style.background="red"
            }
            else{
                this.setState({
                    emailErr:  ""
               }) 
               email.style.background=""
            }
        }
    }
    
    validatePhone = () => {
        const phone = document.getElementById("phone");

        if(this.state.phone === ""){
            this.setState({
                phoneErr: "Please enter your Phone"
            })
            phone.style.background="red"
        }
        else{
            const regex = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
            if(regex.test(this.state.phone) === false){
               this.setState({
                    phoneErr:  "Please enter a valid Phone"
               }) 
               phone.style.background="red"
            }
            else{
                this.setState({
                    phoneErr:  ""
               }) 
               phone.style.background=""
            }
        }
    }

    validateZip = () => {
        const zip = document.getElementById("zip");

        if(this.state.zip === ""){
            this.setState({
                zipErr: "Please enter your Zip"
            })
            zip.style.background="red"
        }
        else{
            const regex = /^\d{5}$/;
            if(regex.test(this.state.zip) === false){
               this.setState({
                    zipErr:  "Please enter a valid Zip"
               }) 
               zip.style.background="red"
            }
            else{
                this.setState({
                    zipErr:  ""
               }) 
               zip.style.background=""
            }
        }
    }

    validateSource = () => {
        const source = document.getElementsByName("source");
        for(let i=0; i<source.length; i++){
            console.log('Source name: ' + source[i] + ' isChecked: ' + source[i].checked)
            if(source[i].checked){
                this.setState({
                    sourceErr:  ""
               }) 
               return
            }
         }
         this.setState({
            sourceErr: "Please check any source"
         })
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        },()=>this.validateFirstName())
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        },()=>this.validateLastName())
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        },()=>this.validateEmail())
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        },()=>this.validatePhone())
    }

    handleZipChange = (event) => {
        this.setState({
            zip: event.target.value
        },()=>this.validateZip())
    }

    handleSourceChange = (event) => {
        this.setState({
            source: event.target.checked
        },()=>this.validateSource())
    }

    handleCourseChange = (event) => {
        this.setState({
            courses: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`
        Title: ${this.state.title}
        First Name: ${this.state.firstName} 
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Phone: ${this.state.phone}
        Zip: ${this.state.zip}        
        Course: ${this.state.courses} 
        Comments: ${this.state.comments}
        `)
        event.preventDefault()
    }

    render() {
        const { firstName, lastName, email, phone, zip, courses, comments } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <br/><br/>

                <label for="title"> Title: </label>
                <input type="radio" id="title" value="Miss" checked={this.state.title === "Miss"} onChange={this.handleTitleChange}/> Miss &nbsp;&nbsp;
                <input type="radio" id="title" value="Mr." checked={this.state.title === "Mr."} onChange={this.handleTitleChange}/> Mr. &nbsp;&nbsp; 
                <input type="radio" id="title" value="Mrs." checked={this.state.title === "Mrs."} onChange={this.handleTitleChange}/>Mrs. &nbsp;&nbsp; 
                <br/><br/><br/>

                <label for="firstName"> First Name: </label>
                <input 
                type="text" 
                placeholder="First Name"
                id="firstName"
                value={firstName}
                onChange={this.handleFirstNameChange}
                />
                <div style={{ fontSize: 12, color: "red" }}> {this.state.fnErr} </div>
                <br/><br/>

                <label for="lastName"> Last Name: </label>
                <input 
                type="text" 
                placeholder="Last Name"
                id="lastName"
                value={lastName}
                onChange={this.handleLastNameChange}
                />
                <div style={{ fontSize: 12, color: "red" }}> {this.state.lnErr}</div>
                <br/><br/>

                <label for="email"> Email: </label>
                <input 
                type="email" 
                placeholder="Email"
                id="email"
                value={email}
                onChange={this.handleEmailChange}
                />
                <div style={{ fontSize: 12, color: "red" }}> {this.state.emailErr} </div>
                <br/><br/>

                <label for="phone"> Phone: </label>
                <input 
                type="text" 
                placeholder="xxx-xxx-xxxx"
                id="phone"
                value={phone}
                onChange={this.handlePhoneChange}
                />
                <div style={{ fontSize: 12, color: "red" }}> {this.state.phoneErr}</div>
                <br/><br/>

                <label for="zip"> Zip: </label>
                <input 
                type="text" 
                placeholder="xxxxx"
                id="zip"
                value={zip}
                onChange={this.handleZipChange}
                />
                <div style={{ fontSize: 12, color: "red" }}> {this.state.zipErr}</div>
                <br/><br/>
                
                <label for="source">How did you hear: </label>
                <input
                type="checkbox"
                name="source"
                // checked={sourceChecked}
                // value={source}
                onChange={this.handleSourceChange}
                /> Facebook &nbsp;&nbsp;
                <input
                type="checkbox"
                name="source"
                onChange={this.handleSourceChange}
                /> Google &nbsp;&nbsp;
                <input
                type="checkbox"
                name="source"
                onChange={this.handleSourceChange}
                /> Yelp
                <div style={{ fontSize: 12, color: "red" }}> {this.state.sourceErr}</div>
                <br/><br/>

                <label for="courses">Courses: </label>
                <select 
                value={courses}
                id="courses"
                onChange={this.handleCourseChange}>
                    <option value='React'> React </option>
                    <option value='Angular'> Angular </option>
                    <option value='Vue'> Vue </option>
                </select>
                <br/><br/><br/>

                <label for="comments">Comments: </label>
                <textarea 
                value={comments}
                id="comments"
                onChange={this.handleCommentsChange}>
                </textarea>
                <div style={{ fontSize: 12, color: "red" }}> {this.state.comErr}</div>
                <br/><br/>

                <button type="submit"> Submit </button>
            </form>
        )
    }
}

export default Form
