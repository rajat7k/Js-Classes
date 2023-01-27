

class Set{
    
}




class Topics{

    sets_list=[];
    constructor(topicObject){
        this.topic_id=topicObject.topic_id;
        this.topic_name=topicObject.topic_name;
        let sets_list_lenth=topicObject.sets_list.length;
        for(let setId=0;setId<sets_list_lenth;setId++){

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

                    ]
                },
                
            ]
        },

    ]
}

let track1=new Tracks(trackObject);

console.log(track1);