const Gym = require('./gym');
const Member = require('./member')


hisham = new Member("Hisham")
bilal = new Member("Bilal")

fc = new Gym('FC',hisham.id)
matrixFit = new Gym('MatrixFit',bilal.id,'professional','earlybird')

console.log(matrixFit.getMember(),matrixFit.findingPackage(),matrixFit.discountVoucher())