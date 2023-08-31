let url="https://api.github.com/users/SreeKrishnnaa";//change username
  let prom=fetch(url);
  console.log(prom);
  prom.then(
    function(res){
        let m=res.json();
        console.log(m);
        return m;
    }
  ).then(function(res){
    return new Promise(function(resolve,reject){
        reject(res);
        
    })
  }).catch(function(res){
    let img=document.createElement("img");
        img.src=res.avatar_url;
        document.body.append(img);
  });