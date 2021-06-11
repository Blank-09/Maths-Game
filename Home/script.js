const projects = [
  {
    link: "https://codepen.io/Priyanshu180/full/eYBGjEv",
    src: "https://drive.google.com/uc?id=152U8RmU1m_Zq73RTv9c4873hv_aGVHk8",
    name: "Learning App"
  }, {
    link: "https://codepen.io/Priyanshu180/full/vYygeKq",
    src: "https://drive.google.com/uc?id=1UGesAaXp0iZ6V2gVn3ZHPWZbVOk2-C6k",
    name: "Anime Video Player"
  }, {
    link: "https://codepen.io/Priyanshu180/full/dyOGqMy",
    src: "https://drive.google.com/uc?id=1J0_l9b2CuGq-h6oGUn-wPTLZMxiRJury",
    name: "Anime Song Player"
  }, {
    link: "https://codepen.io/Priyanshu180/full/abmraBQ",
    src: "https://drive.google.com/uc?id=1BFFsJpjm6PJIdN2ZBwmP1zvCkcVwcWFh",
    name: "Maths Quiz"
  }, {
    link: "https://codepen.io/Priyanshu180/full/NWbMGdy",
    src: "https://drive.google.com/uc?id=1ho_MkHqY_KW-MXQ0iYbE4SYxTBy1YFsP",
    name: "Piano Tiles"
  }, {
    link: "https://codepen.io/Priyanshu180/full/RwGjjjV",
    src: "https://drive.google.com/uc?id=1HpQz7cSzgLaIft32RQruOhtcimMG0ud-",
    name: "Day Finder Application"
  }, {
    link: "https://codepen.io/Priyanshu180/full/YzGwgYE",
    src: "https://drive.google.com/uc?id=1R3hkma5qhCiAyzWDomptebagsKo60T8J",
    name: "Tribe page"
  }, {
    link: "#",
    src: "https://drive.google.com/uc?id=1AeIyNFm3kW-yyjBqjScJ_IrJihkwrxvk",
    name: ""
  }
]

$(function () {
  for (var a = 0; a < projects.length; a++){
    $('#proj-list').append('<div class="col-md-6"><a href="' + projects[a].link + '"><div class="project-ui"><img class="usn" src="'+ projects[a].src +'" alt="'+ projects[a].name +'"><br><span class="pd">'+ projects[a].name +'</span></div></a></div>');
  }
});