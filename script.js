

class Set{

    constructor(setObject){
        this.setId=setObject.setId;
        this.setName=setObject.setName;
        this.setType=setObject.setType;
    }

}



class AssignmentSet extends Set{
    constructor(setObject){
        super(setObject);
    }
    showQuestionsList(){
        console.log(`Question list  of ${setObject.setName}`)
    }
    showQuestionDetail(){
        console.log(`Question detail  of ${setObject.setName}`)
    }
    submitCode(){
        console.log(`Submit Code of ${setObject.setName}`)
    }
    runTheCode(){
        console.log(`Run Code of ${setObject.setName}`)
    }
    showSubmissionList(){
        console.log(`Show submission List of ${setObject.setName}`)
    }
    showTheHintOfQuestion(){
        console.log(`Show Hint of ${setObject.setName} Question`)
    }
    showDiscussionList(){
        console.log(`Show Discussion List  of ${setObject.setName}`)
    }
}

class CodingPractiseParentClass extends AssignmentSet{
    constructor(setObject){
        super(setObject);
    }
    showSolutoin(){
        console.log(`Show solution  of ${setObject.setName}`)
    }
    resetCode(){
        console.log(`Reset Code of ${setObject.setName}`)
    }
    saveCode(){
        console.log(`Save Code  of ${setObject.setName}`)
    }
}


class McqSet extends Set{

    constructor(setObject){
        super(setObject);
        this.instructionUrl=setObject.instructionUrl;
        this.questionsUrl=setObject.questionsUrl;

    }
    fetchMcqInstructions(){
        
    }
    fetchQuestion(){

    }
    submitAnswer(){

    }
    skipQuestion(){

    }
    seeAnswer(){

    }

}

class CodingSet extends CodingPractiseParentClass {
    constructor(setObject){
        super(setObject);
    }
   
}

class PractiseSet extends CodingPractiseParentClass {
    constructor(setObject){
        super(setObject);
    }

}

class LearningSet extends Set{

    constructor(setObject){
        super(setObject);
    }

    vedioDetails(){

    }
    discusionList(){

    }
    notesList(){

    }
    markAsCompleted(){

    }
    submitFeedback(){

    }
    askTheDoubt(){

    }
}





class Topics{

    setsList=[];
    constructor(topicObject){
        this.topicId=topicObject.topicId;
        this.topicName=topicObject.topicName;
        const setsListLength=topicObject.setsList.length;
        for(let setId=0;setId<setsListLength;setId++){
            const new_setType=topicObject.setsList[setId].setType;
            let new_set;
            const setObject=topicObject.setsList[setId];
            if(new_setType==="mcqSet"){
                new_set=new McqSet(setObject);
            }
            else if(new_setType==="codingSet"){
                new_set=new CodingSet(setObject);
            }
            else if(new_setType==="practiseSet"){
                new_set=new PractiseSet(setObject);
           
            }
            else if(new_setType==="learningSet"){
                new_set=new LearningSet(setObject);
               
            }
            else{
                new_set=new AssignmentSet(setObject);
              
            }
            this.setsList.push(new_set);
        }
    }

}

class Courses{

    topicsList=[];
    constructor(courseObject){
        this.courseId=courseObject.courseId;
        this.courseName=courseObject.courseName;
        const topicsListLength=courseObject.topicsList.length;
        for(let topicId=0;topicId<topicsListLength;topicId++){
            const newTopic=new Topics(courseObject.topicsList[topicId]);
            this.topicsList.push(newTopic);
        }
    }

};

class Tracks{
    coursesList=[];
    constructor(trackObject){
        this.trackId=trackObject.trackId;
        this.trackName=trackObject.trackName;

        const coursesListLength=trackObject.coursesList.length;


        for(let courseId=0;courseId<coursesListLength;courseId++){
            const newCourse=new Courses(trackObject.coursesList[courseId]);
            this.coursesList.push(newCourse);
        }

        

        //TODO: Try with map 
    }
}

//TODO: Update it to const, if it is not updated in the later stages of code
const trackObject={
    trackId:1,
    trackName:"CCBP",
    coursesList:[
        {
            courseId:1,
            courseName:"Javascript",
            topicsList:[
                {
                    topicId:1,
                    topicName:"classes",
                    setsList:[
                        {
                            setId:1,
                            setType:"mcqSet",
                            setName:"classes MCQ",
                            instructionUrl:"xyz",
                            questionsUrl:"xyz",

                        },
                        {
                            setId:2,
                            setType:"codingSet",
                            setName:"classes Coding",
                        },
                        {
                            setId:3,
                            setType:"practiseSet",
                            setName:"classes Practise",
                        },
                        {
                            setId:4,
                            setType:"learningSet",
                            setName:"classes Learning",
                        },
                        {
                            setId:5,
                            setType:"assignments_set",
                            setName:"classes assignments",
                        },
                        {
                            setId:6,
                            setType:"learningSet",
                            setName:"classes Learning",
                        },
                        {
                            setId:7,
                            setType:"assignments_set",
                            setName:"classes assignments",
                        },
                    ]
                },
                
            ]
        },

    ]
}

const track1=new Tracks(trackObject);

console.log(track1);