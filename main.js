// Mcqs array
const questions= [
  {
    type:'survey',
    text:'Please Enter Your Email',
    placeholder:'email@email.com',
    templateId:'email',
    required: true,
    nextIndex:'1',
  },
  {
    type:'survey',
    text:'Please Name the Influencer',
    placeholder:'E.g Christiano Ronaldo',
    templateId:'influencer',
    required: true,
    nextIndex:'1',
  },
  {
    type:'survey',
    text:'Please Share Your Feedback',
    placeholder:'"We would love to hear your feedback!"',
    templateId:'feedback',
    required: true,
    nextIndex:'1',
  },
  {
    type: 'mcq',
    text: "What didn't you like about the shopping experience?",
    templateId: 'mcqTemplate1',
    options: [
      { text: 'The website was hard to navigate', nextIndex: 3 },
      { text: 'The website was slow', nextIndex: 3 },
      { text: 'The checkout process was confusing', nextIndex: 3 },
      { text: 'There were too many pop-ups or ads', nextIndex: 3 },
    ],
    showFifthOption: false,
  },
  {
    type: 'mcq',
    text: "Wehere did you hear about us?",
    templateId: 'mcqTemplate2',
    options: [
      { text: 'Google', nextIndex: 5 },
      { text: 'Instagram/Facebook', nextIndex: 5 },
      { text: 'From a Friend', nextIndex: 5 },
      { text: 'Influencer', nextIndex: 4 },
    ],
    showFifthOption: false,
  },
  {
    type: 'mcq',
    text: "How would you rate our checkot process?",
    templateId: 'mcqTemplate3',
    options: [
      { text: 'Very Easy', nextIndex: 6 },
      { text: 'Easy', nextIndex: 6 },
      { text: 'Difficult', nextIndex: 6 },
      { text: 'Very Difficult', nextIndex: 6 },
    ],
    showFifthOption: false,
  },
  {
    type: 'mcq',
    text: "Would you recommend our website to others?",
    templateId: 'mcqTemplate4',
    options: [
      { text: 'Definately', nextIndex: 7 },
      { text: 'Probably', nextIndex: 7 },
      { text: 'Not Sure', nextIndex: 7 },
      { text: 'Probably Not', nextIndex: 7 },
      { text: 'Definately Not', nextIndex: 7 },
    ],
    showFifthOption: true,
  },
]

// State Variables
let currentQuestionIndex = 0;
let history = [];
const userResponse =[];

//Dom Elements
const templates =document.querySelectorAll('.template');
const prevButton = document.createElement('Button');
previousButton.textContent = 'Previous';
prevButton.classList.add('button', 'prev');
prevButton.style.display = 'none';
document.body.appendChild(prevButton);

//Hide All Templates
function hideAllTemplates(){
  templates.forEach(template => template.classList.remove ('active'));
}

//Render Next Question
function renderQuestion(){
  hideAllTemplates();

  const question = questions[currentQuestionIndex];
  const template = document.getElementById(question.templateId);

  if (!template) return;

  template.classList.add('active');
  

  //Inject Question text
  if (question.text) {
    const questionText = template.querySelector('.question-text');
    if (questionText) questionText.textContent = question.text;
  }

  //Show,Hide Previous Buttton
  prevButton.style.display = history.length >0 ? 'inline-block' : 'none';

  //Handle specific Template
  if(question.type === 'survey') {
    const input = template.querySelector('input[type="email"]');
    
  }};