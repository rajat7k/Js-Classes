

class Set{



}

class MCQ_set extends Set{

}

class Coding_set extends Set{

}

class Practise_set extends Set{

}

class Learning_set extends Set{


}

class Assignment_set extends Set{

}




class Topics{

    sets_type={
        mcq_set:[],
        coding_set:[],
        practise_set:[],
        learning_set:[],
        assignments_set:[],
    };
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
                this.sets_type.mcq_set.push(new_set);
            }
            else if(new_set_type==="coding_set"){
                new_set=new Coding_set(setObject);
                this.sets_type.coding_set.push(new_set);
            }
            else if(new_set_type==="practise_set"){
                new_set=new Practise_set(setObject);
                this.sets_type.practise_set.push(new_set);
            }
            else if(new_set_type==="learning_set"){
                new_set=new Learning_set(setObject);
                this.sets_type.learning_set.push(new_set);
            }
            else{
                new_set=new Assignment_set(setObject);
                this.sets_type.assignments_set.push(new_set);
            }
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
                    ]
                },
                
            ]
        },

    ]
}

let track1=new Tracks(trackObject);

console.log(track1);