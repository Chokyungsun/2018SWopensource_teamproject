'use strict';

const { Select } = require('enquirer');

const prompt_select = new Select({
    name: 'UI-list',
    message: 'Select types of UI',
    choices: ['Popup', 'Progress', 'Rating', 'Search', 'Shape', 'Sidebar', 'Sticky', 'Tab']
});

const prompt_content_Popup = new Select({
    name: 'content',
    message: 'In Popup section, what contents do you want to know?',
    choices: ['Popup', 'Titled', 'HTML', 'PreExisting']
});

const prompt_content_Progress = new Select({
    name: 'content',
    message: 'In Progress section, what contents do you want to know?',
    choices: ['Standard', 'Indicating']
});

const prompt_content_Rating = new Select({
    name: 'content',
    message: 'In Rating section, what contents do you want to know?',
    choices: ['Rating ', 'Star', 'Heart']
});

const prompt_content_Search = new Select({
    name: 'content',
    message: 'In Search section, what contents do you want to know?',
    choices: ['Standard', 'Category', 'LocalSearch', 'LocalCategorySearch']
});

const prompt_content_Shape = new Select({
    name: 'content',
    message: 'In Shape section, what contents do you want to know?',
    choices: ['Shape', 'Cube', 'Text']
});

const prompt_content_Sidebar = new Select({
    name: 'content',
    message: 'In Sidebar section, what contents do you want to know?',
    choices: ['Sidebar']
});

const prompt_content_Sticky = new Select({
    name: 'content',
    message: 'In Sticky section, what contents do you want to know?',
    choices: ['StickingToAdjacentContext', 'Pushing', 'OversizedContent', 'StickingToOwnContext']
});

const prompt_content_Tab = new Select({
    name: 'content',
    message: 'In Tab section, what contents do you want to know?',
    choices: ['Tab']
});








prompt_select.run()
    .then(function (answer1) {
        console.log('Answer:', answer1);
        switch (answer1) {
            case 'Popup':
                prompt_content_Popup.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {

                            case 'Popup':
                                console.log('\n Your Code:')
                                console.log('<div class="ui icon button" data-content="Add users to your feed">')
                                console.log('<i class="add icon"></i>')
                                console.log('</div>')
                                break;

                            case 'Titled':
                                console.log('\n Your Code:')
                                console.log(' <img src="/images/avatar/small/elliot.jpg" data-title="Elliot Fu" data-content="Elliot has been a member since July 2012" class="ui avatar image">')
                                console.log('<img src="/images/avatar/small/stevie.jpg" data-title="Stevie Feliciano" data-content="Stevie has been a member since August 2013" class="ui avatar image">')
                                console.log('<img src="/images/avatar/small/matt.jpg" data-title="Matt" data-content="Matt has been a member since July 2014" class="ui avatar image">')

                                break;

                            case 'HTML':
                                console.log('\n Your Code:')
                                console.log('<div class="image">')
                                console.log('<img src="/images/movies/totoro-horizontal.jpg">')
                                console.log('</div>')
                                console.log('<div class="content">')
                                console.log('<div class="header">My Neighbor Totoro</div>')
                                console.log(' <div class="description">')
                                console.log('Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits.')
                                console.log('</div>')
                                console.log('</div>')
                                console.log('<div class="ui two bottom attached buttons">')
                                console.log('<div class="ui button">')
                                console.log('<i class="add icon"></i>')
                                console.log('Queue')
                                console.log('</div>')
                                console.log('<div class="ui primary button">')
                                console.log('<i class="play icon"></i>')
                                console.log('Watch')
                                console.log('</div>')
                                console.log('</div>')
                                console.log('</div>')
                                break;

                            case 'PreExisting':
                                console.log('\n Your Code:')
                                console.log('<div class="ui card">')
                                console.log('<div class="image">')
                                console.log('<img src="/images/movies/watchmen-horizontal.jpg"></img>')
                                console.log('</div >')
                                console.log('< div class="content" >')
                                console.log('div class="header">Watchmen</div>')
                                console.log('<div class="description">')
                                console.log(' In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated.')
                                console.log('</div>')
                                console.log('</div >')
                                console.log('<div class="ui two bottom attached buttons">')
                                console.log('<div class="ui button">')
                                console.log('<i class="add icon"></i>')
                                console.log('Queue')
                                console.log('</div>')
                                console.log('<div class="ui primary button">')
                                console.log('<i class="play icon"></i>')
                                console.log('Watch')
                                console.log('</div>')
                                console.log('</div>')
                                console.log('<div class="ui popup">')
                                console.log('<div class="header">User Rating</div>')
                                console.log('<div class="ui star rating" data-rating="3"></div>')
                                console.log('</div>')
                                console.log('</div >')
                                break;


                        }
                    })
                break;
            case 'Progress':
                prompt_content_Progress.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {
                            case 'Standard':
                            console.log('\n Your Code:')

                                console.log('<div class="ui progress">')
                                console.log('< div class= "bar" >')
                                console.log('                     <div class="progress"></div>')
                                console.log(' </div >')
                                console.log('                     <div class="label">Uploading Files</div>')
                                console.log(' </div >')
                                break;

                            case 'Indicating':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui indicating progress">')
                                console.log('     <div class="bar"></div>')
                                console.log('     <div class="label">Funding</div>')
                                console.log(' </div>')
                                break;

                        }
                    })
                break;

            case 'Rating':
                prompt_content_Rating.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {
                            case 'Rating':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui rating" data-max-rating="1"></div>')
                                break;

                            case 'Star':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui star rating" data-rating="3"></div>')
                                break;

                            case 'Heart':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui heart rating" data-rating="1" data-max-rating="3"></div>')
                                break;


                        }
                    })
                break;

            case 'Search':
                prompt_content_Search.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {
                            case 'Standard':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui search">')
                                console.log('     <input class="prompt" type="text" placeholder="Common passwords..."></input>')
                                console.log('     <div class="results"></div>')
                                console.log(' </div>')
                                break;

                            case 'Category':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui category search">')
                                console.log('     <div class="ui icon input">')
                                console.log('         <input class="prompt" type="text" placeholder="Search animals..."></input>')
                                console.log('         <i class="search icon"></i>')
                                console.log('     </div>')
                                console.log('     <div class="results"></div>')
                                console.log(' </div>')
                                break;

                            case 'LocalSearch':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui search">')
                                console.log('     <div class="ui icon input">')
                                console.log('         <input class="prompt" type="text" placeholder="Search countries..."></input>')
                                console.log('         <i class="search icon"></i>')
                                console.log('     </div>')
                                console.log('     <div class="results"></div>')
                                console.log(' </div>')
                               
                                
                                break;

                            case 'LocalCategorySearch':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui search">')
                                console.log('     <div class="ui icon input">')
                                console.log('         <input class="prompt" type="text" placeholder="Search countries..."></input>')
                                console.log('         <i class="search icon"></i>')
                                console.log('     </div>')
                                console.log('     <div class="results"></div>')
                                console.log(' </div>')
                                
                                break;

                        }
                    })
                break;

            case 'Shape':
                prompt_content_Shape.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {
                            case 'Shape':
                            console.log('\n Your Code:')

                                console.log('                 <div class="ui people shape">')
                console.log('                     <div class="sides">')
                console.log('                         <div class="active side">')
                console.log('                             <div class="ui card">')
                console.log('                                 <div class="image">')
                console.log('                                     <img src="/images/avatar/large/steve.jpg"></img>')
                console.log('                                 </div>')
                console.log('                                 <div class="content">')
                console.log('                                     <div class="header">Steve Jobes</div>')
                console.log('                                     <div class="meta">')
                console.log('                                         <a>Acquaintances</a>')
                console.log('                                     </div>')
                console.log('                                     <div class="description">')
                console.log('                                         Steve Jobes is a fictional character designed to resemble someone familiar to readers.')
                console.log('   </div>')
                console.log('                                 </div>')
                console.log('                                 <div class="extra content">')
                console.log('                                     <span class="right floated">')
                console.log('                                         Joined in 2014')
                console.log('   </span>')
                console.log('                                     <span>')
                console.log('                                         <i class="user icon"></i>')
                console.log('                                         151 Friends')
                console.log('   </span>')
                console.log('                                 </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                         <div class="side">')
                console.log('                             <div class="ui card">')
                console.log('                                 <div class="image">')
                console.log('                                     <img src="/images/avatar/large/stevie.jpg"></img>')
                console.log('                                 </div>')
                console.log('                                 <div class="content">')
                console.log('                                     <a class="header">Stevie Feliciano</a>')
                console.log('                                     <div class="meta">')
                console.log('                                         <span class="date">Joined in 2014</span>')
                console.log('                                     </div>')
                console.log('                                     <div class="description">')
                console.log('                                         Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.')
                console.log('   </div>')
                console.log('                                 </div>')
                console.log('                                 <div class="extra content">')
                console.log('                                     <a>')
                console.log('                                         <i class="user icon"></i>')
                console.log('                                         22 Friends')
                console.log('   </a>')
                console.log('                                 </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                     </div>')
                console.log('                 </div>')
                                break;

                            case 'Cube':
                            console.log('\n Your Code:')

                                console.log('                 <div class="ui cube shape">')
                console.log('                     <div class="sides">')
                console.log('                         <div class="active side">')
                console.log('                             <div class="content">')
                console.log('                                 <div class="center">')
                console.log('                                     1')
                console.log(' </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                         <div class="side">')
                console.log('                             <div class="content">')
                console.log('                                 <div class="center">')
                console.log('                                     2')
                console.log(' </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                         <div class="side">')
                console.log('                             <div class="content">')
                console.log('                                 <div class="center">')
                console.log('                                     3')
                console.log(' </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                         <div class="side">')
                console.log('                             <div class="content">')
                console.log('                                 <div class="center">')
                console.log('                                     4')
                console.log(' </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                         <div class="side">')
                console.log('                             <div class="content">')
                console.log('                                 <div class="center">')
                console.log('                                     5')
                console.log(' </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                         <div class="side">')
                console.log('                             <div class="content">')
                console.log('                                 <div class="center">')
                console.log('                                     6')
                console.log(' </div>')
                console.log('                             </div>')
                console.log('                         </div>')
                console.log('                     </div>')
                console.log('                 </div>')
                                break;

                            case 'Text':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui text shape">')
                                console.log('     <div class="sides">')
                                console.log('         <div class="active ui header side">Did you know? This side starts visible.</div>')
                                console.log('         <div class="ui header side">Help, its another side!</div>')
                                console.log('         <div class="ui header side">This is the last side</div>')
                                console.log('     </div>')
                                console.log(' </div>')
                                break;


                        }
                    })
                break;

            case 'Sidebar':
                prompt_content_Sidebar.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {
                            case 'Sidebar':
                            console.log('\n Your Code:')

                                console.log('                     <body>')
            console.log('                         <div class="ui sidebar inverted vertical menu">')
            console.log('                             <a class="item">')
            console.log('                                 1')
            console.log(' </a>')
            console.log('                             <a class="item">')
            console.log('                                 2')
            console.log(' </a>')
            console.log('                             <a class="item">')
            console.log('                                 3')
            console.log(' </a>')
            console.log('                         </div>')
            console.log('                         <div class="pusher">')
            console.log('                         </div>')
            console.log('                     </body>')
                         
console.log('                                 <div class="ui left demo vertical inverted sidebar labeled icon menu">')
console.log('                                     <a class="item">')
console.log('                                         <i class="home icon"></i>')
console.log('                                         Home')
console.log('   </a>')
console.log('                                     <a class="item">')
console.log('                                         <i class="block layout icon"></i>')
console.log('                                         Topics')
console.log('   </a>')
console.log('                                     <a class="item">')
console.log('                                         <i class="smile icon"></i>')
console.log('                                         Friends')
console.log('   </a>')
console.log('                                 </div>')
                           
                                break;


                        }
                    })

            case 'Sticky':
                prompt_content_Sticky.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {
                            case 'StickingToAdjacentContext':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui segment" id="example1">')
                                console.log('     <div class="left ui rail">')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <div class="ui sticky">')
                                console.log('             <h3 class="ui header">Stuck Content</h3>')
                                console.log('             <img></img>')
                                console.log('         </div>')
                                console.log('     </div>')
                                console.log('     <div class="right ui rail">')
                                console.log('         <div class="ui sticky">')
                                console.log('             <h3 class="ui header">Stuck Content</h3>')
                                console.log('             <img></img>')
                                console.log('         </div>')
                                console.log('     </div>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log(' </div>')
                                break;

                            case 'Pushing':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui segment" id="example2">')
                                console.log('     <div class="left ui rail" style="">')
                                console.log('         <div class="ui sticky" style="width: 272px !important; height: 262.57px !important; left: -69.32px;">')
                                console.log('             <h3 class="ui header">Stuck Content</h3>')
                                console.log('             <img></img>')
                                console.log('         </div>')
                                console.log('     </div>')
                                console.log('     <div class="right ui rail">')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <div class="ui sticky">')
                                console.log('             <h3 class="ui header">Stuck Content</h3>')
                                console.log('             <img></img>')
                                console.log('         </div>')
                                console.log('     </div>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log(' </div>')
                                break;

                            case 'OversizedContent':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui segment" id="example3">')
                                console.log('     <div class="left ui rail" style="">')
                                console.log('         <div class="ui sticky" style="width: 272px !important; height: 1826.31px !important; left: -69.32px; top: 0px;">')
                                console.log('             <h3 class="ui header">Long Stuck Content</h3>')
                                console.log('             <div class="ui divided items">')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('                 <div class="item">')
                                console.log('                     <div class="ui tiny image">')
                                console.log('                         <img src="/images/wireframe/image.png"></img>')
                                console.log('                     </div>')
                                console.log('                     <div class="middle aligned content">')
                                console.log('                         <a class="header">Followup Article</a>')
                                console.log('                         <div class="meta">')
                                console.log('                             <span class="author">By <a>Author</a></span>')
                                console.log('                         </div>')
                                console.log('                     </div>')
                                console.log('                 </div>')
                                console.log('             </div>')
                                console.log('         </div>')
                                console.log('     </div>')
                                console.log('     <div class="right ui rail" style="">')
                                console.log('         <div class="ui sticky" style="width: 272px !important; height: 262.57px !important; left: 1012.68px;">')
                                console.log('             <h3 class="ui header">Short Stuck Content</h3>')
                                console.log('             <img></img>')
                                console.log('         </div>')
                                console.log('     </div>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log('     <p></p>')
                                console.log(' </div>')
                                break;

                            case 'StickingToOwnContext':
                            console.log('\n Your Code:')

                                console.log(' <div class="ui segment">')
                                console.log('     <div class="ui sticky">')
                                console.log('         <div class="ui fluid three item tabular menu">')
                                console.log('             <a class="active item">Tab 1</a>')
                                console.log('             <a class="item">Tab 2</a>')
                                console.log('             <a class="item">Tab 3</a>')
                                console.log('         </div>')
                                console.log('     </div>')
                                console.log('     <div class="ui active tab">')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('     </div>')
                                console.log(' </div>')
                                break;

                        }
                    })

            case 'Tab':
                prompt_content_Tab.run()
                    .then(function (answer2) {
                        console.log('Answer:', answer2);
                        switch (answer2) {
                            case 'Tab':
                            console.log('\n Your Code:')

                                console.log(' <div>')
                                console.log('     <div class="ui top attached tabular menu">')
                                console.log('         <div class="item">Tab</div>')
                                console.log('     </div>')
                                console.log('     <div class="ui bottom attached tab segment">')
                                console.log('         <p></p>')
                                console.log('         <p></p>')
                                console.log('     </div></div>')
                                break;


                        }
                    })

           



        }
    })
    .catch(console.error);
