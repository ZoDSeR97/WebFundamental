function peace(element){
    if (element.innerText == "Sign out"){
        alert("Avada Kedavra");
        element.innerText = "Sign in";
    }else{
        alert("Stand Tall Pure Blood!");
        element.innerText = "Sign out";
    }
}

function rev(element){
    user = document.querySelector(("#user"+element));
    action = document.querySelector(("#action"+element));
    user.remove();
    action.remove();
    e = document.querySelector("#pendingTotal");
    num = Number((e.innerText.split())[0])-1;
    e.innerText = num;
    return user;
}

function add(element){
    user = rev(element);
    e = document.querySelector("#connectionsTotal");
    num = Number((e.innerText.split())[0])+1;
    e.innerText = num;
    e = document.querySelector("#connectionsList");
    e.append(user);
}

function editName(){
    username = document.querySelector("#username");
    if(username.innerText == "Phantasmal Joker")
        username.innerText = "Warden Grindelwald"
    else
        username.innerText = "Phantasmal Joker"
}