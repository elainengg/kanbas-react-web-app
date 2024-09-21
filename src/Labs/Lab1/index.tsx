// we see that components are functions
// The landing page shoold include the following:

// Your foll name and section
// Links to each of the lab assignments
// Link to the Kanbas application
// Links to all relevant source code repositories

export default function Lab1() {
  return (
    <div id="wd-lab1">

      <h2>Lab 1</h2>


      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>


      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
          <p id="wd-p-1">
      This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
        </p>
      </div>

      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
      </div>

      <div id="wd-lists-scrambled-eggs">

        My favorite recipe (scrambled eggs):
        <ol id="wd-scrambled-eggs">
        <li> Put oil in a heated pan. </li>
        <li> Scramble an egg.</li>
        <li> Season egg with salt and pepper</li>
        <li>Serve and enjoy!</li>
        </ol>
      </div>

      <h5>Unordered List Tag</h5>
      My prof's favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender's Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      
      
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>The Great Gatsby</li>
        <li>Long Day's Journey Into Night</li>
        <li>A Thousand Splendid Suns</li>
      </ul>

      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>Assembly</td>
              <td>2/24/21</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>C</td>
              <td>3/01/21</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Java</td>
              <td>3/08/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Free 100!</td>
              <td>3/09/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Recite the Preamble.</td>
              <td>3/17/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>Make a spaceship</td>
              <td>3/24/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Get a co-op (impossible)</td>
              <td>5/17/21</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>Download Raid Shadow Legends</td>
              <td>5/21/21</td>
              <td>100</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img id="wd-starship"
        width="400px"
       src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
      </div>

      <div id="wd-forms">
      <h4>Form Elements</h4>
      <form id="wd-text-fields">
        <h5>Text Fields</h5>
        <label htmlFor="wd-text-fields-username">Username:</label>
        <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input type="password" id="wd-text-fields-password" value="123@#$asd" />
        <br />
        <label htmlFor="wd-text-fields-first-name">First name:</label>
        <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
        <label htmlFor="wd-text-fields-last-name">Last name:</label>
        <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
          value="Wonderland" title="The last name" />
        {/* copy rest of form elements here  */}
      </form>
    </div>
    <h5>Text boxes</h5>
    <label>Biography:</label><br/>
    <textarea id="wd-textarea" cols={30} rows={10} placeholder="Biography"
         title="tooltip"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
    






    </div>);}