

class Courses{

    array_of_topics=[];
    constructor(course_id,course_name,number_of_topics){
        this.course_id=course_id;
        this.course_name=course_name;
        for(let topic_id=0;topic_id<number_of_topics;topic_id){

        }
    }

};

class Tracks{
    array_of_courses=[];
    constructor(track_id,track_name,number_of_courses){
        this.track_id=track_id;
        this.track_name=track_name;
        for(let course_id=0;course_id<number_of_courses;course_id++){
            let newCourse=new Courses(course_id);
            this.array_of_courses.push(newCourse);
        }
    }
}

let track1=new Tracks(1,"html",5);
track1.array_of_courses[0].course_name="Javascript";

console.log(track1);