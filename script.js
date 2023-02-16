
/// This is used to create a div element on the page

let divElement = document.createElement('div');
divElement.classList.add('tyz');
divElement.style.backgroundColor = 'red';



///THIS IS WRITTEN IN ORDER TO ADD TEXT CONTENT TO THE PAGE
// let textNode = document.createTextNode('Sign up');



// divElement.appendChild(textNode);
// divElement.innerHTML= '<h2>Sign up</h2>';
let formElement = `
<h2>Sign up</h2>
<div class="form">
    <form method="post">
        <div>
            <label for="">Username: </label><br>
            <input type="text" placeholder="username" id="username">
        </div>
        <div>
            <label for="">email: </label><br>
            <input type="email" placeholder="email" id="email">
        </div>
        <div>
            <label for="">password: </label><br>
            <input type="password" placeholder="password" id="password">
        </div>
        <div class="btn">
        <button type="button">submit</button>
        </div>

        
    </form>
</div>`;
divElement.insertAdjacentHTML('beforeend', formElement);



let formDiv = document.querySelector('.form')
formDiv.appendChild(divElement);