//  Selecting or Calling Elements from HTML //
let right = document.querySelector('.count');
let sponsor = document.querySelector('.sponsored');
let profile = document.querySelector('.pandp');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let community = document.querySelector('.community_chat');
let chat = document.querySelector('.group_conversation');
let status = document.querySelector('.status');



// Start Under Contact by the right scroll people to follow Start //
let list = [
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco Emmanuel'
  },
];

list.forEach(item => {
  right.innerHTML += `
<div class="followers">
  <img src="${item.img}" alt="">
  <span class="material-symbols-outlined dot">
  fiber_manual_record
  </span>
  <span>${item.span}</span>
</div>
  `
});
//  End Under Contact by the right scroll people to follow  End//



//  Start Under Pages and profiles by the right scroll Start //
let list2 = [
  {
    img: './assest/img/message.png',
    span: '99 Messages'
  },
  {
    img: './assest/img/switch.png',
    span: 'Switch into Page'
  },
  {
    img: './assest/img/create.png',
    span: 'Create promotion'
  },
];

list2.forEach(item => {
  profile.innerHTML += `
<div class="pages shrink">
  <img src="${item.img}" alt="">
  <span>${item.span}</span>
</div>
  `
});
//  End Under Pages and profiles by the right scroll End //



//  Start  First left Scroll scroll Start //
let list3 = [
  {
    img: './assest/img/test.JPG',
    span: 'Chisco Emmanuel'
  },
  {
    img: './assest/img/friends.png',
    span: 'Friends'
  },
  {
    img: './assest/img/memories.png',
    span: 'Memories'
  },
  {
    img: './assest/img/saved.png',
    span: 'Saved'
  },
  {
    img: './assest/img/groups.png',
    span: 'Groups'
  },
  {
    img: './assest/img/videos.png',
    span: 'Video'
  },
];

list3.forEach(item => {
  first.innerHTML += `
  <div class="div">
  <img src="${item.img}" alt="">
  <span>${item.span}</span>
  </div>
  `
});
//  End  First left Scroll scroll End //



//  Start  Second (Hide) left Scroll scroll Start //
let list4 = [
  {
    img: './assest/img/adCenter.png',
    span: 'Ad Center'
  },
  {
    img: './assest/img/adsManager.png',
    span: 'Ads Manager'
  },
  {
    img: './assest/img/climate.png',
    span: 'Climate Science Center'
  },
  {
    img: './assest/img/events.png',
    span: 'Events'
  },
  {
    img: './assest/img/feeds.png',
    span: 'Feeds'
  },
  {
    img: './assest/img/fundriser.png',
    span: 'Fundraisers'
  },
  {
    img: './assest/img/gaming.png',
    span: 'Gaming Video'
  },
  {
    img: './assest/img/live.png',
    span: 'Live Videos'
  },
  {
    img: './assest/img/market2.png',
    span: 'Marketplace'
  },
  {
    img: './assest/img/messanger.png',
    span: 'Messenger'
  },
  {
    img: './assest/img/messangerKid.png',
    span: 'Messenger Kids'
  },
  {
    img: './assest/img/payments.png',
    span: 'Orders and payments'
  },
  {
    img: './assest/img/pages.png',
    span: 'Pages'
  },
  {
    img: './assest/img/control2.png',
    span: 'Play Games'
  },
  {
    img: './assest/img/activities.png',
    span: 'Recent ad activities'
  },
];

list4.forEach(item => {
  second.innerHTML += `
  <div class="hide div">
    <img src="${item.img}" alt="">
    <span>${item.span}</span>
  </div>
  `
})
//  End  Second (Hide) left Scroll scroll End //



//  Start  Third  left Scroll scroll Start //
let list5 = [
  {
    img: './assest/img/logo.png',
    span: 'UMU NIKE'
  },
  {
    img: './assest/img/logo.png',
    span: 'Jesus Christ Son Of God'
  },
  {
    img: './assest/img/logo.png',
    span: 'Candy Crush Sega'
  },
  {
    img: './assest/img/logo.png',
    span: 'Chisco_Emmanuel'
  },
  {
    img: './assest/img/logo.png',
    span: 'The Word of God'
  }
];

list5.forEach(item => {
  third.innerHTML += `
  <div class="div">
    <img src="${item.img}" alt="">
    <span>${item.span}</span>
  </div>
  `
})
//  End  Third  left Scroll scroll End //



//  Start  Fourth (Hide)  left Scroll scroll Start //
let list6 = [
  {
    img: './assest/img/logo.png',
    span: 'Keep it up'
  },
  {
    img: './assest/img/logo.png',
    span: 'You too can do it'
  },
  {
    img: './assest/img/logo.png',
    span: 'I stand alone'
  },
  {
    img: './assest/img/logo.png',
    span: 'So help me God'
  }
];

list6.forEach(item => {
  fourth.innerHTML += `
  <div class="hide2 div">
    <img src="${item.img}" alt="">
    <span>${item.span}</span>
  </div>
  `
})
//  End  Fourth  left Scroll scroll End //


//  Start  Community Chat  right Scroll scroll Start //
let to_join = [
  {
    img: './assest/img/logo.png',
    p1: 'make money watching videos',
    p2: 'Find projects Find Freelancers'
  },
  {
    img: './assest/img/logo.png',
    p1: 'Chat list',
    p2: 'Find projects Find Freelancers'
  },
  {
    img: './assest/img/logo.png',
    p1: 'Web developer',
    p2: 'Find projects Find Freelancers'
  },
]

to_join.forEach(item => {
  community.innerHTML += `
  <div class="community">
  <img src="${item.img}" alt="">
  <div>
    <p>${item.p1}</p>
    <p class="light">${item.p2}</p>
  </div>
  </div>
  `
})
//  End  Community Chat  right Scroll scroll End //



//  Start  Group Conversation Chat  right Scroll scroll Start //
let group_chat = [
  {
    img1: './assest/img/logo.png',
    img2: './assest/img/logo.png',
    p: 'OpenLabs School'
  },
  {
    img1: './assest/img/logo.png',
    img2: './assest/img/logo.png',
    p: 'Successors in the world'
  },
  {
    img1: './assest/img/logo.png',
    img2: './assest/img/logo.png',
    p: 'All Web dev Group'
  },
]

group_chat.forEach(item => {
  chat.innerHTML += `
  <div class="conversation">
  <div>
    <img src="${item.img1}" alt="" class="img1">
    <img src="${item.img2}" alt="" class="img2">
    <span class="material-symbols-outlined dot">
      fiber_manual_record
    </span>
  </div>
  <p>${item.p}</p>
</div>
  `
})
//  End Group Conversation Chat  right Scroll scroll End //



//  Start  Status Scroll Bar Top Scroll  Start //

let people_status = [
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  },
  {
    img1: "./assest/img/test.JPG",
    img2: "./assest/img/test.JPG",
    p: "Chisco_Emmanuel"
  }
]

people_status.forEach(item => {
  status.innerHTML += `
  <div class="others_status">
  <img src="${item.img1}" alt="" class="img1">
  <img src="${item.img2}" alt="" class="img2">
  <p>${item.p}</p>
  </div>
  
  `
})





$('.expand').click(function () {
  $('.hide').toggle();
  $('.icon').toggleClass('flip')
  // $('.expand').text('see less');
});

$('.expand2').click(function () {
  $('.hide2').toggle();
  $('.icon').toggleClass('flip')
  // $('.expand').text('see less');
});