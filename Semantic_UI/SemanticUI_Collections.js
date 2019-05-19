'use strict';

const { Select } = require('enquirer');

const prompt_select = new Select({
  name: 'UI-list',
  message: 'ELEMENTS: Select types of UI',
  choices: ['Breadcrumb', 'Form', 'Grid', 'Menu', 'Meaage','Table']
});

const prompt_content_Breadcrumb = new Select({
    name: 'Breadcrumb-content',
    message: 'In Breadcrumb section, what contents do you want to know?',
    choices: ['Breadcrumb','Divider', 'Section', 'Link']
});

const prompt_content_Form = new Select({
  name: 'Form-content',
  message: 'In Form section, what contents do you want to know?',
  choices: ['Form','Field', 'Fields', 'Text Area', 'Checkbox','Dropdown', 'HTML Select', 'Message']
});
const prompt_content_Grid = new Select({
  name: 'Grid-content',
  message: 'In Grid section, what contents do you want to know?',
  choices: ['Grids', 'Columns', 'Rows', 'Negative Margins']
});
const prompt_content_Menu = new Select({
  name: 'Menu-content',
  message: 'In Menu section, what contents do you want to know?',
  choices: ['Menu', 'Secondary Menu', 'Pointing', 'Tabular', 'Text', 'Vertical Menu']
});

const prompt_content_Meaage = new Select({
  name: 'Meaage-content',
  message: 'In Meaage section, what contents do you want to know?',
  choices: ['Message', 'List Message', 'Icon Message', 'Dismissable Block']
});
const prompt_content_Table = new Select({
  name: 'Table-content',
  message: 'In Table section, what contents do you want to know?',
  choices: ['Table', 'Definition']
});

  prompt_select.run()
    .then(function(answer1) {
      switch(answer1){

        case 'Breadcrumb':
        prompt_content_Breadcrumb.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Breadcrumb': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui breadcrumb">');
                console.log('  <a class="section">Home</a>');
                console.log('  <div class="divider"> / </div>');
                console.log('  <a class="section">Store</a>');
                console.log('  <div class="divider"> / </div>');
                console.log('  <div class="active section">T-Shirt</div>');
                console.log(' </div>');
                break;
                case 'Divider': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui breadcrumb">');
                console.log('  <a class="section">Home</a>');
                console.log('  <i class="right chevron icon divider"></i>');
                console.log('  <a class="section">Registration</a>');
                console.log('  <i class="right arrow icon divider"></i>');
                console.log('  <div class="active section">Personal Information</div>');
                console.log(' </div>');
                break;
                case 'Section': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui breadcrumb">');
                console.log('  <div class="section">Home</div>');
                console.log('  <div class="divider"> / </div>');
                console.log('  <div class="active section">Search</div>');
                console.log('</div>');
                break;
                case 'Link': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui breadcrumb">');
                console.log('  <div class="divider"> / </div>');
                console.log('  <div class="active section">Search for: <a href="#">paper towels</a></div>');
                console.log(' </div>');
                break;
            }
          })
        break;

        case 'Form':
        prompt_content_Form.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Form': 
                console.log('\n Your Code:'); 
                console.log('<form class="ui form">');
                console.log('  <div class="field">');
                console.log('    <label>First Name</label>');
                console.log('    <input type="text" name="first-name" placeholder="First Name">');
                console.log('    </div>');
                console.log('  <div class="field">');
                console.log('    <label>Last Name</label>');
                console.log('    <input type="text" name="last-name" placeholder="Last Name">');
                console.log('    </div>');
                console.log('  <div class="field">');
                console.log('    <div class="ui checkbox">');
                console.log('      <input type="checkbox" tabindex="0" class="hidden">');
                console.log('      <label>I agree to the Terms and Conditions</label>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <button class="ui button" type="submit">Submit</button>');
                console.log('</form>');
                break;
                case 'Field': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui form">');
                console.log('  <div class="field">');
                console.log('    <label>User Input</label>');
                console.log('    <input type="text">');
                console.log('  </div>');
                console.log('</div>');
                break;
                case 'Fields': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui form">');
                console.log('  <div class="fields">');
                console.log('    <div class="field">');
                console.log('      <label>First name</label>');
                console.log('      <input type="text" placeholder="First Name">');
                console.log('    </div>');
                console.log('    <div class="field">');
                console.log('      <label>Middle name</label>');
                console.log('      <input type="text" placeholder="Middle Name">');
                console.log('    </div>');
                console.log('    <div class="field">');
                console.log('      <label>Last name</label>');
                console.log('      <input type="text" placeholder="Last Name">');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case  'Text Area': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui form">');
                console.log('  <div class="field">');
                console.log('    <label>Text</label>');
                console.log('    <textarea></textarea>');
                console.log('  </div>');
                console.log('  <div class="field">');
                console.log('    <label>Short Text</label>');
                console.log('    <textarea rows="2"></textarea>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case  'Checkbox': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui form">');
                console.log('  <div class="inline field">');
                console.log('    <div class="ui checkbox">');
                console.log('      <input type="checkbox" tabindex="0" class="hidden">');
                console.log('      <label>Checkbox</label>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('  <div class="inline field">');
                console.log('    <div class="ui slider checkbox">');
                console.log('      <input type="checkbox" tabindex="0" class="hidden">');
                console.log('      <label>Slider</label>');
                console.log('    </div>');
                console.log('    <label></label>');
                console.log('  </div>');
                console.log('  <div class="inline field">');
                console.log('    <div class="ui toggle checkbox">');
                console.log('      <input type="checkbox" tabindex="0" class="hidden">');
                console.log('      <label>Toggle</label>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case  'Dropdown': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui form">');
                console.log('  <div class="field">');
                console.log('      <label>Gender</label>');
                console.log('      <div class="ui selection dropdown">');
                console.log('          <input type="hidden" name="gender">');
                console.log('          <i class="dropdown icon"></i>');
                console.log('          <div class="default text">Gender</div>');
                console.log('          <div class="menu">');
                console.log('              <div class="item" data-value="1">Male</div>');
                console.log('              <div class="item" data-value="0">Female</div>');
                console.log('          </div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case  'HTML Select': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui form">');
                console.log('  <div class="field">');
                console.log('    <select>');
                console.log('      <option value="">Gender</option>');
                console.log('      <option value="1">Male</option>');
                console.log('      <option value="0">Female</option>');
                console.log('    </select>');
                console.log('  </div>');
                console.log('</div>');
                break;
                case  'Message': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui form">');
                console.log('  <div class="ui message">');
                console.log('    <div class="header">We had some issues</div>');
                console.log('    <ul class="list">');
                console.log('      <li>Please enter your first name</li>');
                console.log('      <li>Please enter your last name</li>');
                console.log('    </ul>');
                console.log('  </div>');
                console.log('</div>');
                break;
            }
          })
        break;

        case 'Grid':
        prompt_content_Grid.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Grids': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui grid">');
                console.log('  <div class="four wide column"></div>');
                console.log('  <div class="four wide column"></div>');
                console.log('  <div class="four wide column"></div>');
                console.log('  <div class="four wide column"></div>');
                console.log('</div>');
                break;
                case 'Columns': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui grid">');
                console.log('  <div class="four wide column"></div>');
                console.log('  <div class="four wide column"></div>');
                console.log('  <div class="four wide column"></div>');
                console.log('  <div class="four wide column"></div>');
                console.log('  <div class="two wide column"></div>');
                console.log('  <div class="eight wide column"></div>');
                console.log('  <div class="six wide column"></div>');
                console.log('</div>');
                break;
                case 'Rows': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui four column grid">');
                console.log('  <div class="row">');
                console.log('    <div class="column"></div>');
                console.log('    <div class="column"></div>');
                console.log('    <div class="column"></div>');
                console.log('   </div>');
                console.log('   <div class="column"></div>');
                console.log('   <div class="column"></div>');
                console.log('   <div class="column"></div>');
                console.log('</div>');
                break;
                case 'Negative Margins': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui top attached button">Button before grid</div>');
                console.log('<div class="ui grid">');
                console.log('  <div class="sixteen wide column"></div>');
                console.log('  <div class="ten wide column"></div>');
                console.log('  <div class="sixteen wide column"></div>');
                console.log('  <div class="six wide column"></div>');
                console.log('</div>');
                console.log('<div class="ui grid">');
                console.log('</div>');
                console.log('<div class="ui bottom attached button">Button after grid</div>');
                break;
            }
          })
        break;

        case 'Menu':
        prompt_content_Grid.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Menu': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui three item menu">');
                console.log('  <a class="active item">Editorials</a>');
                console.log('  <a class="item">Reviews</a>');
                console.log('  <a class="item">Upcoming Events</a>');
                console.log('</div>');
                break;
                case 'Secondary Menu': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui secondary  menu">');
                console.log('  <a class="active item">');
                console.log('    Home');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Messages');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Friends');
                console.log('  </a>');
                console.log('  <div class="right menu">');
                console.log('    <div class="item">');
                console.log('      <div class="ui icon input">');
                console.log('        <input type="text" placeholder="Search...">');
                console.log('        <i class="search link icon"></i>');
                console.log('      </div>');
                console.log('    </div>');
                console.log('    <a class="ui item">');
                console.log('      Logout');
                console.log('    </a>');
                console.log('   </div>');
                console.log('</div>');
                break;
                case 'Pointing': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui pointing menu">');
                console.log('  <a class="active item">');
                console.log('    Home');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Messages');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Friends');
                console.log('  </a>');
                console.log('  <div class="right menu">');
                console.log('    <div class="item">');
                console.log('      <div class="ui transparent icon input">');
                console.log('        <input type="text" placeholder="Search...">');
                console.log('        <i class="search link icon"></i>');
                console.log('      </div>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                console.log('<div class="ui segment">');
                console.log('  <p></p>');
                console.log('</div>');
                break;
                case 'Tabular': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui tabular menu">');
                console.log('  <a class="active item">');
                console.log('    Bio');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Photos');
                console.log('  </a>');
                console.log('</div>');
                break;
                case 'Text': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui text menu">');
                console.log('  <div class="header item">Sort By</div>');
                console.log('  <a class="active item">');
                console.log('    Closest');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Most Comments');
                console.log('  <a class="item">');
                console.log('    Most Popular');
                console.log('  </a>');
                console.log('</div>'); 
                break;
                case 'Vertical Menu': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui vertical menu">');
                console.log('  <a class="active teal item">');
                console.log('    Inbox');
                console.log('    <div class="ui teal left pointing label">1</div>');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Spam');
                console.log('    <div class="ui label">51</div>');
                console.log('  </a>');
                console.log('  <a class="item">');
                console.log('    Updates');
                console.log('    <div class="ui label">1</div>');
                console.log('  </a>');
                console.log('  <div class="item">');
                console.log('    <div class="ui transparent icon input">');
                console.log('      <input type="text" placeholder="Search mail...">');
                console.log('      <i class="search icon"></i>');
                console.log('    </div>');
                console.log('  </div>');
                console.log('</div>');
                break;
            }
          })
        break;

        case 'Meaage':
        prompt_content_Meaage.run()
        .then(function(answer2) {
            switch(answer2){
                case 'Message': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui message">');
                console.log('  <div class="header">');
                console.log('    Changes in Service');
                console.log('  </div>');
                console.log('  <p></p>');
                console.log('</div>');
                break;
                case 'List Message': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui message">');
                console.log('  <div class="header">');
                console.log('    New Site Features');
                console.log('  </div>');
                console.log('  <ul class="list">');
                console.log('    <li>You can now have cover images on blog pages</li>');
                console.log('  </ul>');
                console.log('</div>');
                break;
                case 'Icon Message': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui icon message">');
                console.log('  <i class="inbox icon"></i>');
                console.log('  <div class="content">');
                console.log('    <div class="header">');
                console.log('      Have you heard about our mailing list?');
                console.log('    </div>');
                console.log('    <p>Get the best news in your e-mail every day.</p>');
                console.log('  </div>');
                console.log('</div>'); 
                break;
                case 'Dismissable Block': 
                console.log('\n Your Code:'); 
                console.log('<div class="ui message">');
                console.log('  <i class="close icon"></i>');
                console.log('  <div class="header">');
                console.log('    Welcome back!');
                console.log('  </div>');
                console.log('  <p>This is a special notification which you can dismiss if youre bored with it.</p>');
                console.log('</div>'); 
                break;
              }
            })
          break;
        case 'Table':
        prompt_content_Table.run()
        .then(function(answer2) {
              switch(answer2){
                  case 'Table': 
                  console.log('\n Your Code:'); 
                  console.log('<table class="ui celled table">');
                  console.log('  <thead>');
                  console.log('    <tr><th>Name</th>');
                  console.log('    <th>Age</th>');
                  console.log('    <th>Job</th>');
                  console.log('  </tr></thead>');
                  console.log('  <tbody>');
                  console.log('    <tr>');
                  console.log('      <td data-label="Name">James</td>');
                  console.log('      <td data-label="Age">24</td>');
                  console.log('      <td data-label="Job">Engineer</td>');
                  console.log('    </tr>');
                  console.log('    <tr>');
                  console.log('      <td data-label="Name">Jill</td>');
                  console.log('      <td data-label="Age">26</td>');
                  console.log('      <td data-label="Job">Engineer</td>');
                  console.log('    </tr>');
                  console.log('    <tr>');
                  console.log('      <td data-label="Name">Elyse</td>');
                  console.log('      <td data-label="Age">24</td>');
                  console.log('      <td data-label="Job">Engineer</td>');
                  console.log('    </tr>');
                  console.log('  </tbody>');
                  console.log('</table>');
                  break;
                  case 'Definition': 
                  console.log('\n Your Code:'); 
                  console.log('<table class="ui definition table">');
                  console.log('  <thead>');
                  console.log('    <tr><th></th>');
                  console.log('    <th>Arguments</th>');
                  console.log('    <th>Description</th>');
                  console.log('  </tr></thead>');
                  console.log('  <tbody>');
                  console.log('    <tr>');
                  console.log('      <td>reset rating</td>');
                  console.log('      <td>None</td>');
                  console.log('      <td>Resets rating to default value</td>');
                  console.log('    </tr>');
                  console.log('    <tr>');
                  console.log('      <td>set rating</td>');
                  console.log('      <td>rating (integer)</td>');
                  console.log('      <td>Sets the current star rating to specified value</td>');
                  console.log('    </tr>');
                  console.log('</tbody></table>');
                  break;
            }
            })
          break;
      }
    })
    .catch(console.error);
