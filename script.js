
// /// This is used to create a div element on the page

// let divElement = document.createElement('div');
// divElement.classList.add('tyz');
// divElement.style.backgroundColor = 'red';

// let formElement = `
// <h2>Sign up</h2>
// <div class="form">
//     <form method="post">
//         <div>
//             <label for="">Username: </label><br>
//             <input type="text" placeholder="username" id="username">
//         </div>
//         <div>
//             <label for="">email: </label><br>
//             <input type="email" placeholder="email" id="email">
//         </div>
//         <div>
//             <label for="">password: </label><br>
//             <input type="password" placeholder="password" id="password">
//         </div>
//         <div class="btn">
//         <button type="button">submit</button>
//         </div>

        
//     </form>
// </div>`;
// divElement.insertAdjacentHTML('beforeend', formElement);



// let formDiv = document.querySelector('.form')
// formDiv.appendChild(divElement);


let user = [];
class Profile {
    constructor(username, password) {
        

        
        username = document.getElementById("username").value.trim()
        password = document.getElementById("password").value.trim()
        this.username = username;
        this.password = password;
        console.log(this.username);
        console.log(this.password);


        let pattern =   /\D/i;

        let user = pattern.test(username);
        console.log(user);


        let passwordPattern =  /\d/;
        let isMatch = passwordPattern.test(password);


       console.log(isMatch)




        if (username == "" || password == "") {
            alert('All field required')
        } else  if(this.username != username) {
            alert(`username pattern is not correct`)
        } else if(this.password != password) {
            alert(`password pattern is not correct`)

        }
        
    }

    getrofile = function (username, password) {
        let user_name = new Profile(username, password);
        console.log(user_name.username);
        
        let check_db = JSON.parse(localStorage.getItem('userDetail'));
        if (check_db == null) {
         let userdata = new Profile(username, password);
         console.log(userdata);
         user.push(userdata)
         localStorage.setItem('userDetail', JSON.stringify(user));
         
        } else {


            let dataTracker = [];
            for (let i = 0; i < check_db.length; i++) {
                if(check_db[i].username === user_name.username) {
                    console.log(check_db[i].username)

                    dataTracker.push(check_db[i].username)
                }
                
            }


            if (dataTracker.length > 0) {
                alert(`username is already taken`)
            }else {
                let newUserData = {
                    username: this.username,
                    password: this.password
                    
                }
                user.push(newUserData);
                console.log(user);
            }
    
            localStorage.setItem('userDetail', JSON.stringify(user));
        }

        
        
        
        
        return check_db;
        
        
    }

   
}




// profile1.getrofile(username, password);
