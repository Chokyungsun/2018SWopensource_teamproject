'use strict';




const { Select } = require('enquirer');

const prompt_select = new Select({
  name: 'UI-list',
  message: 'Select types of UI',
  choices: ['Accordian', 'Checkbox', 'Dimmer', 'Dropdown', 'Embed','Modal']
});

const prompt_content_Accordian = new Select({
    name: 'content',
    message: 'In Accordian section, what contents do you want to know?',
    choices: ['Accordian','Styled']
  });
const prompt_content_Checkbox = new Select({
      name: 'content',
      message: 'In Checkbox section, what contents do you want to know?',
      choices: ['Checkbox','Radio','Slider','Toggle' ]
    });

const prompt_content_Dimmer = new Select({
      name: 'content',
      message: 'In Dimmer section, what contents do you want to know?',
      choices: ['Dimmer','content Dimmer','Page Dimmer' ]
    });

const prompt_content_Dropdown = new Select({
      name: 'content',
      message: 'In Dropdown section, what contents do you want to know?',
      choices: ['Dropdown','Selection','SearchSelection' ]
    });

const prompt_content_Embed = new Select({
      name: 'content',
      message: 'In Embed section, what contents do you want to know?',
      choices: ['Youtube','Vimeo','Custom content' ]
    });

const prompt_content_Modal = new Select({
      name: 'content',
      message: 'In Modal section, what contents do you want to know?',
      choices: ['Modal','Basic' ]
        });




  prompt_select.run()
    .then(function(answer1) {
      console.log('Answer:', answer1);
      switch(answer1){
        case 'Accordian':
        prompt_content_Accordian.run()
        .then(function(answer2) {
            console.log('Answer:', answer2);
            switch(answer2){
                case 'Accordian':
                console.log('\n Your Code:  ')
  console.log('<div class="ui accordion">')
  console.log(' <div class="active title">')
  console.log('  <i class="dropdown icon"></i>')
  console.log('  What is a dog?')
  console.log(' </div>')
  console.log(' <div class="active content">')
  console.log('  <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>')
  console.log(' </div>')
  console.log(' <div class="title">')
  console.log('  <i class="dropdown icon"></i>')
  console.log('  What kinds of dogs are there?')
  console.log(' </div>')
  console.log(' <div class="content">')
  console.log('  <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>')
  console.log(' </div>')
  console.log(' <div class="title">')
  console.log(  '<i class="dropdown icon"></i>')
  console.log('  How do you acquire a dog?')
  console.log(' </div>')
  console.log(' <div class="content">')
  console.log('  <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>')
  console.log('  <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>')
  console.log(' </div>')
  console.log('</div>')
  break;
                case 'Styled':
                console.log('\n Your Code')
    console.log('<div class="ui styled accordion">')
    console.log(' <div class="active title">')
    console.log('  <i class="dropdown icon"></i>')
    console.log('  What is a dog?')
    console.log(' </div>')
    console.log(' <div class="active content">')
    console.log('  <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>')
    console.log(' </div>')
    console.log(' <div class="title">')
    console.log('  <i class="dropdown icon"></i>')
    console.log('  What kinds of dogs are there?')
    console.log(' </div>')
    console.log(' <div class="content">')
    console.log('  <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>')
    console.log(' </div>')
    console.log(' <div class="title">')
    console.log('  <i class="dropdown icon"></i>')
    console.log('  How do you acquire a dog?')
    console.log(' </div>')
    console.log(' <div class="content">')
    console.log('  <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>')
    console.log('  <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>')
    console.log(' </div>')
    console.log('</div>')
                break;
            }
        })
          break;
        case 'Checkbox':
        prompt_content_Checkbox.run()
        .then(function(answer2) {
            console.log('Answer:', answer2);
            switch(answer2){
                case 'Checkbox':
                console.log('\n Your Code: ')
            console.log('<div class="ui checkbox"> ')
            console.log(' <input name="example" type="checkbox"> ')
            console.log(' <label>Make my profile visible</label> ')
            console.log('</div> ')
                break;
                case 'Radio':
                console.log('\n Your Code:')
                console.log('<div class="ui radio checkbox"> ')
                console.log(' <input name="radio" type="radio" checked="checked"> ')
                console.log(' <label>Radio choice</label> ')
                console.log('</div> ')
                break;
                case 'Slider':
                console.log('\n Your Code:')
console.log('<div class="ui radio checkbox"> ')
console.log(' <input name="radio" type="radio" checked="checked"> ')
console.log(' <label>Radio choice</label> ')
console.log('</div> ')
                break;
                case 'Toggle':
                console.log('\n Your Code: ')
console.log('<div class="ui toggle checkbox"> ')
console.log(' <input name="public" type="checkbox"> ')
console.log(' <label>Subscribe to weekly newsletter</label> ')
console.log('</div> ')
                break;

              }
      })
      break;

     case 'Dimmer':
      prompt_content_Dimmer.run()
      .then(function(answer2) {
          console.log('Answer:', answer2);
          switch(answer2){
              case 'Dimmer':
              console.log('\n Your Code:')
console.log('<div class="ui segment">')
console.log(' <!-- Dimmer Generated Automatically No Need to Include !-->')
console.log(' <h3 class="ui header">')
console.log('  Overlayable Section')
console.log(' </h3>')
console.log(' <div class="ui small images">')
console.log('  <img>')
console.log('  <img>')
console.log('  <img>')
console.log(' </div>')
console.log(' <p></p>')
console.log('</div>')
              break;
              case 'content Dimmer':
              console.log('\n Your Code:')
  console.log('<div class="ui segment">')
  console.log(' <h3 class="ui header">')
  console.log('  Overlayable Section')
  console.log(' </h3>')
  console.log(' <div class="ui small images">')
  console.log('  <img>')
  console.log('  <img>')
  console.log('  <img>')
  console.log(' </div>')
  console.log(' <p></p>')
  console.log(' <div class="ui dimmer">')
  console.log('  <div class="content">')
  console.log('   <h2 class="ui inverted icon header">')
  console.log('    <i class="heart icon"></i>')
  console.log('    Dimmed Message!')
  console.log('   </h2>')
  console.log('  </div>')
  console.log(' </div>')
  console.log('</div>')
              break;
              case 'Page Dimmer':
              console.log('\n Your Code:')
  console.log('    <div class="ui page dimmer">')
  console.log('      <div class="content">')
  console.log('        Hello')
  console.log('      </div>')
  console.log('    </div>')


            }
    })
     break;

    case 'Dropdown':
    prompt_content_Dropdown.run()
    .then(function(answer2) {
        console.log('Answer:', answer2);
        switch(answer2){
            case 'Dropdown':
            console.log('\n Your Code: ')
          console.log('<div class="ui dropdown">')
          console.log(' <div class="text">File</div>')
          console.log(' <i class="dropdown icon"></i>')
          console.log('  <div class="menu">')
          console.log('     <div class="item">New</div>')
          console.log('   <div class="item">')
          console.log('      <span class="description">ctrl + o</span>')
          console.log('      Open...')
          console.log('    </div>')
          console.log('    <div class="item">')
          console.log('      <span class="description">ctrl + s</span>')
          console.log('      Save as...')
          console.log('    </div>')
          console.log('    <div class="item">')
          console.log('      <span class="description">ctrl + r</span>')
          console.log('      Rename')
          console.log('    </div>')
          console.log('    <div class="item">Make a copy</div>')
          console.log('    <div class="item">')
          console.log('      <i class="folder icon"></i>')
          console.log('      Move to folder')
          console.log('    </div>')
          console.log('    <div class="item">')
          console.log('      <i class="trash icon"></i>')
          console.log('      Move to trash')
          console.log('    </div>')
          console.log('    <div class="divider"></div>')
          console.log('    <div class="item">Download As...</div>')
          console.log('    <div class="item">')
          console.log('      <i class="dropdown icon"></i>')
          console.log('      Publish To Web')
          console.log('      <div class="menu">')
          console.log('        <div class="item">Google Docs</div>')
          console.log('        <div class="item">Google Drive</div>')
          console.log('      <div class="item">Dropbox</div>')
          console.log('        <div class="item">Adobe Creative Cloud</div>')
          console.log('        <div class="item">Private FTP</div>')
          console.log('        <div class="item">Another Service...</div>')
          console.log('      </div>')
          console.log('    </div>')
          console.log('    <div class="item">E-mail Collaborators</div>')
          console.log('  </div>')
          console.log('</div>')
            break;
            case 'Selection':
            console.log('\n Your Code:')
console.log('<div class="ui selection dropdown">')
console.log('  <input name="gender" type="hidden" value="">')
console.log('  <i class="dropdown icon"></i>')
console.log('  <div class="default text">Gender</div>')
console.log('  <div class="menu">')
console.log('    <div class="item" data-value="1">Male</div>')
console.log('    <div class="item" data-value="0">Female</div>')
console.log('  </div>')
console.log('</div>')
            break;
            case 'SearchSelection':
            console.log('\n Your Code:')
            console.log('<div class="ui fluid search selection dropdown">')
            console.log('  <input name="country" type="hidden" value="">')
            console.log('  <i class="dropdown icon"></i>')
            console.log('  <div class="default text">Select Country</div>')
            console.log('  <div class="menu">')
            console.log('  <div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>')
            console.log('  <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>')
            console.log('  <div class="item" data-value="al"><i class="al flag"></i>Albania</div>')
            console.log('  <div class="item" data-value="dz"><i class="dz flag"></i>Algeria</div>')
            console.log('  <div class="item" data-value="as"><i class="as flag"></i>American Samoa</div>')
            console.log('  <div class="item" data-value="ad"><i class="ad flag"></i>Andorra</div>')
            console.log('  <div class="item" data-value="ao"><i class="ao flag"></i>Angola</div>')
            console.log('  <div class="item" data-value="ai"><i class="ai flag"></i>Anguilla</div>')
            console.log('  <div class="item" data-value="ag"><i class="ag flag"></i>Antigua</div>')
            console.log('  <div class="item" data-value="ar"><i class="ar flag"></i>Argentina</div>')
            console.log('  <div class="item" data-value="am"><i class="am flag"></i>Armenia</div>')
            console.log('  <div class="item" data-value="aw"><i class="aw flag"></i>Aruba</div>')
            console.log('  <div class="item" data-value="au"><i class="au flag"></i>Australia</div>')
            console.log('  <div class="item" data-value="at"><i class="at flag"></i>Austria</div>')
            console.log('  <div class="item" data-value="az"><i class="az flag"></i>Azerbaijan</div>')
            console.log('  <div class="item" data-value="bs"><i class="bs flag"></i>Bahamas</div>')
            console.log('  <div class="item" data-value="bh"><i class="bh flag"></i>Bahrain</div>')
            console.log('  <div class="item" data-value="bd"><i class="bd flag"></i>Bangladesh</div>')
            console.log('  <div class="item" data-value="bb"><i class="bb flag"></i>Barbados</div>')
            console.log('  <div class="item" data-value="by"><i class="by flag"></i>Belarus</div>')
            console.log('  <div class="item" data-value="be"><i class="be flag"></i>Belgium</div>')
            console.log('  <div class="item" data-value="bz"><i class="bz flag"></i>Belize</div>')
            console.log('  <div class="item" data-value="bj"><i class="bj flag"></i>Benin</div>')
            console.log('  <div class="item" data-value="bm"><i class="bm flag"></i>Bermuda</div>')
            console.log('  <div class="item" data-value="bt"><i class="bt flag"></i>Bhutan</div>')
            console.log('  <div class="item" data-value="ba"><i class="ba flag"></i>Bosnia</div>')
            console.log('  <div class="item" data-value="bo"><i class="bo flag"></i>Bolivia</div>')
            console.log('  <div class="item" data-value="bw"><i class="bw flag"></i>Botswana</div>')
            console.log('  <div class="item" data-value="bv"><i class="bv flag"></i>Bouvet Island</div>')
            console.log('  <div class="item" data-value="br"><i class="br flag"></i>Brazil</div>')
            console.log('  <div class="item" data-value="vg"><i class="vg flag"></i>British Virgin Islands</div>')
            console.log('  <div class="item" data-value="bn"><i class="bn flag"></i>Brunei</div>')
            console.log('  <div class="item" data-value="bg"><i class="bg flag"></i>Bulgaria</div>')
            console.log('  <div class="item" data-value="bf"><i class="bf flag"></i>Burkina Faso</div>')
            console.log('  <div class="item" data-value="mm"><i class="mm flag"></i>Burma</div>')
            console.log('  <div class="item" data-value="bi"><i class="bi flag"></i>Burundi</div>')
            console.log('</div>')
            console.log(' </div>')
            break;


          }
  })
   break;

  case 'Embed':
  prompt_content_Embed.run()
  .then(function(answer2) {
      console.log('Answer:', answer2);
      switch(answer2){
          case 'Youtube':
          console.log('\n Your Code:  ')
          console.log('<div class="ui embed" data-placeholder="/images/image-16by9.png" data-id="O6Xo21L0ybE" data-source="youtube">')
          console.log('</div>')
          case 'Vimeo':
          console.log('\n Your Code:')
          console.log('<div class="ui embed" data-placeholder="/images/vimeo-example.jpg" data-id="125292332" data-source="vimeo">')
          console.log('</div>')
          break;
          case 'Custom content':
          console.log('\n Your Code: ')
          console.log('<div class="ui embed" data-url="http://www.myfav.es/jack" data-placeholder="/images/image-16by9.png" data-icon="right circle arrow">')
          console.log('</div>')
          break;


        }
})
 break;

  case 'Modal':
  prompt_content_Modal.run()
  .then(function(answer2) {
      console.log('Answer:', answer2);
      switch(answer2){
          case 'Modal':
          console.log('\n Your Code:')
console.log('<div class="ui modal">')
console.log('  <i class="close icon"></i>')
console.log('  <div class="header">')
console.log('    Profile Picture')
console.log('  </div>')
console.log('  <div class="image content">')
console.log('    <div class="ui medium image">')
console.log('      <img src="/images/avatar/large/chris.jpg">')
console.log('    </div>')
console.log('    <div class="description">')
console.log('      <div class="ui header">We/ve auto-chosen a profile image for you.</div>')
console.log('      <p>We/ve grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>')
console.log('      <p>Is it okay to use this photo?</p>')
console.log('    </div>')
console.log('  </div>')
console.log('  <div class="actions">')
console.log('    <div class="ui black deny button">')
console.log('      Nope')
console.log('    </div>')
console.log('    <div class="ui positive right labeled icon button">')
console.log('      Yep, that/s me')
console.log('      <i class="checkmark icon"></i>')
console.log('    </div>')
console.log('  </div>')
console.log('</div>')
          break;
          case 'Basic':
          console.log('\n Your Code: ')
          console.log('  <div class="ui basic modal">')
          console.log('    <div class="ui icon header">')
          console.log('      <i class="archive icon"></i>')
          console.log('      Archive Old Messages')
          console.log('    </div>')
          console.log('    <div class="content">')
          console.log('      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>')
          console.log('    </div>')
          console.log('    <div class="actions">')
          console.log('      <div class="ui red basic cancel inverted button">')
          console.log('        <i class="remove icon"></i>')
          console.log('        No')
          console.log('      </div>')
          console.log('      <div class="ui green ok inverted button">')
          console.log('        <i class="checkmark icon"></i>')
          console.log('        Yes')
          console.log('      </div>')
          console.log('    </div>')
          console.log('  </div>')
                    break;

        }
})



      }
    })
    .catch(console.error);
