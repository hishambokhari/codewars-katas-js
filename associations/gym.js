const Member = require('./member')

class Gym {

  static all = []
  static nextId = 1;

  static packagePlan = [
    {student: 50},
    {professional: 75},
    {general: 90}
]

  static registerationOptions = [
    {earlyBird: 0.2},
    {onTime:0.1}
]

  constructor(name,memberId,memberType,registerationType){
    this.name = name;
    this.id = Gym.nextId;
    this.memberId = memberId;
    this.memberType = memberType
    this.registerationType = registerationType
   
    Gym.newGym(this)
    Gym.nextId += 1
  }

  getMember(){
    for(let i=0; i<Member.all.length;i++){
      if(this.memberId === Member.all[i].id){
        return Member.all[i]
      }
    }
  }

  findingPackage(memberType){
      if (this.memberType == 'student'){
        return Gym.packagePlan[0].student
      } else if (this.memberType === 'professional'){
        return Gym.packagePlan[1].professional
      } else if (this.memberType === 'general'){
        return Gym.packagePlan[2].general
      } else {
        return "Sorry no packages available!"
      }
  }

  discountVoucher(registerationType){
    if (this.registerationType === 'earlybird'){
      return Gym.registerationOptions[0].earlyBird 
    } else if (this.registerationType === 'ontime'){
      return Gym.registerationOptions[1].onTime
    }
  }

  
}

module.exports = Gym