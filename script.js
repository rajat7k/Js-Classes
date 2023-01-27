

class Set{

    constructor(setObject){
        this.set_id=setObject.set_id;
        this.set_name=setObject.set_name;
        this.set_type=setObject.set_type;
    }

}



class Assignment_set extends Set{
    constructor(setObject){
        super(setObject);
    }
    show_questions_list(){
        console.log(`Question list  of ${setObject.set_name}`)
    }
    show_question_detail(){
        console.log(`Question detail  of ${setObject.set_name}`)
    }
    submit_code(){
        console.log(`Submit Code of ${setObject.set_name}`)
    }
    run_the_code(){
        console.log(`Run Code of ${setObject.set_name}`)
    }
    show_submission_list(){
        console.log(`Show submission List of ${setObject.set_name}`)
    }
    show_the_hint_of_question(){
        console.log(`Show Hint of ${setObject.set_name} Question`)
    }
    show_discussion_list(){
        console.log(`Show Discussion List  of ${setObject.set_name}`)
    }
}

class Common_methods_of_Coding_Practise extends Assignment_set{
    constructor(setObject){
        super(setObject);
    }
    show_solutoin(){
        console.log(`Show solution  of ${setObject.set_name}`)
    }
    reset_code(){
        console.log(`Reset Code of ${setObject.set_name}`)
    }
    save_code(){
        console.log(`Save Code  of ${setObject.set_name}`)
    }
}


class MCQ_set extends Set{

    constructor(setObject){
        super(setObject);
        this.instruction_url=setObject.instruction_url;
        this.questions_url=setObject.questions_url;

    }
    fetch_mcq_instructions(){

    }
    fetch_question(){

    }
    submit_answer(){

    }
    skip_question(){

    }
    see_answer(){

    }

}

class Coding_set extends Common_methods_of_Coding_Practise {
    constructor(setObject){
        super(setObject);
    }
   
}

class Practise_set extends Common_methods_of_Coding_Practise {
    constructor(setObject){
        super(setObject);
    }

}

class Learning_set extends Set{

    constructor(setObject){
        super(setObject);
    }

    vedio_details(){

    }
    discusion_list(){

    }
    notes_list(){

    }
    mark_as_completed(){

    }
    submit_feedback(){

    }
    ask_the_doubt(){

    }

}





class Topics{

    sets_list=[];
    constructor(topicObject){
        this.topic_id=topicObject.topic_id;
        this.topic_name=topicObject.topic_name;
        let sets_list_length=topicObject.sets_list.length;
        for(let setId=0;setId<sets_list_length;setId++){
            let new_set_type=topicObject.sets_list[setId].set_type;
            let new_set;
            let setObject=topicObject.sets_list[setId];
            if(new_set_type==="mcq_set"){
                new_set=new MCQ_set(setObject);
            }
            else if(new_set_type==="coding_set"){
                new_set=new Coding_set(setObject);
            }
            else if(new_set_type==="practise_set"){
                new_set=new Practise_set(setObject);
           
            }
            else if(new_set_type==="learning_set"){
                new_set=new Learning_set(setObject);
               
            }
            else{
                new_set=new Assignment_set(setObject);
              
            }
            this.sets_list.push(new_set);
        }
    }

}

class Courses{

    topics_list=[];
    constructor(courseObject){
        this.course_id=courseObject.course_id;
        this.course_name=courseObject.course_name;
        let topics_list_length=courseObject.topics_list.length;
        for(let topic_id=0;topic_id<topics_list_length;topic_id++){
            let newTopic=new Topics(courseObject.topics_list[topic_id]);
            this.topics_list.push(newTopic);
        }
    }

};

class Tracks{
    courses_list=[];
    constructor(trackObject){
        this.track_id=trackObject.track_id;
        this.track_name=trackObject.track_name;
        let courses_list_length=trackObject.courses_list.length;
        for(let course_id=0;course_id<courses_list_length;course_id++){
            let newCourse=new Courses(trackObject.courses_list[course_id]);
            this.courses_list.push(newCourse);
        }
    }
}

let trackObject={
    track_id:1,
    track_name:"CCBP",
    courses_list:[
        {
            course_id:1,
            course_name:"Javascript",
            topics_list:[
                {
                    topic_id:1,
                    topic_name:"classes",
                    sets_list:[
                        {
                            set_id:1,
                            set_type:"mcq_set",
                            set_name:"classes_MCQ",
                            instruction_url:"xyz",
                            questions_url:"xyz",

                        },
                        {
                            set_id:2,
                            set_type:"coding_set",
                            set_name:"classes_Coding",
                        },
                        {
                            set_id:3,
                            set_type:"practise_set",
                            set_name:"classes_Practise",
                        },
                        {
                            set_id:4,
                            set_type:"learning_set",
                            set_name:"classes_Learning",
                        },
                        {
                            set_id:5,
                            set_type:"assignments_set",
                            set_name:"classes_assignments",
                        },
                        {
                            set_id:6,
                            set_type:"learning_set",
                            set_name:"classes_Learning",
                        },
                        {
                            set_id:7,
                            set_type:"assignments_set",
                            set_name:"classes_assignments",
                        },
                    ]
                },
                
            ]
        },

    ]
}

let track1=new Tracks(trackObject);

console.log(track1);