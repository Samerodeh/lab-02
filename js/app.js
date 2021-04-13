 'use strict' 

  const userName = prompt('please ente your name')
    
    function printUseName (name) {
   
        console.log('userName var = ', userName);
    
    alert ('Hello welcome to my site have a nice day ' + userName );
} 

  printUseName(userName);


      let userInput = prompt('do you  expect i finished my study ?').toLowerCase();
      
      
      
      function printUserInput (Input) {
   
           console.log('userInput var =',userInput); 
      
 } 

 

  switch(userInput) {
     case 'yes':
      alert ('wrong answer'); 
    break; 
     case 'no':
      alert ('right answer');
    break; 
     default:
      alert ('please chose yes or no');
    break;
 }

  while (userInput !== 'yes' && userInput !== 'no') {
    userInput = prompt('please choose yes or no');
  }


    
    
    let userAnswer = prompt('Do you  expect I am over 25 years old ?').toLowerCase();
    
    
    function printUserAnswer (answer) {
   
        console.log('userAnswer var =', userAnswer);

  

 }    

  switch(userAnswer) {
    case 'yes':
     alert ('wrong answer'); 
   break; 
    case 'no':
     alert ('right answer');
   break; 
    default:
     alert ('please chose yes or no');
   break;
 }

 while (userAnswer !== 'yes' && userAnswer !== 'no') {
  userAnswer = prompt('please choose yes or no');
}

    
    
   let userOpinion = prompt('Do you think I am studying programming ?').toLowerCase();
      
    function printUserOpinion (opinion) {
   
         console.log('userOpinion var =', userOpinion);

    
    
 } 


  switch(userOpinion) {
    case 'yes':
     alert ('right answer'); 
   break; 
    case 'no':
     alert ('wrong answer');
   break; 
    default:
     alert ('please chose yes or no');
   break;
  } 

  while (userOpinion !== 'yes' && userOpinion !== 'no') {
    userOpinion = prompt('please choose yes or no');
  }

    
   let userThink = prompt('Do you think I studied a field other than programming ?').toLowerCase();
      
    function printUserThink (think) {
   
         console.log('userThink var =', userThink);

    
    } 

    
  switch(userThink) {
    case 'yes':
     alert ('right answer'); 
   break; 
    case 'no':
     alert ('wrong answer');
   break; 
    default:
     alert ('please chose yes or no');
   break;
  } 

  while (userThink !== 'yes' && userThink !== 'no') {
    userThink = prompt('please choose yes or no');
  }

   
   let userExpect = prompt('Do you think I studied programming in English ?').toLowerCase();
      
    function printUserExpect (expect) {
   
         console.log('userExpect var=', userExpect);

    
    }


 switch(userExpect) {
    case 'yes':
     alert ('right answer'); 
   break; 
    case 'no':
     alert ('wrong answer');
   break; 
    default:
     alert ('please chose yes or no');
   break;
  }

  while (userExpect !== 'yes' && userExpect !== 'no') {
    userExpect = prompt('please choose yes or no');
  }
    
  
 printUseName(userName);


