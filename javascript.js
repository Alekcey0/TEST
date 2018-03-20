'use strict';
var user;
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
      var xhr = new XHR();
      xhr.open('GET', 'user.json', false);
      xhr.onload = function() {

      user=JSON.parse(this.responseText);
}
      xhr.onerror = function() {
        alert( 'Ошибка ' + this.status );
      }
      xhr.send();


var arr=[];
    for (var i=0; i<user.results.length-1; i++) {
        var div=document.createElement('div');
        var parentDiv=document.createElement('div');
        var span=document.createElement('span'),
            hideBlock=document.createElement('div'),
            info=document.createElement('ul'),
            img=document.createElement('img');

        // parentDiv.setAttribute('name', user.results[i].name.first);
        parentDiv.classList.toggle('user');
        hideBlock.classList.toggle('hide');

        div.classList.toggle('userImg');
        div.style.backgroundImage='url('+user.results[i].picture.medium+')';

        info.innerHTML=
        '<li> Street: '+user.results[i].location.street+'</li> '+
        '<li> City: '+user.results[i].location.city+'</li> '+
        '<li> State: ' +user.results[i].location.state+'</li> '+
        '<li> Email: '+user.results[i].email+'</li> '+
        '<li> Phone: '+user.results[i].phone+'</li>';

        img.classList.toggle('IMG');
        img.style.backgroundImage='url('+user.results[i].picture.large+')';


        hideBlock.appendChild(info);
        hideBlock.appendChild(img);

        parentDiv.appendChild(div);
        parentDiv.appendChild(span);
        parentDiv.appendChild(hideBlock);
        users.appendChild(parentDiv);
        
        // alert(user.results[i].name.first);
        // for (var r=0; r<user.results.length-1; r++) {
        //   if(user.results[r].name.first.charAt(0)<user.results[r+1].name.first.charAt(0)) {
        //     var temp=user.results[r].name.first;
        //     user.results[r].name.first=user.results[r+1].name.first;
        //     user.results[r+1].name.first=temp;
        //   }
        // }
          parentDiv.setAttribute('name', user.results[i].name.first);
          span.innerHTML=user.results[i].name.title+' '+
                      user.results[i].name.first+' '+user.results[i].name.last;

    }

        var children=users.querySelectorAll('.user');

        var cloneArr=[];

        for (var j=0; j<children.length; j++) {
          children[j].onclick=function() {

              this.children[2].classList.toggle('show');
              this.children[2].classList.toggle('hide');

              this.children[2].onclick=function() {
                this.children[2].classList.toggle('show');
                this.children[2].classList.toggle('hide');
              }
          }
        }

var cloneUser=users.cloneNode(true);

var userName=[];

  for (var i=0; i<children.length; i++) {
    userName.push(children[i].getAttribute('name'));
  }
  userName.sort();
  
  sorting.onclick=function() {
      if (sorting[1].selected == true) {
        users.innerHTML='';
        console.log(userName);
          for (var i=0; i<49; i++) {
            for (var r=0; r<49; r++) {
              if (userName[i] == children[r].getAttribute('name'))
              {
                var cU=document.createElement('div');
                cU.innerHTML = children[r].innerHTML;
                cU.classList.toggle('user');
              }
            }
            users.appendChild(cU);
          }



              var usersChildren=users.querySelectorAll('.user');

                  for (var j=0; j<usersChildren.length; j++) {
                    usersChildren[j].onclick=function() {

                        this.children[2].classList.toggle('show');
                        this.children[2].classList.toggle('hide');

                        this.children[2].onclick=function() {
                          this.children[2].classList.toggle('show');
                          this.children[2].classList.toggle('hide');
                        }
                    }
                  }
  }
        if (sorting[2].selected == true) {
          users.innerHTML='';
          users.innerHTML=cloneUser.innerHTML;
                var usersChildren=users.querySelectorAll('.user');

                  for (var j=0; j<usersChildren.length; j++) {
                    usersChildren[j].onclick=function() {

                        this.children[2].classList.toggle('show');
                        this.children[2].classList.toggle('hide');

                        this.children[2].onclick=function() {
                          this.children[2].classList.toggle('show');
                          this.children[2].classList.toggle('hide');
                        }
                    }
                  }





        }
      
}



