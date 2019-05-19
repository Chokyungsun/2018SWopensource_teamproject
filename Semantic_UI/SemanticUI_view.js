'use strict';

const { Select } = require('enquirer');

const prompt_select = new Select({
  name: 'UI-list',
  message: 'Select types of UI',
  choices: ['Advertisement', 'Card', 'Comment', 'Feed', 'Item', 'Statistic']
});

const prompt_content_Advertisement = new Select({
    name: 'content',
    message: 'In Advertisement section, what contents do you want to know?',
    choices: ['Ad', 'Common Units', 'Mobile', 'Rectangle', 'Button', 'Skyscraper', 'Banner', 'Leaderboards','Panorama','Netboard' ]
  });

const prompt_content_Card = new Select({
      name: 'content',
      message: 'In Card section, what contents do you want to know?',
      choices: ['Card','Cards' ]
    });

const prompt_content_Comment = new Select({
      name: 'content',
      message: 'In Comment section, what contents do you want to know?',
      choices: ['Comments' ]
    });

const prompt_content_Feed = new Select({
      name: 'content',
      message: 'In Feed section, what contents do you want to know?',
      choices: ['Feed' ]
    });

const prompt_content_Item = new Select({
      name: 'content',
      message: 'In Item section, what contents do you want to know?',
      choices: ['Items' ]
    });

const prompt_content_Statistic = new Select({
      name: 'content',
      message: 'In Statistic section, what contents do you want to know?',
      choices: ['Statistic','Statistic Group' ]
        });




  prompt_select.run()
    .then(function(answer1) {
      console.log('Answer:', answer1);
      switch(answer1){
        case 'Advertisement':
        prompt_content_Advertisement.run()
        .then(function(answer2) {
            console.log('Answer:', answer2);
            switch(answer2){
                case 'Ad':
                console.log('\n Your Code: \n<div class="ui medium rectangle ad">')
                console.log(' <!-- Ad Code Goes Here')
                  console.log( ' <ins class="adsbygoogle"')
                  console.log('    style="display:inline-block;width:300px;height:250px"')
                  console.log('    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"')
                console.log(  '    data-ad-slot="XXXXXXXXXX"></ins>')
                console.log(  ' <script>')
                  console.log(' (adsbygoogle = window.adsbygoogle || []).push({});')
                console.log(  ' </script>')
                  console.log(  ' !-->')
                  console.log(  '</div>')
                  console.log(  '<div class="ui leaderboard ad">\n<!-- Leaderboard\n<ins class="adsbygoogle"\n    style="display:inline-block;width:728px;height:90px"\n    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"\n')
                    console.log('    data-ad-slot="XXXXXXXXXXXXXXXX"></ins>\n<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\n </script  !-->\n </div>\n')
                  console.log(  '<div class="ui banner ad">\n<!-- Banner\n<ins class="adsbygoogle"\n    style="display:inline-block;width:468px;height:60px"\n    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"\n    data-ad-slot="XXXXXXXXXXXXXXXX"></ins>\n')
                    console.log('<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\/</script>\n!-->\n</div>\n')
                break;
                case 'Common Units':
                console.log('\n Your Code: \n<div class="ui medium rectangle test ad" data-text="Medium Rectangle"></div>\n<div class="ui banner test ad" data-text="Banner"></div>\n')
                console.log('<div class="ui leaderboard test ad" data-text="Leaderboard"></div>\n<div class="ui large rectangle test ad" data-text="Large Rectangle"></div>\n<div class="ui half page test ad" data-text="Half Page"></div>\n')
                break;
                case 'Mobile':
                console.log('\n Your Code: \n<div class="ui mobile leaderboard test ad" data-text="Mobile Leaderboard"></div>\n<div class="ui mobile banner test ad" data-text="Mobile Banner"></div>\n')
                break;
                case 'Rectangle':
                console.log('\n Your Code:\n<div class="ui vertical rectangle test ad" data-text="Vertical Rectangle"></div>\n<div class="ui small rectangle test ad" data-text="Small Rectangle"></div>\n')
                break;
                case 'Button':
                console.log('\n Your Code: \n<div class="ui button test ad" data-text="Button"></div>\n<div class="ui square button test ad" data-text="Square Button"></div><div class="ui small button test ad" data-text="Small Button"></div>\n')
                break;
                case 'Skyscraper':
                console.log('\n Your Code: \n<div class="ui skyscraper test ad" data-text="Skyscraper"></div>\n<div class="ui wide skyscraper test ad" data-text="Wide Skyscraper"></div>\n')
                break;
                case 'Banner':
                console.log('\n Your Code: \n<div class="ui banner test ad" data-text="Banner"></div>\n<div class="ui vertical banner test ad" data-text="Vertical Banner"></div><div class="ui top banner test ad" data-text="Top Banner"></div>\n<div class="ui half banner test ad" data-text="Half Banner"></div>\n')
                break;
                case 'Leaderboards':
                console.log('\n Your Code: \n<div class="ui leaderboard test ad" data-text="Leaderboard"></div>\n<div class="ui large leaderboard test ad" data-text="Large Leaderboard"></div>\n<div class="ui billboard test ad" data-text="Billboard"></div>\n')
                break;
                case 'Panorama':
                console.log('\n Your Code: \ndiv class="ui panorama test ad" data-text="Panorama"></div>\n')
                break;
                case 'Netboard':
                console.log('\n Your Code: \n<div class="ui netboard test ad" data-text="Netboard"></div>\n')
                break;
            }
        })
          break;
        case 'Card':
        prompt_content_Card.run()
        .then(function(answer2) {
            console.log('Answer:', answer2);
            switch(answer2){
                case 'Card':
                console.log('\n Your Code: \n<div class="ui card">\n <div class="image">\n  <img src="/images/avatar2/large/kristy.png">\n</div>\n<div class="content">\n <a class="header">Kristy</a>\n<div class="meta">\n')
      console.log('  <span class="date">Joined in 2013</span>\n </div>\n <div class="description">\n  Kristy is an art director living in New York.\n </div>\n</div>\n<div class="extra content">\n  <a>\n  <i class="user icon"></i>\n  22 Friends\n </a>\n')
      console.log(' </div>\n</div>\n')
                break;
                case 'Cards':
                console.log('\n Your Code: \n<div class="ui cards">\n <div class="card">\n  <div class="content">\n   <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">\n')
    console.log(  '   <div class="header">\n    Elliot Fu\   </div>\n   <div class="meta">\n    Friends of Veronika\n   </div>\n   <div class="description">\n    Elliot requested permission to view your contact details\n   </div>\n')
    console.log(' </div>\n <div class="extra content">\n  <div class="ui two buttons">\n   <div class="ui basic green button">Approve</div>\n   <div class="ui basic red button">Decline</div>\n  </div>\n </div>\n</div>\n')
  console.log(' <div class="card">\n  <div class="content">\n   <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg">\n   <div class="header">\n    Jenny Hess\n   </div>\n   <div class="meta">\n')
      console.log(  '    New Member\n   </div>\n   <div class="description">\n    Jenny wants to add you to the group <b>best friends</b>\n   </div>\n  </div>\n <div class="extra content">\n')
      console.log(  '   <div class="ui two buttons">')
      console.log(  '    <div class="ui basic green button">Approve</div>')
      console.log(  '    <div class="ui basic red button">Decline</div>')
      console.log(  '   </div>')
      console.log(  '  </div>')
      console.log(  ' </div>')
      console.log(  '</div>')
                break;

              }
      })
      break;

     case 'Comment':
      prompt_content_Comment.run()
      .then(function(answer2) {
          console.log('Answer:', answer2);
          switch(answer2){
              case 'Comments':
              console.log('\n Your Code:')
              console.log('<div class="ui comments">')
              console.log('  <h3 class="ui dividing header">Comments</h3>')
              console.log('  <div class="comment">')
              console.log('    <a class="avatar">')
              console.log('      <img src="/images/avatar/small/matt.jpg">')
              console.log('    </a>')
              console.log('    <div class="content">')
              console.log('      <a class="author">Matt</a>')
              console.log('      <div class="metadata">')
              console.log('        <span class="date">Today at 5:42PM</span>')
              console.log('      </div>')
              console.log('      <div class="text">')
              console.log('        How artistic!')
              console.log('      </div>')
              console.log('      <div class="actions">')
              console.log('        <a class="reply">Reply</a>')
              console.log('      </div>')
              console.log('    </div>')
              console.log('  </div>')
              console.log('  <div class="comment">')
              console.log('    <a class="avatar">')
              console.log('      <img src="/images/avatar/small/elliot.jpg">')
              console.log('    </a>')
              console.log('    <div class="content">')
              console.log('      <a class="author">Elliot Fu</a>')
              console.log('      <div class="metadata">')
              console.log('        <span class="date">Yesterday at 12:30AM</span>')
              console.log('      </div>')
              console.log('      <div class="text">')
              console.log('        <p>This has been very useful for my research. Thanks as well!</p>')
              console.log('      </div>')
              console.log('      <div class="actions">')
              console.log('        <a class="reply">Reply</a>')
              console.log('      </div>')
              console.log('    </div>')
              console.log('    <div class="comments">')
              console.log('      <div class="comment">')
              console.log('        <a class="avatar">')
              console.log('          <img src="/images/avatar/small/jenny.jpg">')
              console.log('        </a>')
              console.log('        <div class="content">')
              console.log('          <a class="author">Jenny Hess</a>')
              console.log('          <div class="metadata">')
              console.log('            <span class="date">Just now</span>')
              console.log('          </div>')
              console.log('          <div class="text">')
              console.log('            Elliot you are always so right :)')
              console.log('          </div>')
              console.log('          <div class="actions">')
              console.log('            <a class="reply">Reply</a>')
              console.log('          </div>')
              console.log('        </div>')
              console.log('      </div>')
              console.log('    </div>')
              console.log('  </div>')
              console.log('  <div class="comment">')
              console.log('    <a class="avatar">')
              console.log('      <img src="/images/avatar/small/joe.jpg">')
              console.log('    </a>')
              console.log('    <div class="content">')
              console.log('      <a class="author">Joe Henderson</a>')
              console.log('      <div class="metadata">')
              console.log('        <span class="date">5 days ago</span>')
              console.log('      </div>')
              console.log('      <div class="text">')
              console.log('        Dude, this is awesome. Thanks so much')
              console.log('      </div>')
              console.log('      <div class="actions">')
              console.log('        <a class="reply">Reply</a>')
              console.log('      </div>')
              console.log('    </div>')
              console.log('  </div>')
              console.log('  <form class="ui reply form">')
              console.log('    <div class="field">')
              console.log('      <textarea></textarea>')
              console.log('    </div>')
              console.log('    <div class="ui blue labeled submit icon button">')
              console.log('      <i class="icon edit"></i> Add Reply')
              console.log('    </div>')
              console.log('  </form>')
              console.log('</div>')

              break;


            }
    })
     break;

    case 'Feed':
    prompt_content_Feed.run()
    .then(function(answer2) {
        console.log('Answer:', answer2);
        switch(answer2){
            case 'Feed':
            console.log('\n Your Code: ')
            console.log('  <div class="ui feed">')
            console.log('    <div class="event">')
            console.log('      <div class="label">')
            console.log('        <img src="/images/avatar/small/elliot.jpg">')
            console.log('      </div>')
            console.log('      <div class="content">')
            console.log('        <div class="summary">')
            console.log('          <a class="user">')
            console.log('            Elliot Fu')
            console.log('          </a> added you as a friend')
            console.log('          <div class="date">')
            console.log('            1 Hour Ago')
            console.log('          </div>')
            console.log('        </div>')
            console.log('        <div class="meta">')
            console.log('          <a class="like">')
            console.log('            <i class="like icon"></i> 4 Likes')
            console.log('          </a>')
            console.log('        </div>')
            console.log('      </div>')
            console.log('    </div>')
            console.log('    <div class="event">')
            console.log('      <div class="label">')
            console.log('        <img src="/images/avatar/small/helen.jpg">')
            console.log('      </div>')
            console.log('      <div class="content">')
            console.log('        <div class="summary">')
            console.log('          <a>Helen Troy</a> added <a>2 new illustrations</a>')
            console.log('          <div class="date">')
            console.log('            4 days ago')
            console.log('          </div>')
            console.log('        </div>')
            console.log('        <div class="extra images">')
            console.log('          <a><img src="/images/wireframe/image.png"></a>')
            console.log('          <a><img src="/images/wireframe/image.png"></a>')
            console.log('        </div>')
            console.log('        <div class="meta">')
            console.log('          <a class="like">')
            console.log('            <i class="like icon"></i> 1 Like')
            console.log('          </a>')
            console.log('        </div>')
            console.log('      </div>')
            console.log('    </div>')
            console.log('    <div class="event">')
            console.log('      <div class="label">')
            console.log('        <img src="/images/avatar/small/joe.jpg">')
            console.log('      </div>')
            console.log('      <div class="content">')
            console.log('        <div class="summary">')
            console.log('          <a>Joe Henderson</a> posted on his page')
            console.log('          <div class="date">')
            console.log('            3 days ago')
            console.log('          </div>')
            console.log('        </div>')
            console.log('        <div class="extra text">')
            console.log('          Ours is a life of constant reruns. Were always circling back to where wed we started, then starting all over again. Even if we dont run extra laps that day, we surely will come back for more of the same another day soon.')
            console.log('        </div>')
            console.log('        <div class="meta">')
            console.log('          <a class="like">')
            console.log('            <i class="like icon"></i> 5 Likes')
            console.log('          </a>')
            console.log('        </div>')
            console.log('      </div>')
            console.log('    </div>')
            console.log('  </div>')

            break;


          }
  })
   break;

  case 'Item':
  prompt_content_Item.run()
  .then(function(answer2) {
      console.log('Answer:', answer2);
      switch(answer2){
          case 'Items':
            console.log('\n Your Code: ')
          console.log('<div class="ui items">')
          console.log('  <div class="item">')
          console.log('    <div class="image">')
          console.log('      <img src="/images/wireframe/image.png">')
          console.log('    </div>')
          console.log('    <div class="content">')
          console.log('      <a class="header">Header</a>')
          console.log('      <div class="meta">')
          console.log('        <span>Description</span>')
          console.log('      </div>')
          console.log('      <div class="description">')
          console.log('        <p></p>')
          console.log('      </div>')
          console.log('      <div class="extra">')
          console.log('        Additional Details')
          console.log('      </div>')
          console.log('    </div>')
          console.log('  </div>')
          console.log('  <div class="item">')
          console.log('    <div class="image">')
          console.log('      <img src="/images/wireframe/image.png">')
          console.log('    </div>')
          console.log('    <div class="content">')
          console.log('      <a class="header">Header</a>')
          console.log('      <div class="meta">')
          console.log('        <span>Description</span>')
          console.log('      </div>')
          console.log('      <div class="description">')
          console.log('        <p></p>')
          console.log('      </div>')
          console.log('      <div class="extra">')
          console.log('        Additional Details')
          console.log('      </div>')
          console.log('    </div>')
          console.log('  </div>')
          console.log('</div>')
          break;


        }
})
 break;

  case 'Statistic':
  prompt_content_Statistic.run()
  .then(function(answer2) {
      console.log('Answer:', answer2);
      switch(answer2){
          case 'Statistic':
          console.log('\n Your Code:')
console.log('<div class="ui statistic">')
console.log('  <div class="value">')
console.log('    5,550')
console.log('  </div>')
console.log('  <div class="label">')
console.log('    Downloads')
console.log('  </div>')
console.log('</div>')
          break;
          case 'Statistic Group':
          console.log('\n Your Code:')
console.log('<div class="ui statistics">')
console.log('  <div class="statistic">')
console.log('    <div class="value">')
console.log('      22')
console.log('    </div>')
console.log('    <div class="label">')
console.log('      Faves')
console.log('    </div>')
console.log('  </div>')
console.log('  <div class="statistic">')
console.log('    <div class="value">')
console.log('      31,200')
console.log('    </div>')
console.log('    <div class="label">')
console.log('      Views')
console.log('    </div>')
console.log('  </div>')
console.log('  <div class="statistic">')
console.log('    <div class="value">')
console.log('      22')
console.log('    </div>')
console.log('    <div class="label">')
console.log('      Members')
console.log('    </div>')
console.log('  </div>')
console.log('</div>')
          break;

        }
})



      }
    })
    .catch(console.error);
