    const submitButton=document.getElementById('submitButton');
    submitButton.addEventListener('click',(e)=>{
        let totalScore=0;
        const answers=document.getElementsByTagName('input');// HTML Collection 
        console.log(answers);

        for (let counter=0;counter<answers.length;counter++){
            if (answers[counter].type="radio"){
                if(answers[counter].checked){
                    switch(answers[counter].value){
                        case "HyperText PreProcesser":
                            totalScore+=10;
                            break;
                        case "HyperText Markup Language":
                            totalScore+=10;
                            break;
                        case "Cascading Style Sheets":
                            totalScore+=10;
                            break;
                        case "JavaScript":
                            totalScore+=10;
                            break;
                        case "Structured Query Language":
                            totalScore+=10;
                            break;
                    }
                }
            }
        }
       alert(`Your total score is ${totalScore}. Thank You for taking the Quiz`);

     });

    
    