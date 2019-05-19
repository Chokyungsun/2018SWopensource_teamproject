'use strict';

const { Select } = require('enquirer');

const prompt_select = new Select({
  name: 'UI-list',
  message: 'Select types of UI',
  choices: ['API', 'FormValidation', 'Visibility']
});

const prompt_content_API = new Select({
    name: 'content',
    message: 'In API section, what contents do you want to know?',
    choices: ['StructuredDataExample']
    });

const prompt_content_FormValidation = new Select({
      name: 'content',
      message: 'In FormValidation section, what contents do you want to know?',
      choices: ['SpecifyingValidationRules','PassingParametersToRules','CustomizingPrompts','MatchingFields']
    });

const prompt_content_Visibility = new Select({
      name: 'content',
      message: 'In Visibility section, what contents do you want to know?',
      choices: ['HowToUse ','ChangingCallbackFrequency']
    });

    


  prompt_select.run()
    .then(function(answer1) {
      console.log('Answer:', answer1);
      switch(answer1){

        case 'API':
        prompt_content_API.run()
        .then(function(answer2) {
            console.log('Answer:', answer2);
            switch(answer2){

                case 'StructuredDataExample':
                console.log('\n Your Code:')

              console.log('   <form class="ui form">')
              console.log('   <div class="two fields">')
              console.log('     <div class="field">')
              console.log('       <label>Name</label>')
              console.log('       <div class="two fields">')
              console.log('         <div class="field">')
              console.log('           <input type="text" name="name[first]" placeholder="First Name"></input>')
              console.log('         </div>')
              console.log('         <div class="field">')
              console.log('           <input type="text" name="name[last]" placeholder="Last Name"></input>')
              console.log('         </div>')
              console.log('       </div>')
              console.log('     </div>')
              console.log('     <div class="field">')
              console.log('       <label>Gender</label>')
              console.log('       <div class="ui selection dropdown">')
              console.log('         <input type="hidden" name="gender"></input>')
              console.log('         <div class="default text">Gender</div>')
              console.log('         <i class="dropdown icon"></i>')
              console.log('         <div class="menu">')
              console.log('           <div class="item" data-value="male">Male</div>')
              console.log('           <div class="item" data-value="female">Female</div>')
              console.log('         </div>')
              console.log('       </div>')
              console.log('     </div>')
              console.log('   </div>')
              console.log('   <div class="two fields">')
              console.log('     <div class="required field">')
              console.log('       <label>Username</label>')
              console.log('       <div class="ui icon input">')
              console.log('         <input type="text" name="username" placeholder="Username"></input>')
              console.log('         <i class="user icon"></i>')
              console.log('       </div>')
              console.log('     </div>')
              console.log('     <div class="required field">')
              console.log('       <label>Password</label>')
              console.log('       <div class="ui icon input">')
              console.log('         <input type="password" name="password"></input>')
              console.log('         <i class="lock icon"></i>')
              console.log('       </div>')
              console.log('     </div>')
              console.log('   </div>')
              console.log('   <div class="ui submit button">Submit</div>')
              console.log(' </form>')
                break;
               
                
            }
        })
          break;

        case 'FormValidation':
        prompt_content_FormValidation.run()
        .then(function(answer2) {
            console.log('Answer:', answer2);
            switch(answer2){

                case 'SpecifyingValidationRules':
                console.log('\n Your Code:')

                console.log(' <div class="ui horizontal divider">')
                console.log(' <form class="ui form segment">')
                console.log('   <p>Tell Us About Yourself</p>')
                console.log('   <div class="two fields">')
                console.log('     <div class="field">')
                console.log('       <label>Name</label>')
                console.log('       <input placeholder="First Name" name="name" type="text"></input>')
                console.log('     </div>')
                console.log('     <div class="field">')
                console.log('       <label>Gender</label>')
                console.log('       <select class="ui dropdown" name="gender">')
                console.log('         <option value="">Gender</option>')
                console.log('         <option value="male">Male</option>')
                console.log('         <option value="female">Female</option>')
                console.log('       </select>')
                console.log('     </div>')
                console.log('   </div>')
                console.log('   <div class="two fields">')
                console.log('     <div class="field">')
                console.log('       <label>Username</label>')
                console.log('       <input placeholder="Username" name="username" type="text"></input>')
                console.log('     </div>')
                console.log('     <div class="field">')
                console.log('       <label>Password</label>')
                console.log('       <input type="password" name="password"></input>')
                console.log('     </div>')
                console.log('   </div>')
                console.log('   <div class="field">')
                console.log('     <label>Skills</label>')
                console.log('     <select name="skills" multiple="" class="ui dropdown">')
                console.log('       <option value="">Select Skills</option>')
                console.log('       <option value="css">CSS</option>')
                console.log('       <option value="html">HTML</option>')
                console.log('       <option value="javascript">Javascript</option>')
                console.log('       <option value="design">Graphic Design</option>')
                console.log('       <option value="plumbing">Plumbing</option>')
                console.log('       <option value="mech">Mechanical Engineering</option>')
                console.log('       <option value="repair">Kitchen Repair</option>')
                console.log('     </select>')
                console.log('   </div>')
                console.log('   <div class="inline field">')
                console.log('     <div class="ui checkbox">')
                console.log('       <input type="checkbox" name="terms"></input>')
                console.log('       <label>I agree to the terms and conditions</label>')
                console.log('     </div>')
                console.log('   </div>')
                console.log('   <div class="ui primary submit button">Submit</div>')
                console.log('   <div class="ui error message"></div>')
                console.log(' </form>')
                console.log(' </div>')
                break;
           
                case 'PassingParametersToRules':
                console.log('\n Your Code:')

              console.log('   <form class="ui form segment">')
              console.log('   <div class="field">')
              console.log('     <label>Color</label>')
              console.log('     <input placeholder="Enter rgb" name="color" type="text" value="rgb(255, 255, 255)"></input>')
              console.log('   </div>')
              console.log('   <div class="ui primary submit button">Submit</div>')
              console.log(' </form>')
                break;

                case 'CustomizingPrompts':
                console.log('\n Your Code:')

              console.log('   <div>')
              console.log('   <table class="ui celled sortable basic table segment">')
              console.log('   <tbody>')
              console.log('     <tr>')
              console.log('       <td class="four wide"><b>{name}</b></td>')
              console.log('       <td>The current text of a fields label, or if no label available its placeholder text</td>')
              console.log('     </tr>')
              console.log('     <tr>')
              console.log('       <td class="four wide"><b>{identifier}</b></td>')
              console.log('       <td>The identifier used to match the field</td>')
              console.log('     </tr>')
              console.log('     <tr>')
              console.log('       <td class="four wide"><b>{value}</b></td>')
              console.log('       <td>The current field value</td>')
              console.log('     </tr>')
              console.log('     <tr>')
              console.log('       <td class="four wide"><b>{ruleValue}</b></td>')
              console.log('       <td>The value passed to a rule, for example <code>minLength[100]</code> would set this value to 100</td>')
              console.log('     </tr>')
              console.log('   </tbody>')
              console.log(' </table>')
              console.log(' <form class="ui form segment">')
              console.log('   <div class="two fields">')
              console.log('     <div class="field">')
              console.log('       <label>Field 1</label>')
              console.log('       <input type="text" name="field1"></input>')
              console.log('     </div>')
              console.log('     <div class="field">')
              console.log('       <label>Field 2</label>')
              console.log('       <input type="text" name="field2"></input>')
              console.log('     </div>')
              console.log('     <div class="field">')
              console.log('       <label>Field 3</label>')
              console.log('       <input type="text" name="field3"></input>')
              console.log('     </div>')
              console.log('   </div>')
              console.log('   <div class="ui primary submit button">Submit</div>')
              console.log('   <div class="ui error message">')
              console.log('   </div>')
              console.log(' </form></div>')
                break;

                case 'MatchingFields':
                console.log('\n Your Code:')

              console.log('   <form class="ui form segment">')
              console.log('   <div class="field">')
              console.log('     <label>Special Field</label>')
              console.log('     <input type="text" name="special-name"></input>')
              console.log('   </div>')
              console.log('   <div class="ui primary submit button">Submit</div>')
              console.log('   <div class="ui error message">')
              console.log('   </div>')
              console.log(' </form>')
                break;

              }
        })
            break;

        case 'Visibility':
        prompt_content_Visibility.run()
        .then(function(answer2) {
          console.log('Answer:', answer2);
          switch(answer2){

              case 'HowToUse':
              console.log('\n Your Code:')

console.log('  <div class="two column equal height ui grid">')
console.log('   <div class="row">')
console.log('     <div class="main column">')
console.log('       <div class="ui first demo segment">')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('       </div>')
console.log('     </div>')
console.log('     <div class="column" style="">')
console.log('       <div class="ui sticky" style="width: 288.68px !important; height: 561.28px !important; left: 608.68px; top: 0px;">')
console.log('         <table class="ui basic celled sortable two column table">')
console.log('           <thead>')
console.log('             <tr><th>Calculation</th>')
console.log('             <th>Value</th>')
console.log('           </tr></thead>')
console.log('           <tbody>')
console.log('             <tr class="pixelsPassed">')
console.log('               <td>pixelsPassed</td>')
console.log('               <td>0px</td>')
console.log('             </tr>')
console.log('             <tr class="percentagePassed">')
console.log('               <td>percentagePassed</td>')
console.log('               <td>0%</td>')
console.log('             </tr>')
console.log('             <tr class="fits">')
console.log('               <td>fits</td>')
console.log('               <td class="">false</td>')
console.log('             </tr>')
console.log('             <tr class="width">')
console.log('               <td>width</td>')
console.log('               <td>288px</td>')
console.log('             </tr>')
console.log('             <tr class="height">')
console.log('               <td>height</td>')
console.log('               <td>1159px</td>')
console.log('             </tr>')
console.log('             <tr class="onScreen">')
console.log('               <td>onScreen</td>')
console.log('               <td class="">false</td>')
console.log('             </tr>')
console.log('             <tr class="offScreen">')
console.log('               <td>offScreen</td>')
console.log('               <td class="">true</td>')
console.log('             </tr>')
console.log('             <tr class="passing">')
console.log('               <td>passing</td>')
console.log('               <td class="">false</td>')
console.log('             </tr>')
console.log('             <tr class="topVisible">')
console.log('               <td>topVisible</td>')
console.log('               <td class="">false</td>')
console.log('             </tr>')
console.log('             <tr class="bottomVisible">')
console.log('               <td>bottomVisible</td>')
console.log('               <td class="">false</td>')
console.log('             </tr>')
console.log('             <tr class="topPassed">')
console.log('               <td>topPassed</td>')
console.log('               <td class="">false</td>')
console.log('             </tr>')
console.log('             <tr class="bottomPassed">')
console.log('               <td>bottomPassed</td>')
console.log('               <td class="">false</td>')
console.log('             </tr>')
          
console.log('         </tbody></table>')
console.log('       </div>')
console.log('     </div>')
console.log('   </div>')
console.log(' </div> ')
              break;
             
              case 'ChangingCallbackFrequency':
              console.log('\n Your Code:')

console.log('  <div class="two column equal height ui grid">')
console.log('   <div class="row">')
console.log('     <div class="main column">')
console.log('       <div class="ui demo segment">')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('         <div class="ui divider"></div>')
console.log('         <p></p>')
console.log('       </div>')
console.log('     </div>')
console.log('     <div class="column">')
console.log('       <div class="ui sticky segments">')
console.log('         <div class="ui segment">')
console.log('           <div class="ui right floated compact clear button">')
console.log('             Clear')
console.log('           </div>')
console.log('           <div class="ui toggle checkbox">')
console.log('             <input type="checkbox" checked="" name="once"></input>')
console.log('             <label>Once</label>')
console.log('           </div>')
console.log('           <div class="ui divider"></div>')
console.log('           <div class="ui toggle checkbox">')
console.log('             <input type="checkbox" name="continuous"></input>')
console.log('             <label>Continuous</label>')
console.log('           </div>')
console.log('         </div>')
console.log('         <div class="ui segment">')
console.log('           Event Log')
console.log('         </div>')
console.log('         <div class="ui segment">')
console.log('           <pre class="console"></pre>')
console.log('         </div>')
console.log('       </div>')
console.log('     </div>')
console.log('   </div>')
console.log(' </div> ')
              break;
             
        
            }
        })
        break;


      }
    })
    .catch(console.error);
