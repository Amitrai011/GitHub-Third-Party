function getUserData() {
  let userName = document.querySelector("input").value;
  if (userName.length == 0) {
    alert("Please Enter Github User Name to view the profile");
    return;
  }
  const url = "https://api.github.com/users/" + userName;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data["message"]);
    if (data["message"] == "Not Found") {
      alert("username is incorrect");
      return;
    }
    document.querySelector("img").src = data["avatar_url"];
    document.querySelector(".name").innerHTML = data["login"];
    document.querySelector(".followers").innerHTML = "Followers: " + data["followers"];
    document.querySelector(".following").innerHTML = "Following: " + data["following"];
    document.querySelector(".public_repos").innerHTML = "Repository: " + data["public_repos"];
    document.querySelector(".public_gists").innerHTML = "Gists: " + data["public_gists"];
    document.querySelector(".bio").innerHTML = "Bio: " + data["bio"];
    document.querySelector(".twitter_username").innerHTML = "Twitter: " + data["twitter_username"];
    document.querySelector(".email").innerHTML = "Email: " + data["email"];
    document.querySelector(".location").innerHTML = "Location: " + data["location"];
    document.querySelector(".blog").innerHTML = "Blog: " + data["blog"];
    document.querySelector(".company").innerHTML = "Company: " + data["company"];
  })
}

document.querySelector("button").addEventListener("click", function() {
  getUserData();
});

document.querySelector("input").addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    getUserData();
  }
});

document.querySelector(".name").addEventListener("click", function() {
  let userName = document.querySelector("input").value;
  window.open("https://github.com/" + userName);
});

document.querySelector(".blog").addEventListener("click", function() {
  let blog = document.querySelector(".blog").innerText;
  window.open(blog.substring(6));
});

document.querySelector(".twitter_username").addEventListener("click", function() {
  let twitter = document.querySelector(".twitter_username").innerText;
  let twitterLink = "twitter.com/" + twitter.substring(9);
  window.open(twitterLink, 'TwitterWindow',width=600,height=300);
});

getUserData();
