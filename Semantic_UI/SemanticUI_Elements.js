'use strict';

const { Select } = require('enquirer');

const prompt_select = new Select({
  name: 'UI-list',
  message: 'ELEMENTS: Select types of UI',
  choices: ['Placeholder', 'Rail', 'Reveal', 'Segment', 'Step']
});

const prompt_content_Placeholder = new Select({
    name: 'Placeholder-content',
    message: 'In Placeholder section, what contents do you want to know?',
    choices: ['Lines', 'Headers', 'Paragraph', 'Image']
});

const prompt_content_Rail = new Select({
  name: 'Rail-content',
  message: 'In Rail section, what contents do you want to know?',
  choices: ['Rail', 'Internal', 'Dividing']
});
const prompt_content_Reveal = new Select({
  name: 'Reveal-content',
  message: 'In Reveal section, what contents do you want to know?',
  choices: ['Fade', 'Move', 'Rotate', 'Visible Content', 'Hidden Content']
});
const prompt_content_Segment = new Select({
  name: 'Segment-content',
  message: 'In Segment section, what contents do you want to know?',
  choices: ['Type', 'Groups', 'States', 'Variations']
});

const prompt_content_Segment_type = new Select({
  name: 'Segment-type-content',
  message: 'In Segment_type section, what contents do you want to know?',
  choices: ['Placeholder Segment', 'Raised', 'Stacked', 'Piled', 'Vertical Segment']
});
const prompt_content_Segment_groups = new Select({
  name: 'Segment-groups-content',
  message: 'In Segment_groups section, what contents do you want to know?',
  choices: ['Segments', 'Nested Segments', 'Horizontal Segments', 'Raised Segments', 'Stacked Segments', 'Piled Segments']
});
const prompt_content_Segment_states = new Select({
  name: 'Segment-states-content',
  message: 'In Segment_states section, what contents do you want to know?',
  choices: ['Disabled', 'Loading']
});
const prompt_content_Segment_variations = new Select({
  name: 'Segment-variations-content',
  message: 'In Segment_variations section, what contents do you want to know?',
  choices: ['Inverted', 'Attached', 'Padded', 'Compact', 'Colored', 'Emphasis', 'Circular', 'Clearing', 'Floated', 'Text Alignment', 'Basic']
});

const prompt_content_Step = new Select({
  name: 'Step-content',
  message: 'In Step section, what contents do you want to know?',
  choices: ['Steps', 'Groups', 'Ordered', 'Vertical', 'Desciption', 'Icon', 'Link']
});

  prompt_select.run()
    .then(function(answer1) {
      switch(answer1){

        case 'Placeholder':
        prompt_content_Placeholder.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Lines': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui placeholder">');
                console.log(' <div class="line"></div>');
                console.log(' <div class="line"></div>');
                console.log(' <div class="line"></div>');
                console.log(' <div class="line"></div>');
                console.log(' <div class="line"></div>');
                console.log(' </div>');
                break;
                case 'Headers': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui placeholder">');
                console.log('  <div class="image header">');
                console.log('    <div class="line"></div>');
                console.log('    <div class="line"></div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Paragraph': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui placeholder">');
                console.log('  <div class="paragraph">');
                console.log('   <div class="line"></div>');
                console.log('   <div class="line"></div>');
                console.log('   <div class="line"></div>');
                console.log('  </div>');
                console.log('  <div class="paragraph">');
                console.log('   <div class="line"></div>');
                console.log('   <div class="line"></div>');
                console.log('   <div class="line"></div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Image': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui placeholder">');
                console.log('  <div class="image"></div>');
                console.log(' </div>');
                break;
            }
          })
        break;

        case 'Rail':
        prompt_content_Rail.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Rail': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui segment">');
                console.log('  <div class="ui left rail">');
                console.log('    <div class="ui segment">');
                console.log('      Left Rail Content');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="ui right rail">');
                console.log('    <div class="ui segment">');
                console.log('      Right Rail Content');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <p></p>');
                console.log('  <p></p>');
                console.log('</div>');
                break;
                case 'Internal': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui segment">');
                console.log('  <div class="ui left internal rail">');
                console.log('    <div class="ui segment">');
                console.log('      Left Rail Content');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="ui right internal rail">');
                console.log('    <div class="ui segment">');
                console.log('      Right Rail Content');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Dividing': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui segment">');
                console.log('  <div class="ui left dividing rail">');
                console.log('    <div class="ui segment">');
                console.log('      Left Rail Content');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="ui right dividing rail">');
                console.log('    <div class="ui segment">');
                console.log('      Right Rail Content');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
            }
          })
        break;

        case 'Reveal':
        prompt_content_Reveal.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Fade': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui fade reveal">');
                console.log('  <div class="visible content">');
                console.log('    <img src="/images/wireframe/square-image.png" class="ui small image">');
                console.log('  </div>');
                console.log('  <div class="hidden content">');
                console.log('    <img src="/images/avatar/large/ade.jpg" class="ui small image">');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Move': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui move reveal">');
                console.log('  <div class="visible content">');
                console.log('    <img src="/images/wireframe/square-image.png" class="ui small image">');
                console.log('  </div>');
                console.log('  <div class="hidden content">');
                console.log('    <img src="/images/avatar/large/ade.jpg" class="ui small image">');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Rotate': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui small circular rotate reveal image">');
                console.log('  <img src="/images/wireframe/square-image.png" class="visible content">');
                console.log('  <img src="/images/avatar/large/stevie.jpg" class="hidden content">');
                console.log('</div>');
                break;
                case 'Visible Content': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui small fade reveal image">');
                console.log('  <img class="visible content" src="/images/avatar/large/ade.jpg">');
                console.log('  <img class="hidden content" src="/images/wireframe/square-image.png">');
                console.log('</div>');
                break;
                case 'Hidden Content': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui small fade reveal image">');
                console.log('  <img class="visible content" src="/images/wireframe/square-image.png">');
                console.log('  <img class="hidden content" src="/images/avatar/large/ade.jpg">');
                console.log('</div>');
                break;
            }
          })
        break;

        case 'Segment':
        prompt_content_Segment.run()
        .then(function(answer2) {
            switch(answer2){
              case 'Type':
              prompt_content_Segment_type.run()
              .then(function(answer2) {
                  switch(answer2){
                      case 'Placeholder Segment': 
                      console.log('\n Your Code:'); 
                      console.log('<div class="ui placeholder segment">');
                      console.log('  <div class="ui icon header">');
                      console.log('    <i class="pdf file outline icon"></i>');
                      console.log('    No documents are listed for this customer.');
                      console.log('  </div>');
                      console.log('  <div class="ui primary button">Add Document</div>');
                      console.log('</div>');
                      break;
                      case 'Raised': 
                      console.log('\n Your Code:'); 
                      console.log('<div class="ui raised segment">');
                      console.log('  <p></p>');
                      console.log('</div>');
                      break;
                      case 'Stacked': 
                      console.log('\n Your Code:'); 
                      console.log('<div class="ui stacked segment">');
                      console.log('  <p></p>');
                      console.log('</div>');
                      break;
                      case 'Piled': 
                      console.log('\n Your Code:'); 
                      console.log('<div class="ui piled segment">');
                      console.log('  <h4 class="ui header">A header</h4>');
                      console.log('  <p></p>');
                      console.log('</div>');
                      break;
                      case 'Vertical Segment': 
                      console.log('\n Your Code:'); 
                      console.log('<div class="ui vertical segment">');
                      console.log('  <p></p>');
                      console.log('</div>');
                      console.log('<div class="ui vertical segment">');
                      console.log('  <p></p>');
                      console.log('</div>');
                      console.log('<div class="ui vertical segment">');
                      console.log('  <p></p>');
                      console.log('</div>');
                      break;
                  }
                })
                break;
                case 'Groups': 
                prompt_content_Segment_groups.run()
                .then(function(answer2) {
                    switch(answer2){
                        case 'Segments': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui segments">');
                        console.log('  <div class="ui segment">');
                        console.log('   <p>Top</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Middle</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Middle</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Bottom</p>');
                        console.log(' </div>');
                        console.log('</div>');
                        break;
                        case 'Nested Segments': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui segments">');
                        console.log('  <div class="ui segment">');
                        console.log('   <p>Top</p>');
                        console.log(' </div>');
                        console.log('<div class="ui segments">');
                        console.log('  <div class="ui segment">');
                        console.log('      <p>Nested Top</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('      <p>Nested Middle</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('      <p>Nested Bottom</p>');
                        console.log(' </div>');
                        console.log('</div>');
                        break;
                        case 'Horizontal Segments': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui horizontal segments">');
                        console.log('  <div class="ui segment">');
                        console.log('   <p></p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p></p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p></p>');
                        console.log(' </div>');
                        console.log('</div>');
                        break;
                        case 'Raised Segments': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui raised segments">');
                        console.log('  <div class="ui segment">');
                        console.log('   <p>Top</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Middle</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Bottom</p>');
                        console.log(' </div>');
                        console.log('</div>');
                        break;
                        case 'Stacked Segments': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui stacked segments">');
                        console.log('  <div class="ui segment">');
                        console.log('   <p>Top</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Middle</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Bottom</p>');
                        console.log(' </div>');
                        console.log('</div>');
                        break;
                        case 'Piled Segments': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui piled segments">');
                        console.log('  <div class="ui segment">');
                        console.log('   <p>Top</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Middle</p>');
                        console.log(' </div>');
                        console.log('  <div class="ui segment">');
                        console.log('    <p>Bottom</p>');
                        console.log(' </div>');
                        console.log('</div>');
                        break;
                        
                    }
                  })
                break;
                case 'States': 
                prompt_content_Segment_states.run()
                .then(function(answer2) {
                    switch(answer2){
                        case 'Disabled': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui disabled segment">');
                        console.log('  <p></p>');
                        console.log('</div>');
                        break;
                        case 'Loading': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui loading segment">');
                        console.log('  <p></p>');
                        console.log('</div>');
                        break;
                    }
                  })
                break;
                case 'Variations': 
                prompt_content_Segment_variations.run()
                .then(function(answer2) {
                    switch(answer2){
                        case 'Inverted': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui inverted segment">');
                        console.log('  <p> here to tell you something, and you will probably read me first.</p>');
                        console.log('</div>');
                        break;
                        case 'Attached': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui top attached segment">');
                        console.log('  <p>This segment is on top</p>');
                        console.log('</div>');
                        console.log('<div class="ui attached segment">');
                        console.log('  <p>This segment is attached on both sides</p>');
                        console.log('</div>');
                        console.log('<div class="ui bottom attached segment">');
                        console.log('  <p>This segment is on bottom</p>');
                        console.log('</div>');
                        break;
                        case 'Padded': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui padded segment">');
                        console.log('  <p></p>');
                        console.log('</div>');
                        break;
                        case 'Compact': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui compact segment">');
                        console.log('  <p></p>');
                        console.log('</div>');
                        break;
                        case 'Colored': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui red segment">Red</div>');
                        console.log('<div class="ui orange segment">Orange</div>');
                        console.log('<div class="ui yellow segment">Yellow</div>');
                        break;
                        case 'Emphasis': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui segment">');
                        console.log('  <p>Im here to tell you something, and you will probably read me first.</p>');
                        console.log('</div>');
                        console.log('<div class="ui secondary segment">');
                        console.log('  <p>Im here to tell you something, and you will probably read me first.</p>');
                        console.log('</div>');
                        console.log('<div class="ui tertiary segment">');
                        console.log('  <p>Im here to tell you something, and you will probably read me first.</p>');
                        console.log('</div>');
                        break;
                        case 'Circular': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui circular segment">');
                        console.log('  <h2 class="ui header">');
                        console.log('    Buy Now');
                        console.log('    <div class="sub header">$10.99</div>');
                        console.log('  </h2>');
                        console.log('</div>');
                        console.log('<div class="ui inverted circular segment">');
                        console.log('  <h2 class="ui inverted header">');
                        console.log('    Buy Now');
                        console.log('    <div class="sub header">$10.99</div>');
                        console.log('  </h2>');
                        console.log('</div>');
                        break;
                        case 'Clearing': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui clearing segment">');
                        console.log('  <div class="ui right floated button">Floated</div>');
                        console.log('</div>');
                        break;
                        case 'Floated': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui right floated segment">');
                        console.log('  <p>This segment will appear to the right</p>');
                        console.log('</div>');
                        console.log('<div class="ui left floated segment">');
                        console.log('  This segment will appear to the left');
                        console.log('</div>');
                        break;
                        case 'Text Alignment': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui right aligned segment">');
                        console.log('  Right');
                        console.log('</div>');
                        console.log('<div class="ui left aligned segment">');
                        console.log('  Left');
                        console.log('</div>');
                        console.log('<div class="ui center aligned segment">');
                        console.log('  Center');
                        console.log('</div>');
                        break;
                        case 'Basic': 
                        console.log('\n Your Code:'); 
                        console.log('<div class="ui basic segment">');
                        console.log(' <p></p>');
                        console.log('</div>');
                        break;
                    }
                  })
                break;
            }
          })
        break;

        case 'Step':
        prompt_content_Step.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Steps': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui steps">');
                console.log('  <div class="step">');
                console.log('    Shipping');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Groups': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui steps">');
                console.log('  <div class="step">');
                console.log('    <i class="truck icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Shipping</div>');
                console.log('      <div class="description">Choose your shipping options</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="active step">');
                console.log('    <i class="payment icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Billing</div>');
                console.log('      <div class="description">Enter billing information</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="disabled step">');
                console.log('    <i class="info icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Confirm Order</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Ordered': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui ordered steps">');
                console.log('  <div class="completed step">');
                console.log('    <div class="content">');
                console.log('      <div class="title">Shipping</div>');
                console.log('      <div class="description">Choose your shipping options</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="completed step">');
                console.log('    <div class="content">');
                console.log('      <div class="title">Billing</div>');
                console.log('      <div class="description">Enter billing information</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="active step">');
                console.log('    <div class="content">');
                console.log('      <div class="title">Confirm Order</div>');
                console.log('      <div class="description">Verify order details</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>'); 
                break;
                case 'Vertical': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui vertical steps">');
                console.log('  <div class="completed step">');
                console.log('    <i class="truck icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Shipping</div>');
                console.log('      <div class="description">Choose your shipping options</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="completed step">');
                console.log('    <i class="credit card icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Billing</div>');
                console.log('      <div class="description">Enter billing information</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="active step">');
                console.log('    <i class="info icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Confirm Order</div>');
                console.log('      <div class="description">Verify order details</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>'); 
                break;
                case 'Desciption': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui steps">');
                console.log('  <div class="step">');
                console.log('    <div class="title">Shipping</div>');
                console.log('    <div class="description">Choose your shipping options</div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Icon': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui steps">');
                console.log('  <div class="step">');
                console.log('    <i class="truck icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Shipping</div>');
                console.log('      <div class="description">Choose your shipping options</div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Link': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui ordered steps">');
                console.log('  <a class="active step">');
                console.log('    <i class="truck icon"></i>');
                console.log('    <div class="content">');
                console.log('      <div class="title">Shipping</div>');
                console.log('      <div class="description">Choose your shipping options</div>');
                console.log('    </div>');
                console.log('  </a>');
                console.log('  <a class="step">');
                console.log('    <div class="content">');
                console.log('      <div class="title">Billing</div>');
                console.log('      <div class="description">Enter billing information</div>');
                console.log('    </div>');
                console.log('  </a>');
                console.log('</div>'); 
                break;
            }
          })
        break;
      }
    })
    .catch(console.error);
