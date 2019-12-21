
class Human {
 
    constructor(){
        this.nom="";
        this.job="" ;
        this.skills=[] ;
   
    }
    getJob(value){
        this.job=value
        console.log('Job : '+this.job)
    }



        learnNewSkill(skill){
        this.skills.push(skill);
        console.log(this.skills)
        }
        forgetSkill(value){
        this.skills=this.skills.filter(val=> val!=value)
        console.log(this.skills)
        }
        leaveJob(){
        this.job='Unployed'
        }
}




class Student extends Human{ 

    constructor(){
        super()

    }
    
 
    
    
    }

 const   me = new Student();
    
    me.getJob("Web developer");
    
    me.learnNewSkill("React");
    me.learnNewSkill("node");
    me.learnNewSkill("Angular");




    me.forgetSkill("React");
    
    me.leaveJob();
    
    